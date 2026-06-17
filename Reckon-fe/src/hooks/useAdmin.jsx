import { createContext, useContext, useState, useCallback, useEffect } from 'react';

const AdminContext = createContext();

const API_BASE = 'http://127.0.0.1:8000/api/v1';

const isTokenExpired = (token) => {
  if (!token) return true;
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return true;
    const base64 = parts[1].replace(/-/g, '+').replace(/_/g, '/');
    const binString = atob(base64);
    const bytes = Uint8Array.from(binString, (m) => m.codePointAt(0));
    const payload = JSON.parse(new TextDecoder().decode(bytes));
    if (!payload.exp) return false;
    return payload.exp < Math.floor(Date.now() / 1000);
  } catch (e) {
    return true;
  }
};

export function AdminProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(() => {
    if (typeof window !== 'undefined') {
      const auth = localStorage.getItem('reckon-admin-auth') === 'true';
      const token = localStorage.getItem('reckon-access-token');
      const refreshToken = localStorage.getItem('reckon-refresh-token');

      if (auth) {
        if (!token || isTokenExpired(token)) {
          if (!refreshToken || isTokenExpired(refreshToken)) {
            // Both are expired or missing, clean up and return false
            localStorage.removeItem('reckon-access-token');
            localStorage.removeItem('reckon-refresh-token');
            localStorage.removeItem('reckon-admin-auth');
            localStorage.removeItem('reckon-admin-current-user');
            return false;
          }
        }
        return true;
      }
    }
    return false;
  });

  const [currentUser, setCurrentUser] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('reckon-admin-current-user') || '';
    }
    return '';
  });

  const [adminUsers, setAdminUsers] = useState([]);

  // Check token expiration on mount
  useEffect(() => {
    const checkTokenExpiration = async () => {
      const token = localStorage.getItem('reckon-access-token');
      const refreshToken = localStorage.getItem('reckon-refresh-token');

      if (!token && !refreshToken) {
        return;
      }

      if (isTokenExpired(token)) {
        if (refreshToken && !isTokenExpired(refreshToken)) {
          try {
            const response = await fetch(`${API_BASE}/auth/refresh`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ refresh_token: refreshToken })
            });

            if (response.ok) {
              const data = await response.json();
              localStorage.setItem('reckon-access-token', data.access_token);
              localStorage.setItem('reckon-refresh-token', data.refresh_token);
              localStorage.setItem('reckon-admin-auth', 'true');
              setIsAdmin(true);
              return;
            }
          } catch (err) {
            console.error('Token refresh failed:', err);
          }
        }

        // If refresh failed or was not possible, clear session and redirect
        localStorage.removeItem('reckon-access-token');
        localStorage.removeItem('reckon-refresh-token');
        localStorage.removeItem('reckon-admin-auth');
        localStorage.removeItem('reckon-admin-current-user');
        setIsAdmin(false);
        setCurrentUser('');
        setAdminUsers([]);

        if (window.location.pathname !== '/login') {
          window.location.href = '/login';
        }
      }
    };

    checkTokenExpiration();
  }, [setCurrentUser]);

  // Fetch admin list
  const fetchAdmins = useCallback(async () => {
    const token = localStorage.getItem('reckon-access-token');
    if (!token) return;
    try {
      const response = await fetch(`${API_BASE}/auth/admins`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        setAdminUsers(data);
      }
    } catch (err) {
      console.error('Failed to fetch admin users:', err);
    }
  }, []);

  // Fetch admins list on load if already logged in
  useEffect(() => {
    if (isAdmin) {
      fetchAdmins();
    }
  }, [isAdmin, fetchAdmins]);

  const login = useCallback(async (username, password) => {
    try {
      const response = await fetch(`${API_BASE}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        return { success: false, error: errorData.message || 'Invalid username or password.' };
      }

      const data = await response.json();
      localStorage.setItem('reckon-access-token', data.access_token);
      localStorage.setItem('reckon-refresh-token', data.refresh_token);
      localStorage.setItem('reckon-admin-auth', 'true');
      localStorage.setItem('reckon-admin-current-user', username);

      setIsAdmin(true);
      setCurrentUser(username);

      // Load admin list
      await fetchAdmins();

      return { success: true };
    } catch (err) {
      return { success: false, error: err.message || 'Server connection failed.' };
    }
  }, [fetchAdmins]);

  const logout = useCallback(async () => {
    const refresh_token = localStorage.getItem('reckon-refresh-token');
    if (refresh_token) {
      try {
        await fetch(`${API_BASE}/auth/logout`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ refresh_token })
        });
      } catch (err) {
        console.error('Logout request failed:', err);
      }
    }

    localStorage.removeItem('reckon-access-token');
    localStorage.removeItem('reckon-refresh-token');
    localStorage.removeItem('reckon-admin-auth');
    localStorage.removeItem('reckon-admin-current-user');

    setIsAdmin(false);
    setCurrentUser('');
    setAdminUsers([]);
  }, []);

  const addAdminUser = useCallback(async (username, password) => {
    const token = localStorage.getItem('reckon-access-token');
    const response = await fetch(`${API_BASE}/auth/admins`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ username, password })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Failed to create admin.');
    }

    await fetchAdmins();
  }, [fetchAdmins]);

  const removeAdminUser = useCallback(async (username) => {
    const token = localStorage.getItem('reckon-access-token');
    const response = await fetch(`${API_BASE}/auth/admins/${encodeURIComponent(username)}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Failed to delete admin.');
    }

    await fetchAdmins();
  }, [fetchAdmins]);

  const updateAdminUser = useCallback(async (oldUsername, newUsername, newPassword) => {
    const token = localStorage.getItem('reckon-access-token');
    const response = await fetch(`${API_BASE}/auth/admins/${encodeURIComponent(oldUsername)}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ username: newUsername, password: newPassword })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Failed to update admin.');
    }

    if (oldUsername.toLowerCase() === currentUser.toLowerCase()) {
      setCurrentUser(newUsername);
      localStorage.setItem('reckon-admin-current-user', newUsername);
    }

    await fetchAdmins();
  }, [currentUser, fetchAdmins]);

  return (
    <AdminContext.Provider value={{
      isAdmin,
      currentUser,
      adminUsers,
      login,
      logout,
      addAdminUser,
      removeAdminUser,
      updateAdminUser
    }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}

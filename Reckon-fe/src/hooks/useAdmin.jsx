import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { AUTH_API_BASE as API_BASE } from '../config';

const AdminContext = createContext();

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
      if (auth && token && !isTokenExpired(token)) {
        return true;
      }
      // Clean up stale session
      localStorage.removeItem('reckon-access-token');
      localStorage.removeItem('reckon-admin-auth');
      localStorage.removeItem('reckon-admin-current-user');
    }
    return false;
  });

  const [currentUser, setCurrentUser] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('reckon-admin-current-user') || '';
    }
    return '';
  });

  // Periodically check token expiry (every 5 minutes)
  useEffect(() => {
    const interval = setInterval(() => {
      const token = localStorage.getItem('reckon-access-token');
      if (isTokenExpired(token)) {
        localStorage.removeItem('reckon-access-token');
        localStorage.removeItem('reckon-admin-auth');
        localStorage.removeItem('reckon-admin-current-user');
        setIsAdmin(false);
        setCurrentUser('');
        if (window.location.pathname !== '/login') {
          window.location.href = '/login';
        }
      }
    }, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  /**
   * Login with email + password via existing /api/auth/login endpoint.
   * Token is stored in localStorage as 'reckon-access-token'.
   * Role check is done server-side on each admin API call.
   */
  const login = useCallback(async (email, password) => {
    try {
      const response = await fetch(`${API_BASE}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        return { success: false, error: errorData.detail || 'Invalid email or password.' };
      }

      const data = await response.json();

      // Verify user has admin role (the server will 403 on admin routes anyway,
      // but we check here to show a clear error immediately)
      if (data.user && data.user.role !== 'admin') {
        return { success: false, error: 'Access denied. This account does not have admin privileges.' };
      }

      localStorage.setItem('reckon-access-token', data.access_token);
      localStorage.setItem('reckon-admin-auth', 'true');
      localStorage.setItem('reckon-admin-current-user', data.user?.full_name || email);

      setIsAdmin(true);
      setCurrentUser(data.user?.full_name || email);

      return { success: true };
    } catch (err) {
      return { success: false, error: err.message || 'Server connection failed.' };
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('reckon-access-token');
    localStorage.removeItem('reckon-admin-auth');
    localStorage.removeItem('reckon-admin-current-user');
    setIsAdmin(false);
    setCurrentUser('');
  }, []);

  return (
    <AdminContext.Provider value={{
      isAdmin,
      currentUser,
      // Stubs for admin user management (kept for API compatibility with AdminPage)
      adminUsers: [],
      addAdminUser: async () => { throw new Error('Admin user management is handled server-side.'); },
      removeAdminUser: async () => { throw new Error('Admin user management is handled server-side.'); },
      updateAdminUser: async () => { throw new Error('Admin user management is handled server-side.'); },
      login,
      logout,
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

import requests
import jwt

API_BASE = "http://127.0.0.1:8000/api/v1"
SECRET_KEY = "reckon-super-secret-key-change-in-production-abcdef12345"
ALGORITHM = "HS256"

def test():
    print("1. Logging in...")
    try:
        res = requests.post(f"{API_BASE}/auth/login", json={"username": "admin", "password": "admin"})
        print(f"Status: {res.status_code}")
        if res.status_code != 200:
            print("Login failed:", res.text)
            return
        
        data = res.json()
        token = data.get("access_token")
        print("Received Token successfully!")

        print("\n2. Decoding Token...")
        try:
            decoded = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
            print("Decoded token payload:", decoded)
        except Exception as e:
            print("Failed to decode token:", e)
            return

        print("\n3. Testing toggle-active API endpoint with token...")
        headers = {"Authorization": f"Bearer {token}", "Content-Type": "application/json"}
        res_toggle = requests.put(f"{API_BASE}/downloads/categories/setups/toggle-active", headers=headers)
        print(f"Toggle Response Status: {res_toggle.status_code}")
        print(f"Toggle Response Body: {res_toggle.text}")

    except Exception as e:
        print("Error during test:", e)

if __name__ == "__main__":
    test()

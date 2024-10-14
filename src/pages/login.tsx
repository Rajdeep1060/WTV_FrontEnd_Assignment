// src/pages/login.tsx
import React, { useState } from 'react';
import { useApi } from '../hooks/useApi';
import { useRouter } from 'next/router';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { apiCall, setAccessToken } = useApi();
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await apiCall({
        url: '/auth/token/',
        method: 'POST',
        data: { username, password },
      });
      setAccessToken(data.access);
      router.push('/');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;

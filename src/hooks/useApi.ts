// src/hooks/useApi.ts
import axios, { AxiosRequestConfig } from 'axios';
import { useState, useEffect } from 'react';

const API_BASE_URL = 'http://localhost:8000/api';

export function useApi() {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  const apiCall = async (config: AxiosRequestConfig) => {
    try {
      const response = await axios({
        ...config,
        baseURL: API_BASE_URL,
        headers: {
          ...config.headers,
          Authorization: accessToken ? `Bearer ${accessToken}` : '',
        },
      });
      return response.data;
    } catch (error:any) {
      if (error.response?.status === 401) {
        // Handle token refresh
      }
      throw error;
    }
  };

  return { apiCall, setAccessToken };
}

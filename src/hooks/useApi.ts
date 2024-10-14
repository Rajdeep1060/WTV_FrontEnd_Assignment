import axios, { AxiosRequestConfig } from 'axios';
import { useState } from 'react';

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
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        // Handle token refresh logic here
      }
      throw error;
    }
  };

  return { apiCall, setAccessToken };
}

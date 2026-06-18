// Centralized Backend URL configuration for Reckon Frontend
export const BASE_URL = import.meta.env.VITE_API_URL || 'https://apismartscan.reckonsales.com';

export const API_BASE = `${BASE_URL}/api/v1`;
export const AUTH_API_BASE = `${BASE_URL}/api/auth`;

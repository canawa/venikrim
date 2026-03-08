/**
 * Базовый URL API. В продакшене задаётся через NEXT_PUBLIC_API_URL.
 * Локально по умолчанию http://localhost:8000
 */
export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

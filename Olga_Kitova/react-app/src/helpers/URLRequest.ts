export const BASE_URL = 'http://localhost:3001'
export const BASE_URL_COMMENTS = `${BASE_URL}/api/comments`
export const BASE_URL_PAGES = `${BASE_URL}/api/pages`
export const BASE_URL_LOGS = `${BASE_URL}/api/logs`
export const BASE_URL_USERS = `${BASE_URL}/api/users`
export const BASE_URL_USERS_LOGS = `${BASE_URL}/api/users?_embed=logs`

export const mode = process.env.NODE_ENV
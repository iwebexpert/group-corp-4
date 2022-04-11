import React from 'react'
import PageError from 'pages/PageError';
import { authService } from './authService'

export default function AuthRequireRole({children}) {
    const user = authService?.currentUserValue;
    const role = user?.role || null
   
    return role === 'admin' ? children : <PageError />
}
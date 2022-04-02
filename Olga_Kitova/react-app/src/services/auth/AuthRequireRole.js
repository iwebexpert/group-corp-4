import React from 'react'
import { authService } from './authService'

export default function AuthRequireRole({children}) {
    const {role} = authService.currentUserValue;
   
    return role === 'admin' && children
}

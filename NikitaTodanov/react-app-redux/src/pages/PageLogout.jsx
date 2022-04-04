import React, {useEffect} from 'react'
import { authService } from '../services/auth/authService'
import ContainerWrapper from './ContainerWrapper'

export default function PageLogout() {


  useEffect(() => {
    authService.logout()
    window.location.href = '/'
  })

  return (
    <ContainerWrapper>
      <div>PageLogout</div>
    </ContainerWrapper>
  )
}

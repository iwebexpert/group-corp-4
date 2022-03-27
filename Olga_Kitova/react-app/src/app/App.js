import React from 'react'
// Context
import { ContextProvider } from '../context/Context'
import Layout from '../layout/Layout'

export default function App() {
  return (
    <ContextProvider>
      <Layout />
    </ContextProvider>
  )
}


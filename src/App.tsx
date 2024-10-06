import { useEffect } from 'react'

import AppProvider from '~/context'
import AppRouter from '~/routes'
import ThemeContainer from '~/themes/ThemeContainer'

import './App.css'

export default function App() {
  if (import.meta.env.PROD) {
    useEffect(() => {
      document.addEventListener('contextmenu', (e) => {
        e.preventDefault()
      })
    }, [])
  }

  return (
    <ThemeContainer>
      <AppProvider>
        <AppRouter />
      </AppProvider>
    </ThemeContainer>
  )
}

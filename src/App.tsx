import AppRouter from '~/routes'
import ThemeContainer from '~/themes/ThemeContainer'

import './App.css'

import { useEffect } from 'react'

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
      <AppRouter />
    </ThemeContainer>
  )
}

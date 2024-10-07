import { useEffect } from 'react'

import AppProvider from '~/AppContext.tsx'
import ThemeContainer from '~/themes/ThemeContainer'

import './App.css'

import AppLayout from '~/layout/AppLayout.tsx'
import ModsPage from '~/mods'
import SettingsModal from '~/settings/SettingsModal.tsx'

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
        <AppLayout>
          <ModsPage />
          <SettingsModal />
        </AppLayout>
      </AppProvider>
    </ThemeContainer>
  )
}

import { createContext, useContext, useEffect, type ReactNode } from 'react'

import { useSettingsReducer } from '~/state.ts'

export type AppContextType = ReturnType<typeof useSettingsReducer>

const AppContext = createContext<AppContextType>({
  settings: {
    current: undefined,
    loading: true,
    saving: false,
  },
  setNexusApiKey: () => {},
  loadSettings: async () => {},
  saveSettings: async () => {},
})

export const useAppContext = () => useContext(AppContext)

export default function AppProvider({ children }: { children: ReactNode }) {
  const settingsState = useSettingsReducer()

  useEffect(() => {
    settingsState.loadSettings()
  }, [])

  return <AppContext.Provider value={{ ...settingsState }}>{children}</AppContext.Provider>
}

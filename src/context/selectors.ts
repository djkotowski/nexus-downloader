import { AppContextType } from './index'

export const areSettingsLoading = (state: AppContextType) => state.settings.loading
export const findSettings = (state: AppContextType) => state.settings.current
export const findNexusApiKey = (state: AppContextType) => state.settings.current?.authentication.nexusApiKey

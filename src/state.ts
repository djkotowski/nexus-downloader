import { useCallback, useReducer } from 'react'
import { produce } from 'immer'
import { useAsync } from 'react-use'

import { loadSettings as loadSettingsFile, saveSettings as saveSettingsFile } from '~/settings'
import { Settings } from '~/settings/types.ts'

export type AppState = {
  settings: {
    current?: Settings
    loading: boolean
    saving: boolean
    saved?: Settings
  }
}

export type SetNexusApiKeyAction = { type: 'setNexusApiKey'; payload: string }
export type OnSettingsLoadingAction = { type: 'onSettingsLoading' }
export type OnSettingsLoadedAction = { type: 'onSettingsLoaded'; payload: Settings }
export type OnSettingsSavingAction = { type: 'onSettingsSaving' }
export type OnSettingsSavedAction = { type: 'onSettingsSaved' }
export type SettingsAction =
  | SetNexusApiKeyAction
  | OnSettingsLoadingAction
  | OnSettingsLoadedAction
  | OnSettingsSavingAction
  | OnSettingsSavedAction

export function settingsReducer(state: AppState, action: SettingsAction): AppState {
  switch (action.type) {
    case 'setNexusApiKey':
      return produce(state, (draft) => {
        draft.settings.current!.authentication.nexusApiKey = action.payload
      })
    case 'onSettingsLoading':
      return produce(state, (draft) => {
        draft.settings.loading = true
      })
    case 'onSettingsLoaded':
      return produce(state, (draft) => {
        draft.settings.current = action.payload
        draft.settings.saved = action.payload
        draft.settings.loading = false
      })
    case 'onSettingsSaving':
      return produce(state, (draft) => {
        draft.settings.saving = true
      })
    case 'onSettingsSaved':
      return produce(state, (draft) => {
        draft.settings.saving = false
        draft.settings.saved = draft.settings.current
      })
    default:
      return state
  }
}

export function useSettingsReducer() {
  const [state, dispatch] = useReducer(settingsReducer, { settings: { loading: true, saving: false } })
  const setNexusApiKey = (nexusApiKey: string) => dispatch({ type: 'setNexusApiKey', payload: nexusApiKey })
  const loadSettings = useCallback(async () => {
    dispatch({ type: 'onSettingsLoading' })
    const settings = await loadSettingsFile()
    dispatch({ type: 'onSettingsLoaded', payload: settings })
  }, [dispatch])

  useAsync(async () => {
    if (state.settings.current && state.settings.saved && state.settings.current !== state.settings.saved) {
      dispatch({ type: 'onSettingsSaving' })
      await saveSettingsFile(state.settings.current)
      dispatch({ type: 'onSettingsSaved' })
    }
  }, [state])

  return {
    ...state,
    setNexusApiKey,
    loadSettings,
  }
}

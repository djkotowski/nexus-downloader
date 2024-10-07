import { useReducer } from 'react'

export type UiState = {
  isSettingsModalOpen: boolean
}

const initialUiState: UiState = {
  isSettingsModalOpen: false,
}

export type CloseSettingsDialogAction = { type: 'ui/closeSettingsDialog' }
export type OpenSettingsDialogAction = { type: 'ui/openSettingsDialog' }
export type UiActions = CloseSettingsDialogAction | OpenSettingsDialogAction

export function uiReducer(state: UiState, action: UiActions): UiState {
  switch (action.type) {
    case 'ui/closeSettingsDialog':
      return { ...state, isSettingsModalOpen: false }
    case 'ui/openSettingsDialog':
      return { ...state, isSettingsModalOpen: true }
    default:
      return state
  }
}

export function useUi() {
  const [state, dispatch] = useReducer(uiReducer, initialUiState)
  const closeSettingsModal = () => dispatch({ type: 'ui/closeSettingsDialog' })
  const openSettingsModal = () => dispatch({ type: 'ui/openSettingsDialog' })

  return { ...state, closeSettingsModal, openSettingsModal }
}

export const initialUiContext: ReturnType<typeof useUi> = {
  ...initialUiState,
  closeSettingsModal: () => {},
  openSettingsModal: () => {},
}

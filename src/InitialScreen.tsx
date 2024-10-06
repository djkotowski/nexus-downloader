import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppContext } from '~/context'
import { areSettingsLoading, findNexusApiKey } from '~/context/selectors.ts'
import { isPresent } from '~/utils/helpers.ts'

export default function InitialScreen() {
  const context = useAppContext()
  const settingsLoading = areSettingsLoading(context)
  const apiKey = findNexusApiKey(context)
  const navigate = useNavigate()

  useEffect(() => {
    console.debug({ settingsLoading, apiKey })
    if (settingsLoading) return

    if (isPresent(apiKey)) {
      navigate('/app', { replace: true })
    } else {
      navigate('/first_run', { replace: true })
    }
  }, [settingsLoading, apiKey])

  return (
    <div className="flex flex-col items-center justify-center bg-brand-blue-950 text-gray-300 w-screen h-screen max-w-screen overflow-hidden select-none">
      <div className="text-4xl font-bold">Welcome to Nexus Downloader!</div>
      <div className="text-xl font-bold pt-8">Loading...</div>
    </div>
  )
}

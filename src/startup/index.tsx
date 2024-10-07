import { useAppContext } from '~/context'
import { areSettingsLoading, findNexusApiKey } from '~/context/selectors.ts'
import AppRouter from '~/routes'
import { isBlank } from '~/utils/helpers.ts'
import InitialSetup from './InitialSetup.tsx'

export default function Initializer() {
  const context = useAppContext()
  const settingsLoading = areSettingsLoading(context)
  const apiKey = findNexusApiKey(context)

  if (settingsLoading) {
    return (
      <div className="flex flex-col items-center justify-center bg-brand-blue-950 text-gray-300 w-screen h-screen max-w-screen overflow-hidden select-none">
        <div className="text-4xl font-bold">Welcome to Nexus Downloader!</div>
        <div className="text-xl font-bold pt-8">Loading...</div>
      </div>
    )
  } else if (isBlank(apiKey)) {
    return <InitialSetup />
  } else {
    return <AppRouter />
  }
}

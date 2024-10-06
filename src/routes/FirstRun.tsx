import { useCallback, useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '~/components/Button.tsx'
import ExternalLink from '~/components/ExternalLink.tsx'
import InputField from '~/components/InputField.tsx'
import { useAppContext } from '~/context'

export default function FirstRun() {
  const navigate = useNavigate()
  const { setNexusApiKey } = useAppContext()
  const [apiKey, setApiKey] = useState('')
  const canSubmit = apiKey.length >= 10

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (canSubmit) {
        setNexusApiKey(apiKey)
        navigate('/app', { replace: true })
      }
    },
    [apiKey, setNexusApiKey, navigate]
  )

  return (
    <div className="flex flex-col bg-brand-blue-950 text-gray-300 w-screen h-screen max-w-screen overflow-hidden select-none">
      <div className="p-4">
        <h1 className="text-lg font-medium">Let&apos;s get everything ready!</h1>
        <p className="pt-2">
          Please enter your{' '}
          <ExternalLink href="https://next.nexusmods.com/settings/api-keys">Nexus Mods API key</ExternalLink> below to
          get started.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="p-4">
          <InputField autoFocus label="API Key" minLength={10} required value={apiKey} onChange={setApiKey} />
        </div>
        <div className="flex flex-row justify-center p-4">
          <Button disabled={!canSubmit} kind="primary" type="submit">
            Continue
          </Button>
        </div>
      </form>
    </div>
  )
}

import { FormEvent, useMemo } from 'react'
import { Label, Modal, Popover, TextInput } from 'flowbite-react'
import { HiQuestionMarkCircle } from 'react-icons/hi2'
import { useImmer } from 'use-immer'

import { useAppContext } from '~/AppContext.tsx'
import Button from '~/components/Button.tsx'
import ExternalLink from '~/components/ExternalLink.tsx'

export default function SettingsModal() {
  const {
    settings: { current, setSettings: updateSettings },
    ui: { closeSettingsModal, isSettingsModalOpen },
  } = useAppContext()

  if (!isSettingsModalOpen) return null

  const [settings, setSettings] = useImmer(current)
  const canSave = useMemo(() => settings && settings !== current, [settings, current])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (canSave) {
      updateSettings(settings!)
      closeSettingsModal()
    }
  }

  return (
    <Modal show onClose={closeSettingsModal}>
      <form onSubmit={handleSubmit}>
        <Modal.Header>Settings</Modal.Header>
        <Modal.Body>
          <h2 className="text-lg font-medium text-white pb-4">Nexus Mods</h2>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="apiKey" value="API Key" />{' '}
              <Popover
                placement="right"
                trigger="hover"
                content={
                  <div className="w-80 text-sm text-gray-500 dark:text-gray-400">
                    <div className="border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
                      <h3 id="help-popover" className="font-semibold text-gray-900 dark:text-white">
                        Where do I find my Nexus API key?
                      </h3>
                    </div>
                    <div className="px-3 py-2">
                      <p>
                        You can find your Nexus API key at the bottom of the{' '}
                        <ExternalLink href="https://next.nexusmods.com/settings/api-keys">
                          Nexus Mods API Keys Settings page
                        </ExternalLink>
                        .
                      </p>
                    </div>
                  </div>
                }
              >
                <button className="text-brand-blue-200 hover:text-brand-blue-400 cursor-help" type="button">
                  <HiQuestionMarkCircle className="inline-block" />
                </button>
              </Popover>
            </div>
            <TextInput
              id="apiKey"
              placeholder="Enter your Nexus Mods API key"
              type="password"
              value={settings?.authentication.nexusApiKey}
              onChange={(e) => {
                setSettings((draft) => {
                  draft!.authentication.nexusApiKey = e.target.value
                })
              }}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button disabled={!canSave} kind="primary" type="submit">
            Save Settings
          </Button>
          <Button kind="default" onClick={() => closeSettingsModal()}>
            Cancel
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  )
}

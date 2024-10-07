import InputField from '~/components/InputField.tsx'

export default function SettingsForm() {
  return (
    <main className="p-4">
      <form>
        <h2 className="text-lg font-medium pb-4">Authentication Settings</h2>
        <InputField autoFocus label="Nexus Mods API Key" minLength={10} required />
      </form>
    </main>
  )
}

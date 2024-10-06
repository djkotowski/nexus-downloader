import { AllSettings, Settings } from '~/settings/types.ts'

export function migrateSettings(settings: AllSettings): Settings {
  switch (settings.version) {
    case '1.0':
      return settings
    default:
      throw new Error('Unknown settings format')
  }
}

import { BaseDirectory, exists, mkdir, readTextFile, writeTextFile } from '@tauri-apps/plugin-fs'
import { parse, stringify } from 'smol-toml'

import { migrateSettings } from '~/settings/migrations.ts'
import { AllSettings, Settings } from '~/settings/types.ts'

const SETTINGS_FILENAME = 'settings.cfg'

export function getInitialSettings(): Settings {
  return {
    version: '1.0',
    authentication: {
      nexusApiKey: '',
    },
  }
}

export async function loadSettings(): Promise<Settings> {
  if (!(await exists(SETTINGS_FILENAME, { baseDir: BaseDirectory.AppConfig }))) {
    return getInitialSettings()
  }

  try {
    const data = parse(
      await readTextFile(SETTINGS_FILENAME, { baseDir: BaseDirectory.AppConfig })
    ) as unknown as AllSettings
    return migrateSettings(data)
  } catch {
    throw new Error('Settings file is corrupted.')
  }
}

export async function saveSettings(settings: Settings): Promise<void> {
  if (!(await exists('./', { baseDir: BaseDirectory.AppConfig }))) {
    await mkdir('./', { baseDir: BaseDirectory.AppConfig })
  }
  await writeTextFile(SETTINGS_FILENAME, stringify(settings), { baseDir: BaseDirectory.AppConfig })
}

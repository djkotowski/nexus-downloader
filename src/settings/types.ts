export type Settings = SettingsV1_0
export type AllSettings = SettingsV1_0

interface SettingsBase {
  version: string
}

export interface SettingsV1_0 extends SettingsBase {
  version: '1.0'
  authentication: {
    nexusApiKey: string
  }
}

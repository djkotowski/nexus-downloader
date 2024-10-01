export function isBlank(value: unknown): boolean {
  if (value == null) return true

  switch (typeof value) {
    case 'boolean':
      return !value
    case 'string':
      return value.trim() === ''
    case 'object':
      return Object.keys(value).length === 0
    default:
      return false
  }
}

export function isPresent(value: unknown): boolean {
  return !isBlank(value)
}

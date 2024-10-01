import { useEffect } from 'react'
import { useThemeMode } from 'flowbite-react'

export default function ThemeInit() {
  const { setMode } = useThemeMode()

  useEffect(() => {
    setMode('dark')
  }, [])

  return null
}

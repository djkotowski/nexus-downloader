import { Switch } from '@headlessui/react'
import { useCallback, useState } from 'react'

export type ToggleProps = {
  defaultValue?: boolean
  value?: boolean
  onChange?: (newValue: boolean) => void
}

const toggleClass =
  'group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition' +
  ' data-[checked]:bg-brand-blue data-[disabled]:bg-gray-100 data-[checked]:data-[disabled]:bg-brand-blue-300' +
  ' data-[disabled]:cursor-not-allowed'

export default function Toggle({ defaultValue, value, onChange }: ToggleProps) {
  const [enabled, setEnabled] = useState<boolean>(defaultValue ?? false)
  const toggleValue = value ?? enabled
  const handleChange = useCallback(() => {
    onChange?.(!toggleValue)
    setEnabled((prev) => !prev)
  }, [onChange])

  return (
    <Switch checked={toggleValue} className={toggleClass} onChange={handleChange}>
      <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
    </Switch>
  )
}

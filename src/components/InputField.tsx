import { FloatingLabel } from 'flowbite-react'
import { type ChangeEvent, useCallback } from 'react'

type InputFieldProps = {
  defaultValue?: string
  label: string
  value?: string
  onChange?: (newValue: string) => void
}

export default function InputField({ label, onChange, ...props }: InputFieldProps) {
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange?.(event.target.value)
    },
    [onChange]
  )

  return <FloatingLabel label={label} variant="standard" onChange={handleChange} {...props} />
}

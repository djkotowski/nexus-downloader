import { useCallback, type ChangeEvent } from 'react'
import { FloatingLabel, FloatingLabelProps } from 'flowbite-react'
import { twMerge } from 'tailwind-merge'

import { isPresent } from '~/utils/helpers'

type InputFieldProps = Pick<FloatingLabelProps, 'defaultValue' | 'label' | 'value'> & {
  error?: string | boolean
  helpText?: string
  onChange?: (newValue: string) => void
}

export default function InputField({ error, helpText, onChange, ...props }: InputFieldProps) {
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange?.(event.target.value)
    },
    [onChange]
  )

  const color = isPresent(error) ? 'error' : 'default'
  const helpClass = twMerge(
    'text-xs text-gray-500 dark:text-gray-400 max-h-0 transition-all',
    isPresent(error) && typeof error === 'string' ? 'pt-2' : ''
  )

  return (
    <div>
      <FloatingLabel
        color={color}
        helperText={typeof error === 'string' ? error : undefined}
        variant="standard"
        onChange={handleChange}
        {...props}
      />
      {isPresent(helpText) && <div className={helpClass}>{helpText}</div>}
    </div>
  )
}

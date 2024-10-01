import { ComponentProps, ReactNode, useMemo } from 'react'
import { Button as FlowbiteButton, Spinner } from 'flowbite-react'

export type ButtonProps = {
  children?: ReactNode
  className?: string
  disabled?: boolean
  kind?: 'default' | 'primary' | 'secondary' | 'warning' | 'danger'
  isProcessing?: boolean
  size?: ComponentProps<typeof FlowbiteButton>['size']
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

export default function Button({ className, disabled, kind, size, type: buttonType, ...props }: ButtonProps) {
  buttonType ??= 'button'
  size ??= 'md'
  kind ??= 'default'

  const spinnerSize = useMemo(() => {
    switch (size) {
      case 'md':
        return 'sm'
      case 'lg':
        return 'md'
      case 'xl':
        return 'md'
      default:
        return size
    }
  }, [size])

  return (
    <FlowbiteButton
      className={className}
      color={kind}
      disabled={disabled}
      processingSpinner={<Spinner color={kind} size={spinnerSize} />}
      size={size}
      type={buttonType}
      {...props}
    />
  )
}

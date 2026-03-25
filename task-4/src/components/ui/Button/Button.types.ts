export interface ButtonProps {
  color?: ButtonVariant
  disabled?: boolean
}

export interface ButtonEmits {
  click: [event: MouseEvent | TouchEvent]
  hover: [event: MouseEvent | TouchEvent, isHover: boolean]
}

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface SelectProps {
  modelValue?: string
  options?: SelectOption[]
  label?: string
  placeholder?: string
  disabled?: boolean
  error?: string
  id?: string | number
}

export interface SelectEmits {
  'update:modelValue': [value: string]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
}

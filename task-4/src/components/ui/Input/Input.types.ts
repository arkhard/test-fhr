export interface InputProps {
  modelValue?: string
  label?: string
  placeholder?: string
  type?: string
  disabled?: boolean
  error?: string
  id?: string | number
}

export interface InputEmits {
  'update:modelValue': [value: string],
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
}

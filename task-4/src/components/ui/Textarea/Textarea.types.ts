export interface TextareaProps {
  modelValue?: string
  label?: string
  placeholder?: string
  rows?: number | string
  disabled?: boolean
  error?: string
  id?: string | number
}

export interface TextareaEmits {
  'update:modelValue': [value: string]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
}

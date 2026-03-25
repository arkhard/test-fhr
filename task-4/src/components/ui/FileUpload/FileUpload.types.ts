export interface FileUploadProps {
  modelValue?: File | null
  label?: string
  accept?: string
  multiple?: boolean
  disabled?: boolean
  placeholder?: string
}

export interface FileUploadEmits {
  'update:modelValue': [file: File | null]
}

import type { Ref } from 'vue'

export interface AccordionContext {
  openItem: Ref<string | null>
  toggle: (name: string) => void
}

export interface AccordionProps {
  defaultOpen?: string
}

export interface AccordionEmits {
  change: [name: string | null]
}

export interface AccordionItemProps {
  title: string
  name: string
}

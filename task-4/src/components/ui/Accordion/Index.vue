<script setup lang="ts">
import { ref, provide, toRefs } from 'vue'
import type { AccordionProps, AccordionEmits, AccordionContext } from './Accordion.types'

const props = withDefaults(
  defineProps<AccordionProps>(), {
    defaultOpen: undefined,
  }
)
const { defaultOpen } = toRefs(props)

const emit = defineEmits<AccordionEmits>()
const openItem = ref<string | null>(defaultOpen.value ?? null)
function toggle(name: string) {
  openItem.value = openItem.value === name ? null : name
  emit('change', openItem.value)
}

provide<AccordionContext>('accordion', { openItem, toggle })
</script>

<template>
  <div class="fhr-accordion">
    <slot />
  </div>
</template>

<style scoped src="./style.scss" />

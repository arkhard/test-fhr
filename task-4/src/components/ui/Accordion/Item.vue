<script setup lang="ts">
import { inject, computed, toRefs } from 'vue'
import type { AccordionContext, AccordionItemProps } from './Accordion.types'
import { IconChevron } from '@/icons'

const props = defineProps<AccordionItemProps>()
const { name, title } = toRefs(props)

const ctx = inject<AccordionContext>('accordion')
const isOpen = computed(() => ctx?.openItem.value === name.value)
function toggle() {
  ctx?.toggle(name.value)
}
</script>

<template>
  <div
    :class="[
      'fhr-accordion-item',
      { 'fhr-accordion-item--open': isOpen }
    ]"
  >
    <button
      class="fhr-accordion-item__header"
      :aria-expanded="isOpen"
      @click="toggle"
    >
      <span class="fhr-accordion-item__title">
        {{ title }}
      </span>

      <IconChevron class="fhr-accordion-item__chevron" />
    </button>

    <Transition name="accordion">
      <div
        v-if="isOpen"
        class="fhr-accordion-item__body"
      >
        <div class="fhr-accordion-item__content">
          <slot />
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped src="./style.scss" />

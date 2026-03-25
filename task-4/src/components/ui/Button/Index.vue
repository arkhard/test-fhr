<script setup lang="ts">
import { toRefs } from 'vue'
import type { ButtonProps, ButtonEmits } from './Button.types'

const props = withDefaults(
  defineProps<ButtonProps>(), {
    color: 'primary',
    disabled: false,
  }
)
const { color, disabled } = toRefs(props)

const emit = defineEmits<ButtonEmits>()
function handleClick(event: MouseEvent | TouchEvent) {
  emit('click', event)
}
function onMouseEnter(event: MouseEvent) {
  emit('hover', event, true)
}
function onMouseLeave(event: MouseEvent) {
  emit('hover', event, false)
}
</script>

<template>
  <button
    :class="[
      'fhr-btn', `fhr-btn--${color}`,
      { 'fhr-btn--disabled': disabled }
    ]"
    :disabled="disabled"
    @click="handleClick"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <slot />
  </button>
</template>

<style scoped src="./style.scss" />

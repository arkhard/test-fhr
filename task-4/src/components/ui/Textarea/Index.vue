<script setup lang="ts">
import { toRefs } from 'vue'
import type { TextareaProps, TextareaEmits } from './Textarea.types'

const props = withDefaults(
  defineProps<TextareaProps>(), {
    modelValue: '',
    rows: 5,
    disabled: false,
    id: () => `textarea-${crypto.randomUUID()}`,
  }
)
const {
  label,
  id,
  placeholder,
  disabled,
  rows,
  modelValue,
  error
} = toRefs(props)

const emit = defineEmits<TextareaEmits>()
function handleInput(event: Event) {
  emit('update:modelValue', (event.target as HTMLTextAreaElement).value)
}
function handleFocus(event: FocusEvent) {
  emit('focus', event)
}
function handleBlur(event: FocusEvent) {
  emit('blur', event)
}
</script>

<template>
  <div class="fhr-textarea">
    <label
      v-if="label"
      :for="id"
      class="fhr-textarea__label"
    >
      {{ label }}
    </label>

    <textarea
      :id="id"
      :class="[
        'fhr-textarea__textarea',
        { 'fhr-textarea__textarea--error': error }
      ]"
      :placeholder="placeholder"
      :disabled="disabled"
      :rows="rows"
      :value="modelValue"
      :aria-invalid="!!error"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
    />

    <span
      v-if="error"
      class="fhr-textarea__error"
    >
      {{ error }}
    </span>
  </div>
</template>

<style scoped src="./style.scss" />

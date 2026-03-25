<script setup lang="ts">
import { toRefs } from 'vue'
import type { InputProps, InputEmits } from './Input.types'

const props = withDefaults(
  defineProps<InputProps>(), {
    modelValue: '',
    type: 'text',
    disabled: false,
    id: () => `input-${crypto.randomUUID()}`,
  }
)
const {
  label,
  id,
  type,
  placeholder,
  disabled,
  modelValue,
  error
} = toRefs(props)

const emit = defineEmits<InputEmits>()
function handleInput(event: Event) {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
function handleFocus(event: FocusEvent) {
  emit('focus', event)
}
function handleBlur(event: FocusEvent) {
  emit('blur', event)
}
</script>

<template>
  <div class="fhr-input">
    <label
      v-if="label"
      :for="id"
      class="fhr-input__label"
    >
      {{ label }}
    </label>

    <input
      :id="id"
      :class="[
        'fhr-input__input',
        { 'fhr-input__input--error': error }
      ]"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="modelValue"
      :aria-invalid="!!error"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
    />

    <span
      v-if="error"
      class="fhr-input__error"
    >
      {{ error }}
    </span>
  </div>
</template>

<style scoped src="./style.scss" />

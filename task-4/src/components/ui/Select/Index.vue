<script setup lang="ts">
import { toRefs } from 'vue'
import type { SelectProps, SelectEmits } from './Select.types'
import { IconChevron } from '@/icons'

const props = withDefaults(
  defineProps<SelectProps>(), {
    modelValue: '',
    options: undefined,
    disabled: false,
    id: () => `select-${crypto.randomUUID()}`,
  }
)
const {
  label,
  id,
  disabled,
  modelValue,
  error,
  options,
  placeholder
} = toRefs(props)

const emit = defineEmits<SelectEmits>()
function handleChange(event: Event) {
  emit('update:modelValue', (event.target as HTMLSelectElement).value)
}
function handleFocus(event: FocusEvent) {
  emit('focus', event)
}
function handleBlur(event: FocusEvent) {
  emit('blur', event)
}
</script>

<template>
  <div class="fhr-select">
    <label
      v-if="label"
      :for="id"
      class="fhr-select__label"
    >
      {{ label }}
    </label>

    <div class="fhr-select__wrapper">
      <select
        :id="id"
        :class="[
          'fhr-select__select',
          { 'fhr-select__select--error': error }
        ]"
        :disabled="disabled"
        :value="modelValue"
        :aria-invalid="!!error"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
      >
        <option
          v-if="placeholder"
          value=""
          disabled
          hidden
        >
          {{ placeholder }}
        </option>

        <template v-if="options">
          <option
            v-for="opt in options"
            :key="opt.value"
            :value="opt.value"
            :disabled="opt.disabled"
          >
            {{ opt.label }}
          </option>
        </template>

        <slot v-else />
      </select>

      <span
        class="fhr-select__chevron"
        aria-hidden="true"
      >
        <IconChevron />
      </span>
    </div>

    <span
      v-if="error"
      class="fhr-select__error"
    >
      {{ error }}
    </span>
  </div>
</template>

<style scoped src="./style.scss" />

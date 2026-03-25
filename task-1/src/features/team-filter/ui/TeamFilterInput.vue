<script setup lang="ts">
import { MagnifierIcon } from '@/shared/ui/icons'

defineProps<{
  modelValue: string
}>()

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <div class="filter-input">
    <span class="filter-input__icon">
      <MagnifierIcon />
    </span>

    <input
      class="filter-input__field"
      type="text"
      placeholder="Поиск по названию команды..."
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>

<style scoped lang="scss">
.filter-input {
  position: relative;
  display: flex;
  align-items: center;

  &__icon {
    position: absolute;
    left: 14px;
    color: var(--fhr-color-primary);
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  &__field {
    width: 100%;
    padding: 12px 16px 12px 42px;
    border-radius: 10px;
    border: 1px solid var(--fhr-color-border);
    background: var(--fhr-color-background);
    color: var(--fhr-color-text);
    font-size: 14px;
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;

    &::placeholder {
      color: var(--fhr-color-text-secondary);
    }

    &:focus {
      border-color: var(--fhr-color-primary);
      box-shadow: 0 0 0 1px var(--fhr-color-primary), 0 4px 20px rgba(245, 197, 24, 0.15);
    }
  }
}
</style>

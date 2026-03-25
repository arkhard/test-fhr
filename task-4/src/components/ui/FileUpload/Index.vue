<script setup lang="ts">
import { ref, computed, toRefs } from 'vue'
import type { FileUploadProps, FileUploadEmits } from './FileUpload.types'

const props = withDefaults(
  defineProps<FileUploadProps>(), {
    modelValue: null,
    placeholder: 'Choose file',
    accept: '*',
    multiple: false,
    disabled: false,
  }
)
const {
  label,
  disabled,
  accept,
  multiple,
  modelValue,
  placeholder,
} = toRefs(props)

const inputRef = ref<HTMLInputElement | null>(null)
const displayName = computed(() =>
  modelValue.value ? modelValue.value.name : placeholder.value,
)

const emit = defineEmits<FileUploadEmits>()
function handleChange(event: Event) {
  const files = (event.target as HTMLInputElement).files
  emit('update:modelValue', files?.[0] ?? null)
}
</script>

<template>
  <div class="fhr-fileupload">
    <label
      v-if="label"
      class="fhr-fileupload__label"
    >
      {{ label }}
    </label>

    <div
      :class="[
        'fhr-fileupload__control',
        { 'fhr-fileupload__control--disabled': disabled }
      ]"
    >
      <span class="fhr-fileupload__filename">
        {{ displayName }}
      </span>

      <label
        :class="[
          'fhr-fileupload__browse',
          { 'fhr-fileupload__browse--disabled': disabled }
        ]"
      >
        Browse
        <input
          ref="inputRef"
          class="fhr-fileupload__hidden-input"
          type="file"
          :accept="accept"
          :disabled="disabled"
          :multiple="multiple"
          @change="handleChange"
        />
      </label>
    </div>
  </div>
</template>

<style scoped src="./style.scss" />

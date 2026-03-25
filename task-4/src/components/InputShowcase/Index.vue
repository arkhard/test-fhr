<script setup lang="ts">
import { ref } from 'vue'
import { FhrInput } from '@ui'

const inputValue = ref('')
const inputError = ref('Error text')

function focusInput(event: FocusEvent) {
  console.log('focusInput', event);
  inputError.value = null
}
function blurInput(event: FocusEvent) {
  console.log('blurInput', event);
}
</script>

<template>
  <div class="input-showcase">
    <h2>Inputs</h2>

    <p>Value: {{ inputValue }}</p>

    <div class="input-showcase__inputs">
      <FhrInput
        v-model="inputValue"
        label="Input label"
        placeholder="Input placeholder"
        :error="inputError"
        @focus="focusInput"
        @blur="blurInput"
      />
    </div>
  </div>
</template>

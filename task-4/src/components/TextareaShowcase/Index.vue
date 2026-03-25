<script setup lang="ts">
import { ref } from 'vue'
import { FhrTextarea } from '@ui'

const textareValue = ref('')
const textareError = ref('Error text')

function focusTextare(event: FocusEvent) {
  console.log('focusTextare', event);
  textareError.value = null
}
function blurTextare(event: FocusEvent) {
  console.log('blurTextare', event);
}
</script>

<template>
  <div class="textarea-showcase">
    <h2>Textarea</h2>

    <p>Value: {{ textareValue }}</p>

    <div class="textarea-showcase__textarea">
      <FhrTextarea
        v-model="textareValue"
        label="Textare label"
        placeholder="Textarea placeholder"
        rows="10"
        :error="textareError"
        @focus="focusTextare"
        @blur="blurTextare"
      />
    </div>
  </div>
</template>

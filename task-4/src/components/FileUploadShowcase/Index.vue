<script setup lang="ts">
import { ref } from 'vue'
import { FhrFileUpload } from '@ui'

const fileValue = ref<File | null>(null)
</script>

<template>
  <div class="fileupload-showcase">
    <h2>FileUpload</h2>

    <p>Value: {{ fileValue }}</p>

    <div class="fileupload-showcase__fileupload">
      <FhrFileUpload
        v-model="fileValue"
        label="Default File Upload"
      />
    </div>
  </div>
</template>

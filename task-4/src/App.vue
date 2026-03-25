<script setup lang="ts">
import { ButtonShowcase } from './components/ButtonShowcase'
import { InputShowcase } from './components/InputShowcase'
import { TextareaShowcase } from './components/TextareaShowcase'
import { FileUploadShowcase } from './components/FileUploadShowcase'
import { SelectShowcase } from './components/SelectShowcase'
import { AccordionShowcase } from './components/AccordionShowcase'
</script>

<template>
  <div class="app-container">
    <ButtonShowcase />
    <InputShowcase />
    <TextareaShowcase />
    <FileUploadShowcase />
    <SelectShowcase />
    <AccordionShowcase />
  </div>
</template>

<style scoped lang="scss">
.app-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
}
</style>

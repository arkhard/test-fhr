<script setup lang="ts">
import { ref } from 'vue'
import { FhrSelect } from '@ui'

const selectValue = ref('')
const selectValueSlot = ref('')
</script>

<template>
  <div class="textarea-showcase">
    <h2>Textarea</h2>

    <p>Value: {{ selectValue }}</p>

    <div>
      <FhrSelect
        v-model="selectValue"
        label="Команда"
        placeholder="Выберите команду"
        :options="[
          { label: 'ЦСКА', value: 'ЦСКА' },
          { label: 'Динамо', value: 'Динамо' },
          { label: 'Локомотив', value: 'Локомотив' },
          { label: 'Динамо Мн', value: 'Динамо_Мн' },
          { label: 'Северсталь', value: 'Северсталь' },
          { label: 'Куньлунь', value: 'Куньлунь' },
        ]"
      />
    </div>

    <p>Value: {{ selectValueSlot }}</p>

    <div class="textarea-showcase__textarea">
      <FhrSelect
        v-model="selectValueSlot"
        label="Команда через slot"
        placeholder="Выберите команду"
      >
        <option value="ЦСКА">ЦСКА</option>
        <option value="Динамо">Динамо</option>
        <option value="Локомотив">Локомотив</option>
        <option value="Динамо_Мн">Динамо Мн</option>
        <option value="Северсталь">Северсталь</option>
        <option value="Куньлунь">Куньлунь</option>
      </FhrSelect>
    </div>
  </div>
</template>

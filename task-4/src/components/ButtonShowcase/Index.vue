<script setup lang="ts">
import { FhrButton } from '@ui'

function clickButton(event: MouseEvent) {
  console.log('clickButton', event)
}
function hoverButton(event: MouseEvent, isHover: boolean) {
  console.log('hoverButton', isHover, event)
}
</script>

<template>
  <div class="button-showcase">
    <h2>Buttons</h2>

    <div class="button-showcase__buttons">
      <FhrButton
        @click="clickButton"
        @hover="hoverButton"
      >
        Deafult
      </FhrButton>

      <FhrButton
        color="secondary"
        @click="clickButton"
        @hover="hoverButton"
      >
        Secondary
      </FhrButton>

      <FhrButton
        color="success"
        @click="clickButton"
        @hover="hoverButton"
      >
        Success
      </FhrButton>

      <FhrButton
        color="danger"
        @click="clickButton"
        @hover="hoverButton"
      >
        Danger
      </FhrButton>

      <FhrButton
        color="warning"
        @click="clickButton"
        @hover="hoverButton"
      >
        Warning
      </FhrButton>

      <FhrButton
        color="info"
        @click="clickButton"
        @hover="hoverButton"
      >
        Info
      </FhrButton>

      <FhrButton
        color="light"
        @click="clickButton"
        @hover="hoverButton"
      >
        Light
      </FhrButton>

      <FhrButton
        color="dark"
        @click="clickButton"
        @hover="hoverButton"
      >
        Dark
      </FhrButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
.button-showcase {
  &__buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
}
</style>

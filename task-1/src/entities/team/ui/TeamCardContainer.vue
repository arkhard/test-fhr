<script setup lang="ts">
</script>

<template>
  <div
    class="team-card"
  >
    <slot />
  </div>
</template>

<style scoped lang="scss">
.team-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  border-radius: 10px;
  background: var(--fhr-color-background);
  border: 1px solid var(--fhr-color-border);
  position: relative;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
</style>

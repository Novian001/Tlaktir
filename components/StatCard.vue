<template>
  <div
    class="p-unit-6 rounded-lg border flex flex-col items-center justify-center transition-colors duration-300"
    :class="isDark ? 'bg-[#242424] border-[#3a3a3a]' : 'bg-surface-muted border-border-default'"
  >
    <span class="text-display-md-mobile font-black text-primary">{{ value }}</span>
    <span class="text-label-xs" :class="isDark ? 'text-[#9e9e9e]' : 'text-secondary'">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  value: string
  label: string
  isDark?: boolean
}>()
</script>

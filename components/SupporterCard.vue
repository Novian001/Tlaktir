<template>
  <div
    class="p-unit-5 rounded-lg border hover:border-primary transition-colors flex items-center gap-unit-4"
    :class="isDark ? 'bg-[#242424] border-[#3a3a3a]' : 'bg-surface-muted border-border-default'"
  >
    <div
      class="w-12 h-12 rounded-full flex items-center justify-center font-bold"
      :class="[bgColor, textColor]"
    >
      {{ initials }}
    </div>
    <div class="flex-1">
      <div class="flex justify-between items-start">
        <h3 class="text-label-xs font-semibold" :class="isDark ? 'text-[#e8e8e8]' : 'text-on-surface'">
          {{ name }}
        </h3>
        <div class="flex items-center gap-1 bg-primary-fixed px-2 py-0.5 rounded-full">
          <span class="material-symbols-outlined" style="font-size:14px; font-variation-settings: 'FILL' 1;">coffee</span>
          <span class="text-xs font-bold">x{{ coffees }}</span>
        </div>
      </div>
      <p class="text-sm line-clamp-1" :class="isDark ? 'text-[#777]' : 'text-text-tertiary'">
        {{ message }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  initials: string
  name: string
  coffees: number
  message: string
  bgColor: string
  textColor: string
  isDark?: boolean
}>()
</script>

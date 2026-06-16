<template>
  <div class="max-w-[1200px] mx-auto px-container-margin md:px-unit-8 py-unit-8 pb-32">
    <h1 class="text-display-md-mobile font-black mb-unit-6" :class="isDark ? 'text-[#e8e8e8]' : 'text-on-surface'">
      {{ $t('nav.explore') }}
    </h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-unit-4">
      <NuxtLink to="/" v-for="i in 6" :key="i"
        class="rounded-lg border overflow-hidden hover:border-primary transition-colors group"
        :class="isDark ? 'bg-[#242424] border-[#3a3a3a]' : 'bg-surface-muted border-border-default'"
      >
        <div class="h-40 overflow-hidden">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmqW4udqTcx0Hx9TSqCwwDI2vb-MGH6Wyo5pRYOwHm_rvbeQR0vnIW5LFEdVq0gi2kVLlxM4RBciOTd7CMzm2CZKXiEH6JsfJTbmJkXelh113A8xy4RACfutsmk-y36OJjW_bIIGj2UhON8dsOPi6g50PnORfrZZOZ3XlPKiYWbwymnvucjokl_OmRZmF3mD9fw_dcgoIuD8IziLZDQYSBpWw8eaFRBRbYKFcV6IFYmGjLxwo7eQrhwOreDFGKkf6SUeL5eATjjz8"
            alt="Creator" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div class="p-unit-4">
          <p class="text-label-xs font-semibold" :class="isDark ? 'text-[#e8e8e8]' : 'text-on-surface'">The Coffee Artist</p>
          <p class="text-sm" :class="isDark ? 'text-[#9e9e9e]' : 'text-secondary'">{{ $t('profile.handle') }}</p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({ layout: 'default' })
const { isDark } = useDarkMode()
useHead({ title: 'Explore | Tlaktir' })
</script>

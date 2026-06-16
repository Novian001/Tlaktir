<template>
  <div class="max-w-[600px] mx-auto px-container-margin py-unit-8 pb-32">
    <div class="rounded-lg border p-unit-7 flex flex-col items-center text-center gap-unit-4"
      :class="isDark ? 'bg-[#242424] border-[#3a3a3a]' : 'bg-surface-muted border-border-default'"
    >
      <div class="w-24 h-24 rounded-full overflow-hidden border-4 border-primary-container">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRpvx3jIqZQJLqlJMv6tRBbIsmHoc-kKRyEMstIGLJeTr4AsG14NA7_NnLzSKBDoQ228V4x1YVx_vJ2JlF2tC1YaZxvXu1tafnBu2Ogm8pDVJX0I60BNsSeq5Q-_xhWS6oWS9NV9DQEwbL9ngYZ4MCH-mnbJaRF6qy-ezQZ7efut-KRPPUuBd0LhTqI_yKyFnMOQbD-UA6883yaZZePXog-0G4hVqCtv8FwkpK55zvdDmP_gJFGkbbxfCB6WrrpCmyWXg-CGUqmcw"
          alt="Profile" class="w-full h-full object-cover"
        />
      </div>
      <div>
        <h1 class="text-headline-xl font-bold" :class="isDark ? 'text-[#e8e8e8]' : 'text-on-surface'">The Coffee Artist</h1>
        <p :class="isDark ? 'text-[#9e9e9e]' : 'text-secondary'">{{ $t('profile.handle') }}</p>
      </div>
      <NuxtLink to="/support">
        <button class="bg-primary-container text-on-primary-container font-bold rounded-full px-unit-8 py-unit-4 text-label-xs hard-shadow support-glow flex items-center gap-unit-2 hover:scale-105 active:scale-95 transition-all">
          <span class="material-symbols-outlined" style="font-variation-settings:'FILL' 1;">coffee</span>
          {{ $t('profile.supportBtn') }}
        </button>
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({ layout: 'default' })
const { isDark } = useDarkMode()
useHead({ title: 'Profile | Tlaktir' })
</script>

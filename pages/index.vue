<template>
  <div class="max-w-[1200px] mx-auto px-container-margin md:px-unit-8 py-unit-8 pb-32">

    <!-- Profile Header -->
    <section class="flex flex-col items-center text-center mb-8 sm:mb-unit-8">
      <div class="relative mb-unit-6">
        <div class="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-primary-container p-1 overflow-hidden"
          :class="isDark ? 'bg-[#242424]' : 'bg-surface-muted'"
        >
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRpvx3jIqZQJLqlJMv6tRBbIsmHoc-kKRyEMstIGLJeTr4AsG14NA7_NnLzSKBDoQ228V4x1YVx_vJ2JlF2tC1YaZxvXu1tafnBu2Ogm8pDVJX0I60BNsSeq5Q-_xhWS6oWS9NV9DQEwbL9ngYZ4MCH-mnbJaRF6qy-ezQZ7efut-KRPPUuBd0LhTqI_yKyFnMOQbD-UA6883yaZZePXog-0G4hVqCtv8FwkpK55zvdDmP_gJFGkbbxfCB6WrrpCmyWXg-CGUqmcw"
            alt="The Coffee Artist Profile" class="w-full h-full object-cover rounded-full" />
        </div>
        <div class="absolute bottom-0 right-0 bg-primary-container p-1.5 sm:p-2 rounded-full border-2 hard-shadow"
          :class="isDark ? 'border-[#242424]' : 'border-surface-muted'"
        >
          <span class="material-symbols-outlined text-on-primary-container" style="font-size:18px;">palette</span>
        </div>
      </div>

      <!-- Name — responsive font size -->
      <h1 class="text-4xl sm:text-display-md-mobile md:text-display-md font-black mb-unit-1"
        :class="isDark ? 'text-[#e8e8e8]' : 'text-on-surface'"
      >The Coffee Artist</h1>

      <p class="text-body-sm mb-unit-4" :class="isDark ? 'text-[#9e9e9e]' : 'text-secondary'">
        {{ $t('profile.handle') }}
      </p>

      <div class="rounded-lg px-unit-5 py-unit-3 w-full max-w-sm sm:max-w-xl mb-unit-7 border"
        :class="isDark ? 'bg-[#242424] border-[#3a3a3a]' : 'bg-surface-container-low border-border-default'"
      >
        <p class="text-body-sm italic">{{ $t('profile.tagline') }}</p>
      </div>

      <NuxtLink to="/support">
        <button class="bg-primary-container text-on-primary-container font-bold rounded-full px-unit-7 sm:px-unit-8 py-unit-4 sm:py-unit-5 text-lg sm:text-headline-xl hover:scale-[1.02] active:scale-95 transition-all hard-shadow support-glow flex items-center gap-unit-3">
          <span class="material-symbols-outlined" style="font-variation-settings:'FILL' 1;">coffee</span>
          {{ $t('profile.supportBtn') }}
        </button>
      </NuxtLink>
    </section>

    <!-- Stats Grid — stacks on mobile, 3 cols on md+ -->
    <div class="grid grid-cols-3 gap-unit-3 sm:gap-unit-4 mb-8 sm:mb-unit-8">
      <StatCard value="1.2k" :label="$t('profile.stats.supporters')" :is-dark="isDark" />
      <StatCard value="45"   :label="$t('profile.stats.artworks')"   :is-dark="isDark" />
      <StatCard value="98%"  :label="$t('profile.stats.happyVibes')" :is-dark="isDark" />
    </div>

    <!-- Supporters Feed -->
    <section class="mb-8 sm:mb-unit-8">
      <div class="flex items-center justify-between mb-unit-5">
        <h2 class="text-xl sm:text-headline-xl font-bold" :class="isDark ? 'text-[#e8e8e8]' : 'text-on-surface'">
          {{ $t('profile.recentSupporters') }}
        </h2>
        <button class="text-primary text-sm font-semibold flex items-center gap-unit-1 hover:underline shrink-0">
          {{ $t('profile.viewAll') }}
          <span class="material-symbols-outlined" style="font-size:16px;">arrow_forward</span>
        </button>
      </div>
      <!-- 1 col mobile, 2 col tablet, 3 col desktop -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-unit-3 sm:gap-unit-4">
        <SupporterCard v-for="s in supporters" :key="s.name" v-bind="s" :is-dark="isDark" />
      </div>
    </section>

    <!-- Behind the Beans — stacks on mobile, side-by-side on md+ -->
    <section class="grid grid-cols-1 md:grid-cols-2 gap-unit-6 md:gap-unit-8 items-center p-unit-5 sm:p-unit-7 rounded-xl border overflow-hidden"
      :class="isDark ? 'bg-[#242424] border-[#3a3a3a]' : 'bg-surface-container-lowest border-border-default'"
    >
      <div class="order-2 md:order-1">
        <h2 class="text-3xl sm:text-display-md-mobile font-black mb-unit-3 sm:mb-unit-4"
          :class="isDark ? 'text-[#e8e8e8]' : 'text-on-surface'"
        >{{ $t('profile.behindBeans.title') }}</h2>
        <p class="text-base sm:text-body-md mb-unit-5 sm:mb-unit-6" :class="isDark ? 'text-[#9e9e9e]' : 'text-secondary'">
          {{ $t('profile.behindBeans.description') }}
        </p>
        <div class="flex flex-wrap gap-unit-3">
          <button class="px-unit-5 py-unit-3 rounded-full text-label-xs hover:opacity-90 active:scale-95 transition-all"
            :class="isDark ? 'bg-[#e8e8e8] text-[#1a1a1a]' : 'bg-on-surface text-surface-muted'"
          >{{ $t('profile.behindBeans.gallery') }}</button>
          <button class="border px-unit-5 py-unit-3 rounded-full text-label-xs transition-all"
            :class="isDark ? 'border-[#3a3a3a] text-[#9e9e9e] hover:bg-[#2e2e2e]' : 'border-border-default hover:bg-surface-container'"
          >{{ $t('profile.behindBeans.reel') }}</button>
        </div>
      </div>

      <!-- Image taller on desktop, shorter on mobile -->
      <div class="order-1 md:order-2 relative group h-48 sm:h-64 md:h-96">
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmqW4udqTcx0Hx9TSqCwwDI2vb-MGH6Wyo5pRYOwHm_rvbeQR0vnIW5LFEdVq0gi2kVLlxM4RBciOTd7CMzm2CZKXiEH6JsfJTbmJkXelh113A8xy4RACfutsmk-y36OJjW_bIIGj2UhON8dsOPi6g50PnORfrZZOZ3XlPKiYWbwymnvucjokl_OmRZmF3mD9fw_dcgoIuD8IziLZDQYSBpWw8eaFRBRbYKFcV6IFYmGjLxwo7eQrhwOreDFGKkf6SUeL5eATjjz8"
          alt="Artistic Coffee"
          class="w-full h-full object-cover rounded-lg hard-shadow group-hover:rotate-1 md:group-hover:rotate-2 transition-transform duration-500"
        />
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'default' })
const { isDark } = useDarkMode()
useHead({ title: 'The Coffee Artist | Tlaktir' })

const supporters = [
  { initials: 'JD', name: 'Jane Doe',  coffees: 3, message: '"Love your latest espresso series!"',     bgColor: 'bg-tertiary-container',  textColor: 'text-on-tertiary-container' },
  { initials: 'MK', name: 'Marco K.',  coffees: 5, message: '"The detail in the latte art is insane."', bgColor: 'bg-secondary-container', textColor: 'text-on-secondary-container' },
  { initials: 'S',  name: 'Sarah',     coffees: 1, message: '"Keep creating magic!"',                   bgColor: 'bg-primary-fixed',       textColor: 'text-on-primary-fixed' },
]
</script>

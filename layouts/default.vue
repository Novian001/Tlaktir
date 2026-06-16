<template>
  <div class="min-h-screen flex flex-col transition-colors duration-300"
    :class="isDark ? 'bg-[#1a1a1a] text-[#e8e8e8]' : 'bg-background text-on-surface'"
  >
    <!-- TopAppBar -->
    <header ref="headerRef"
      class="w-full sticky top-0 z-50 border-b flex items-center px-gutter py-unit-3 transition-all duration-300"
      :class="isDark ? 'bg-[#242424] border-[#3a3a3a]' : 'bg-surface-muted border-border-default'"
    >
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-unit-2 hover:opacity-80 transition-opacity active:scale-95">
        <span class="material-symbols-outlined text-primary">coffee</span>
        <span class="font-black text-headline-lg" :class="isDark ? 'text-[#e8e8e8]' : 'text-on-surface'">Tlaktir</span>
      </NuxtLink>

      <div class="ml-auto flex items-center gap-unit-2 sm:gap-unit-3">
        <!-- Language Switcher -->
        <div class="flex items-center rounded-full border overflow-hidden text-xs font-bold"
          :class="isDark ? 'border-[#3a3a3a]' : 'border-border-default'"
        >
          <button v-for="loc in locales" :key="loc.code"
            @click="switchLanguage(loc.code)"
            class="px-2.5 py-1 transition-all"
            :class="locale === loc.code
              ? 'bg-primary-container text-on-primary-container'
              : isDark ? 'text-[#9e9e9e] hover:bg-[#2e2e2e]' : 'text-secondary hover:bg-surface-container'"
          >
            {{ loc.code.toUpperCase() }}
          </button>
        </div>

        <!-- Dark Mode Toggle -->
        <button @click="toggle"
          class="w-9 h-9 rounded-full flex items-center justify-center transition-all active:scale-90"
          :class="isDark ? 'bg-[#2e2e2e] text-[#e4c600] hover:bg-[#3a3a3a]' : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'"
          :aria-label="isDark ? 'Light mode' : 'Dark mode'"
        >
          <span class="material-symbols-outlined" style="font-size:20px; font-variation-settings:'FILL' 1;">
            {{ isDark ? 'light_mode' : 'dark_mode' }}
          </span>
        </button>

        <!-- Search -->
        <button class="w-9 h-9 rounded-full flex items-center justify-center transition-all active:scale-90"
          :class="isDark ? 'text-[#9e9e9e] hover:bg-[#2e2e2e]' : 'text-on-surface-variant hover:bg-surface-container'"
        >
          <span class="material-symbols-outlined" style="font-size:20px;">search</span>
        </button>
      </div>
    </header>

    <!-- Page Content -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="w-full mb-16 border-t flex flex-col items-center gap-unit-3 px-container-margin py-unit-7 text-center transition-colors duration-300"
      :class="isDark ? 'bg-[#1a1a1a] border-[#3a3a3a]' : 'bg-surface-container-lowest border-border-default'"
    >
      <div class="font-black text-headline-lg" :class="isDark ? 'text-[#e8e8e8]' : 'text-on-surface'">Tlaktir</div>
      <div class="flex flex-wrap justify-center gap-unit-4 sm:gap-unit-6 text-body-sm" :class="isDark ? 'text-[#9e9e9e]' : 'text-secondary'">
        <a href="#" class="hover:text-primary underline transition-all">{{ $t('footer.about') }}</a>
        <a href="#" class="hover:text-primary underline transition-all">{{ $t('footer.privacy') }}</a>
        <a href="#" class="hover:text-primary underline transition-all">{{ $t('footer.terms') }}</a>
        <a href="#" class="hover:text-primary underline transition-all">{{ $t('footer.support') }}</a>
      </div>
      <p class="text-sm" :class="isDark ? 'text-[#9e9e9e]' : 'text-secondary'">{{ $t('footer.copyright') }}</p>
    </footer>

    <!-- BottomNavBar -->
    <nav class="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center pt-unit-2 pb-3 px-unit-4 border-t rounded-t-lg transition-colors duration-300"
      :class="isDark ? 'bg-[#242424] border-[#3a3a3a]' : 'bg-surface-muted border-border-default'"
    >
      <NuxtLink v-for="item in navItems" :key="item.to" :to="item.to"
        class="flex flex-col items-center justify-center px-unit-4 sm:px-unit-6 py-unit-1 rounded-full transition-all active:scale-90 duration-200 min-w-[60px]"
        :class="$route.path === item.to
          ? 'bg-primary-container text-on-primary-container'
          : isDark ? 'text-[#9e9e9e] hover:bg-[#2e2e2e]' : 'text-secondary hover:bg-surface-container-high'"
      >
        <span class="material-symbols-outlined text-[22px]">{{ item.icon }}</span>
        <span class="text-xs font-semibold mt-0.5">{{ $t(item.label) }}</span>
      </NuxtLink>
    </nav>
  </div>
</template>

<script setup lang="ts">
const { isDark, toggle } = useDarkMode()
const { locale, locales, setLocale } = useI18n()
const headerRef = ref<HTMLElement | null>(null)

const navItems = [
  { to: '/',        icon: 'home',   label: 'nav.home' },
  { to: '/explore', icon: 'search', label: 'nav.explore' },
  { to: '/profile', icon: 'person', label: 'nav.profile' },
]

const switchLanguage = (code: string) => setLocale(code as 'en' | 'id')

onMounted(() => {
  window.addEventListener('scroll', () => {
    if (!headerRef.value) return
    headerRef.value.classList.toggle('shadow-md', window.scrollY > 20)
  })
})
</script>

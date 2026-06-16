<template>
  <div class="flex flex-col items-center px-container-margin py-unit-8 pb-32 w-full">
    <div class="w-full max-w-md sm:max-w-lg border rounded-lg p-unit-5 sm:p-unit-7 md:p-unit-8 transition-all"
      :class="isDark ? 'bg-[#242424] border-[#3a3a3a]' : 'bg-surface-muted border-border-default'"
    >
      <!-- Creator Profile -->
      <div class="flex flex-col items-center mb-unit-6 sm:mb-unit-7">
        <div class="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-primary-container mb-unit-4">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEhHSMbNGdJHw61Ni3yJ4YOK9vdvTQdh-pQ-Qt9EI2D6G22itYp6E7OZQR3LvyIbWMD6RQWLi7WjtkI_sUwGO27Ug8-sVMMDLe3SQz448vEs-GnTchzexo9PeKQznRb-sDVgmIhDKN7AuzS3QOzFsCfvVWKstimBLQY-JdMETuh0ilTWu-C-z1ML-LM6nApJ3CNY-tZPGhPB-FI6tCfx_sgxKlctKcNhkflX0bdLGjzbyVTGX3Xce0WkmmJBv-1WL3OzthRJr7E04"
            alt="Creator" class="w-full h-full object-cover" />
        </div>
        <h1 class="text-lg sm:text-headline-xl font-bold text-center mb-unit-1"
          :class="isDark ? 'text-[#e8e8e8]' : 'text-on-surface'"
        >{{ $t('support.title') }}</h1>
        <p class="text-sm sm:text-body-sm text-center" :class="isDark ? 'text-[#9e9e9e]' : 'text-secondary'">
          {{ $t('support.subtitle') }}
        </p>
      </div>

      <!-- Coffee Selection -->
      <div class="flex flex-col gap-unit-3 sm:gap-unit-4 mb-unit-6 sm:mb-unit-7">
        <p class="text-xs sm:text-label-xs uppercase tracking-wider" :class="isDark ? 'text-[#9e9e9e]' : 'text-secondary'">
          {{ $t('support.selectLevel') }}
        </p>
        <div class="flex flex-col gap-unit-2 sm:gap-unit-3">
          <button v-for="option in coffeeOptions" :key="option.coffees"
            class="w-full py-unit-4 sm:py-unit-5 px-unit-5 sm:px-unit-6 rounded-full border flex justify-between items-center transition-all group"
            :class="selectedOption === option.coffees
              ? 'payment-pill-selected bg-primary-container'
              : isDark
                ? 'border-[#3a3a3a] bg-[#1a1a1a] hover:bg-[#2e2e2e]'
                : 'border-border-default bg-surface-bright hover:bg-surface-container-low'"
            @click="selectOption(option.coffees)"
          >
            <span class="text-base sm:text-headline-lg font-bold"
              :class="selectedOption === option.coffees ? 'text-on-primary-container' : isDark ? 'text-[#e8e8e8]' : 'text-on-surface'"
            >☕ x {{ option.coffees }}</span>
            <span class="text-base sm:text-headline-lg font-bold"
              :class="selectedOption === option.coffees ? 'text-on-primary-container' : isDark ? 'text-[#9e9e9e]' : 'text-secondary'"
            >(${{ option.price }})</span>
          </button>
        </div>
      </div>

      <!-- Message -->
      <div class="flex flex-col gap-unit-2 sm:gap-unit-3 mb-unit-7 sm:mb-unit-8">
        <label class="text-xs sm:text-label-xs uppercase tracking-wider" :class="isDark ? 'text-[#9e9e9e]' : 'text-secondary'" for="msg">
          {{ $t('support.privateMessage') }}
        </label>
        <textarea id="msg" v-model="message" rows="4"
          class="w-full border rounded p-unit-4 sm:p-unit-5 text-sm sm:text-body-sm focus:ring-0 transition-all resize-none"
          :class="isDark
            ? 'bg-[#1a1a1a] border-[#3a3a3a] text-[#e8e8e8] placeholder:text-[#555] focus:border-[#e4c600]'
            : 'bg-surface-bright border-border-default text-on-surface placeholder:text-text-tertiary focus:border-on-surface'"
          :placeholder="$t('support.messagePlaceholder')"
        />
      </div>

      <!-- CTA -->
      <button
        class="w-full py-unit-4 sm:py-unit-5 bg-primary-container text-on-primary-container rounded-full text-base sm:text-headline-xl font-bold active:scale-95 hard-shadow-dark hard-shadow-hover border-2 transition-all"
        :class="isDark ? 'border-[#e4c600]' : 'border-on-surface'"
        @click="handlePayment"
      >{{ $t('support.payBtn') }}</button>

      <!-- Trust Badges -->
      <div class="mt-unit-7 sm:mt-unit-8 flex flex-col items-center gap-unit-3">
        <div class="flex items-center gap-unit-3 sm:gap-unit-4 opacity-40 grayscale hover:grayscale-0 transition-all">
          <span class="material-symbols-outlined text-3xl sm:text-4xl" style="font-variation-settings:'FILL' 1;">lock</span>
          <div class="flex gap-unit-2">
            <span class="material-symbols-outlined text-2xl sm:text-3xl">credit_card</span>
            <span class="material-symbols-outlined text-2xl sm:text-3xl">account_balance_wallet</span>
            <span class="material-symbols-outlined text-2xl sm:text-3xl">verified_user</span>
          </div>
        </div>
        <p class="text-xs sm:text-label-xs text-center" :class="isDark ? 'text-[#9e9e9e]' : 'text-secondary'">
          {{ $t('support.secureCheckout') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'default' })
const { isDark } = useDarkMode()
const { t } = useI18n()
useHead({ title: 'Support - Tlaktir' })

const selectedOption = ref(3)
const message = ref('')
const coffeeOptions = [
  { coffees: 1, price: 5 },
  { coffees: 3, price: 15 },
  { coffees: 5, price: 25 },
]
const selectOption = (c: number) => { selectedOption.value = c }
const handlePayment = () => {
  const opt = coffeeOptions.find(o => o.coffees === selectedOption.value)
  alert(t('support.thankYou', { coffees: selectedOption.value, price: opt?.price }))
}
</script>

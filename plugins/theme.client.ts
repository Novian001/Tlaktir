export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    const { init } = useDarkMode()
    init()
  }
})

export const useDarkMode = () => {
  const isDark = useState<boolean>('darkMode', () => false)

  const toggle = () => {
    isDark.value = !isDark.value
    applyTheme(isDark.value)
  }

  const applyTheme = (dark: boolean) => {
    if (import.meta.client) {
      if (dark) {
        document.documentElement.classList.add('dark')
        document.documentElement.setAttribute('data-theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        document.documentElement.setAttribute('data-theme', 'tlaktir')
      }
      localStorage.setItem('tlaktir-theme', dark ? 'dark' : 'light')
    }
  }

  const init = () => {
    if (import.meta.client) {
      const saved = localStorage.getItem('tlaktir-theme')
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      const dark = saved ? saved === 'dark' : prefersDark
      isDark.value = dark
      applyTheme(dark)
    }
  }

  return { isDark, toggle, init }
}

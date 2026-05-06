import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem('deax-theme')
    if (stored) return stored === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
    return localStorage.getItem('deax-sidebar') === 'collapsed'
  })

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('deax-theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    localStorage.setItem('deax-sidebar', sidebarCollapsed ? 'collapsed' : 'expanded')
  }, [sidebarCollapsed])

  const toggleTheme = () => setDark(d => !d)
  const toggleSidebar = () => setSidebarCollapsed(c => !c)
  const toggleMobileSidebar = () => setMobileSidebarOpen(o => !o)

  return (
    <ThemeContext.Provider value={{
      dark, toggleTheme,
      sidebarCollapsed, toggleSidebar,
      mobileSidebarOpen, setMobileSidebarOpen, toggleMobileSidebar,
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider')
  return ctx
}

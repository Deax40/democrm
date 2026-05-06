import { Link } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import Icon from '../ui/Icon'
import clsx from 'clsx'

// variant: 'cover' | 'minimal' | 'creative'
export default function AuthLayout({ children, variant = 'minimal', illustration }) {
  const { dark, toggleTheme } = useTheme()

  if (variant === 'minimal') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
        <button onClick={toggleTheme} className="fixed top-4 right-4 btn btn-secondary btn-icon">
          <Icon name={dark ? 'Sun' : 'Moon'} size={17} />
        </button>
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-2">
              <div className="w-9 h-9 rounded-xl bg-primary-500 flex items-center justify-center">
                <span className="text-white font-black">D</span>
              </div>
              <span className="text-2xl font-black text-gray-900 dark:text-white">DeaX <span className="text-primary-500 font-light">CRM</span></span>
            </div>
            <p className="text-muted text-sm">Gérez votre activité en toute simplicité</p>
          </div>
          <div className="auth-card">
            {children}
          </div>
        </div>
      </div>
    )
  }

  if (variant === 'cover') {
    return (
      <div className="min-h-screen flex">
        {/* Left panel */}
        <div className="hidden lg:flex lg:w-1/2 bg-primary-500 items-center justify-center flex-col gap-6 p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-400" />
          <div className="relative z-10 text-center">
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-6">
              <span className="text-white font-black text-3xl">D</span>
            </div>
            <h1 className="text-4xl font-black text-white mb-3">DeaX CRM</h1>
            <p className="text-primary-100 text-lg max-w-xs">La plateforme CRM pour les équipes ambitieuses.</p>
          </div>
          <div className="relative z-10 grid grid-cols-2 gap-4 max-w-sm">
            {[
              { icon:'Users',     label:'3 247 clients' },
              { icon:'TrendingUp',label:'€ 284k CA' },
              { icon:'Briefcase', label:'64 projets' },
              { icon:'CheckCircle',label:'342 tâches' },
            ].map(s => (
              <div key={s.label} className="bg-white/10 rounded-xl p-4 text-center">
                <Icon name={s.icon} size={22} className="text-white mx-auto mb-1" />
                <p className="text-white text-sm font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Right panel */}
        <div className="flex-1 flex items-center justify-center bg-white dark:bg-gray-900 p-8">
          <button onClick={toggleTheme} className="fixed top-4 right-4 btn btn-secondary btn-icon">
            <Icon name={dark ? 'Sun' : 'Moon'} size={17} />
          </button>
          <div className="w-full max-w-md">
            <div className="lg:hidden text-center mb-6">
              <div className="inline-flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-primary-500 flex items-center justify-center">
                  <span className="text-white font-black">D</span>
                </div>
                <span className="text-2xl font-black text-gray-900 dark:text-white">DeaX CRM</span>
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
    )
  }

  // creative
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-400/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-400/10 rounded-full translate-x-1/3 translate-y-1/3" />
      <button onClick={toggleTheme} className="fixed top-4 right-4 btn btn-secondary btn-icon">
        <Icon name={dark ? 'Sun' : 'Moon'} size={17} />
      </button>
      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-1">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center shadow-lg">
              <span className="text-white font-black">D</span>
            </div>
            <span className="text-2xl font-black text-gray-900 dark:text-white">DeaX CRM</span>
          </div>
        </div>
        <div className="auth-card shadow-2xl">
          {children}
        </div>
      </div>
    </div>
  )
}

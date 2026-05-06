import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import Icon from '../ui/Icon'
import Dropdown, { DropdownItem } from '../ui/Dropdown'
import clsx from 'clsx'

const notifications = [
  { id: 1, text: 'Nouveau lead – Romain Chevalier',   time: 'Il y a 5 min',   read: false, icon: 'UserPlus',  color: 'bg-blue-100 text-blue-600' },
  { id: 2, text: 'Facture INV-2025-004 en retard',    time: 'Il y a 30 min',  read: false, icon: 'AlertTriangle', color: 'bg-red-100 text-red-600' },
  { id: 3, text: 'Projet OptiFlow démarré',           time: 'Il y a 1 h',     read: true,  icon: 'Briefcase', color: 'bg-green-100 text-green-600' },
  { id: 4, text: 'Proposition PRO-2025-002 acceptée', time: 'Il y a 2 h',     read: true,  icon: 'CheckCircle', color: 'bg-purple-100 text-purple-600' },
]

export default function Header() {
  const { toggleTheme, dark, toggleSidebar, toggleMobileSidebar, sidebarCollapsed } = useTheme()
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQ, setSearchQ] = useState('')
  const navigate = useNavigate()

  const unread = notifications.filter(n => !n.read).length

  return (
    <header className="h-14 flex items-center justify-between px-4 md:px-6 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 sticky top-0 z-20">
      {/* Left */}
      <div className="flex items-center gap-3">
        {/* Desktop sidebar toggle */}
        <button
          onClick={toggleSidebar}
          className="hidden lg:flex btn btn-secondary btn-icon"
          title={sidebarCollapsed ? 'Développer la sidebar' : 'Réduire la sidebar'}
        >
          <Icon name={sidebarCollapsed ? 'PanelLeftOpen' : 'PanelLeftClose'} size={18} />
        </button>
        {/* Mobile sidebar toggle */}
        <button
          onClick={toggleMobileSidebar}
          className="lg:hidden btn btn-secondary btn-icon"
        >
          <Icon name="Menu" size={18} />
        </button>

        {/* Search bar */}
        <div className={clsx('relative transition-all duration-200', searchOpen ? 'w-64' : 'w-40 md:w-56')}>
          <Icon name="Search" size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Rechercher…"
            value={searchQ}
            onChange={e => setSearchQ(e.target.value)}
            onFocus={() => setSearchOpen(true)}
            onBlur={() => { setSearchOpen(false); setSearchQ('') }}
            className="form-input pl-9 h-9 text-sm"
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-1.5">
        {/* Theme toggle */}
        <button onClick={toggleTheme} className="btn btn-secondary btn-icon" title="Changer le thème">
          <Icon name={dark ? 'Sun' : 'Moon'} size={17} />
        </button>

        {/* Fullscreen */}
        <button
          onClick={() => {
            if (!document.fullscreenElement) document.documentElement.requestFullscreen()
            else document.exitFullscreen()
          }}
          className="btn btn-secondary btn-icon hidden md:flex"
          title="Plein écran"
        >
          <Icon name="Maximize2" size={17} />
        </button>

        {/* Notifications */}
        <Dropdown
          trigger={
            <button className="btn btn-secondary btn-icon relative">
              <Icon name="Bell" size={17} />
              {unread > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                  {unread}
                </span>
              )}
            </button>
          }
          align="right"
          className="relative"
        >
          <div className="w-80">
            <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
              <span className="font-semibold text-sm text-gray-900 dark:text-white">Notifications</span>
              <span className="badge badge-primary">{unread} nouvelles</span>
            </div>
            <div className="max-h-72 overflow-y-auto">
              {notifications.map(n => (
                <div key={n.id} className={clsx('dropdown-item gap-3', !n.read && 'bg-primary-50 dark:bg-primary-900/10')}>
                  <div className={clsx('w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0', n.color)}>
                    <Icon name={n.icon} size={14} />
                  </div>
                  <div className="min-w-0">
                    <p className={clsx('text-sm', !n.read && 'font-medium')}>{n.text}</p>
                    <p className="text-xs text-muted">{n.time}</p>
                  </div>
                  {!n.read && <span className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0 ml-auto" />}
                </div>
              ))}
            </div>
            <div className="px-4 py-2 border-t border-gray-100 dark:border-gray-700 text-center">
              <button className="text-sm text-primary-500 hover:text-primary-600 font-medium">
                Voir tout
              </button>
            </div>
          </div>
        </Dropdown>

        {/* User menu */}
        <Dropdown
          trigger={
            <button className="flex items-center gap-2 pl-1">
              <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white text-xs font-bold">
                AD
              </div>
              <div className="hidden md:block text-left">
                <p className="text-sm font-medium text-gray-900 dark:text-white leading-none">Admin DeaX</p>
                <p className="text-xs text-muted leading-none mt-0.5">Super Admin</p>
              </div>
              <Icon name="ChevronDown" size={14} className="text-gray-400 hidden md:block" />
            </button>
          }
          align="right"
        >
          <div className="w-56">
            <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700">
              <p className="font-semibold text-sm text-gray-900 dark:text-white">Admin DeaX</p>
              <p className="text-xs text-muted">admin@deax.io</p>
            </div>
            <DropdownItem icon={<Icon name="User" size={14} />} onClick={() => navigate('/settings/general')}>
              Mon profil
            </DropdownItem>
            <DropdownItem icon={<Icon name="Settings" size={14} />} onClick={() => navigate('/settings/general')}>
              Paramètres
            </DropdownItem>
            <DropdownItem icon={<Icon name="HelpCircle" size={14} />} onClick={() => navigate('/help')}>
              Aide
            </DropdownItem>
            <div className="border-t border-gray-100 dark:border-gray-700 mt-1 pt-1">
              <DropdownItem icon={<Icon name="LogOut" size={14} />} onClick={() => navigate('/auth/login-cover')} danger>
                Déconnexion
              </DropdownItem>
            </div>
          </div>
        </Dropdown>
      </div>
    </header>
  )
}

import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import { navItems } from '../../data/navigation'
import Icon from '../ui/Icon'
import clsx from 'clsx'

function NavItem({ item, collapsed }) {
  const location = useLocation()
  const [open, setOpen] = useState(() => {
    if (!item.children) return false
    return item.children.some(c => c.path === location.pathname)
  })

  const isActive = item.path
    ? location.pathname === item.path
    : item.children?.some(c => location.pathname === c.path)

  if (!item.children) {
    return (
      <Link
        to={item.path}
        className={clsx('sidebar-nav-link', isActive && 'active')}
        title={collapsed ? item.label : undefined}
      >
        <Icon name={item.icon} size={18} />
        {!collapsed && <span className="nav-label">{item.label}</span>}
      </Link>
    )
  }

  return (
    <div>
      <button
        onClick={() => setOpen(o => !o)}
        className={clsx('sidebar-nav-link w-full', isActive && !open && 'active')}
        title={collapsed ? item.label : undefined}
      >
        <Icon name={item.icon} size={18} />
        {!collapsed && (
          <>
            <span className="nav-label flex-1 text-left">{item.label}</span>
            <span className={clsx('chevron transition-transform duration-200', open && 'rotate-90')}>
              <Icon name="ChevronRight" size={14} />
            </span>
          </>
        )}
      </button>

      {open && !collapsed && (
        <div className="ml-6 mt-0.5 border-l border-sidebar-hover pl-3 flex flex-col gap-0.5">
          {item.children.map(child => (
            <Link
              key={child.path}
              to={child.path}
              className={clsx(
                'sidebar-nav-link py-2 text-xs',
                location.pathname === child.path && 'active'
              )}
            >
              <Icon name="Dot" size={14} />
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Sidebar() {
  const { sidebarCollapsed, mobileSidebarOpen, setMobileSidebarOpen } = useTheme()
  const collapsed = sidebarCollapsed

  return (
    <>
      {/* Mobile overlay */}
      {mobileSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

      <aside
        className={clsx(
          'sidebar-wrapper',
          collapsed ? 'w-16' : 'w-64',
          'hidden lg:flex',
        )}
      >
        {/* Logo */}
        <div className={clsx(
          'flex items-center gap-3 px-4 py-4 border-b border-sidebar-hover flex-shrink-0',
          collapsed && 'justify-center'
        )}>
          <div className="w-8 h-8 rounded-lg bg-primary-500 flex items-center justify-center flex-shrink-0">
            <span className="text-white font-black text-sm">D</span>
          </div>
          {!collapsed && (
            <span className="sidebar-logo-text font-bold text-white text-lg tracking-tight">
              DeaX <span className="text-primary-400 font-normal text-sm">CRM</span>
            </span>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto overflow-x-hidden py-3 px-2 flex flex-col gap-0.5">
          {navItems.map(section => (
            <div key={section.section}>
              {!collapsed && (
                <p className="sidebar-section-title section-title">{section.section}</p>
              )}
              {section.items.map(item => (
                <NavItem key={item.id} item={item} collapsed={collapsed} />
              ))}
            </div>
          ))}
        </nav>

        {/* Bottom user card */}
        {!collapsed && (
          <div className="px-3 py-3 border-t border-sidebar-hover flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
              AD
            </div>
            <div className="min-w-0">
              <p className="text-white text-sm font-medium truncate">Admin DeaX</p>
              <p className="text-sidebar-text text-xs truncate">admin@deax.io</p>
            </div>
            <Link to="/settings/general" className="ml-auto flex-shrink-0 text-sidebar-text hover:text-white transition-colors">
              <Icon name="Settings" size={15} />
            </Link>
          </div>
        )}
      </aside>

      {/* Mobile sidebar */}
      <aside
        className={clsx(
          'sidebar-wrapper lg:hidden z-40',
          'w-64',
          mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full',
          'transition-transform duration-250'
        )}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-sidebar-hover">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary-500 flex items-center justify-center">
              <span className="text-white font-black text-sm">D</span>
            </div>
            <span className="font-bold text-white text-lg">DeaX <span className="text-primary-400 font-normal text-sm">CRM</span></span>
          </div>
          <button
            onClick={() => setMobileSidebarOpen(false)}
            className="text-sidebar-text hover:text-white transition-colors"
          >
            <Icon name="X" size={18} />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto py-3 px-2 flex flex-col gap-0.5">
          {navItems.map(section => (
            <div key={section.section}>
              <p className="sidebar-section-title">{section.section}</p>
              {section.items.map(item => (
                <NavItem key={item.id} item={item} collapsed={false} />
              ))}
            </div>
          ))}
        </nav>
      </aside>
    </>
  )
}

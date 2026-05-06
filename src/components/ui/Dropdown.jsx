import { useState, useRef, useEffect } from 'react'
import clsx from 'clsx'

export default function Dropdown({ trigger, children, align = 'right', className = '' }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function handler(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div className={clsx('relative inline-block', className)} ref={ref}>
      <div onClick={() => setOpen(o => !o)} className="cursor-pointer">
        {trigger}
      </div>
      {open && (
        <div
          className={clsx(
            'dropdown-menu',
            align === 'right' ? 'right-0' : 'left-0'
          )}
          onClick={() => setOpen(false)}
        >
          {children}
        </div>
      )}
    </div>
  )
}

export function DropdownItem({ icon, children, onClick, danger = false }) {
  return (
    <button
      onClick={onClick}
      className={clsx('dropdown-item w-full text-left', danger && 'text-red-500 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20')}
    >
      {icon && <span className="w-4 h-4 flex items-center">{icon}</span>}
      {children}
    </button>
  )
}

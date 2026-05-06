import { useState } from 'react'
import clsx from 'clsx'

export function Tabs({ tabs, defaultTab, children }) {
  const [active, setActive] = useState(defaultTab ?? tabs[0]?.id)
  return (
    <div>
      <div className="tab-list">
        {tabs.map(t => (
          <button
            key={t.id}
            className={clsx('tab-item', active === t.id && 'active')}
            onClick={() => setActive(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
      {typeof children === 'function' ? children(active) : children}
    </div>
  )
}

export function TabPanel({ id, active, children }) {
  if (id !== active) return null
  return <div>{children}</div>
}

import clsx from 'clsx'

export default function Card({ children, className = '', padding = true }) {
  return (
    <div className={clsx('card', padding && 'p-5', className)}>
      {children}
    </div>
  )
}

export function CardHeader({ title, subtitle, action, className = '' }) {
  return (
    <div className={clsx('flex items-start justify-between mb-4', className)}>
      <div>
        <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
        {subtitle && <p className="text-sm text-muted mt-0.5">{subtitle}</p>}
      </div>
      {action && <div className="flex items-center gap-2">{action}</div>}
    </div>
  )
}

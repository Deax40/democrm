import clsx from 'clsx'

const colorMap = {
  primary: 'bg-primary-500',
  success: 'bg-green-500',
  warning: 'bg-amber-500',
  danger:  'bg-red-500',
  info:    'bg-cyan-500',
  purple:  'bg-purple-500',
}

export default function ProgressBar({ value, max = 100, color = 'primary', showLabel = false, className = '' }) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100))
  return (
    <div className={clsx('flex items-center gap-2', className)}>
      <div className="progress-bar flex-1">
        <div
          className={clsx('progress-fill', colorMap[color] ?? color)}
          style={{ width: `${pct}%` }}
        />
      </div>
      {showLabel && <span className="text-xs font-medium text-muted w-8 text-right">{Math.round(pct)}%</span>}
    </div>
  )
}

import Icon from './Icon'
import clsx from 'clsx'

export default function KpiCard({ label, value, change, positive, sub, color, lightColor, iconColor, icon }) {
  return (
    <div className="kpi-card">
      <div className="flex items-center justify-between">
        <div className={clsx('kpi-icon', lightColor)}>
          <Icon name={icon} size={22} className={iconColor} />
        </div>
        <span className={clsx('badge text-xs font-semibold', positive ? 'badge-success' : 'badge-danger')}>
          {change}
        </span>
      </div>
      <div>
        <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
        <p className="text-sm text-muted mt-0.5">{label}</p>
      </div>
      {sub && <p className="text-xs text-muted border-t border-gray-100 dark:border-gray-700 pt-3">{sub}</p>}
    </div>
  )
}

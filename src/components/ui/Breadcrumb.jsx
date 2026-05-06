import { Link } from 'react-router-dom'
import Icon from './Icon'

// items = [{ label, path? }, ...]
export default function Breadcrumb({ items }) {
  return (
    <nav className="flex items-center gap-1 text-sm text-muted mb-1" aria-label="Breadcrumb">
      <Link to="/" className="hover:text-primary-500 transition-colors">
        <Icon name="Home" size={14} />
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1">
          <Icon name="ChevronRight" size={12} />
          {item.path && i < items.length - 1 ? (
            <Link to={item.path} className="hover:text-primary-500 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-700 dark:text-gray-300 font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}

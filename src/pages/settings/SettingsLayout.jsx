import { NavLink } from 'react-router-dom'
import Layout from '../../components/layout/Layout'
import Icon from '../../components/ui/Icon'
import clsx from 'clsx'

const settingsNav = [
  { path:'/settings/general',      label:'Général',        icon:'Settings' },
  { path:'/settings/seo',          label:'SEO',            icon:'Search' },
  { path:'/settings/tags',         label:'Étiquettes',     icon:'Tag' },
  { path:'/settings/email',        label:'Email',          icon:'Mail' },
  { path:'/settings/tasks',        label:'Tâches',         icon:'CheckSquare' },
  { path:'/settings/leads',        label:'Leads',          icon:'UserCheck' },
  { path:'/settings/customers',    label:'Clients',        icon:'Users' },
  { path:'/settings/finance',      label:'Finance',        icon:'DollarSign' },
  { path:'/settings/gateways',     label:'Passerelles',    icon:'CreditCard' },
  { path:'/settings/localization', label:'Localisation',   icon:'Globe' },
  { path:'/settings/recaptcha',    label:'reCAPTCHA',      icon:'Shield' },
  { path:'/settings/support',      label:'Support',        icon:'Headphones' },
  { path:'/settings/misc',         label:'Divers',         icon:'MoreHorizontal' },
]

export default function SettingsLayout({ children, title, breadcrumbLabel }) {
  return (
    <Layout title={title} breadcrumb={[{ label:'Paramètres' }, { label: breadcrumbLabel ?? title }]}>
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Settings sidebar */}
        <nav className="lg:w-56 flex-shrink-0">
          <div className="card p-2 flex flex-row lg:flex-col gap-0.5 overflow-x-auto lg:overflow-x-visible">
            {settingsNav.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => clsx(
                  'flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors',
                  isActive
                    ? 'bg-primary-500 text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/30'
                )}
              >
                <Icon name={item.icon} size={15} />
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          {children}
        </div>
      </div>
    </Layout>
  )
}

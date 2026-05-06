import { useTheme } from '../../context/ThemeContext'
import Sidebar from './Sidebar'
import Header from './Header'
import Breadcrumb from '../ui/Breadcrumb'
import clsx from 'clsx'

export default function Layout({ children, breadcrumb = [], title }) {
  const { sidebarCollapsed } = useTheme()

  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-gray-900">
      <Sidebar />

      {/* Main content shifts right to make room for the sidebar on desktop */}
      <div
        className={clsx(
          'flex-1 flex flex-col min-w-0 transition-all duration-250',
          'lg:ml-64',
          sidebarCollapsed && 'lg:ml-16'
        )}
      >
        <Header />

        <main className="flex-1 p-4 md:p-6">
          {(breadcrumb.length > 0 || title) && (
            <div className="mb-6">
              {breadcrumb.length > 0 && <Breadcrumb items={breadcrumb} />}
              {title && (
                <h1 className="text-xl font-bold text-gray-900 dark:text-white mt-1">{title}</h1>
              )}
            </div>
          )}
          {children}
        </main>
      </div>
    </div>
  )
}

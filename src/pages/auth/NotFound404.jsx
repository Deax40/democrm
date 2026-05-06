import { Link } from 'react-router-dom'
import AuthLayout from '../../components/layout/AuthLayout'
import Icon from '../../components/ui/Icon'

export default function NotFound404({ variant = 'minimal', internal = false }) {
  const Wrapper = internal
    ? ({ children }) => (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
          <div className="text-center">{children}</div>
        </div>
      )
    : ({ children }) => <AuthLayout variant={variant}>{children}</AuthLayout>

  return (
    <Wrapper>
      <div className="text-center">
        <p className="text-8xl font-black text-primary-500 mb-2 leading-none">404</p>
        <div className="w-16 h-16 rounded-full bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center mx-auto mb-4">
          <Icon name="SearchX" size={30} className="text-primary-500" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Page introuvable</h2>
        <p className="text-muted text-sm mb-6">
          La page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        <Link to="/" className="btn btn-primary">
          <Icon name="Home" size={16} /> Retour à l'accueil
        </Link>
      </div>
    </Wrapper>
  )
}

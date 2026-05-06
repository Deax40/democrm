import AuthLayout from '../../components/layout/AuthLayout'
import Icon from '../../components/ui/Icon'

export default function Maintenance({ variant = 'minimal' }) {
  return (
    <AuthLayout variant={variant}>
      <div className="text-center">
        <div className="w-20 h-20 rounded-3xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mx-auto mb-5">
          <Icon name="Wrench" size={36} className="text-amber-500" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Maintenance en cours</h2>
        <p className="text-muted text-sm mb-6">
          DeaX CRM est temporairement indisponible pour une maintenance planifiée.
          Nous serons de retour très bientôt.
        </p>
        <div className="grid grid-cols-4 gap-2 mb-6">
          {[
            { value:'02', label:'Heures' },
            { value:'45', label:'Minutes' },
            { value:'30', label:'Secondes' },
            { value:'00', label:'ms' },
          ].map(t => (
            <div key={t.label} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-3">
              <p className="text-2xl font-bold text-primary-500">{t.value}</p>
              <p className="text-xs text-muted">{t.label}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted">Besoin d'aide urgente ? <a href="mailto:support@deax.io" className="text-primary-500">support@deax.io</a></p>
      </div>
    </AuthLayout>
  )
}

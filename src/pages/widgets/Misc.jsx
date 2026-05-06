import { useState } from 'react'
import Layout from '../../components/layout/Layout'
import Card, { CardHeader } from '../../components/ui/Card'
import Badge from '../../components/ui/Badge'
import Avatar from '../../components/ui/Avatar'
import Icon from '../../components/ui/Icon'
import Modal from '../../components/ui/Modal'
import ProgressBar from '../../components/ui/ProgressBar'

export default function WidgetsMisc() {
  const [modal, setModal] = useState(false)
  const [toast, setToast] = useState(null)

  const showToast = (msg, type) => {
    setToast({ msg, type })
    setTimeout(() => setToast(null), 3000)
  }

  return (
    <Layout title="Widgets – Divers" breadcrumb={[{ label:'Widgets' }, { label:'Divers' }]}>
      {/* Toast */}
      {toast && (
        <div className={`fixed top-4 right-4 z-50 flex items-center gap-3 px-4 py-3 rounded-xl shadow-xl text-white text-sm font-medium transition-all
          ${toast.type==='success'?'bg-green-500':toast.type==='error'?'bg-red-500':toast.type==='warning'?'bg-amber-500':'bg-primary-500'}`}>
          <Icon name={toast.type==='success'?'CheckCircle':toast.type==='error'?'XCircle':'Info'} size={16} />
          {toast.msg}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {/* Badges */}
        <Card>
          <CardHeader title="Badges" />
          <div className="flex flex-wrap gap-2">
            {['primary','success','warning','danger','info','secondary','purple'].map(v => (
              <Badge key={v} variant={v}>{v.charAt(0).toUpperCase() + v.slice(1)}</Badge>
            ))}
          </div>
        </Card>

        {/* Buttons */}
        <Card>
          <CardHeader title="Boutons" />
          <div className="flex flex-wrap gap-2">
            <button className="btn btn-primary">Primaire</button>
            <button className="btn btn-secondary">Secondaire</button>
            <button className="btn btn-success">Succès</button>
            <button className="btn btn-warning">Alerte</button>
            <button className="btn btn-danger">Danger</button>
            <button className="btn btn-primary btn-sm">Petit</button>
            <button className="btn btn-primary btn-lg">Grand</button>
          </div>
        </Card>

        {/* Avatars */}
        <Card>
          <CardHeader title="Avatars" />
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              {['xs','sm','md','lg','xl'].map(s => (
                <Avatar key={s} initials="AB" color="bg-primary-500" size={s} />
              ))}
            </div>
            <div className="flex items-center gap-2">
              {['bg-blue-500','bg-green-500','bg-amber-500','bg-red-500','bg-purple-500','bg-teal-500'].map(c => (
                <Avatar key={c} initials="AB" color={c} size="md" />
              ))}
            </div>
            <div className="flex -space-x-2">
              {['AM','JP','LB','MD','CR'].map((i, idx) => (
                <Avatar key={idx} initials={i} color={['bg-blue-500','bg-green-500','bg-purple-500','bg-amber-500','bg-teal-500'][idx]} size="sm" className="border-2 border-white dark:border-gray-800" />
              ))}
              <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-600 border-2 border-white dark:border-gray-800 flex items-center justify-center text-[10px] font-bold text-gray-600 dark:text-gray-300">+3</div>
            </div>
          </div>
        </Card>

        {/* Progress bars */}
        <Card>
          <CardHeader title="Barres de progression" />
          <div className="flex flex-col gap-3">
            {[
              { label:'Développement', value:72, color:'primary' },
              { label:'Design',        value:90, color:'success' },
              { label:'Tests',         value:45, color:'warning' },
              { label:'Déploiement',   value:20, color:'danger' },
              { label:'Documentation', value:60, color:'purple' },
            ].map(p => (
              <div key={p.label}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-muted">{p.label}</span>
                  <span className="font-medium text-gray-700 dark:text-gray-300">{p.value}%</span>
                </div>
                <ProgressBar value={p.value} color={p.color} />
              </div>
            ))}
          </div>
        </Card>

        {/* Alerts */}
        <Card>
          <CardHeader title="Alertes" />
          <div className="flex flex-col gap-3">
            {[
              { type:'info',    icon:'Info',         bg:'bg-cyan-50 dark:bg-cyan-900/20',     border:'border-cyan-200 dark:border-cyan-800',    text:'text-cyan-700 dark:text-cyan-300',   msg:'Information importante à noter.' },
              { type:'success', icon:'CheckCircle',  bg:'bg-green-50 dark:bg-green-900/20',   border:'border-green-200 dark:border-green-800',  text:'text-green-700 dark:text-green-300', msg:'Opération réalisée avec succès.' },
              { type:'warning', icon:'AlertTriangle',bg:'bg-amber-50 dark:bg-amber-900/20',   border:'border-amber-200 dark:border-amber-800',  text:'text-amber-700 dark:text-amber-300', msg:'Attention : vérifiez vos données.' },
              { type:'danger',  icon:'XCircle',      bg:'bg-red-50 dark:bg-red-900/20',       border:'border-red-200 dark:border-red-800',      text:'text-red-700 dark:text-red-300',     msg:'Une erreur critique est survenue.' },
            ].map(a => (
              <div key={a.type} className={`flex items-center gap-2 p-3 rounded-lg border ${a.bg} ${a.border}`}>
                <Icon name={a.icon} size={16} className={a.text} />
                <p className={`text-sm ${a.text}`}>{a.msg}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Toasts + Modal */}
        <Card>
          <CardHeader title="Toasts & Modals" />
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap gap-2">
              <button className="btn btn-primary btn-sm" onClick={() => showToast('Enregistrement réussi !', 'success')}>Toast succès</button>
              <button className="btn btn-danger btn-sm" onClick={() => showToast('Une erreur est survenue.', 'error')}>Toast erreur</button>
              <button className="btn btn-warning btn-sm" onClick={() => showToast('Attention : donnée manquante.', 'warning')}>Toast alerte</button>
            </div>
            <button className="btn btn-secondary" onClick={() => setModal(true)}>
              <Icon name="ExternalLink" size={16} /> Ouvrir une modal
            </button>
          </div>
        </Card>
      </div>

      <Modal open={modal} onClose={() => setModal(false)} title="Exemple de modal">
        <p className="text-muted mb-4">Ceci est un exemple de modal. Vous pouvez y placer n'importe quel contenu : formulaires, confirmations, détails, etc.</p>
        <div className="flex gap-2 justify-end">
          <button className="btn btn-secondary" onClick={() => setModal(false)}>Annuler</button>
          <button className="btn btn-primary" onClick={() => setModal(false)}>Confirmer</button>
        </div>
      </Modal>
    </Layout>
  )
}

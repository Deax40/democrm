import { useState } from 'react'
import Layout from '../../components/layout/Layout'
import Avatar from '../../components/ui/Avatar'
import Icon from '../../components/ui/Icon'
import Badge from '../../components/ui/Badge'
import { emails } from '../../data/messages'
import clsx from 'clsx'

const folders = [
  { id:'inbox',  label:'Boîte de réception', icon:'Inbox',     count:2 },
  { id:'sent',   label:'Envoyés',             icon:'Send',      count:0 },
  { id:'drafts', label:'Brouillons',           icon:'FileText',  count:1 },
  { id:'trash',  label:'Corbeille',            icon:'Trash2',    count:0 },
]

export default function Email() {
  const [folder, setFolder]   = useState('inbox')
  const [selected, setSelected] = useState(null)
  const [compose, setCompose] = useState(false)

  const visible = emails.filter(e => e.folder === folder || (folder === 'inbox' && e.folder !== 'sent'))

  return (
    <Layout title="Email" breadcrumb={[{ label:'Applications' }, { label:'Email' }]}>
      <div className="card flex h-[calc(100vh-180px)] overflow-hidden">
        {/* Folders */}
        <div className="w-52 border-r border-gray-100 dark:border-gray-700 flex flex-col p-3 gap-0.5 flex-shrink-0">
          <button className="btn btn-primary w-full mb-3" onClick={() => setCompose(true)}>
            <Icon name="Plus" size={15} /> Composer
          </button>
          {folders.map(f => (
            <button
              key={f.id}
              onClick={() => setFolder(f.id)}
              className={clsx('flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors text-left',
                folder === f.id ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/30'
              )}
            >
              <Icon name={f.icon} size={15} />
              <span className="flex-1">{f.label}</span>
              {f.count > 0 && <Badge variant="primary">{f.count}</Badge>}
            </button>
          ))}
        </div>

        {/* Email list */}
        <div className="w-80 border-r border-gray-100 dark:border-gray-700 flex flex-col flex-shrink-0">
          <div className="p-3 border-b border-gray-100 dark:border-gray-700 text-sm font-semibold text-gray-900 dark:text-white">
            {folders.find(f => f.id === folder)?.label}
          </div>
          <div className="flex-1 overflow-y-auto">
            {emails.map(email => (
              <div
                key={email.id}
                onClick={() => setSelected(email)}
                className={clsx(
                  'px-3 py-3 border-b border-gray-50 dark:border-gray-700/50 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors',
                  selected?.id === email.id && 'bg-primary-50 dark:bg-primary-900/10',
                  !email.read && 'bg-blue-50/50 dark:bg-blue-900/5'
                )}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Avatar initials={email.avatar} color={email.avatarColor} size="sm" />
                  <span className={clsx('text-sm flex-1 truncate', !email.read ? 'font-semibold text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400')}>
                    {email.from.split('@')[0]}
                  </span>
                  {email.starred && <Icon name="Star" size={12} className="text-amber-400 flex-shrink-0" />}
                </div>
                <p className={clsx('text-xs truncate mb-0.5', !email.read ? 'font-medium text-gray-800 dark:text-gray-200' : 'text-muted')}>{email.subject}</p>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-muted truncate">{email.preview}</p>
                  <span className="text-[10px] text-muted flex-shrink-0 ml-2">{email.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Email content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {selected ? (
            <>
              <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{selected.subject}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted">
                      <Avatar initials={selected.avatar} color={selected.avatarColor} size="xs" />
                      <span>{selected.from}</span>
                      <span>·</span>
                      <span>{selected.date}</span>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <button className="btn btn-secondary btn-sm btn-icon"><Icon name="Reply" size={14} /></button>
                    <button className="btn btn-secondary btn-sm btn-icon"><Icon name="Forward" size={14} /></button>
                    <button className="btn btn-secondary btn-sm btn-icon text-red-500"><Icon name="Trash2" size={14} /></button>
                  </div>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto p-6">
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  Bonjour,<br /><br />
                  {selected.preview} Nous souhaiterions planifier une réunion pour discuter des
                  prochaines étapes et valider les livrables attendus pour ce trimestre.<br /><br />
                  Merci de bien vouloir nous faire part de vos disponibilités.<br /><br />
                  Cordialement,<br />
                  {selected.from.split('@')[0]}
                </p>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center flex-col gap-2 text-muted">
              <Icon name="Mail" size={40} />
              <p>Sélectionnez un email pour le lire</p>
            </div>
          )}
        </div>
      </div>

      {/* Compose modal */}
      {compose && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md border border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between px-4 py-3 bg-primary-500 rounded-t-2xl">
              <span className="text-white font-semibold text-sm">Nouveau message</span>
              <button onClick={() => setCompose(false)} className="text-primary-200 hover:text-white"><Icon name="X" size={16} /></button>
            </div>
            <div className="p-4 flex flex-col gap-3">
              <input className="form-input" placeholder="À :" />
              <input className="form-input" placeholder="Objet :" />
              <textarea className="form-input h-32 resize-none" placeholder="Votre message…" />
              <div className="flex gap-2 justify-end">
                <button className="btn btn-secondary btn-sm">Annuler</button>
                <button className="btn btn-primary btn-sm" onClick={() => { alert('Email envoyé !'); setCompose(false) }}>
                  <Icon name="Send" size={14} /> Envoyer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}

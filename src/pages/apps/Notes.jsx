import { useState } from 'react'
import Layout from '../../components/layout/Layout'
import Icon from '../../components/ui/Icon'
import clsx from 'clsx'

const mockNotes = [
  { id:1, title:'Notes réunion Nexora', content:'Points clés : validation de la roadmap, budget confirmé pour Q3, recrutement d\'un intégrateur.', color:'bg-yellow-50 dark:bg-yellow-900/20', date:'05/06/2025', tag:'Client' },
  { id:2, title:'Idées fonctionnalités CRM', content:'• Système de rappels automatiques\n• Import CSV clients\n• Signature électronique intégrée', color:'bg-blue-50 dark:bg-blue-900/20', date:'03/06/2025', tag:'Produit' },
  { id:3, title:'TODO liste dev semaine', content:'Code review PR#42\nTasks: migration base de données\nDocumentation API v2', color:'bg-green-50 dark:bg-green-900/20', date:'01/06/2025', tag:'Tech' },
  { id:4, title:'Proposition TechVision', content:'Préparer démo pour le 10 juin. Accentuer sur la partie analytics et les KPI en temps réel.', color:'bg-pink-50 dark:bg-pink-900/20', date:'29/05/2025', tag:'Vente' },
]

export default function Notes() {
  const [notes, setNotes] = useState(mockNotes)
  const [active, setActive] = useState(notes[0])
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState('')

  const newNote = () => {
    const n = { id: Date.now(), title:'Nouvelle note', content:'', color:'bg-gray-50 dark:bg-gray-700/30', date: new Date().toLocaleDateString('fr-FR'), tag:'Divers' }
    setNotes(ns => [n, ...ns])
    setActive(n)
    setEditing(true)
    setDraft('')
  }

  const save = () => {
    setNotes(ns => ns.map(n => n.id === active.id ? { ...n, content: draft } : n))
    setActive(a => ({ ...a, content: draft }))
    setEditing(false)
  }

  return (
    <Layout title="Notes" breadcrumb={[{ label:'Applications' }, { label:'Notes' }]}>
      <div className="card flex h-[calc(100vh-180px)] overflow-hidden">
        {/* List */}
        <div className="w-72 border-r border-gray-100 dark:border-gray-700 flex flex-col flex-shrink-0">
          <div className="p-3 border-b border-gray-100 dark:border-gray-700 flex items-center gap-2">
            <div className="relative flex-1">
              <Icon name="Search" size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Rechercher…" className="form-input pl-9 h-8 text-sm" />
            </div>
            <button className="btn btn-primary btn-icon btn-sm" onClick={newNote}><Icon name="Plus" size={16} /></button>
          </div>
          <div className="flex-1 overflow-y-auto">
            {notes.map(note => (
              <div
                key={note.id}
                onClick={() => { setActive(note); setEditing(false) }}
                className={clsx('px-3 py-3 border-b border-gray-50 dark:border-gray-700/50 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors',
                  active.id === note.id && 'bg-primary-50 dark:bg-primary-900/10'
                )}
              >
                <div className="flex items-center justify-between mb-0.5">
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{note.title}</p>
                  <span className="text-[10px] bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 px-1.5 py-0.5 rounded-full flex-shrink-0 ml-1">{note.tag}</span>
                </div>
                <p className="text-xs text-muted truncate">{note.content.substring(0,60)}…</p>
                <p className="text-[10px] text-muted mt-1">{note.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Note content */}
        <div className="flex-1 flex flex-col">
          <div className="px-6 py-3 border-b border-gray-100 dark:border-gray-700 flex items-center gap-2">
            <h3 className="font-semibold text-gray-900 dark:text-white flex-1">{active.title}</h3>
            <span className="text-xs text-muted">{active.date}</span>
            {editing ? (
              <button className="btn btn-primary btn-sm" onClick={save}><Icon name="Save" size={14} /> Sauvegarder</button>
            ) : (
              <button className="btn btn-secondary btn-sm" onClick={() => { setEditing(true); setDraft(active.content) }}>
                <Icon name="Pencil" size={14} /> Modifier
              </button>
            )}
          </div>
          <div className="flex-1 p-6">
            {editing ? (
              <textarea
                className="w-full h-full form-input resize-none text-sm"
                value={draft}
                onChange={e => setDraft(e.target.value)}
                placeholder="Écrire votre note…"
              />
            ) : (
              <pre className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap font-sans leading-relaxed">
                {active.content || <span className="text-muted italic">Note vide — cliquez sur Modifier pour commencer.</span>}
              </pre>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

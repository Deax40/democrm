import Layout from '../../components/layout/Layout'
import Card, { CardHeader } from '../../components/ui/Card'
import Icon from '../../components/ui/Icon'
import Badge from '../../components/ui/Badge'
import { storageFiles } from '../../data/messages'

const fileIcons = {
  pdf: { icon: 'FileText', color: 'text-red-500', bg: 'bg-red-50 dark:bg-red-900/20' },
  fig: { icon: 'Figma',    color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-900/20' },
  xlsx:{ icon: 'Table',    color: 'text-green-500', bg: 'bg-green-50 dark:bg-green-900/20' },
  mp4: { icon: 'Film',     color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-900/20' },
  docx:{ icon: 'FileText', color: 'text-blue-700', bg: 'bg-blue-50 dark:bg-blue-900/20' },
  img: { icon: 'Image',    color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-900/20' },
  txt: { icon: 'FileText', color: 'text-gray-500', bg: 'bg-gray-50 dark:bg-gray-700/30' },
  zip: { icon: 'Archive',  color: 'text-indigo-500', bg: 'bg-indigo-50 dark:bg-indigo-900/20' },
}

export default function Storage() {
  return (
    <Layout title="Stockage" breadcrumb={[{ label:'Applications' }, { label:'Stockage' }]}>
      {/* Usage */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {[
          { label:'Espace utilisé',   value:'156.4 Mo', sub:'sur 5 Go', pct:3.1,  color:'bg-primary-500' },
          { label:'Fichiers partagés', value:'4',       sub:'fichiers', pct:null,  color:null },
          { label:'Total fichiers',    value:'8',       sub:'fichiers', pct:null,  color:null },
        ].map(s => (
          <div key={s.label} className="card p-4">
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{s.value}</p>
            <p className="text-sm text-muted">{s.label} · {s.sub}</p>
            {s.pct !== null && (
              <div className="mt-2 h-1.5 rounded-full bg-gray-100 dark:bg-gray-700 overflow-hidden">
                <div className={`h-full rounded-full ${s.color}`} style={{ width: `${s.pct}%` }} />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="page-header">
        <p className="font-semibold text-gray-900 dark:text-white">Mes fichiers</p>
        <div className="flex gap-2">
          <button className="btn btn-secondary"><Icon name="FolderPlus" size={16} /> Nouveau dossier</button>
          <button className="btn btn-primary"><Icon name="Upload" size={16} /> Téléverser</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
        {storageFiles.map(file => {
          const icon = fileIcons[file.type] ?? fileIcons.txt
          return (
            <div key={file.id} className="card p-4 flex flex-col gap-3 hover:shadow-md transition-shadow cursor-pointer group">
              <div className="flex items-start justify-between">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${icon.bg}`}>
                  <Icon name={icon.icon} size={20} className={icon.color} />
                </div>
                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="btn btn-secondary btn-sm btn-icon"><Icon name="Download" size={13} /></button>
                  <button className="btn btn-secondary btn-sm btn-icon text-red-500"><Icon name="Trash2" size={13} /></button>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{file.name}</p>
                <p className="text-xs text-muted mt-0.5">{file.size} · {file.modified}</p>
              </div>
              {file.shared && <Badge variant="info">Partagé</Badge>}
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

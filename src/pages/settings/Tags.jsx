import { useState } from 'react'
import SettingsLayout from './SettingsLayout'
import Card, { CardHeader } from '../../components/ui/Card'
import Badge from '../../components/ui/Badge'
import Icon from '../../components/ui/Icon'

export default function SettingsTags() {
  const [tags, setTags] = useState(['VIP','SaaS','Tech','Cloud','Conseil','Agile','Data','Design','Finance','EU'])
  const [newTag, setNewTag] = useState('')
  const add = () => { if(newTag.trim()) { setTags(t => [...t, newTag.trim()]); setNewTag('') } }
  const remove = t => setTags(ts => ts.filter(x => x !== t))
  return (
    <SettingsLayout title="Étiquettes" breadcrumbLabel="Étiquettes">
      <Card>
        <CardHeader title="Gestion des étiquettes" subtitle="Étiquettes utilisées sur les clients et leads" />
        <div className="flex gap-2 mb-4">
          <input value={newTag} onChange={e => setNewTag(e.target.value)} onKeyDown={e => e.key==='Enter'&&add()} className="form-input flex-1" placeholder="Nouvelle étiquette…" />
          <button className="btn btn-primary" onClick={add}><Icon name="Plus" size={16} />Ajouter</button>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map(t => (
            <span key={t} className="badge badge-primary flex items-center gap-1">
              {t}
              <button onClick={() => remove(t)} className="hover:text-red-300 transition-colors ml-1"><Icon name="X" size={10} /></button>
            </span>
          ))}
        </div>
      </Card>
    </SettingsLayout>
  )
}

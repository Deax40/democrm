import { useState } from 'react'
import SettingsLayout from './SettingsLayout'
import Card, { CardHeader } from '../../components/ui/Card'
import Icon from '../../components/ui/Icon'

export default function SettingsSeo() {
  const [form, setForm] = useState({ title:'DeaX CRM – Gérez votre activité', description:'La plateforme CRM pour les équipes ambitieuses. Clients, leads, projets et facturation en un seul endroit.', keywords:'CRM, gestion clients, leads, projets, facturation', ogImage:'' })
  const handle = e => setForm(f => ({...f, [e.target.name]: e.target.value}))
  return (
    <SettingsLayout title="Paramètres SEO" breadcrumbLabel="SEO">
      <Card>
        <CardHeader title="Méta-données" subtitle="Optimisez l'indexation de votre portail" />
        <div className="flex flex-col gap-4">
          <div><label className="form-label">Titre de la page</label><input name="title" value={form.title} onChange={handle} className="form-input" /></div>
          <div><label className="form-label">Description</label><textarea name="description" value={form.description} onChange={handle} className="form-input h-20 resize-none" /></div>
          <div><label className="form-label">Mots-clés</label><input name="keywords" value={form.keywords} onChange={handle} className="form-input" /></div>
          <div><label className="form-label">Image Open Graph (URL)</label><input name="ogImage" value={form.ogImage} onChange={handle} className="form-input" placeholder="https://..." /></div>
          <div className="flex justify-end"><button className="btn btn-primary" onClick={() => alert('Sauvegardé!')}><Icon name="Save" size={16} />Sauvegarder</button></div>
        </div>
      </Card>
    </SettingsLayout>
  )
}

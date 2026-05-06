import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../../components/layout/Layout'
import Card, { CardHeader } from '../../components/ui/Card'
import Icon from '../../components/ui/Icon'

export default function ProposalCreate() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ title:'', client:'', value:'', status:'En cours', description:'' })
  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  return (
    <Layout title="Nouvelle proposition" breadcrumb={[{ label:'Propositions', path:'/proposals' }, { label:'Créer' }]}>
      <div className="grid xl:grid-cols-3 gap-4">
        <div className="xl:col-span-2">
          <Card>
            <CardHeader title="Informations" />
            <div className="flex flex-col gap-4">
              <div>
                <label className="form-label">Titre <span className="text-red-500">*</span></label>
                <input name="title" value={form.title} onChange={handle} className="form-input" placeholder="Ex : Migration cloud Phase 2" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">Client</label>
                  <select name="client" value={form.client} onChange={handle} className="form-select">
                    <option value="">-- Sélectionner --</option>
                    {['Nexora SAS','TechVision','Innovatek','FuturTech','AgileWorks','OptiFlow AG'].map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="form-label">Valeur estimée</label>
                  <input name="value" value={form.value} onChange={handle} className="form-input" placeholder="€ 50 000" />
                </div>
              </div>
              <div>
                <label className="form-label">Description</label>
                <textarea name="description" value={form.description} onChange={handle} className="form-input h-28 resize-none" placeholder="Décrivez le périmètre de la proposition…" />
              </div>
            </div>
          </Card>
        </div>
        <div className="flex flex-col gap-4">
          <Card>
            <CardHeader title="Statut" />
            <select name="status" value={form.status} onChange={handle} className="form-select">
              {['En cours','Envoyé','Accepté','Refusé'].map(s => <option key={s}>{s}</option>)}
            </select>
          </Card>
          <Card>
            <div className="flex flex-col gap-2">
              <button className="btn btn-primary w-full" onClick={() => { alert('Proposition créée !'); navigate('/proposals') }}>
                <Icon name="Save" size={16} /> Enregistrer
              </button>
              <button className="btn btn-secondary w-full" onClick={() => navigate('/proposals')}>Annuler</button>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  )
}

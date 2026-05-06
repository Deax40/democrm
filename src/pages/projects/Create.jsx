import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../../components/layout/Layout'
import Card, { CardHeader } from '../../components/ui/Card'
import Icon from '../../components/ui/Icon'

export default function ProjectCreate() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name:'', client:'', budget:'', start:'', end:'', status:'En cours', priority:'Normale', description:'' })
  const [errors, setErrors] = useState({})
  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const validate = () => {
    const errs = {}
    if (!form.name.trim())   errs.name   = 'Nom requis'
    if (!form.client.trim()) errs.client = 'Client requis'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const submit = e => {
    e.preventDefault()
    if (validate()) { alert('Projet créé !'); navigate('/projects') }
  }

  return (
    <Layout title="Nouveau projet" breadcrumb={[{ label: 'Projets', path: '/projects' }, { label: 'Créer' }]}>
      <form onSubmit={submit}>
        <div className="grid xl:grid-cols-3 gap-4">
          <div className="xl:col-span-2 flex flex-col gap-4">
            <Card>
              <CardHeader title="Informations du projet" />
              <div className="flex flex-col gap-4">
                <div>
                  <label className="form-label">Nom du projet <span className="text-red-500">*</span></label>
                  <input name="name" value={form.name} onChange={handle} className={`form-input ${errors.name ? 'border-red-400':''}`} placeholder="Ex : Refonte portail client" />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="form-label">Client <span className="text-red-500">*</span></label>
                  <input name="client" value={form.client} onChange={handle} className={`form-input ${errors.client ? 'border-red-400':''}`} placeholder="Nom du client" />
                  {errors.client && <p className="text-xs text-red-500 mt-1">{errors.client}</p>}
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="form-label">Budget</label>
                    <input name="budget" value={form.budget} onChange={handle} className="form-input" placeholder="€ 50 000" />
                  </div>
                  <div>
                    <label className="form-label">Priorité</label>
                    <select name="priority" value={form.priority} onChange={handle} className="form-select">
                      {['Critique','Haute','Normale','Basse'].map(p => <option key={p}>{p}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="form-label">Date de début</label>
                    <input type="date" name="start" value={form.start} onChange={handle} className="form-input" />
                  </div>
                  <div>
                    <label className="form-label">Date de fin</label>
                    <input type="date" name="end" value={form.end} onChange={handle} className="form-input" />
                  </div>
                </div>
                <div>
                  <label className="form-label">Description</label>
                  <textarea name="description" value={form.description} onChange={handle} className="form-input h-24 resize-none" placeholder="Description du projet…" />
                </div>
              </div>
            </Card>
          </div>
          <div className="flex flex-col gap-4">
            <Card>
              <CardHeader title="Statut" />
              <select name="status" value={form.status} onChange={handle} className="form-select">
                {['En cours','Nouveau','En pause','Annulé'].map(s => <option key={s}>{s}</option>)}
              </select>
            </Card>
            <Card>
              <div className="flex flex-col gap-2">
                <button type="submit" className="btn btn-primary w-full"><Icon name="Save" size={16} />Créer le projet</button>
                <button type="button" className="btn btn-secondary w-full" onClick={() => navigate('/projects')}>Annuler</button>
              </div>
            </Card>
          </div>
        </div>
      </form>
    </Layout>
  )
}

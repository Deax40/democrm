import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../../components/layout/Layout'
import Card, { CardHeader } from '../../components/ui/Card'
import Icon from '../../components/ui/Icon'

export default function LeadCreate() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name:'', email:'', phone:'', company:'', source:'Site web', status:'Nouveau', value:'' })
  const [errors, setErrors] = useState({})
  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const validate = () => {
    const errs = {}
    if (!form.name.trim())  errs.name  = 'Nom requis'
    if (!form.email.trim()) errs.email = 'Email requis'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const submit = e => {
    e.preventDefault()
    if (validate()) { alert('Lead créé !'); navigate('/leads') }
  }

  return (
    <Layout title="Nouveau lead" breadcrumb={[{ label: 'Leads', path: '/leads' }, { label: 'Créer' }]}>
      <form onSubmit={submit}>
        <div className="grid xl:grid-cols-3 gap-4">
          <div className="xl:col-span-2 flex flex-col gap-4">
            <Card>
              <CardHeader title="Informations du lead" />
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: 'Nom complet', name: 'name', placeholder: 'Jean Dupont', required: true },
                  { label: 'Email',       name: 'email', type: 'email', placeholder: 'jean@corp.fr', required: true },
                  { label: 'Téléphone',   name: 'phone', placeholder: '+33 6 00 00 00 00' },
                  { label: 'Entreprise',  name: 'company', placeholder: 'Nom entreprise' },
                  { label: 'Valeur estimée', name: 'value', placeholder: '€ 10 000' },
                ].map(f => (
                  <div key={f.name}>
                    <label className="form-label">{f.label}{f.required && <span className="text-red-500 ml-0.5">*</span>}</label>
                    <input type={f.type ?? 'text'} name={f.name} placeholder={f.placeholder} value={form[f.name]} onChange={handle} className={`form-input ${errors[f.name] ? 'border-red-400' : ''}`} />
                    {errors[f.name] && <p className="text-xs text-red-500 mt-1">{errors[f.name]}</p>}
                  </div>
                ))}
                <div>
                  <label className="form-label">Source</label>
                  <select name="source" value={form.source} onChange={handle} className="form-select">
                    {['Site web','LinkedIn','Email','Référence','Salon pro','Partenaire'].map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
              </div>
            </Card>
          </div>
          <div className="flex flex-col gap-4">
            <Card>
              <CardHeader title="Statut" />
              <select name="status" value={form.status} onChange={handle} className="form-select">
                {['Nouveau','Contacté','Qualifié','Proposition','Négociation','Conclu','Perdu'].map(s => <option key={s}>{s}</option>)}
              </select>
            </Card>
            <Card>
              <div className="flex flex-col gap-2">
                <button type="submit" className="btn btn-primary w-full"><Icon name="Save" size={16} />Enregistrer</button>
                <button type="button" className="btn btn-secondary w-full" onClick={() => navigate('/leads')}>Annuler</button>
              </div>
            </Card>
          </div>
        </div>
      </form>
    </Layout>
  )
}

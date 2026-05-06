import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../../components/layout/Layout'
import Card, { CardHeader } from '../../components/ui/Card'
import Icon from '../../components/ui/Icon'

function Field({ label, name, type = 'text', placeholder, required, value, onChange, error }) {
  return (
    <div>
      <label className="form-label">{label}{required && <span className="text-red-500 ml-0.5">*</span>}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`form-input ${error ? 'border-red-400 focus:ring-red-400/30' : ''}`}
      />
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  )
}

export default function CustomerCreate() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '', city: '', country: 'France', status: 'Actif',
  })
  const [errors, setErrors] = useState({})

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const validate = () => {
    const errs = {}
    if (!form.name.trim())    errs.name  = 'Nom requis'
    if (!form.email.trim())   errs.email = 'Email requis'
    if (!form.company.trim()) errs.company = 'Entreprise requise'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const submit = e => {
    e.preventDefault()
    if (validate()) {
      alert('Client créé avec succès !')
      navigate('/customers')
    }
  }

  return (
    <Layout title="Créer un client" breadcrumb={[{ label: 'Clients', path: '/customers' }, { label: 'Nouveau client' }]}>
      <form onSubmit={submit}>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          <div className="xl:col-span-2 flex flex-col gap-4">
            <Card>
              <CardHeader title="Informations personnelles" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Nom complet"   name="name"    placeholder="Jean Dupont"    required value={form.name}    onChange={handle} error={errors.name} />
                <Field label="Email"         name="email"   type="email" placeholder="jean@example.com" required value={form.email}   onChange={handle} error={errors.email} />
                <Field label="Téléphone"     name="phone"   type="tel"   placeholder="+33 6 00 00 00 00" value={form.phone}   onChange={handle} />
                <Field label="Entreprise"    name="company" placeholder="Nom de l'entreprise" required value={form.company} onChange={handle} error={errors.company} />
                <Field label="Ville"         name="city"    placeholder="Paris" value={form.city} onChange={handle} />
                <div>
                  <label className="form-label">Pays</label>
                  <select name="country" value={form.country} onChange={handle} className="form-select">
                    {['France','Belgique','Suisse','Luxembourg','Canada','Autre'].map(c => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>
            </Card>
          </div>

          <div className="flex flex-col gap-4">
            <Card>
              <CardHeader title="Statut" />
              <div>
                <label className="form-label">Statut du client</label>
                <select name="status" value={form.status} onChange={handle} className="form-select">
                  <option>Actif</option>
                  <option>Inactif</option>
                </select>
              </div>
            </Card>

            <Card>
              <CardHeader title="Actions" />
              <div className="flex flex-col gap-2">
                <button type="submit" className="btn btn-primary w-full">
                  <Icon name="Save" size={16} /> Enregistrer
                </button>
                <button type="button" className="btn btn-secondary w-full" onClick={() => navigate('/customers')}>
                  Annuler
                </button>
              </div>
            </Card>
          </div>
        </div>
      </form>
    </Layout>
  )
}

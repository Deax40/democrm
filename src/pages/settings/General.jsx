import { useState } from 'react'
import SettingsLayout from './SettingsLayout'
import Card, { CardHeader } from '../../components/ui/Card'
import Avatar from '../../components/ui/Avatar'
import Icon from '../../components/ui/Icon'

export default function SettingsGeneral() {
  const [form, setForm] = useState({
    companyName: 'DeaX CRM', email: 'admin@deax.io', phone: '+33 1 23 45 67 89',
    address: '12 rue de la Innovation, 75001 Paris', website: 'https://deax.io',
    firstName: 'Admin', lastName: 'DeaX', bio: 'Administrateur principal de la plateforme DeaX CRM.',
  })
  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  return (
    <SettingsLayout title="Paramètres généraux" breadcrumbLabel="Général">
      <div className="flex flex-col gap-4">
        {/* Profile */}
        <Card>
          <CardHeader title="Profil utilisateur" subtitle="Informations de votre compte" />
          <div className="flex items-start gap-6 mb-6">
            <div className="relative">
              <Avatar initials="AD" color="bg-primary-500" size="xl" />
              <button className="absolute bottom-0 right-0 w-7 h-7 bg-primary-500 rounded-full flex items-center justify-center text-white shadow">
                <Icon name="Camera" size={13} />
              </button>
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">Admin DeaX</p>
              <p className="text-sm text-muted">admin@deax.io · Super Admin</p>
              <button className="btn btn-secondary btn-sm mt-2">Changer la photo</button>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label:'Prénom',   name:'firstName' },
              { label:'Nom',      name:'lastName' },
              { label:'Email',    name:'email',   type:'email' },
              { label:'Téléphone',name:'phone',   type:'tel' },
            ].map(f => (
              <div key={f.name}>
                <label className="form-label">{f.label}</label>
                <input type={f.type ?? 'text'} name={f.name} value={form[f.name]} onChange={handle} className="form-input" />
              </div>
            ))}
            <div className="sm:col-span-2">
              <label className="form-label">Biographie</label>
              <textarea name="bio" value={form.bio} onChange={handle} className="form-input h-20 resize-none" />
            </div>
          </div>
        </Card>

        {/* Company */}
        <Card>
          <CardHeader title="Informations entreprise" />
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label:'Nom de l\'entreprise', name:'companyName' },
              { label:'Site web',             name:'website',  type:'url' },
              { label:'Adresse',              name:'address' },
            ].map(f => (
              <div key={f.name} className={f.name === 'address' ? 'sm:col-span-2' : ''}>
                <label className="form-label">{f.label}</label>
                <input type={f.type ?? 'text'} name={f.name} value={form[f.name]} onChange={handle} className="form-input" />
              </div>
            ))}
          </div>
        </Card>

        <div className="flex justify-end gap-2">
          <button className="btn btn-secondary">Annuler</button>
          <button className="btn btn-primary" onClick={() => alert('Paramètres sauvegardés !')}>
            <Icon name="Save" size={16} /> Sauvegarder
          </button>
        </div>
      </div>
    </SettingsLayout>
  )
}

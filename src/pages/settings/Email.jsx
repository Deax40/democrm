import { useState } from 'react'
import SettingsLayout from './SettingsLayout'
import Card, { CardHeader } from '../../components/ui/Card'
import Icon from '../../components/ui/Icon'

export default function SettingsEmail() {
  const [form, setForm] = useState({ host:'smtp.deax.io', port:'587', user:'noreply@deax.io', password:'', encryption:'TLS', fromName:'DeaX CRM', fromEmail:'noreply@deax.io' })
  const handle = e => setForm(f => ({...f, [e.target.name]: e.target.value}))
  return (
    <SettingsLayout title="Paramètres Email" breadcrumbLabel="Email">
      <Card>
        <CardHeader title="Configuration SMTP" subtitle="Serveur d'envoi d'emails" />
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {label:'Hôte SMTP',    name:'host'},
            {label:'Port',         name:'port'},
            {label:'Utilisateur',  name:'user', type:'email'},
            {label:'Mot de passe', name:'password', type:'password'},
          ].map(f => (
            <div key={f.name}>
              <label className="form-label">{f.label}</label>
              <input type={f.type??'text'} name={f.name} value={form[f.name]} onChange={handle} className="form-input" />
            </div>
          ))}
          <div>
            <label className="form-label">Chiffrement</label>
            <select name="encryption" value={form.encryption} onChange={handle} className="form-select">
              {['TLS','SSL','Aucun'].map(e => <option key={e}>{e}</option>)}
            </select>
          </div>
        </div>
        <div className="border-t border-gray-100 dark:border-gray-700 mt-4 pt-4">
          <CardHeader title="Email expéditeur" />
          <div className="grid sm:grid-cols-2 gap-4">
            <div><label className="form-label">Nom d'affichage</label><input name="fromName" value={form.fromName} onChange={handle} className="form-input" /></div>
            <div><label className="form-label">Email expéditeur</label><input type="email" name="fromEmail" value={form.fromEmail} onChange={handle} className="form-input" /></div>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <button className="btn btn-secondary"><Icon name="SendHorizonal" size={16} />Tester la connexion</button>
          <button className="btn btn-primary" onClick={() => alert('Sauvegardé!')}><Icon name="Save" size={16} />Sauvegarder</button>
        </div>
      </Card>
    </SettingsLayout>
  )
}

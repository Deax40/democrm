import { useState } from 'react'
import SettingsLayout from './SettingsLayout'
import Card, { CardHeader } from '../../components/ui/Card'
import Icon from '../../components/ui/Icon'

export default function SettingsLocalization() {
  const [form, setForm] = useState({ language:'fr', timezone:'Europe/Paris', dateFormat:'DD/MM/YYYY', timeFormat:'24h', firstDay:'lundi' })
  const handle = e => setForm(f => ({...f, [e.target.name]: e.target.value}))
  return (
    <SettingsLayout title="Localisation" breadcrumbLabel="Localisation">
      <Card>
        <CardHeader title="Paramètres régionaux" />
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="form-label">Langue</label>
            <select name="language" value={form.language} onChange={handle} className="form-select">
              <option value="fr">Français</option>
              <option value="en">English</option>
              <option value="de">Deutsch</option>
              <option value="es">Español</option>
            </select>
          </div>
          <div>
            <label className="form-label">Fuseau horaire</label>
            <select name="timezone" value={form.timezone} onChange={handle} className="form-select">
              {['Europe/Paris','Europe/Brussels','Europe/Zurich','UTC','America/New_York'].map(tz => <option key={tz}>{tz}</option>)}
            </select>
          </div>
          <div>
            <label className="form-label">Format de date</label>
            <select name="dateFormat" value={form.dateFormat} onChange={handle} className="form-select">
              {['DD/MM/YYYY','MM/DD/YYYY','YYYY-MM-DD'].map(f => <option key={f}>{f}</option>)}
            </select>
          </div>
          <div>
            <label className="form-label">Format d'heure</label>
            <select name="timeFormat" value={form.timeFormat} onChange={handle} className="form-select">
              <option value="24h">24h</option>
              <option value="12h">12h (AM/PM)</option>
            </select>
          </div>
          <div>
            <label className="form-label">Premier jour de la semaine</label>
            <select name="firstDay" value={form.firstDay} onChange={handle} className="form-select">
              <option value="lundi">Lundi</option>
              <option value="dimanche">Dimanche</option>
            </select>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button className="btn btn-primary" onClick={() => alert('Sauvegardé!')}><Icon name="Save" size={16} />Sauvegarder</button>
        </div>
      </Card>
    </SettingsLayout>
  )
}

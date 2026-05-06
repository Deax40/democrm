// Generic settings page for simpler sections
import SettingsLayout from './SettingsLayout'
import Card, { CardHeader } from '../../components/ui/Card'
import Icon from '../../components/ui/Icon'

export function SettingsTasks() {
  return (
    <SettingsLayout title="Paramètres Tâches" breadcrumbLabel="Tâches">
      <Card>
        <CardHeader title="Configuration des tâches" />
        <div className="flex flex-col gap-4">
          <div><label className="form-label">Statuts personnalisés</label><input className="form-input" defaultValue="À faire, En cours, Bloqué, Terminé, Annulé" /></div>
          <div><label className="form-label">Priorités</label><input className="form-input" defaultValue="Critique, Haute, Normale, Basse" /></div>
          <Toggle label="Notifications de deadline" />
          <Toggle label="Rappels automatiques" defaultChecked />
          <div className="flex justify-end"><button className="btn btn-primary" onClick={() => alert('Sauvegardé!')}><Icon name="Save" size={16} />Sauvegarder</button></div>
        </div>
      </Card>
    </SettingsLayout>
  )
}

export function SettingsLeads() {
  return (
    <SettingsLayout title="Paramètres Leads" breadcrumbLabel="Leads">
      <Card>
        <CardHeader title="Configuration du pipeline leads" />
        <div className="flex flex-col gap-4">
          <div><label className="form-label">Étapes du pipeline</label><input className="form-input" defaultValue="Nouveau, Contacté, Qualifié, Proposition, Négociation, Conclu, Perdu" /></div>
          <div><label className="form-label">Sources par défaut</label><input className="form-input" defaultValue="Site web, LinkedIn, Email, Référence, Salon pro, Partenaire" /></div>
          <Toggle label="Attribution automatique" defaultChecked />
          <Toggle label="Notification nouveau lead" defaultChecked />
          <div className="flex justify-end"><button className="btn btn-primary" onClick={() => alert('Sauvegardé!')}><Icon name="Save" size={16} />Sauvegarder</button></div>
        </div>
      </Card>
    </SettingsLayout>
  )
}

export function SettingsCustomers() {
  return (
    <SettingsLayout title="Paramètres Clients" breadcrumbLabel="Clients">
      <Card>
        <CardHeader title="Configuration clients" />
        <div className="flex flex-col gap-4">
          <div><label className="form-label">Champs obligatoires</label>
            <div className="flex flex-col gap-2 mt-2">
              {['Nom complet','Email','Entreprise','Téléphone'].map(f => (
                <label key={f} className="flex items-center gap-2 text-sm cursor-pointer">
                  <input type="checkbox" defaultChecked={['Nom complet','Email'].includes(f)} className="w-4 h-4 accent-primary-500" />
                  {f}
                </label>
              ))}
            </div>
          </div>
          <Toggle label="Doublons email autorisés" />
          <Toggle label="Historique d'activité" defaultChecked />
          <div className="flex justify-end"><button className="btn btn-primary" onClick={() => alert('Sauvegardé!')}><Icon name="Save" size={16} />Sauvegarder</button></div>
        </div>
      </Card>
    </SettingsLayout>
  )
}

export function SettingsRecaptcha() {
  return (
    <SettingsLayout title="reCAPTCHA" breadcrumbLabel="reCAPTCHA">
      <Card>
        <CardHeader title="Google reCAPTCHA v3" subtitle="Protection anti-spam des formulaires" />
        <div className="flex flex-col gap-4">
          <div><label className="form-label">Clé de site</label><input className="form-input" placeholder="6LeXXXXXXXXXXX..." /></div>
          <div><label className="form-label">Clé secrète</label><input type="password" className="form-input" placeholder="6LeXXXXXXXXXXX..." /></div>
          <Toggle label="Activer sur le formulaire de connexion" defaultChecked />
          <Toggle label="Activer sur le formulaire d'inscription" defaultChecked />
          <Toggle label="Activer sur le formulaire de contact" />
          <div className="flex justify-end"><button className="btn btn-primary" onClick={() => alert('Sauvegardé!')}><Icon name="Save" size={16} />Sauvegarder</button></div>
        </div>
      </Card>
    </SettingsLayout>
  )
}

export function SettingsSupport() {
  return (
    <SettingsLayout title="Support" breadcrumbLabel="Support">
      <Card>
        <CardHeader title="Paramètres support" />
        <div className="flex flex-col gap-4">
          <div><label className="form-label">Email de support</label><input type="email" className="form-input" defaultValue="support@deax.io" /></div>
          <div><label className="form-label">Délai de réponse garanti (heures)</label><input type="number" className="form-input" defaultValue="24" /></div>
          <div><label className="form-label">Message d'accueil du chatbot</label><textarea className="form-input h-20 resize-none" defaultValue="Bonjour ! Comment puis-je vous aider aujourd'hui ?" /></div>
          <Toggle label="Chat en temps réel" defaultChecked />
          <Toggle label="Base de connaissances publique" defaultChecked />
          <div className="flex justify-end"><button className="btn btn-primary" onClick={() => alert('Sauvegardé!')}><Icon name="Save" size={16} />Sauvegarder</button></div>
        </div>
      </Card>
    </SettingsLayout>
  )
}

export function SettingsMisc() {
  return (
    <SettingsLayout title="Paramètres divers" breadcrumbLabel="Divers">
      <Card>
        <CardHeader title="Options diverses" />
        <div className="flex flex-col gap-4">
          <Toggle label="Mode maintenance"        />
          <Toggle label="Logs d'activité détaillés" defaultChecked />
          <Toggle label="Rapports automatiques hebdo" defaultChecked />
          <Toggle label="Sauvegarde automatique"  defaultChecked />
          <div><label className="form-label">Durée de session (minutes)</label><input type="number" className="form-input" defaultValue="60" /></div>
          <div><label className="form-label">Nombre max de tentatives de connexion</label><input type="number" className="form-input" defaultValue="5" /></div>
          <div className="flex justify-end"><button className="btn btn-primary" onClick={() => alert('Sauvegardé!')}><Icon name="Save" size={16} />Sauvegarder</button></div>
        </div>
      </Card>
    </SettingsLayout>
  )
}

function Toggle({ label, defaultChecked = false }) {
  return (
    <label className="flex items-center justify-between cursor-pointer">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</span>
      <input type="checkbox" defaultChecked={defaultChecked} className="sr-only peer" id={label} />
      <label htmlFor={label} className="relative w-11 h-6 rounded-full cursor-pointer bg-gray-200 dark:bg-gray-600 peer-checked:bg-primary-500 transition-colors after:content-[''] after:absolute after:top-1 after:left-1 after:w-4 after:h-4 after:bg-white after:rounded-full after:shadow after:transition-transform peer-checked:after:translate-x-5" />
    </label>
  )
}

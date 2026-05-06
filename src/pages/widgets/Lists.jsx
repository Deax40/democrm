import Layout from '../../components/layout/Layout'
import Card, { CardHeader } from '../../components/ui/Card'
import Avatar from '../../components/ui/Avatar'
import Badge from '../../components/ui/Badge'
import Icon from '../../components/ui/Icon'

export default function WidgetsLists() {
  const activities = [
    { icon:'UserPlus',   color:'bg-blue-100 text-blue-600',   text:'Romain Chevalier ajouté comme lead',      time:'Il y a 5 min' },
    { icon:'CreditCard', color:'bg-green-100 text-green-600', text:'Paiement INV-2025-001 reçu (€ 12 400)',   time:'Il y a 30 min' },
    { icon:'Briefcase',  color:'bg-purple-100 text-purple-600',text:'Projet OptiFlow démarré',               time:'Il y a 1 h' },
    { icon:'Send',       color:'bg-amber-100 text-amber-600', text:'Proposition PRO-2025-002 envoyée',        time:'Il y a 2 h' },
    { icon:'CheckCircle',color:'bg-teal-100 text-teal-600',   text:'Tâche "Code review PR#42" terminée',     time:'Il y a 3 h' },
    { icon:'AlertTriangle',color:'bg-red-100 text-red-600',   text:'Facture INV-2025-004 en retard',         time:'Hier' },
  ]

  const notifications = [
    { title:'Démo Nexora dans 30 min',    desc:'Rappel réunion · 10:00',      read:false, badge:'warning' },
    { title:'Nouvelle demande d\'essai',  desc:'contact@startupY.io',         read:false, badge:'primary' },
    { title:'Contrat OptiFlow signé',     desc:'Valeur: € 60 000',            read:true,  badge:'success' },
    { title:'Mise à jour système',        desc:'DeaX CRM v2.4.1 disponible',  read:true,  badge:'info' },
  ]

  const contacts = [
    { name:'Maxime Durand',    role:'CEO · Nexora SAS',     avatar:'MD', color:'bg-blue-500',   online:true },
    { name:'Isabelle Martin',  role:'CTO · TechVision',     avatar:'IM', color:'bg-purple-500', online:true },
    { name:'Sophie Girard',    role:'DG · Innovatek',       avatar:'SG', color:'bg-amber-500',  online:false },
    { name:'Nicolas Bonnet',   role:'Dev · FuturTech',      avatar:'NB', color:'bg-red-500',    online:false },
    { name:'Camille Rousseau', role:'PM · AgileWorks',      avatar:'CR', color:'bg-teal-500',   online:true },
  ]

  return (
    <Layout title="Widgets – Listes" breadcrumb={[{ label:'Widgets' }, { label:'Listes' }]}>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {/* Activity feed */}
        <Card>
          <CardHeader title="Fil d'activité" />
          <div className="flex flex-col gap-3">
            {activities.map((a, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${a.color}`}>
                  <Icon name={a.icon} size={14} />
                </div>
                <div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{a.text}</p>
                  <p className="text-xs text-muted mt-0.5">{a.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Notifications */}
        <Card>
          <CardHeader title="Notifications" action={<span className="badge badge-primary">2 nouvelles</span>} />
          <div className="flex flex-col gap-2">
            {notifications.map((n, i) => (
              <div key={i} className={`flex items-start gap-3 p-3 rounded-lg ${n.read ? '' : 'bg-primary-50 dark:bg-primary-900/10'}`}>
                <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${n.read ? 'bg-gray-300' : 'bg-primary-500'}`} />
                <div className="flex-1">
                  <p className={`text-sm ${n.read ? 'text-muted' : 'font-medium text-gray-900 dark:text-white'}`}>{n.title}</p>
                  <p className="text-xs text-muted">{n.desc}</p>
                </div>
                <Badge variant={n.badge}>{n.read ? 'Lu' : 'Nouveau'}</Badge>
              </div>
            ))}
          </div>
        </Card>

        {/* Contacts */}
        <Card>
          <CardHeader title="Contacts récents" />
          <div className="flex flex-col gap-3">
            {contacts.map((c, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="relative">
                  <Avatar initials={c.avatar} color={c.color} size="md" />
                  <span className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-white dark:border-gray-800 ${c.online ? 'bg-green-500' : 'bg-gray-400'}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{c.name}</p>
                  <p className="text-xs text-muted truncate">{c.role}</p>
                </div>
                <button className="btn btn-secondary btn-sm btn-icon"><Icon name="MessageCircle" size={14} /></button>
              </div>
            ))}
          </div>
        </Card>

        {/* Todo list */}
        <Card>
          <CardHeader title="Liste de tâches rapide" />
          <div className="flex flex-col gap-2">
            {[
              { done:true,  text:'Envoyer proposition FuturTech' },
              { done:true,  text:'Valider factures de mai' },
              { done:false, text:'Planifier démo Nexora' },
              { done:false, text:'Code review PR#42' },
              { done:false, text:'Mettre à jour documentation API' },
              { done:false, text:'Réunion hebdo équipe' },
            ].map((t, i) => (
              <label key={i} className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" defaultChecked={t.done} className="w-4 h-4 accent-primary-500 rounded" />
                <span className={`text-sm ${t.done ? 'line-through text-muted' : 'text-gray-700 dark:text-gray-300'}`}>{t.text}</span>
              </label>
            ))}
          </div>
        </Card>

        {/* File list */}
        <Card>
          <CardHeader title="Derniers fichiers" />
          <div className="flex flex-col gap-2">
            {[
              { name:'CdC Nexora.pdf',     size:'2.4 Mo', icon:'FileText',  color:'text-red-500' },
              { name:'Mockups v3.fig',     size:'18 Mo',  icon:'Figma',     color:'text-purple-500' },
              { name:'Export clients.xlsx',size:'1.1 Mo', icon:'Table',     color:'text-green-500' },
              { name:'Contrat OptiFlow.docx',size:'890Ko',icon:'FileText',  color:'text-blue-500' },
            ].map((f, i) => (
              <div key={i} className="flex items-center gap-3">
                <Icon name={f.icon} size={18} className={f.color} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200 truncate">{f.name}</p>
                  <p className="text-xs text-muted">{f.size}</p>
                </div>
                <button className="btn btn-secondary btn-sm btn-icon"><Icon name="Download" size={13} /></button>
              </div>
            ))}
          </div>
        </Card>

        {/* Timeline */}
        <Card>
          <CardHeader title="Timeline projet" />
          <div className="flex flex-col gap-4">
            {[
              { date:'01/03/2025', event:'Démarrage projet Nexora',    color:'bg-blue-500' },
              { date:'15/04/2025', event:'Livraison maquettes validée', color:'bg-green-500' },
              { date:'01/05/2025', event:'Développement backend lancé', color:'bg-amber-500' },
              { date:'01/06/2025', event:'Tests d\'intégration en cours',color:'bg-primary-500' },
              { date:'30/06/2025', event:'Livraison finale prévue',     color:'bg-purple-500' },
            ].map((e, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className={`w-3 h-3 rounded-full mt-1 flex-shrink-0 ${e.color}`} />
                <div>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{e.event}</p>
                  <p className="text-xs text-muted">{e.date}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Layout>
  )
}

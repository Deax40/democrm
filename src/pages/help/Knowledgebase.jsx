import { useState } from 'react'
import Layout from '../../components/layout/Layout'
import Card, { CardHeader } from '../../components/ui/Card'
import Icon from '../../components/ui/Icon'

const categories = [
  { icon:'RocketIcon', label:'Démarrage', color:'bg-blue-100 text-blue-600', articles:8 },
  { icon:'Users',      label:'Clients & Leads', color:'bg-green-100 text-green-600', articles:12 },
  { icon:'CreditCard', label:'Facturation',  color:'bg-amber-100 text-amber-600',  articles:6 },
  { icon:'Settings',   label:'Paramètres',  color:'bg-purple-100 text-purple-600', articles:10 },
  { icon:'Shield',     label:'Sécurité',    color:'bg-red-100 text-red-600',        articles:5 },
  { icon:'Plug',       label:'Intégrations',color:'bg-teal-100 text-teal-600',      articles:7 },
]

const faqs = [
  { q:'Comment ajouter un nouveau client ?',      a:'Allez dans CRM → Clients → Nouveau client et remplissez le formulaire.' },
  { q:'Comment créer et envoyer une facture ?',   a:'Accédez à Finance → Paiements → Nouvelle facture. Remplissez les lignes et cliquez sur Envoyer.' },
  { q:'Comment exporter les données clients ?',   a:'Dans la liste des clients, cliquez sur Exporter pour télécharger un fichier CSV.' },
  { q:'Comment changer le thème clair/sombre ?',  a:'Cliquez sur l\'icône lune/soleil dans le header en haut à droite.' },
  { q:'Comment configurer les notifications ?',   a:'Allez dans Paramètres → Divers et activez les notifications souhaitées.' },
  { q:'Comment ajouter un membre à l\'équipe ?',  a:'Accédez à Paramètres → Général → section Équipe et invitez un collaborateur par email.' },
]

export default function Knowledgebase() {
  const [search, setSearch] = useState('')
  const [openFaq, setOpenFaq] = useState(null)

  const filteredFaq = faqs.filter(f =>
    !search || f.q.toLowerCase().includes(search.toLowerCase()) || f.a.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <Layout title="Base de connaissances" breadcrumb={[{ label:'Aide' }, { label:'Base de connaissances' }]}>
      {/* Hero search */}
      <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 text-center mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Comment pouvons-nous vous aider ?</h2>
        <p className="text-primary-100 text-sm mb-5">Parcourez nos guides ou cherchez une réponse</p>
        <div className="relative max-w-md mx-auto">
          <Icon name="Search" size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher dans la documentation…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl border-0 text-sm focus:outline-none focus:ring-2 focus:ring-white/50 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
          />
        </div>
      </div>

      {/* Categories */}
      {!search && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {categories.map(c => (
            <Card key={c.label} className="flex items-center gap-4 cursor-pointer hover:shadow-md transition-shadow">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${c.color}`}>
                <Icon name={c.icon === 'RocketIcon' ? 'Rocket' : c.icon} size={22} />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">{c.label}</p>
                <p className="text-xs text-muted">{c.articles} articles</p>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* FAQ */}
      <Card>
        <CardHeader title="Questions fréquentes" subtitle={search ? `${filteredFaq.length} résultat(s) pour "${search}"` : 'Réponses aux questions les plus courantes'} />
        <div className="flex flex-col gap-1">
          {filteredFaq.map((item, i) => (
            <div key={i} className="border border-gray-100 dark:border-gray-700 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors"
              >
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{item.q}</span>
                <Icon name={openFaq === i ? 'ChevronUp' : 'ChevronDown'} size={16} className="text-gray-400 flex-shrink-0 ml-2" />
              </button>
              {openFaq === i && (
                <div className="px-4 py-3 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/20">
                  <p className="text-sm text-muted">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* Contact support */}
      <Card className="mt-4 text-center p-8">
        <Icon name="Headphones" size={32} className="text-primary-500 mx-auto mb-3" />
        <h3 className="font-bold text-gray-900 dark:text-white mb-1">Vous n'avez pas trouvé la réponse ?</h3>
        <p className="text-muted text-sm mb-4">Notre équipe support est disponible du lundi au vendredi, 9h–18h.</p>
        <div className="flex justify-center gap-3">
          <a href="mailto:support@deax.io" className="btn btn-primary"><Icon name="Mail" size={16} />Contacter le support</a>
          <button className="btn btn-secondary"><Icon name="MessageCircle" size={16} />Chat en direct</button>
        </div>
      </Card>
    </Layout>
  )
}

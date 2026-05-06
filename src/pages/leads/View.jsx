import { useParams, useNavigate } from 'react-router-dom'
import Layout from '../../components/layout/Layout'
import Card, { CardHeader } from '../../components/ui/Card'
import Badge from '../../components/ui/Badge'
import Avatar from '../../components/ui/Avatar'
import Icon from '../../components/ui/Icon'
import { Tabs, TabPanel } from '../../components/ui/Tabs'
import { leads, statusColors } from '../../data/leads'

export default function LeadView() {
  const { id } = useParams()
  const navigate = useNavigate()
  const lead = leads.find(l => String(l.id) === id) ?? leads[0]

  const tabs = [
    { id: 'overview', label: 'Vue d\'ensemble' },
    { id: 'activity', label: 'Activité' },
    { id: 'notes',    label: 'Notes' },
  ]

  const variant = statusColors[lead.status]?.replace('badge-', '') ?? 'secondary'

  return (
    <Layout title={lead.name} breadcrumb={[{ label: 'Leads', path: '/leads' }, { label: lead.name }]}>
      <Card className="mb-4">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <Avatar initials={lead.avatar} color={lead.avatarColor} size="xl" />
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">{lead.name}</h2>
              <Badge variant={variant}>{lead.status}</Badge>
            </div>
            <p className="text-muted text-sm">{lead.company}</p>
            <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted">
              <span className="flex items-center gap-1"><Icon name="Mail" size={14} />{lead.email}</span>
              <span className="flex items-center gap-1"><Icon name="Phone" size={14} />{lead.phone}</span>
              <span className="flex items-center gap-1"><Icon name="Globe" size={14} />{lead.source}</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="btn btn-secondary"><Icon name="Mail" size={15} /> Contacter</button>
            <button className="btn btn-primary" onClick={() => navigate(`/leads/${id}/edit`)}>
              <Icon name="Pencil" size={15} /> Modifier
            </button>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        {[
          { label: 'Valeur estimée', value: lead.value, icon: 'DollarSign', color: 'text-primary-500' },
          { label: 'Source',         value: lead.source,icon: 'Globe',       color: 'text-green-500' },
          { label: 'Statut',         value: lead.status, icon: 'Activity',   color: 'text-amber-500' },
          { label: 'Date',           value: lead.date,   icon: 'Calendar',   color: 'text-purple-500' },
        ].map(s => (
          <Card key={s.label} className="text-center py-4">
            <Icon name={s.icon} size={22} className={`mx-auto mb-2 ${s.color}`} />
            <p className="text-sm font-bold text-gray-900 dark:text-white">{s.value}</p>
            <p className="text-xs text-muted">{s.label}</p>
          </Card>
        ))}
      </div>

      <Card>
        <Tabs tabs={tabs}>
          {active => (
            <>
              <TabPanel id="overview" active={active}>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  {[
                    ['Nom',         lead.name],
                    ['Email',       lead.email],
                    ['Téléphone',   lead.phone],
                    ['Entreprise',  lead.company],
                    ['Source',      lead.source],
                    ['Valeur',      lead.value],
                    ['Statut',      lead.status],
                    ['Date',        lead.date],
                  ].map(([k,v]) => (
                    <div key={k} className="flex gap-2">
                      <dt className="text-muted w-28 flex-shrink-0">{k}</dt>
                      <dd className="font-medium text-gray-800 dark:text-gray-200">{v}</dd>
                    </div>
                  ))}
                </dl>
              </TabPanel>
              <TabPanel id="activity" active={active}>
                <p className="text-muted text-sm">Aucune activité enregistrée.</p>
              </TabPanel>
              <TabPanel id="notes" active={active}>
                <textarea className="form-input h-24 resize-none mb-3" placeholder="Ajouter une note…" />
                <button className="btn btn-primary btn-sm">Enregistrer</button>
              </TabPanel>
            </>
          )}
        </Tabs>
      </Card>
    </Layout>
  )
}

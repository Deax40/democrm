import { useParams, useNavigate } from 'react-router-dom'
import Layout from '../../components/layout/Layout'
import Card, { CardHeader } from '../../components/ui/Card'
import Badge from '../../components/ui/Badge'
import Avatar from '../../components/ui/Avatar'
import Icon from '../../components/ui/Icon'
import { Tabs, TabPanel } from '../../components/ui/Tabs'
import { customers, customerActivity } from '../../data/customers'
import clsx from 'clsx'

const activityIcons = { note: 'FileText', call: 'Phone', meeting: 'Video', invoice: 'Receipt', proposal: 'Send' }
const activityColors = { note: 'bg-gray-100 text-gray-600', call: 'bg-green-100 text-green-600', meeting: 'bg-blue-100 text-blue-600', invoice: 'bg-purple-100 text-purple-600', proposal: 'bg-amber-100 text-amber-600' }

export default function CustomerView() {
  const { id } = useParams()
  const navigate = useNavigate()
  const customer = customers.find(c => String(c.id) === id) ?? customers[0]

  const tabs = [
    { id: 'overview',  label: 'Vue d\'ensemble' },
    { id: 'activity',  label: 'Activité' },
    { id: 'notes',     label: 'Notes' },
    { id: 'invoices',  label: 'Factures' },
  ]

  return (
    <Layout
      title={customer.name}
      breadcrumb={[{ label: 'Clients', path: '/customers' }, { label: customer.name }]}
    >
      {/* Profile header */}
      <Card className="mb-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Avatar initials={customer.avatar} color={customer.avatarColor} size="xl" />
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">{customer.name}</h2>
              <Badge variant={customer.status === 'Actif' ? 'success' : 'secondary'}>{customer.status}</Badge>
              {customer.tags.map(t => <Badge key={t} variant="primary">{t}</Badge>)}
            </div>
            <p className="text-muted text-sm">{customer.company} · {customer.city}, {customer.country}</p>
            <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted">
              <span className="flex items-center gap-1"><Icon name="Mail" size={14} />{customer.email}</span>
              <span className="flex items-center gap-1"><Icon name="Phone" size={14} />{customer.phone}</span>
              <span className="flex items-center gap-1"><Icon name="Calendar" size={14} />Client depuis {customer.joined}</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="btn btn-secondary"><Icon name="Mail" size={15} /> Email</button>
            <button className="btn btn-primary" onClick={() => navigate(`/customers/${id}/edit`)}><Icon name="Pencil" size={15} /> Modifier</button>
          </div>
        </div>
      </Card>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        {[
          { label: 'Revenus totaux', value: customer.revenue, icon: 'TrendingUp', color: 'text-primary-500' },
          { label: 'Projets actifs', value: '3',              icon: 'Briefcase',  color: 'text-green-500' },
          { label: 'Factures',       value: '12',             icon: 'Receipt',    color: 'text-amber-500' },
          { label: 'Propositions',   value: '5',              icon: 'Send',       color: 'text-purple-500' },
        ].map(s => (
          <Card key={s.label} className="text-center py-4">
            <Icon name={s.icon} size={22} className={clsx('mx-auto mb-2', s.color)} />
            <p className="text-xl font-bold text-gray-900 dark:text-white">{s.value}</p>
            <p className="text-xs text-muted">{s.label}</p>
          </Card>
        ))}
      </div>

      {/* Tabs */}
      <Card>
        <Tabs tabs={tabs}>
          {active => (
            <>
              <TabPanel id="overview" active={active}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="section-title-sm">Informations</p>
                    <dl className="space-y-2 text-sm">
                      {[
                        ['Nom', customer.name],
                        ['Email', customer.email],
                        ['Téléphone', customer.phone],
                        ['Entreprise', customer.company],
                        ['Ville', customer.city],
                        ['Pays', customer.country],
                        ['Inscrit le', customer.joined],
                      ].map(([k, v]) => (
                        <div key={k} className="flex gap-2">
                          <dt className="text-muted w-28 flex-shrink-0">{k}</dt>
                          <dd className="font-medium text-gray-800 dark:text-gray-200">{v}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                  <div>
                    <p className="section-title-sm">Tags</p>
                    <div className="flex flex-wrap gap-2">
                      {customer.tags.map(t => <Badge key={t} variant="primary">{t}</Badge>)}
                    </div>
                  </div>
                </div>
              </TabPanel>

              <TabPanel id="activity" active={active}>
                <div className="flex flex-col gap-4">
                  {customerActivity.map((act, i) => (
                    <div key={i} className="flex gap-3">
                      <div className={clsx('w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0', activityColors[act.type])}>
                        <Icon name={activityIcons[act.type]} size={14} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-800 dark:text-gray-200">{act.text}</p>
                        <p className="text-xs text-muted mt-0.5">{act.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabPanel>

              <TabPanel id="notes" active={active}>
                <div className="space-y-3">
                  <textarea
                    className="form-input h-24 resize-none"
                    placeholder="Ajouter une note sur ce client…"
                  />
                  <button className="btn btn-primary btn-sm">Enregistrer la note</button>
                  <div className="divider pt-3" />
                  <p className="text-sm text-muted">Aucune note sauvegardée pour l'instant.</p>
                </div>
              </TabPanel>

              <TabPanel id="invoices" active={active}>
                <p className="text-sm text-muted">Aucune facture associée pour le moment.</p>
              </TabPanel>
            </>
          )}
        </Tabs>
      </Card>
    </Layout>
  )
}

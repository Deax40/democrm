import { useParams, useNavigate } from 'react-router-dom'
import Layout from '../../components/layout/Layout'
import Card, { CardHeader } from '../../components/ui/Card'
import Badge from '../../components/ui/Badge'
import Avatar from '../../components/ui/Avatar'
import ProgressBar from '../../components/ui/ProgressBar'
import Icon from '../../components/ui/Icon'
import { Tabs, TabPanel } from '../../components/ui/Tabs'
import { projects, projectStatusColors } from '../../data/projects'

const memberMap = {
  AM: { name: 'Alice Moreau',  color: 'bg-blue-500',   role: 'Sales Manager' },
  JP: { name: 'Julien Petit',  color: 'bg-green-500',  role: 'Account Manager' },
  LB: { name: 'Laura Bernard', color: 'bg-purple-500', role: 'Lead Specialist' },
  MD: { name: 'Marc Dupont',   color: 'bg-amber-500',  role: 'Dev Senior' },
  CR: { name: 'Camille R.',    color: 'bg-teal-500',   role: 'Designer' },
}

export default function ProjectView() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projects.find(p => String(p.id) === id) ?? projects[0]
  const variant = projectStatusColors[project.status]?.replace('badge-', '') ?? 'secondary'

  return (
    <Layout title={project.name} breadcrumb={[{ label: 'Projets', path: '/projects' }, { label: project.name }]}>
      {/* Header */}
      <Card className="mb-4">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="w-14 h-14 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
            <Icon name="Briefcase" size={26} className="text-primary-500" />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap gap-2 items-center mb-1">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">{project.name}</h2>
              <Badge variant={variant}>{project.status}</Badge>
            </div>
            <p className="text-muted text-sm">{project.client} · {project.start} → {project.end}</p>
            <div className="flex flex-wrap gap-1 mt-2">
              {project.tags.map(t => <Badge key={t} variant="secondary">{t}</Badge>)}
            </div>
          </div>
          <div className="flex gap-2">
            <button className="btn btn-secondary"><Icon name="Download" size={15} /> Rapport</button>
            <button className="btn btn-primary"><Icon name="Pencil" size={15} /> Modifier</button>
          </div>
        </div>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        {[
          { label: 'Avancement',  value: `${project.progress}%`, icon: 'Activity',   color: 'text-primary-500' },
          { label: 'Budget',      value: project.budget,          icon: 'DollarSign', color: 'text-green-500' },
          { label: 'Dépensé',     value: project.spent,           icon: 'CreditCard', color: 'text-amber-500' },
          { label: 'Équipe',      value: `${project.team.length} membres`, icon: 'Users', color: 'text-purple-500' },
        ].map(s => (
          <Card key={s.label} className="text-center py-4">
            <Icon name={s.icon} size={22} className={`mx-auto mb-2 ${s.color}`} />
            <p className="text-xl font-bold text-gray-900 dark:text-white">{s.value}</p>
            <p className="text-xs text-muted">{s.label}</p>
          </Card>
        ))}
      </div>

      <Card>
        <Tabs tabs={[
          { id: 'overview', label: 'Vue d\'ensemble' },
          { id: 'team', label: 'Équipe' },
          { id: 'files', label: 'Fichiers' },
        ]}>
          {active => (
            <>
              <TabPanel id="overview" active={active}>
                <div className="mb-4">
                  <p className="text-sm text-muted mb-2">Avancement global</p>
                  <ProgressBar value={project.progress} color={project.progress === 100 ? 'success' : 'primary'} showLabel />
                </div>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  {[
                    ['Client',   project.client],
                    ['Statut',   project.status],
                    ['Priorité', project.priority],
                    ['Budget',   project.budget],
                    ['Dépensé',  project.spent],
                    ['Début',    project.start],
                    ['Fin prévue', project.end],
                  ].map(([k,v]) => (
                    <div key={k} className="flex gap-2">
                      <dt className="text-muted w-28 flex-shrink-0">{k}</dt>
                      <dd className="font-medium text-gray-800 dark:text-gray-200">{v}</dd>
                    </div>
                  ))}
                </dl>
              </TabPanel>
              <TabPanel id="team" active={active}>
                <div className="flex flex-col gap-3">
                  {project.team.map(m => {
                    const info = memberMap[m] ?? { name: m, color: 'bg-gray-500', role: 'Membre' }
                    return (
                      <div key={m} className="flex items-center gap-3">
                        <Avatar initials={m} color={info.color} size="md" />
                        <div>
                          <p className="font-medium text-sm text-gray-900 dark:text-white">{info.name}</p>
                          <p className="text-xs text-muted">{info.role}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </TabPanel>
              <TabPanel id="files" active={active}>
                <p className="text-sm text-muted">Aucun fichier joint pour ce projet.</p>
              </TabPanel>
            </>
          )}
        </Tabs>
      </Card>
    </Layout>
  )
}

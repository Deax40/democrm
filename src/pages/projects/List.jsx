import { useNavigate } from 'react-router-dom'
import Layout from '../../components/layout/Layout'
import Card from '../../components/ui/Card'
import Badge from '../../components/ui/Badge'
import Avatar from '../../components/ui/Avatar'
import ProgressBar from '../../components/ui/ProgressBar'
import Icon from '../../components/ui/Icon'
import { projects, projectStatusColors, priorityColors } from '../../data/projects'

export default function ProjectsList() {
  const navigate = useNavigate()
  const members = ['AM','JP','LB','MD','CR']
  const memberColors = ['bg-blue-500','bg-green-500','bg-purple-500','bg-amber-500','bg-teal-500']

  return (
    <Layout title="Projets" breadcrumb={[{ label: 'CRM' }, { label: 'Projets' }]}>
      <div className="page-header">
        <p className="text-muted text-sm">{projects.length} projets actifs</p>
        <div className="flex gap-2">
          <button className="btn btn-secondary"><Icon name="Filter" size={16} /> Filtres</button>
          <button className="btn btn-primary" onClick={() => navigate('/projects/create')}>
            <Icon name="Plus" size={16} /> Nouveau projet
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {projects.map(p => (
          <Card key={p.id} className="flex flex-col gap-3">
            <div className="flex items-start justify-between gap-2">
              <h3
                className="font-semibold text-gray-900 dark:text-white cursor-pointer hover:text-primary-500 transition-colors"
                onClick={() => navigate(`/projects/${p.id}`)}
              >
                {p.name}
              </h3>
              <Badge variant={projectStatusColors[p.status]?.replace('badge-', '') ?? 'secondary'}>
                {p.status}
              </Badge>
            </div>

            <p className="text-sm text-muted">{p.client}</p>

            <div className="flex flex-wrap gap-1">
              {p.tags.map(t => <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>)}
            </div>

            <div>
              <div className="flex justify-between text-xs text-muted mb-1">
                <span>Avancement</span>
                <span className="font-semibold text-gray-700 dark:text-gray-300">{p.progress}%</span>
              </div>
              <ProgressBar value={p.progress} color={p.progress === 100 ? 'success' : 'primary'} />
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs text-muted border-t border-gray-100 dark:border-gray-700 pt-3">
              <div><span className="font-medium text-gray-700 dark:text-gray-300">{p.budget}</span><br />Budget</div>
              <div><span className="font-medium text-gray-700 dark:text-gray-300">{p.spent}</span><br />Dépensé</div>
              <div><span className="font-medium text-gray-700 dark:text-gray-300">{p.start}</span><br />Début</div>
              <div><span className="font-medium text-gray-700 dark:text-gray-300">{p.end}</span><br />Fin</div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <div className="flex -space-x-2">
                {p.team.map((m, i) => (
                  <Avatar key={i} initials={m} color={memberColors[members.indexOf(m)] ?? 'bg-gray-500'} size="xs" className="border-2 border-white dark:border-gray-800" />
                ))}
              </div>
              <div className="flex gap-1">
                <button className="btn btn-secondary btn-sm btn-icon" onClick={() => navigate(`/projects/${p.id}`)}>
                  <Icon name="Eye" size={13} />
                </button>
                <button className="btn btn-secondary btn-sm btn-icon">
                  <Icon name="Pencil" size={13} />
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Layout>
  )
}

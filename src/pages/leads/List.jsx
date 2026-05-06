import { useNavigate } from 'react-router-dom'
import Layout from '../../components/layout/Layout'
import Card from '../../components/ui/Card'
import DataTable from '../../components/ui/DataTable'
import Badge from '../../components/ui/Badge'
import Avatar from '../../components/ui/Avatar'
import Icon from '../../components/ui/Icon'
import { leads, statusColors } from '../../data/leads'

export default function LeadsList() {
  const navigate = useNavigate()

  const columns = [
    {
      key: 'name', label: 'Prospect',
      render: (v, row) => (
        <div className="flex items-center gap-2.5">
          <Avatar initials={row.avatar} color={row.avatarColor} size="sm" />
          <div>
            <p className="font-medium text-sm text-gray-900 dark:text-white">{v}</p>
            <p className="text-xs text-muted">{row.email}</p>
          </div>
        </div>
      ),
    },
    { key: 'company', label: 'Entreprise' },
    { key: 'source', label: 'Source' },
    { key: 'value', label: 'Valeur', render: v => <span className="font-semibold">{v}</span> },
    {
      key: 'status', label: 'Statut',
      render: v => <Badge variant={statusColors[v]?.replace('badge-', '') ?? 'secondary'}>{v}</Badge>,
    },
    { key: 'date', label: 'Date', render: v => <span className="text-muted">{v}</span> },
    {
      key: 'id', label: 'Actions', sortable: false,
      render: v => (
        <div className="flex gap-1">
          <button className="btn btn-secondary btn-sm btn-icon" onClick={() => navigate(`/leads/${v}`)}>
            <Icon name="Eye" size={14} />
          </button>
          <button className="btn btn-secondary btn-sm btn-icon" onClick={() => navigate(`/leads/${v}/edit`)}>
            <Icon name="Pencil" size={14} />
          </button>
        </div>
      ),
    },
  ]

  return (
    <Layout title="Leads" breadcrumb={[{ label: 'CRM' }, { label: 'Leads' }]}>
      <div className="page-header">
        <p className="text-muted text-sm">{leads.length} leads enregistrés</p>
        <div className="flex gap-2">
          <button className="btn btn-secondary"><Icon name="Filter" size={16} /> Filtres</button>
          <button className="btn btn-primary" onClick={() => navigate('/leads/create')}>
            <Icon name="Plus" size={16} /> Nouveau lead
          </button>
        </div>
      </div>

      <Card padding={false}>
        <div className="p-4">
          <DataTable columns={columns} data={leads} perPage={8} />
        </div>
      </Card>
    </Layout>
  )
}

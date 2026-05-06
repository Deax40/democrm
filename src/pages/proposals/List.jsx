import { useNavigate } from 'react-router-dom'
import Layout from '../../components/layout/Layout'
import Card from '../../components/ui/Card'
import DataTable from '../../components/ui/DataTable'
import Badge from '../../components/ui/Badge'
import Avatar from '../../components/ui/Avatar'
import Icon from '../../components/ui/Icon'
import { proposals, proposalStatusColors } from '../../data/proposals'

export default function ProposalsList() {
  const navigate = useNavigate()

  const columns = [
    { key:'id', label:'Réf.', render: v => <span className="font-mono text-sm">{v}</span> },
    {
      key:'title', label:'Titre',
      render:(v,row) => (
        <div className="flex items-center gap-2">
          <Avatar initials={row.avatar} color={row.avatarColor} size="sm" />
          <div>
            <p className="font-medium text-sm text-gray-900 dark:text-white">{v}</p>
            <p className="text-xs text-muted">{row.client}</p>
          </div>
        </div>
      ),
    },
    { key:'value',  label:'Valeur', render: v => <span className="font-semibold">{v}</span> },
    { key:'date',   label:'Date',   render: v => <span className="text-muted">{v}</span> },
    { key:'expiry', label:'Expiration', render: v => <span className="text-muted">{v ?? '—'}</span> },
    {
      key:'status', label:'Statut',
      render: v => <Badge variant={proposalStatusColors[v]?.replace('badge-','') ?? 'secondary'}>{v}</Badge>,
    },
    {
      key:'id', label:'Actions', sortable:false,
      render: v => (
        <div className="flex gap-1">
          <button className="btn btn-secondary btn-sm btn-icon" onClick={() => navigate(`/proposals/${v}`)}><Icon name="Eye" size={14} /></button>
          <button className="btn btn-secondary btn-sm btn-icon"><Icon name="Pencil" size={14} /></button>
          <button className="btn btn-secondary btn-sm btn-icon"><Icon name="Copy" size={14} /></button>
        </div>
      ),
    },
  ]

  return (
    <Layout title="Propositions" breadcrumb={[{ label:'Finance' }, { label:'Propositions' }]}>
      <div className="page-header">
        <p className="text-muted text-sm">{proposals.length} propositions</p>
        <button className="btn btn-primary" onClick={() => navigate('/proposals/create')}>
          <Icon name="Plus" size={16} /> Nouvelle proposition
        </button>
      </div>
      <Card padding={false}>
        <div className="p-4">
          <DataTable columns={columns} data={proposals} perPage={8} />
        </div>
      </Card>
    </Layout>
  )
}

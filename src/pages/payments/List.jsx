import { useNavigate } from 'react-router-dom'
import Layout from '../../components/layout/Layout'
import Card from '../../components/ui/Card'
import DataTable from '../../components/ui/DataTable'
import Badge from '../../components/ui/Badge'
import Avatar from '../../components/ui/Avatar'
import Icon from '../../components/ui/Icon'
import { payments, paymentStatusColors } from '../../data/payments'

const kpi = [
  { label:'Total encaissé',   value:'€ 138 450', icon:'TrendingUp',  color:'text-primary-500', bg:'bg-primary-50 dark:bg-primary-900/30' },
  { label:'En attente',       value:'€ 48 000',  icon:'Clock',       color:'text-amber-500',   bg:'bg-amber-50 dark:bg-amber-900/30' },
  { label:'En retard',        value:'€ 5 600',   icon:'AlertCircle', color:'text-red-500',      bg:'bg-red-50 dark:bg-red-900/30' },
  { label:'Factures ce mois', value:'8',          icon:'Receipt',     color:'text-green-500',   bg:'bg-green-50 dark:bg-green-900/30' },
]

export default function PaymentsList() {
  const navigate = useNavigate()

  const columns = [
    { key:'id', label:'Numéro', render: v => <span className="font-mono text-sm">{v}</span> },
    {
      key:'client', label:'Client',
      render:(v,row) => (
        <div className="flex items-center gap-2">
          <Avatar initials={row.avatar} color={row.avatarColor} size="sm" />
          <span className="text-sm">{v}</span>
        </div>
      ),
    },
    { key:'amount',  label:'Montant', render: v => <span className="font-semibold">{v}</span> },
    { key:'method',  label:'Méthode' },
    { key:'date',    label:'Date',   render: v => <span className="text-muted">{v}</span> },
    { key:'due',     label:'Échéance',render:v => <span className="text-muted">{v}</span> },
    {
      key:'status', label:'Statut',
      render: v => <Badge variant={paymentStatusColors[v]?.replace('badge-','')?? 'secondary'}>{v}</Badge>,
    },
    {
      key:'id', label:'Actions', sortable:false,
      render: v => (
        <div className="flex gap-1">
          <button className="btn btn-secondary btn-sm btn-icon" onClick={() => navigate(`/invoice/${v}`)}>
            <Icon name="Eye" size={14} />
          </button>
          <button className="btn btn-secondary btn-sm btn-icon">
            <Icon name="Download" size={14} />
          </button>
        </div>
      ),
    },
  ]

  return (
    <Layout title="Paiements & Factures" breadcrumb={[{ label:'Finance' }, { label:'Paiements' }]}>
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        {kpi.map(k => (
          <div key={k.label} className="card p-4 flex items-center gap-3">
            <div className={`kpi-icon ${k.bg}`}><Icon name={k.icon} size={20} className={k.color} /></div>
            <div>
              <p className="font-bold text-gray-900 dark:text-white">{k.value}</p>
              <p className="text-xs text-muted">{k.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="page-header">
        <p className="text-muted text-sm">{payments.length} transactions</p>
        <div className="flex gap-2">
          <button className="btn btn-secondary"><Icon name="Download" size={16} /> Exporter</button>
          <button className="btn btn-primary" onClick={() => navigate('/invoice/create')}>
            <Icon name="Plus" size={16} /> Nouvelle facture
          </button>
        </div>
      </div>

      <Card padding={false}>
        <div className="p-4">
          <DataTable columns={columns} data={payments} perPage={8} />
        </div>
      </Card>
    </Layout>
  )
}

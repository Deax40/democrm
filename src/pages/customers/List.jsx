import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../../components/layout/Layout'
import Card from '../../components/ui/Card'
import DataTable from '../../components/ui/DataTable'
import Badge from '../../components/ui/Badge'
import Avatar from '../../components/ui/Avatar'
import Icon from '../../components/ui/Icon'
import Modal from '../../components/ui/Modal'
import { customers } from '../../data/customers'

export default function CustomersList() {
  const navigate = useNavigate()
  const [deleteModal, setDeleteModal] = useState(false)

  const columns = [
    {
      key: 'name', label: 'Client',
      render: (v, row) => (
        <div className="flex items-center gap-2.5">
          <Avatar initials={row.avatar} color={row.avatarColor} size="sm" />
          <div>
            <p className="font-medium text-gray-900 dark:text-white text-sm">{v}</p>
            <p className="text-xs text-muted">{row.email}</p>
          </div>
        </div>
      ),
    },
    { key: 'company', label: 'Entreprise' },
    { key: 'city', label: 'Ville' },
    { key: 'phone', label: 'Téléphone', sortable: false },
    { key: 'revenue', label: 'Revenus', render: v => <span className="font-semibold">{v}</span> },
    {
      key: 'status', label: 'Statut',
      render: v => <Badge variant={v === 'Actif' ? 'success' : 'secondary'}>{v}</Badge>,
    },
    {
      key: 'tags', label: 'Tags', sortable: false,
      render: v => (
        <div className="flex gap-1 flex-wrap">
          {v.map(tag => <Badge key={tag} variant="primary">{tag}</Badge>)}
        </div>
      ),
    },
    {
      key: 'id', label: 'Actions', sortable: false,
      render: (v) => (
        <div className="flex items-center gap-1">
          <button className="btn btn-secondary btn-sm btn-icon" onClick={() => navigate(`/customers/${v}`)}>
            <Icon name="Eye" size={14} />
          </button>
          <button className="btn btn-secondary btn-sm btn-icon" onClick={() => navigate(`/customers/${v}/edit`)}>
            <Icon name="Pencil" size={14} />
          </button>
          <button className="btn btn-secondary btn-sm btn-icon text-red-500" onClick={() => setDeleteModal(v)}>
            <Icon name="Trash2" size={14} />
          </button>
        </div>
      ),
    },
  ]

  return (
    <Layout title="Clients" breadcrumb={[{ label: 'CRM' }, { label: 'Clients' }]}>
      <div className="page-header">
        <div>
          <p className="text-muted text-sm">{customers.length} clients enregistrés</p>
        </div>
        <div className="flex gap-2">
          <button className="btn btn-secondary">
            <Icon name="Download" size={16} /> Exporter
          </button>
          <button className="btn btn-primary" onClick={() => navigate('/customers/create')}>
            <Icon name="Plus" size={16} /> Nouveau client
          </button>
        </div>
      </div>

      <Card padding={false}>
        <div className="p-4">
          <DataTable columns={columns} data={customers} perPage={8} />
        </div>
      </Card>

      <Modal open={!!deleteModal} onClose={() => setDeleteModal(false)} title="Supprimer le client">
        <p className="text-muted mb-4">Êtes-vous sûr de vouloir supprimer ce client ? Cette action est irréversible.</p>
        <div className="flex gap-2 justify-end">
          <button className="btn btn-secondary" onClick={() => setDeleteModal(false)}>Annuler</button>
          <button className="btn btn-danger" onClick={() => setDeleteModal(false)}>Supprimer</button>
        </div>
      </Modal>
    </Layout>
  )
}

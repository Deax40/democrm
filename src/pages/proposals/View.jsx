import { useParams, useNavigate } from 'react-router-dom'
import Layout from '../../components/layout/Layout'
import Card from '../../components/ui/Card'
import Badge from '../../components/ui/Badge'
import Icon from '../../components/ui/Icon'
import { proposals, proposalStatusColors } from '../../data/proposals'

export default function ProposalView() {
  const { id } = useParams()
  const navigate = useNavigate()
  const proposal = proposals.find(p => p.id === id) ?? proposals[0]
  const variant = proposalStatusColors[proposal.status]?.replace('badge-', '') ?? 'secondary'

  return (
    <Layout title={proposal.id} breadcrumb={[{ label:'Propositions', path:'/proposals' }, { label:proposal.id }]}>
      <div className="max-w-3xl mx-auto">
        <Card>
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary-500 flex items-center justify-center">
                  <span className="text-white font-black text-base">D</span>
                </div>
                <div>
                  <p className="font-bold text-lg text-gray-900 dark:text-white">DeaX CRM</p>
                  <p className="text-xs text-muted">deax.io</p>
                </div>
              </div>
              <p className="text-xl font-bold text-gray-900 dark:text-white">{proposal.title}</p>
              <p className="text-muted text-sm mt-1">{proposal.client}</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-black text-primary-500 mb-1">{proposal.id}</p>
              <Badge variant={variant}>{proposal.status}</Badge>
              <p className="text-sm text-muted mt-2">Créée le {proposal.date}</p>
              {proposal.expiry && <p className="text-sm text-muted">Expire le {proposal.expiry}</p>}
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-4 mb-6">
            <p className="text-sm text-muted mb-1">Valeur estimée</p>
            <p className="text-3xl font-black text-primary-500">{proposal.value}</p>
          </div>

          <div className="mb-6">
            <p className="section-title-sm">Description</p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Cette proposition couvre l'ensemble des services inclus dans le périmètre défini lors
              de nos échanges. Elle inclut l'analyse des besoins, la conception, le développement
              et le déploiement de la solution.
            </p>
          </div>

          <div className="flex gap-2 justify-end border-t border-gray-100 dark:border-gray-700 pt-4">
            <button className="btn btn-secondary"><Icon name="Download" size={16} /> PDF</button>
            <button className="btn btn-secondary"><Icon name="Copy" size={16} /> Dupliquer</button>
            <button className="btn btn-primary" onClick={() => navigate(`/proposals/${id}/edit`)}>
              <Icon name="Pencil" size={16} /> Modifier
            </button>
          </div>
        </Card>
      </div>
    </Layout>
  )
}

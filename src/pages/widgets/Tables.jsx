import Layout from '../../components/layout/Layout'
import Card, { CardHeader } from '../../components/ui/Card'
import DataTable from '../../components/ui/DataTable'
import Badge from '../../components/ui/Badge'
import Avatar from '../../components/ui/Avatar'
import { customers } from '../../data/customers'
import { payments, paymentStatusColors } from '../../data/payments'

export default function WidgetsTables() {
  const custCols = [
    { key:'name', label:'Client', render:(v,r) => (
      <div className="flex items-center gap-2"><Avatar initials={r.avatar} color={r.avatarColor} size="sm" /><span className="font-medium text-sm">{v}</span></div>
    )},
    { key:'company',  label:'Entreprise' },
    { key:'revenue',  label:'Revenus' },
    { key:'status',   label:'Statut', render:v => <Badge variant={v==='Actif'?'success':'secondary'}>{v}</Badge> },
  ]

  const paymentCols = [
    { key:'id',     label:'Facture', render:v => <span className="font-mono text-xs">{v}</span> },
    { key:'client', label:'Client' },
    { key:'amount', label:'Montant', render:v => <span className="font-semibold">{v}</span> },
    { key:'status', label:'Statut',  render:v => <Badge variant={paymentStatusColors[v]?.replace('badge-','')?? 'secondary'}>{v}</Badge> },
    { key:'date',   label:'Date',    render:v => <span className="text-muted text-xs">{v}</span> },
  ]

  return (
    <Layout title="Widgets – Tableaux" breadcrumb={[{ label:'Widgets' }, { label:'Tableaux' }]}>
      <div className="flex flex-col gap-6">
        <Card padding={false}>
          <div className="p-4 pb-0">
            <CardHeader title="Tableau clients" subtitle="Recherche, tri et pagination intégrés" />
          </div>
          <div className="p-4">
            <DataTable columns={custCols} data={customers} perPage={5} />
          </div>
        </Card>

        <Card padding={false}>
          <div className="p-4 pb-0">
            <CardHeader title="Tableau paiements" />
          </div>
          <div className="p-4">
            <DataTable columns={paymentCols} data={payments} perPage={5} />
          </div>
        </Card>

        {/* Simple static table */}
        <Card padding={false}>
          <div className="p-4 pb-0">
            <CardHeader title="Tableau statique – Exemple responsive" />
          </div>
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr><th>#</th><th>Nom</th><th>Département</th><th>Poste</th><th>Statut</th><th>Date embauche</th></tr>
              </thead>
              <tbody>
                {[
                  [1,'Alice Moreau',  'Commercial',   'Sales Manager',    'Actif',   '12/01/2022'],
                  [2,'Julien Petit',  'Commercial',   'Account Manager',  'Actif',   '05/03/2022'],
                  [3,'Laura Bernard', 'Technique',    'Lead Specialist',  'Actif',   '22/04/2023'],
                  [4,'Marc Dupont',   'Technique',    'Dev Senior',       'Actif',   '01/06/2021'],
                  [5,'Camille R.',    'Design',       'UI/UX Designer',   'Congé',   '15/09/2023'],
                ].map(r => (
                  <tr key={r[0]}>
                    <td className="text-muted font-mono">{r[0]}</td>
                    <td className="font-medium">{r[1]}</td>
                    <td>{r[2]}</td>
                    <td>{r[3]}</td>
                    <td><Badge variant={r[4]==='Actif'?'success':'warning'}>{r[4]}</Badge></td>
                    <td className="text-muted">{r[5]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </Layout>
  )
}

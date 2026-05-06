import { useParams } from 'react-router-dom'
import Layout from '../../components/layout/Layout'
import Card from '../../components/ui/Card'
import Badge from '../../components/ui/Badge'
import Icon from '../../components/ui/Icon'
import { payments } from '../../data/payments'

export default function InvoiceView() {
  const { id } = useParams()
  const inv = payments.find(p => p.id === id) ?? payments[0]

  return (
    <Layout title={`Facture ${inv.id}`} breadcrumb={[{ label:'Paiements', path:'/payments' }, { label:inv.id }]}>
      <div className="max-w-3xl mx-auto">
        <Card>
          {/* Header */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary-500 flex items-center justify-center">
                  <span className="text-white font-black text-base">D</span>
                </div>
                <div>
                  <p className="font-bold text-lg text-gray-900 dark:text-white">DeaX CRM</p>
                  <p className="text-xs text-muted">deax.io · admin@deax.io</p>
                </div>
              </div>
              <p className="text-sm text-muted">12 rue de la Innovation<br />75001 Paris, France</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-black text-primary-500 mb-1">{inv.id}</p>
              <Badge variant={
                inv.status === 'Payé' ? 'success' :
                inv.status === 'En retard' ? 'danger' :
                inv.status === 'Annulé' ? 'secondary' : 'warning'
              }>
                {inv.status}
              </Badge>
              <p className="text-sm text-muted mt-2">Émise le {inv.date}</p>
              <p className="text-sm text-muted">Échéance {inv.due}</p>
            </div>
          </div>

          {/* Bill to */}
          <div className="mb-6">
            <p className="section-title-sm">Facturé à</p>
            <p className="font-semibold text-gray-900 dark:text-white">{inv.client}</p>
            <p className="text-sm text-muted">client@example.fr</p>
          </div>

          {/* Items */}
          <table className="data-table mb-6">
            <thead><tr><th>Description</th><th>Qté</th><th>P.U.</th><th>Total</th></tr></thead>
            <tbody>
              <tr><td>Prestation de services – Mois de mai</td><td>1</td><td>{inv.amount}</td><td className="font-semibold">{inv.amount}</td></tr>
            </tbody>
          </table>

          {/* Totals */}
          <div className="flex justify-end mb-6">
            <div className="w-56 space-y-2 text-sm">
              {[['Sous-total', inv.amount],['TVA (20%)', '–'],['Total TTC', inv.amount]].map(([k,v]) => (
                <div key={k} className={`flex justify-between ${k === 'Total TTC' ? 'font-bold text-lg border-t border-gray-100 dark:border-gray-700 pt-2 mt-2 text-gray-900 dark:text-white' : 'text-muted'}`}>
                  <span>{k}</span><span>{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-2 justify-end border-t border-gray-100 dark:border-gray-700 pt-4">
            <button className="btn btn-secondary"><Icon name="Download" size={16} /> Télécharger PDF</button>
            <button className="btn btn-primary"><Icon name="Send" size={16} /> Envoyer</button>
          </div>
        </Card>
      </div>
    </Layout>
  )
}

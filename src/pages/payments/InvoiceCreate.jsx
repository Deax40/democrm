import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../../components/layout/Layout'
import Card, { CardHeader } from '../../components/ui/Card'
import Icon from '../../components/ui/Icon'

export default function InvoiceCreate() {
  const navigate = useNavigate()
  const [lines, setLines] = useState([{ desc: '', qty: 1, price: '' }])
  const addLine = () => setLines(l => [...l, { desc: '', qty: 1, price: '' }])
  const updateLine = (i, field, val) => setLines(l => l.map((line, idx) => idx === i ? { ...line, [field]: val } : line))
  const removeLine = i => setLines(l => l.filter((_, idx) => idx !== i))

  return (
    <Layout title="Créer une facture" breadcrumb={[{ label:'Paiements', path:'/payments' }, { label:'Nouvelle facture' }]}>
      <div className="max-w-3xl mx-auto flex flex-col gap-4">
        <Card>
          <CardHeader title="Informations" />
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="form-label">Client</label>
              <select className="form-select">
                <option>Nexora SAS</option><option>TechVision</option><option>Innovatek</option>
              </select>
            </div>
            <div>
              <label className="form-label">Méthode de paiement</label>
              <select className="form-select">
                {['Virement','CB','PayPal','Chèque'].map(m => <option key={m}>{m}</option>)}
              </select>
            </div>
            <div>
              <label className="form-label">Date d'émission</label>
              <input type="date" className="form-input" />
            </div>
            <div>
              <label className="form-label">Date d'échéance</label>
              <input type="date" className="form-input" />
            </div>
          </div>
        </Card>

        <Card>
          <CardHeader title="Lignes de facturation" action={
            <button className="btn btn-secondary btn-sm" onClick={addLine}><Icon name="Plus" size={14} /> Ligne</button>
          } />
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 dark:border-gray-700">
                <th className="text-left pb-2 text-muted font-medium">Description</th>
                <th className="text-right pb-2 text-muted font-medium w-16">Qté</th>
                <th className="text-right pb-2 text-muted font-medium w-28">Prix (€)</th>
                <th className="w-8"></th>
              </tr>
            </thead>
            <tbody>
              {lines.map((line, i) => (
                <tr key={i} className="border-b border-gray-50 dark:border-gray-700/50">
                  <td className="py-2 pr-2">
                    <input value={line.desc} onChange={e => updateLine(i,'desc',e.target.value)} className="form-input" placeholder="Description du service" />
                  </td>
                  <td className="py-2 pr-2">
                    <input type="number" min="1" value={line.qty} onChange={e => updateLine(i,'qty',e.target.value)} className="form-input text-right" />
                  </td>
                  <td className="py-2 pr-2">
                    <input type="number" value={line.price} onChange={e => updateLine(i,'price',e.target.value)} className="form-input text-right" placeholder="0.00" />
                  </td>
                  <td className="py-2">
                    <button onClick={() => removeLine(i)} className="btn btn-secondary btn-sm btn-icon text-red-500" disabled={lines.length === 1}>
                      <Icon name="X" size={12} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        <div className="flex gap-2 justify-end">
          <button className="btn btn-secondary" onClick={() => navigate('/payments')}>Annuler</button>
          <button className="btn btn-primary" onClick={() => { alert('Facture créée !'); navigate('/payments') }}>
            <Icon name="Save" size={16} /> Créer la facture
          </button>
        </div>
      </div>
    </Layout>
  )
}

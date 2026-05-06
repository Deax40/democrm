import { useState } from 'react'
import SettingsLayout from './SettingsLayout'
import Card, { CardHeader } from '../../components/ui/Card'
import Icon from '../../components/ui/Icon'

export default function SettingsFinance() {
  const [form, setForm] = useState({ currency:'EUR', symbol:'€', taxRate:'20', invoicePrefix:'INV-', proposalPrefix:'PRO-', paymentTerms:'30', notes:'Paiement à 30 jours à compter de la date de facturation.' })
  const handle = e => setForm(f => ({...f, [e.target.name]: e.target.value}))
  return (
    <SettingsLayout title="Finance" breadcrumbLabel="Finance">
      <Card>
        <CardHeader title="Paramètres financiers" subtitle="Devise, taxes et facturation" />
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="form-label">Devise</label>
            <select name="currency" value={form.currency} onChange={handle} className="form-select">
              {['EUR','USD','GBP','CHF'].map(c => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div><label className="form-label">Symbole</label><input name="symbol" value={form.symbol} onChange={handle} className="form-input" /></div>
          <div><label className="form-label">Taux TVA (%)</label><input name="taxRate" value={form.taxRate} onChange={handle} className="form-input" type="number" min="0" max="100" /></div>
          <div><label className="form-label">Délai paiement (jours)</label><input name="paymentTerms" value={form.paymentTerms} onChange={handle} className="form-input" type="number" /></div>
          <div><label className="form-label">Préfixe factures</label><input name="invoicePrefix" value={form.invoicePrefix} onChange={handle} className="form-input" /></div>
          <div><label className="form-label">Préfixe propositions</label><input name="proposalPrefix" value={form.proposalPrefix} onChange={handle} className="form-input" /></div>
          <div className="sm:col-span-2"><label className="form-label">Notes de pied de facture</label><textarea name="notes" value={form.notes} onChange={handle} className="form-input h-20 resize-none" /></div>
        </div>
        <div className="flex justify-end mt-4">
          <button className="btn btn-primary" onClick={() => alert('Sauvegardé!')}><Icon name="Save" size={16} />Sauvegarder</button>
        </div>
      </Card>
    </SettingsLayout>
  )
}

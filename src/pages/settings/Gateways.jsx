import { useState } from 'react'
import SettingsLayout from './SettingsLayout'
import Card, { CardHeader } from '../../components/ui/Card'
import Icon from '../../components/ui/Icon'

const gateways = [
  { id:'stripe',  name:'Stripe',  icon:'CreditCard',  color:'text-indigo-500', enabled:true  },
  { id:'paypal',  name:'PayPal',  icon:'Wallet',      color:'text-blue-500',   enabled:false },
  { id:'virement',name:'Virement bancaire', icon:'Building2', color:'text-gray-500', enabled:true },
]

export default function SettingsGateways() {
  const [gws, setGws] = useState(gateways)
  const toggle = id => setGws(gs => gs.map(g => g.id === id ? {...g, enabled: !g.enabled} : g))
  return (
    <SettingsLayout title="Passerelles de paiement" breadcrumbLabel="Passerelles">
      <div className="flex flex-col gap-4">
        {gws.map(gw => (
          <Card key={gw.id}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-gray-700 flex items-center justify-center">
                <Icon name={gw.icon} size={22} className={gw.color} />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 dark:text-white">{gw.name}</p>
                <p className="text-xs text-muted">{gw.enabled ? 'Activé' : 'Désactivé'}</p>
              </div>
              <button
                onClick={() => toggle(gw.id)}
                className={`relative w-11 h-6 rounded-full transition-colors ${gw.enabled ? 'bg-primary-500' : 'bg-gray-200 dark:bg-gray-600'}`}
              >
                <span className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${gw.enabled ? 'translate-x-5' : ''}`} />
              </button>
            </div>
            {gw.enabled && gw.id !== 'virement' && (
              <div className="grid sm:grid-cols-2 gap-3 mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                <div><label className="form-label">Clé publique</label><input className="form-input" placeholder="pk_live_..." /></div>
                <div><label className="form-label">Clé secrète</label><input type="password" className="form-input" placeholder="sk_live_..." /></div>
              </div>
            )}
          </Card>
        ))}
        <div className="flex justify-end">
          <button className="btn btn-primary" onClick={() => alert('Sauvegardé!')}><Icon name="Save" size={16} />Sauvegarder</button>
        </div>
      </div>
    </SettingsLayout>
  )
}

export const payments = [
  { id: 'INV-2025-001', client: 'Nexora SAS',     amount: '€ 12 400', method: 'Virement', status: 'Payé',      date: '01/06/2025', due: '01/06/2025', avatar: 'NS', avatarColor: 'bg-blue-500' },
  { id: 'INV-2025-002', client: 'TechVision',     amount: '€ 8 750',  method: 'CB',       status: 'Payé',      date: '28/05/2025', due: '05/06/2025', avatar: 'TV', avatarColor: 'bg-purple-500' },
  { id: 'INV-2025-003', client: 'Innovatek',      amount: '€ 17 200', method: 'Virement', status: 'En attente',date: '20/05/2025', due: '20/06/2025', avatar: 'IK', avatarColor: 'bg-amber-500' },
  { id: 'INV-2025-004', client: 'FuturTech',      amount: '€ 5 600',  method: 'PayPal',   status: 'En retard', date: '10/05/2025', due: '10/06/2025', avatar: 'FT', avatarColor: 'bg-red-500' },
  { id: 'INV-2025-005', client: 'AgileWorks',     amount: '€ 23 100', method: 'Virement', status: 'Payé',      date: '05/05/2025', due: '05/06/2025', avatar: 'AW', avatarColor: 'bg-teal-500' },
  { id: 'INV-2025-006', client: 'OptiFlow AG',    amount: '€ 46 500', method: 'Virement', status: 'Payé',      date: '01/05/2025', due: '01/06/2025', avatar: 'OA', avatarColor: 'bg-orange-500' },
  { id: 'INV-2025-007', client: 'Synapsys EU',    amount: '€ 31 000', method: 'CB',       status: 'En attente',date: '25/04/2025', due: '25/05/2025', avatar: 'SE', avatarColor: 'bg-cyan-500' },
  { id: 'INV-2025-008', client: 'DataStorm',      amount: '€ 4 200',  method: 'Chèque',   status: 'Annulé',    date: '15/04/2025', due: '15/05/2025', avatar: 'DS', avatarColor: 'bg-gray-500' },
]

export const paymentStatusColors = {
  'Payé':       'badge-success',
  'En attente': 'badge-warning',
  'En retard':  'badge-danger',
  'Annulé':     'badge-secondary',
}

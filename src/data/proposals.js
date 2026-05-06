export const proposals = [
  { id: 'PRO-2025-001', title: 'Audit & refonte SI',           client: 'Nexora SAS',   value: '€ 48 000', status: 'Accepté',  date: '01/06/2025', expiry: '30/06/2025', avatar: 'NS', avatarColor: 'bg-blue-500' },
  { id: 'PRO-2025-002', title: 'Migration cloud hybride',       client: 'TechVision',   value: '€ 82 000', status: 'Envoyé',   date: '28/05/2025', expiry: '28/06/2025', avatar: 'TV', avatarColor: 'bg-purple-500' },
  { id: 'PRO-2025-003', title: 'Développement app mobile',      client: 'FuturTech',    value: '€ 35 000', status: 'En cours', date: '20/05/2025', expiry: '20/06/2025', avatar: 'FT', avatarColor: 'bg-red-500' },
  { id: 'PRO-2025-004', title: 'Formation équipe DevOps',       client: 'AgileWorks',   value: '€ 9 800',  status: 'Refusé',   date: '10/05/2025', exiry: '10/06/2025',  avatar: 'AW', avatarColor: 'bg-teal-500' },
  { id: 'PRO-2025-005', title: 'CRM sur mesure Phase 1',        client: 'OptiFlow AG',  value: '€ 60 000', status: 'Accepté',  date: '05/05/2025', expiry: '05/07/2025', avatar: 'OA', avatarColor: 'bg-orange-500' },
  { id: 'PRO-2025-006', title: 'Tableau de bord BI',            client: 'Innovatek',    value: '€ 22 500', status: 'Expiré',   date: '01/04/2025', expiry: '01/05/2025', avatar: 'IK', avatarColor: 'bg-amber-500' },
]

export const proposalStatusColors = {
  'Accepté':  'badge-success',
  'Envoyé':   'badge-info',
  'En cours': 'badge-primary',
  'Refusé':   'badge-danger',
  'Expiré':   'badge-secondary',
}

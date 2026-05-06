export const projects = [
  { id: 1,  name: 'Refonte portail client Nexora',    client: 'Nexora SAS',     status: 'En cours',   priority: 'Haute',   progress: 72, budget: '€ 45 000', spent: '€ 32 400', start: '01/03/2025', end: '30/06/2025', team: ['AM','JP','LB'], tags: ['React','API'] },
  { id: 2,  name: 'Migration cloud TechVision',        client: 'TechVision',     status: 'En cours',   priority: 'Critique',progress: 45, budget: '€ 82 000', spent: '€ 36 900', start: '15/04/2025', end: '31/08/2025', team: ['MD','CR'],     tags: ['Cloud','AWS'] },
  { id: 3,  name: 'Tableau de bord analytique',        client: 'Innovatek',      status: 'Livré',      priority: 'Normale', progress: 100,budget: '€ 18 000', spent: '€ 17 200', start: '01/01/2025', end: '28/02/2025', team: ['LB'],          tags: ['BI','Charts'] },
  { id: 4,  name: 'App mobile FuturTech',              client: 'FuturTech',      status: 'En pause',   priority: 'Basse',   progress: 28, budget: '€ 35 000', spent: '€ 9 800',  start: '10/02/2025', end: '15/07/2025', team: ['AM','MD'],     tags: ['Mobile','iOS'] },
  { id: 5,  name: 'Automatisation AgileWorks',         client: 'AgileWorks',     status: 'En cours',   priority: 'Haute',   progress: 61, budget: '€ 27 500', spent: '€ 16 775', start: '01/05/2025', end: '31/07/2025', team: ['JP','CR','LB'],tags: ['Automation'] },
  { id: 6,  name: 'CRM personnalisé OptiFlow',         client: 'OptiFlow AG',    status: 'Nouveau',    priority: 'Haute',   progress: 5,  budget: '€ 120 000',spent: '€ 6 000',  start: '01/06/2025', end: '31/12/2025', team: ['AM','JP','MD','LB'], tags: ['CRM','Fullstack'] },
]

export const projectStatusColors = {
  'En cours':  'badge-primary',
  'Livré':     'badge-success',
  'En pause':  'badge-warning',
  'Nouveau':   'badge-info',
  'Annulé':    'badge-danger',
}

export const priorityColors = {
  'Critique': 'badge-danger',
  'Haute':    'badge-warning',
  'Normale':  'badge-secondary',
  'Basse':    'badge-info',
}

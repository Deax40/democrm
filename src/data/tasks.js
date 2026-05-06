export const tasks = [
  { id: 1,  title: 'Préparer démo Nexora',         project: 'Portail Nexora',     assignee: 'Alice Moreau',    priority: 'Haute',    status: 'En cours',  due: '07/06/2025', tags: ['démo','client'] },
  { id: 2,  title: 'Rédiger cahier des charges v2', project: 'CRM OptiFlow',      assignee: 'Julien Petit',    priority: 'Haute',    status: 'À faire',   due: '10/06/2025', tags: ['specs'] },
  { id: 3,  title: 'Code review PR#42',             project: 'Migration Cloud',    assignee: 'Marc Dupont',     priority: 'Normale',  status: 'En cours',  due: '08/06/2025', tags: ['tech'] },
  { id: 4,  title: 'Mettre à jour documentation',   project: 'App Mobile',        assignee: 'Laura Bernard',   priority: 'Basse',    status: 'À faire',   due: '15/06/2025', tags: ['docs'] },
  { id: 5,  title: 'Tests d\'intégration API',       project: 'Portail Nexora',    assignee: 'Marc Dupont',     priority: 'Critique', status: 'Bloqué',    due: '06/06/2025', tags: ['tests','API'] },
  { id: 6,  title: 'Réunion hebdo équipe',           project: 'Général',           assignee: 'Alice Moreau',    priority: 'Normale',  status: 'Terminé',   due: '05/06/2025', tags: ['réunion'] },
  { id: 7,  title: 'Facturer mois de mai',           project: 'Finance',           assignee: 'Julien Petit',    priority: 'Haute',    status: 'Terminé',   due: '04/06/2025', tags: ['finance'] },
  { id: 8,  title: 'Optimisation SEO landing page',  project: 'Marketing',         assignee: 'Laura Bernard',   priority: 'Basse',    status: 'À faire',   due: '20/06/2025', tags: ['SEO','web'] },
]

export const taskStatusColors = {
  'À faire':   'badge-secondary',
  'En cours':  'badge-primary',
  'Bloqué':    'badge-danger',
  'Terminé':   'badge-success',
  'Annulé':    'badge-secondary',
}

export const taskPriorityColors = {
  'Critique': 'text-red-500',
  'Haute':    'text-amber-500',
  'Normale':  'text-blue-500',
  'Basse':    'text-gray-400',
}

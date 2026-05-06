export const kpiStats = [
  {
    id: 'revenue',
    label: 'Revenus totaux',
    value: '€ 284 590',
    change: '+12.4%',
    positive: true,
    sub: 'ce mois-ci',
    color: 'bg-primary-500',
    lightColor: 'bg-primary-50 dark:bg-primary-900/30',
    iconColor: 'text-primary-500',
    icon: 'TrendingUp',
  },
  {
    id: 'leads',
    label: 'Leads actifs',
    value: '1 482',
    change: '+8.1%',
    positive: true,
    sub: 'ce trimestre',
    color: 'bg-green-500',
    lightColor: 'bg-green-50 dark:bg-green-900/30',
    iconColor: 'text-green-500',
    icon: 'UserCheck',
  },
  {
    id: 'customers',
    label: 'Clients',
    value: '3 247',
    change: '+3.6%',
    positive: true,
    sub: 'total',
    color: 'bg-amber-500',
    lightColor: 'bg-amber-50 dark:bg-amber-900/30',
    iconColor: 'text-amber-500',
    icon: 'Users',
  },
  {
    id: 'projects',
    label: 'Projets en cours',
    value: '64',
    change: '-2',
    positive: false,
    sub: 'actifs',
    color: 'bg-purple-500',
    lightColor: 'bg-purple-50 dark:bg-purple-900/30',
    iconColor: 'text-purple-500',
    icon: 'Briefcase',
  },
]

export const revenueChartSeries = [
  { name: 'Revenus', data: [31000,40000,28000,51000,42000,109000,100000,88000,74000,66000,95000,120000] },
  { name: 'Dépenses',data: [11000,32000,45000,32000,34000,52000, 41000, 31000,52000,38000,54000, 61000] },
]
export const revenueCategories = ['Jan','Fév','Mar','Avr','Mai','Jun','Jul','Aoû','Sep','Oct','Nov','Déc']

export const leadsPipeline = [
  { name: 'Nouveau',      value: 320, color: '#4361ee' },
  { name: 'Contacté',     value: 240, color: '#7367f0' },
  { name: 'Qualifié',     value: 185, color: '#00cfe8' },
  { name: 'Proposition',  value: 130, color: '#ff9f43' },
  { name: 'Négociation',  value: 87,  color: '#28c76f' },
  { name: 'Conclu',       value: 64,  color: '#ea5455' },
]

export const recentLeads = [
  { id: 1, name: 'Maxime Durand',    email: 'maxime.durand@example.com',   company: 'Nexora SAS',       status: 'Qualifié',    value: '€ 12 000', date: '05/06/2025', avatar: 'MD', avatarColor: 'bg-blue-500' },
  { id: 2, name: 'Isabelle Martin',  email: 'i.martin@techvision.fr',       company: 'TechVision',       status: 'Nouveau',     value: '€ 8 500',  date: '04/06/2025', avatar: 'IM', avatarColor: 'bg-purple-500' },
  { id: 3, name: 'Thomas Lefebvre',  email: 'thomas.l@cloud9.io',           company: 'Cloud9 Digital',   status: 'Contacté',    value: '€ 21 000', date: '03/06/2025', avatar: 'TL', avatarColor: 'bg-green-500' },
  { id: 4, name: 'Sophie Girard',    email: 'sgirard@innovatek.com',        company: 'Innovatek',        status: 'Proposition', value: '€ 35 000', date: '02/06/2025', avatar: 'SG', avatarColor: 'bg-amber-500' },
  { id: 5, name: 'Nicolas Bonnet',   email: 'n.bonnet@futurtech.fr',        company: 'FuturTech',        status: 'Négociation', value: '€ 15 600', date: '01/06/2025', avatar: 'NB', avatarColor: 'bg-red-500' },
  { id: 6, name: 'Camille Rousseau', email: 'c.rousseau@agileworks.com',    company: 'AgileWorks',       status: 'Conclu',      value: '€ 44 200', date: '31/05/2025', avatar: 'CR', avatarColor: 'bg-teal-500' },
]

export const upcomingEvents = [
  { id: 1, title: 'Démo produit – Nexora SAS',         time: '10:00',  date: 'Aujourd\'hui',  type: 'meeting',  color: 'bg-blue-500' },
  { id: 2, title: 'Appel de suivi – TechVision',        time: '14:30',  date: 'Aujourd\'hui',  type: 'call',     color: 'bg-green-500' },
  { id: 3, title: 'Présentation – FuturTech',           time: '09:00',  date: 'Demain',        type: 'meeting',  color: 'bg-purple-500' },
  { id: 4, title: 'Revue de contrat – Innovatek',       time: '11:00',  date: 'Demain',        type: 'review',   color: 'bg-amber-500' },
  { id: 5, title: 'Onboarding – AgileWorks',            time: '15:00',  date: '08/06/2025',    type: 'training', color: 'bg-teal-500' },
]

export const teamProgress = [
  { name: 'Alice Moreau',    role: 'Sales Manager',    avatar: 'AM', avatarColor: 'bg-blue-500',   tasks: 12, done: 9,  percent: 75 },
  { name: 'Julien Petit',    role: 'Account Manager',  avatar: 'JP', avatarColor: 'bg-green-500',  tasks: 8,  done: 5,  percent: 63 },
  { name: 'Laura Bernard',   role: 'Lead Specialist',  avatar: 'LB', avatarColor: 'bg-purple-500', tasks: 15, done: 11, percent: 73 },
  { name: 'Marc Dupont',     role: 'Dev Senior',       avatar: 'MD', avatarColor: 'bg-amber-500',  tasks: 10, done: 7,  percent: 70 },
]

export const salesByCategory = [
  { label: 'Logiciels SaaS', value: 42, color: '#4361ee' },
  { label: 'Conseil',        value: 28, color: '#7367f0' },
  { label: 'Intégration',    value: 18, color: '#00cfe8' },
  { label: 'Formation',      value: 12, color: '#ff9f43' },
]

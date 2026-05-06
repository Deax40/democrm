export const conversations = [
  {
    id: 1, name: 'Alice Moreau',    avatar: 'AM', avatarColor: 'bg-blue-500',
    lastMessage: 'La démo est prête pour demain matin 👍',
    time: '14:32', unread: 2, online: true,
  },
  {
    id: 2, name: 'Julien Petit',    avatar: 'JP', avatarColor: 'bg-green-500',
    lastMessage: 'Tu peux relire le cahier des charges ?',
    time: '11:15', unread: 0, online: true,
  },
  {
    id: 3, name: 'Laura Bernard',   avatar: 'LB', avatarColor: 'bg-purple-500',
    lastMessage: 'Tests d\'intégration bloqués sur l\'env staging',
    time: 'Hier',  unread: 5, online: false,
  },
  {
    id: 4, name: 'Marc Dupont',     avatar: 'MD', avatarColor: 'bg-amber-500',
    lastMessage: 'PR #42 mergé avec succès ✅',
    time: 'Hier',  unread: 0, online: false,
  },
  {
    id: 5, name: 'Maxime Durand',   avatar: 'MD', avatarColor: 'bg-red-500',
    lastMessage: 'Quand pouvez-vous me faire la démo finale ?',
    time: 'Lun',   unread: 1, online: false,
  },
]

export const chatMessages = [
  { id: 1, from: 'Alice Moreau',  avatar: 'AM', avatarColor: 'bg-blue-500',  text: 'Bonjour ! La démo pour Nexora est prête.', time: '14:00', mine: false },
  { id: 2, from: 'Moi',           avatar: 'Moi',avatarColor: 'bg-primary-500',text: 'Super ! On fait ça demain à 10h ?', time: '14:05', mine: true },
  { id: 3, from: 'Alice Moreau',  avatar: 'AM', avatarColor: 'bg-blue-500',  text: 'Parfait. J\'enverrai l\'invitation Google Meet.', time: '14:10', mine: false },
  { id: 4, from: 'Moi',           avatar: 'Moi',avatarColor: 'bg-primary-500',text: 'Ok merci Alice 👍', time: '14:15', mine: true },
  { id: 5, from: 'Alice Moreau',  avatar: 'AM', avatarColor: 'bg-blue-500',  text: 'La démo est prête pour demain matin 👍', time: '14:32', mine: false },
]

export const emails = [
  { id: 1,  from: 'maxime.durand@nexora.fr',  subject: 'Suivi de la proposition PRO-2025-001', preview: 'Bonjour, je voulais faire un point sur...', date: 'Aujourd\'hui 14:32', read: false, starred: true,  folder: 'inbox', avatar: 'MD', avatarColor: 'bg-blue-500' },
  { id: 2,  from: 'noreply@stripe.com',        subject: 'Paiement reçu – € 12 400',            preview: 'Un paiement a été crédité sur votre...', date: 'Aujourd\'hui 11:15', read: false, starred: false, folder: 'inbox', avatar: 'ST', avatarColor: 'bg-purple-500' },
  { id: 3,  from: 'i.martin@techvision.fr',    subject: 'Question technique – Migration cloud', preview: 'Bonjour, nous avons une question sur...', date: 'Hier 09:45',        read: true,  starred: false, folder: 'inbox', avatar: 'IM', avatarColor: 'bg-green-500' },
  { id: 4,  from: 'sgirard@innovatek.com',     subject: 'Réunion de revue de projet',           preview: 'Je vous contacte pour planifier une...', date: 'Lun 16:30',         read: true,  starred: true,  folder: 'inbox', avatar: 'SG', avatarColor: 'bg-amber-500' },
  { id: 5,  from: 'newsletter@hubspot.com',    subject: 'CRM Trends 2025 – Rapport complet',   preview: 'Découvrez les dernières tendances...', date: 'Dim 10:00',          read: true,  starred: false, folder: 'inbox', avatar: 'HS', avatarColor: 'bg-red-500' },
]

export const calendarEvents = [
  { id: 1, title: 'Démo Nexora SAS',         start: '2025-06-07T10:00', end: '2025-06-07T11:00', color: '#4361ee', type: 'Réunion' },
  { id: 2, title: 'Appel TechVision',         start: '2025-06-07T14:30', end: '2025-06-07T15:00', color: '#28c76f', type: 'Appel' },
  { id: 3, title: 'Présentation FuturTech',   start: '2025-06-08T09:00', end: '2025-06-08T10:30', color: '#7367f0', type: 'Réunion' },
  { id: 4, title: 'Revue contrat Innovatek',  start: '2025-06-09T11:00', end: '2025-06-09T12:00', color: '#ff9f43', type: 'Admin' },
  { id: 5, title: 'Onboarding AgileWorks',    start: '2025-06-10T15:00', end: '2025-06-10T17:00', color: '#00cfe8', type: 'Formation' },
  { id: 6, title: 'Sprint review interne',    start: '2025-06-12T10:00', end: '2025-06-12T11:00', color: '#ea5455', type: 'Interne' },
]

export const storageFiles = [
  { id: 1,  name: 'Cahier des charges – Nexora.pdf',   type: 'pdf',  size: '2.4 Mo', modified: '05/06/2025', shared: true },
  { id: 2,  name: 'Design mockups v3.fig',             type: 'fig',  size: '18 Mo',  modified: '03/06/2025', shared: false },
  { id: 3,  name: 'Export données clients Q2.xlsx',    type: 'xlsx', size: '1.1 Mo', modified: '01/06/2025', shared: true },
  { id: 4,  name: 'Vidéo démo produit.mp4',            type: 'mp4',  size: '124 Mo', modified: '28/05/2025', shared: false },
  { id: 5,  name: 'Contrat OptiFlow AG.docx',          type: 'docx', size: '890 Ko', modified: '25/05/2025', shared: true },
  { id: 6,  name: 'Architecture cloud.png',            type: 'img',  size: '3.2 Mo', modified: '20/05/2025', shared: false },
  { id: 7,  name: 'Notes réunion – 15 mai.txt',        type: 'txt',  size: '24 Ko',  modified: '15/05/2025', shared: false },
  { id: 8,  name: 'Logo DeaX officiel.zip',            type: 'zip',  size: '8.7 Mo', modified: '01/05/2025', shared: true },
]

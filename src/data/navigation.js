// Navigation structure – single source of truth for sidebar + mega menu
export const navItems = [
  {
    section: 'Principal',
    items: [
      {
        id: 'dashboard',
        label: 'Tableau de bord',
        icon: 'LayoutDashboard',
        children: [
          { label: 'CRM Dashboard', path: '/' },
          { label: 'Analytiques',   path: '/analytics' },
        ],
      },
    ],
  },
  {
    section: 'Applications',
    items: [
      {
        id: 'apps',
        label: 'Applications',
        icon: 'Grid',
        children: [
          { label: 'Chat',      path: '/apps/chat' },
          { label: 'Email',     path: '/apps/email' },
          { label: 'Tâches',    path: '/apps/tasks' },
          { label: 'Notes',     path: '/apps/notes' },
          { label: 'Stockage',  path: '/apps/storage' },
          { label: 'Calendrier',path: '/apps/calendar' },
        ],
      },
      {
        id: 'reports',
        label: 'Rapports',
        icon: 'BarChart2',
        children: [
          { label: 'Rapport Ventes',           path: '/reports/sales' },
          { label: 'Rapport Leads',            path: '/reports/leads' },
          { label: 'Rapport Projets',          path: '/reports/projects' },
          { label: 'Rapport Feuilles de temps',path: '/reports/timesheets' },
        ],
      },
    ],
  },
  {
    section: 'CRM',
    items: [
      {
        id: 'customers',
        label: 'Clients',
        icon: 'Users',
        children: [
          { label: 'Liste clients',  path: '/customers' },
          { label: 'Détail client',  path: '/customers/1' },
          { label: 'Créer client',   path: '/customers/create' },
        ],
      },
      {
        id: 'leads',
        label: 'Leads',
        icon: 'UserCheck',
        children: [
          { label: 'Liste leads', path: '/leads' },
          { label: 'Détail lead', path: '/leads/1' },
          { label: 'Créer lead',  path: '/leads/create' },
        ],
      },
      {
        id: 'projects',
        label: 'Projets',
        icon: 'Briefcase',
        children: [
          { label: 'Liste projets', path: '/projects' },
          { label: 'Détail projet', path: '/projects/1' },
          { label: 'Créer projet',  path: '/projects/create' },
        ],
      },
    ],
  },
  {
    section: 'Finance',
    items: [
      {
        id: 'proposals',
        label: 'Propositions',
        icon: 'FileText',
        children: [
          { label: 'Liste',           path: '/proposals' },
          { label: 'Voir proposition',path: '/proposals/1' },
          { label: 'Créer',           path: '/proposals/create' },
        ],
      },
      {
        id: 'payments',
        label: 'Paiements',
        icon: 'CreditCard',
        children: [
          { label: 'Paiements',       path: '/payments' },
          { label: 'Voir facture',    path: '/invoice/1' },
          { label: 'Créer facture',   path: '/invoice/create' },
        ],
      },
    ],
  },
  {
    section: 'Interface',
    items: [
      {
        id: 'widgets',
        label: 'Widgets',
        icon: 'Layers',
        children: [
          { label: 'Listes',       path: '/widgets/lists' },
          { label: 'Tableaux',     path: '/widgets/tables' },
          { label: 'Graphiques',   path: '/widgets/charts' },
          { label: 'Statistiques', path: '/widgets/statistics' },
          { label: 'Divers',       path: '/widgets/misc' },
        ],
      },
      {
        id: 'auth',
        label: 'Authentification',
        icon: 'Lock',
        children: [
          { label: 'Connexion Cover',       path: '/auth/login-cover' },
          { label: 'Connexion Minimal',     path: '/auth/login-minimal' },
          { label: 'Inscription Cover',     path: '/auth/register-cover' },
          { label: 'Inscription Minimal',   path: '/auth/register-minimal' },
          { label: 'Mot de passe oublié',   path: '/auth/reset-cover' },
          { label: 'Vérification OTP',      path: '/auth/verify-cover' },
          { label: 'Maintenance',           path: '/auth/maintenance' },
          { label: 'Page 404',              path: '/auth/404' },
        ],
      },
    ],
  },
  {
    section: 'Système',
    items: [
      {
        id: 'settings',
        label: 'Paramètres',
        icon: 'Settings',
        children: [
          { label: 'Général',       path: '/settings/general' },
          { label: 'SEO',           path: '/settings/seo' },
          { label: 'Étiquettes',    path: '/settings/tags' },
          { label: 'Email',         path: '/settings/email' },
          { label: 'Tâches',        path: '/settings/tasks' },
          { label: 'Leads',         path: '/settings/leads' },
          { label: 'Clients',       path: '/settings/customers' },
          { label: 'Finance',       path: '/settings/finance' },
          { label: 'Passerelles',   path: '/settings/gateways' },
          { label: 'Localisation',  path: '/settings/localization' },
          { label: 'reCAPTCHA',     path: '/settings/recaptcha' },
          { label: 'Support',       path: '/settings/support' },
          { label: 'Divers',        path: '/settings/misc' },
        ],
      },
      {
        id: 'help',
        label: 'Aide',
        icon: 'HelpCircle',
        path: '/help',
      },
    ],
  },
]

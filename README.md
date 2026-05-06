# DeaX CRM

Dashboard CRM/admin complet, responsive, thème clair/sombre, entièrement en français.

## Stack technique

| Couche     | Technologie           |
|------------|-----------------------|
| Framework  | React 18 + Vite 5     |
| UI         | Tailwind CSS 3        |
| Routing    | React Router v6       |
| Charts     | ApexCharts (react-apexcharts) |
| Icônes     | Lucide React          |
| Utilitaires| clsx                  |

## Installation & lancement

```bash
# 1. Entrer dans le dossier
cd deax-crm

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de dev
npm run dev
```

Ouvrez [http://localhost:5173](http://localhost:5173) dans votre navigateur.

### Build de production

```bash
npm run build      # compile dans dist/
npm run preview    # prévisualise le build
```

## Structure du projet

```
deax-crm/
├── src/
│   ├── components/
│   │   ├── charts/        # ApexWrapper (dark mode auto)
│   │   ├── layout/        # Layout, Sidebar, Header, AuthLayout, Breadcrumb
│   │   └── ui/            # Avatar, Badge, Card, DataTable, Dropdown,
│   │                      # Icon, KpiCard, Modal, ProgressBar, Tabs
│   ├── context/
│   │   └── ThemeContext.jsx   # dark/light + sidebar state → localStorage
│   ├── data/              # Données mockées (remplacer par des appels API)
│   │   ├── customers.js
│   │   ├── dashboard.js
│   │   ├── leads.js
│   │   ├── messages.js    # chat, email, calendar, storage
│   │   ├── navigation.js  # structure sidebar (source unique)
│   │   ├── payments.js
│   │   ├── projects.js
│   │   ├── proposals.js
│   │   └── tasks.js
│   ├── pages/
│   │   ├── dashboard/     # Index (CRM), Analytics
│   │   ├── apps/          # Chat, Email, Tasks, Notes, Storage, Calendar
│   │   ├── reports/       # Sales, Leads, Projects, Timesheets
│   │   ├── customers/     # List, View, Create
│   │   ├── leads/         # List, View, Create
│   │   ├── projects/      # List, View, Create
│   │   ├── proposals/     # List, View, Create
│   │   ├── payments/      # List, InvoiceView, InvoiceCreate
│   │   ├── widgets/       # Lists, Tables, Charts, Statistics, Misc
│   │   ├── auth/          # Login, Register, ResetPassword, VerifyOtp,
│   │   │                  # Maintenance, NotFound404 (3 variants chacun)
│   │   ├── settings/      # 13 pages de paramètres
│   │   └── help/          # Knowledgebase
│   ├── App.jsx            # Routes (toutes les 60+ routes)
│   ├── index.css          # Tailwind + composants CSS custom
│   └── main.jsx
└── ...
```

## Comment ajouter une nouvelle page

1. **Créer le fichier** dans `src/pages/<section>/MaPage.jsx` :

```jsx
import Layout from '../../components/layout/Layout'

export default function MaPage() {
  return (
    <Layout title="Ma Page" breadcrumb={[{ label: 'Section' }, { label: 'Ma Page' }]}>
      {/* contenu */}
    </Layout>
  )
}
```

2. **Ajouter la route** dans `src/App.jsx` :

```jsx
import MaPage from './pages/<section>/MaPage'
// ...
<Route path="/section/ma-page" element={<MaPage />} />
```

3. **Ajouter au menu** dans `src/data/navigation.js` :

```js
{ label: 'Ma Page', path: '/section/ma-page' }
```

C'est tout — la page apparaît automatiquement dans le sidebar et le breadcrumb.

## Brancher une vraie API

Tous les fichiers `src/data/*.js` contiennent des tableaux de données mockées.
Pour brancher une API :

```js
// Exemple : remplacer customers.js par un hook
import { useEffect, useState } from 'react'

export function useCustomers() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('/api/customers').then(r => r.json()).then(setData)
  }, [])
  return data
}
```

Puis dans la page :
```jsx
import { useCustomers } from '../../data/customers'
const customers = useCustomers()
```

## Fonctionnalités

- ✅ Dashboard CRM avec KPIs, graphiques (area, bar, donut, pipeline)
- ✅ Analytiques avec trafic, conversions, appareils
- ✅ Chat temps réel (mocké)
- ✅ Email avec inbox, lecture, composition
- ✅ Kanban des tâches (drag-friendly layout)
- ✅ Notes avec éditeur
- ✅ Stockage fichiers avec grid
- ✅ Calendrier mensuel avec événements
- ✅ 4 rapports avec graphiques
- ✅ CRUD complet : Clients, Leads, Projets, Propositions, Factures
- ✅ DataTable : recherche, tri, pagination
- ✅ 5 pages widgets (listes, tableaux, graphiques, stats, divers)
- ✅ 24 pages auth (login/register/reset/verify/maintenance/404 × 3 variantes)
- ✅ 13 pages de paramètres
- ✅ Base de connaissances avec FAQ accordion
- ✅ Thème clair/sombre (localStorage)
- ✅ Sidebar collapsible
- ✅ Responsive desktop/tablette/mobile
- ✅ 404 interne

## Licence

Code original DeaX CRM — usage libre.

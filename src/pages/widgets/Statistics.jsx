import Layout from '../../components/layout/Layout'
import Card, { CardHeader } from '../../components/ui/Card'
import Icon from '../../components/ui/Icon'
import ProgressBar from '../../components/ui/ProgressBar'
import Avatar from '../../components/ui/Avatar'

const stats = [
  { label:'Revenu total',    value:'€ 284k', icon:'TrendingUp',  color:'text-primary-500', bg:'bg-primary-50 dark:bg-primary-900/30', change:'+12%', positive:true },
  { label:'Nouveaux clients',value:'124',    icon:'UserPlus',    color:'text-green-500',   bg:'bg-green-50 dark:bg-green-900/30',    change:'+8%',  positive:true },
  { label:'Tâches terminées',value:'342',    icon:'CheckSquare', color:'text-amber-500',   bg:'bg-amber-50 dark:bg-amber-900/30',    change:'+22%', positive:true },
  { label:'Bugs ouverts',    value:'18',     icon:'Bug',         color:'text-red-500',     bg:'bg-red-50 dark:bg-red-900/30',        change:'-3',   positive:true },
  { label:'Uptime serveur',  value:'99.9%',  icon:'Server',      color:'text-teal-500',    bg:'bg-teal-50 dark:bg-teal-900/30',      change:'0.1%', positive:false },
  { label:'Tickets support', value:'47',     icon:'Headphones',  color:'text-purple-500',  bg:'bg-purple-50 dark:bg-purple-900/30',  change:'+5',   positive:false },
  { label:'Réunions mois',   value:'28',     icon:'Video',       color:'text-blue-500',    bg:'bg-blue-50 dark:bg-blue-900/30',      change:'+4',   positive:true },
  { label:'NPS score',       value:'72',     icon:'Star',        color:'text-orange-500',  bg:'bg-orange-50 dark:bg-orange-900/30',  change:'+3',   positive:true },
]

const goals = [
  { label:'Revenu Q2',         current:284590, target:350000, color:'primary' },
  { label:'Nouveaux leads',    current:842,    target:1000,   color:'success' },
  { label:'Satisfaction client',current:72,   target:80,     color:'warning' },
  { label:'Tâches clôturées',  current:342,    target:400,    color:'purple' },
]

export default function WidgetsStatistics() {
  return (
    <Layout title="Widgets – Statistiques" breadcrumb={[{ label:'Widgets' }, { label:'Statistiques' }]}>
      {/* KPI grid */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        {stats.map(s => (
          <div key={s.label} className="card p-4 flex items-center gap-3">
            <div className={`kpi-icon ${s.bg}`}><Icon name={s.icon} size={20} className={s.color} /></div>
            <div>
              <p className="text-xl font-bold text-gray-900 dark:text-white">{s.value}</p>
              <p className="text-xs text-muted">{s.label}</p>
              <span className={`badge text-xs mt-0.5 ${s.positive ? 'badge-success' : 'badge-danger'}`}>{s.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid xl:grid-cols-2 gap-4">
        {/* Goals */}
        <Card>
          <CardHeader title="Objectifs du trimestre" subtitle="Progression vers les cibles Q2" />
          <div className="flex flex-col gap-5">
            {goals.map(g => {
              const pct = Math.min(100, Math.round((g.current / g.target) * 100))
              return (
                <div key={g.label}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium text-gray-800 dark:text-gray-200">{g.label}</span>
                    <span className="text-muted">{g.current.toLocaleString('fr-FR')} / {g.target.toLocaleString('fr-FR')}</span>
                  </div>
                  <ProgressBar value={pct} color={g.color} showLabel />
                </div>
              )
            })}
          </div>
        </Card>

        {/* Leaderboard */}
        <Card>
          <CardHeader title="Classement équipe" subtitle="Performance du mois" />
          <div className="flex flex-col gap-3">
            {[
              { rank:1, name:'Alice Moreau',  score:'94 pts', avatar:'AM', color:'bg-blue-500',   badge:'🥇' },
              { rank:2, name:'Laura Bernard', score:'88 pts', avatar:'LB', color:'bg-purple-500', badge:'🥈' },
              { rank:3, name:'Marc Dupont',   score:'81 pts', avatar:'MD', color:'bg-amber-500',  badge:'🥉' },
              { rank:4, name:'Julien Petit',  score:'76 pts', avatar:'JP', color:'bg-green-500',  badge:'4' },
            ].map(m => (
              <div key={m.rank} className="flex items-center gap-3">
                <span className="w-6 text-center text-sm font-bold text-muted">{m.badge}</span>
                <Avatar initials={m.avatar} color={m.color} size="sm" />
                <span className="flex-1 text-sm font-medium text-gray-800 dark:text-gray-200">{m.name}</span>
                <span className="text-sm font-bold text-primary-500">{m.score}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Layout>
  )
}

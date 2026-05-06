import Layout from '../../components/layout/Layout'
import Card, { CardHeader } from '../../components/ui/Card'
import ApexWrapper from '../../components/charts/ApexWrapper'
import ProgressBar from '../../components/ui/ProgressBar'
import { projects } from '../../data/projects'

export default function ReportProjects() {
  const statusData = [
    projects.filter(p => p.status==='En cours').length,
    projects.filter(p => p.status==='Livré').length,
    projects.filter(p => p.status==='En pause').length,
    projects.filter(p => p.status==='Nouveau').length,
  ]

  const donutOpts = {
    chart:{ type:'donut' },
    labels:['En cours','Livré','En pause','Nouveau'],
    colors:['#4361ee','#28c76f','#ff9f43','#00cfe8'],
    plotOptions:{ pie:{ donut:{ size:'70%' } } },
    legend:{ position:'bottom' },
    dataLabels:{ enabled:false },
  }

  return (
    <Layout title="Rapport Projets" breadcrumb={[{ label:'Rapports' }, { label:'Projets' }]}>
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        {[
          { label:'Projets actifs', value:'4',       bg:'bg-primary-50 dark:bg-primary-900/20', color:'text-primary-500' },
          { label:'Livrés',         value:'1',       bg:'bg-green-50 dark:bg-green-900/20',     color:'text-green-500' },
          { label:'Budget total',   value:'€ 327k',  bg:'bg-amber-50 dark:bg-amber-900/20',     color:'text-amber-500' },
          { label:'Avancement moy', value:'52%',     bg:'bg-purple-50 dark:bg-purple-900/20',   color:'text-purple-500' },
        ].map(k => (
          <div key={k.label} className={`card p-4 ${k.bg}`}>
            <p className={`text-xl font-bold ${k.color}`}>{k.value}</p>
            <p className="text-xs text-muted mt-0.5">{k.label}</p>
          </div>
        ))}
      </div>

      <div className="grid xl:grid-cols-2 gap-4">
        <Card>
          <CardHeader title="Statut des projets" />
          <ApexWrapper options={donutOpts} series={statusData} type="donut" height={280} />
        </Card>
        <Card>
          <CardHeader title="Avancement par projet" />
          <div className="flex flex-col gap-4">
            {projects.map(p => (
              <div key={p.id}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-700 dark:text-gray-300 font-medium truncate">{p.name}</span>
                  <span className="text-muted flex-shrink-0 ml-2">{p.progress}%</span>
                </div>
                <ProgressBar value={p.progress} color={p.progress === 100 ? 'success' : 'primary'} />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Layout>
  )
}

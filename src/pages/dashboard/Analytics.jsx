import Layout from '../../components/layout/Layout'
import Card, { CardHeader } from '../../components/ui/Card'
import KpiCard from '../../components/ui/KpiCard'
import ApexWrapper from '../../components/charts/ApexWrapper'

const kpi = [
  { id:'visits',   label:'Visites site',    value:'24 812',  change:'+18%', positive:true,  sub:'ce mois', color:'bg-blue-500',   lightColor:'bg-blue-50 dark:bg-blue-900/30',   iconColor:'text-blue-500',   icon:'Globe' },
  { id:'conv',     label:'Taux conversion', value:'3.42 %',  change:'+0.8%',positive:true,  sub:'leads',   color:'bg-green-500',  lightColor:'bg-green-50 dark:bg-green-900/30', iconColor:'text-green-500',  icon:'TrendingUp' },
  { id:'bounce',   label:'Taux de rebond',  value:'41.2 %',  change:'-2.1%',positive:true,  sub:'pages',   color:'bg-amber-500',  lightColor:'bg-amber-50 dark:bg-amber-900/30', iconColor:'text-amber-500',  icon:'ArrowLeftRight' },
  { id:'session',  label:'Durée session',   value:'4 min 32',change:'+12%', positive:true,  sub:'moy.',    color:'bg-purple-500', lightColor:'bg-purple-50 dark:bg-purple-900/30',iconColor:'text-purple-500', icon:'Clock' },
]

const months = ['Jan','Fév','Mar','Avr','Mai','Jun','Jul','Aoû','Sep','Oct','Nov','Déc']

const trafficSeries = [
  { name: 'Organique', data: [3200,4100,3800,5200,4700,6300,5900,7100,6500,8200,7600,9400] },
  { name: 'Payant',    data: [1100,1400,1300,1900,1600,2100,2000,2400,2100,2700,2500,3100] },
  { name: 'Référence', data: [800, 900, 1000,1200,1100,1400,1300,1600,1500,1800,1700,2000] },
]

const conversionSeries = [{ name: 'Conversions', data: [42,55,41,67,55,72,68,83,75,92,88,103] }]

const deviceSeries = [62, 28, 10]
const deviceOptions = {
  chart: { type: 'donut' },
  labels: ['Mobile','Desktop','Tablette'],
  colors: ['#4361ee','#28c76f','#ff9f43'],
  plotOptions: { pie: { donut: { size: '70%' } } },
  legend: { position: 'bottom' },
  dataLabels: { enabled: false },
}

const topPages = [
  { page: '/accueil',         views: 8420, bounce: '32%' },
  { page: '/tarifs',          views: 5210, bounce: '45%' },
  { page: '/contact',         views: 3870, bounce: '28%' },
  { page: '/blog',            views: 2940, bounce: '51%' },
  { page: '/demo-gratuite',   views: 2180, bounce: '19%' },
]

export default function Analytics() {
  const trafficOpts = {
    chart: { type: 'bar', stacked: true },
    plotOptions: { bar: { borderRadius: 4, columnWidth: '60%' } },
    dataLabels: { enabled: false },
    xaxis: { categories: months },
    colors: ['#4361ee','#7367f0','#00cfe8'],
    legend: { position: 'top' },
  }

  const convOpts = {
    chart: { type: 'line' },
    stroke: { curve: 'smooth', width: 3 },
    dataLabels: { enabled: false },
    xaxis: { categories: months },
    colors: ['#28c76f'],
    fill: { type: 'gradient', gradient: { opacityFrom: 0.3, opacityTo: 0.05 } },
    markers: { size: 4 },
  }

  return (
    <Layout title="Analytiques" breadcrumb={[{ label: 'Tableau de bord', path: '/' }, { label: 'Analytiques' }]}>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        {kpi.map(k => <KpiCard key={k.id} {...k} />)}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mb-4">
        <div className="xl:col-span-2">
          <Card>
            <CardHeader title="Sources de trafic" subtitle="Visiteurs par canal – 2025" />
            <ApexWrapper options={trafficOpts} series={trafficSeries} type="bar" height={280} />
          </Card>
        </div>
        <Card>
          <CardHeader title="Appareils" subtitle="Répartition des sessions" />
          <ApexWrapper options={deviceOptions} series={deviceSeries} type="donut" height={280} />
        </Card>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <div className="xl:col-span-2">
          <Card>
            <CardHeader title="Évolution des conversions" subtitle="Nouvelles conversions par mois" />
            <ApexWrapper options={convOpts} series={conversionSeries} type="area" height={240} />
          </Card>
        </div>
        <Card>
          <CardHeader title="Top pages" subtitle="Pages les plus visitées" />
          <div className="flex flex-col gap-3">
            {topPages.map((p, i) => (
              <div key={i} className="flex items-center justify-between gap-2">
                <span className="text-sm text-gray-700 dark:text-gray-300 truncate">{p.page}</span>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-sm font-semibold">{p.views.toLocaleString('fr-FR')}</span>
                  <span className="text-xs text-muted">{p.bounce}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Layout>
  )
}

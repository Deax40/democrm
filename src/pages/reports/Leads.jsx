import Layout from '../../components/layout/Layout'
import Card, { CardHeader } from '../../components/ui/Card'
import ApexWrapper from '../../components/charts/ApexWrapper'
import { leadsPipeline } from '../../data/dashboard'

export default function ReportLeads() {
  const funnelOpts = {
    chart: { type:'bar' },
    plotOptions: { bar: { horizontal:true, borderRadius:6, barHeight:'60%' } },
    dataLabels: { enabled:true, formatter: v => v },
    xaxis: { categories: leadsPipeline.map(l => l.name) },
    colors: leadsPipeline.map(l => l.color),
    fill: { colors: leadsPipeline.map(l => l.color) },
  }
  const funnelSeries = [{ name:'Leads', data: leadsPipeline.map(l => l.value) }]

  const monthlyOpts = {
    chart:{ type:'line' },
    stroke:{ curve:'smooth', width:3 },
    dataLabels:{ enabled:false },
    xaxis:{ categories:['Jan','Fév','Mar','Avr','Mai','Jun','Jul','Aoû','Sep','Oct','Nov','Déc'] },
    colors:['#4361ee','#28c76f'],
    markers:{ size:4 },
  }
  const monthlySeries = [
    { name:'Nouveaux leads',  data:[42,58,35,72,65,88,76,94,82,101,95,112] },
    { name:'Leads convertis', data:[12,18,9,24,21,28,23,31,26,35,31,38] },
  ]

  return (
    <Layout title="Rapport Leads" breadcrumb={[{ label:'Rapports' }, { label:'Leads' }]}>
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        {[
          { label:'Total leads',      value:'1 482', change:'+8.1%' },
          { label:'Taux conversion',  value:'24.8%', change:'+2.3%' },
          { label:'Valeur pipeline',  value:'€ 542k',change:'+15%' },
          { label:'Leads perdus',     value:'287',   change:'-12%' },
        ].map(k => (
          <div key={k.label} className="card p-4">
            <p className="text-xl font-bold text-gray-900 dark:text-white">{k.value}</p>
            <p className="text-xs text-muted">{k.label}</p>
            <span className="badge badge-success mt-1">{k.change}</span>
          </div>
        ))}
      </div>
      <div className="grid xl:grid-cols-2 gap-4">
        <Card>
          <CardHeader title="Pipeline par étape" />
          <ApexWrapper options={funnelOpts} series={funnelSeries} type="bar" height={280} />
        </Card>
        <Card>
          <CardHeader title="Évolution mensuelle" />
          <ApexWrapper options={monthlyOpts} series={monthlySeries} type="line" height={280} />
        </Card>
      </div>
    </Layout>
  )
}

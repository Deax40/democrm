import Layout from '../../components/layout/Layout'
import Card, { CardHeader } from '../../components/ui/Card'
import ApexWrapper from '../../components/charts/ApexWrapper'
import { revenueChartSeries, revenueCategories } from '../../data/dashboard'

const topClients = [
  { name:'OptiFlow AG',  revenue:'€ 210 500', growth:'+24%', orders:12 },
  { name:'Nexora SAS',   revenue:'€ 84 200',  growth:'+8%',  orders:8 },
  { name:'Synapsys EU',  revenue:'€ 128 000', growth:'+18%', orders:15 },
  { name:'AgileWorks',   revenue:'€ 77 800',  growth:'+5%',  orders:6 },
  { name:'Sophie Girard',revenue:'€ 95 300',  growth:'+12%', orders:9 },
]

export default function ReportSales() {
  const barOpts = {
    chart: { type:'bar' },
    plotOptions: { bar: { borderRadius:6, columnWidth:'50%' } },
    dataLabels: { enabled:false },
    xaxis: { categories: revenueCategories },
    colors: ['#4361ee','#28c76f'],
    legend: { position:'top' },
  }

  return (
    <Layout title="Rapport Ventes" breadcrumb={[{ label:'Rapports' }, { label:'Ventes' }]}>
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        {[
          { label:'CA total',       value:'€ 284 590', change:'+12.4%' },
          { label:'Nouvelles ventes',value:'64',        change:'+8%' },
          { label:'Panier moyen',   value:'€ 4 447',   change:'+3.1%' },
          { label:'Taux de succès', value:'73.4%',      change:'+2.1%' },
        ].map(k => (
          <div key={k.label} className="card p-4">
            <p className="text-xl font-bold text-gray-900 dark:text-white">{k.value}</p>
            <p className="text-xs text-muted">{k.label}</p>
            <span className="badge badge-success mt-1">{k.change}</span>
          </div>
        ))}
      </div>

      <div className="grid xl:grid-cols-2 gap-4 mb-4">
        <Card>
          <CardHeader title="Revenus mensuels" subtitle="2025" />
          <ApexWrapper options={barOpts} series={revenueChartSeries} type="bar" height={280} />
        </Card>
        <Card>
          <CardHeader title="Top 5 clients" subtitle="Par chiffre d'affaires" />
          <table className="data-table">
            <thead><tr><th>Client</th><th>Revenus</th><th>Croissance</th><th>Commandes</th></tr></thead>
            <tbody>
              {topClients.map(c => (
                <tr key={c.name}>
                  <td className="font-medium">{c.name}</td>
                  <td className="font-semibold">{c.revenue}</td>
                  <td><span className="badge badge-success">{c.growth}</span></td>
                  <td>{c.orders}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </Layout>
  )
}

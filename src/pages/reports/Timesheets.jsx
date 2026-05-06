import Layout from '../../components/layout/Layout'
import Card, { CardHeader } from '../../components/ui/Card'
import Badge from '../../components/ui/Badge'
import ApexWrapper from '../../components/charts/ApexWrapper'

const timesheets = [
  { member:'Alice Moreau',   week:'S22', mon:8, tue:7, wed:8, thu:6, fri:7, total:36, status:'Validé' },
  { member:'Julien Petit',   week:'S22', mon:7, tue:8, wed:7, thu:8, fri:6, total:36, status:'Validé' },
  { member:'Laura Bernard',  week:'S22', mon:8, tue:8, wed:9, thu:7, fri:8, total:40, status:'En attente' },
  { member:'Marc Dupont',    week:'S22', mon:6, tue:7, wed:8, thu:7, fri:7, total:35, status:'Validé' },
]

export default function ReportTimesheets() {
  const heatmapOpts = {
    chart:{ type:'heatmap' },
    dataLabels:{ enabled:true },
    xaxis:{ categories:['Lun','Mar','Mer','Jeu','Ven'] },
    colors:['#4361ee'],
  }
  const heatmapSeries = timesheets.map(t => ({
    name: t.member.split(' ')[0],
    data: [t.mon, t.tue, t.wed, t.thu, t.fri],
  }))

  return (
    <Layout title="Feuilles de temps" breadcrumb={[{ label:'Rapports' }, { label:'Feuilles de temps' }]}>
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        {[
          { label:'Total heures S22', value:'147 h' },
          { label:'Heures facturables', value:'132 h' },
          { label:'Heures sup.',        value:'7 h' },
          { label:'Taux facturation',   value:'89.8%' },
        ].map(k => (
          <div key={k.label} className="card p-4">
            <p className="text-xl font-bold text-gray-900 dark:text-white">{k.value}</p>
            <p className="text-xs text-muted">{k.label}</p>
          </div>
        ))}
      </div>

      <div className="grid xl:grid-cols-2 gap-4">
        <Card>
          <CardHeader title="Heatmap des heures" subtitle="Semaine 22" />
          <ApexWrapper options={heatmapOpts} series={heatmapSeries} type="heatmap" height={220} />
        </Card>
        <Card padding={false}>
          <div className="p-4 pb-0">
            <CardHeader title="Détail par collaborateur" />
          </div>
          <table className="data-table">
            <thead>
              <tr><th>Collaborateur</th><th>Lun</th><th>Mar</th><th>Mer</th><th>Jeu</th><th>Ven</th><th>Total</th><th>Statut</th></tr>
            </thead>
            <tbody>
              {timesheets.map(t => (
                <tr key={t.member}>
                  <td className="font-medium text-sm">{t.member}</td>
                  {[t.mon,t.tue,t.wed,t.thu,t.fri].map((h,i) => <td key={i} className="text-center text-sm">{h}h</td>)}
                  <td className="font-bold text-sm">{t.total}h</td>
                  <td><Badge variant={t.status==='Validé'?'success':'warning'}>{t.status}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </Layout>
  )
}

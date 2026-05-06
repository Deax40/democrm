import Layout from '../../components/layout/Layout'
import Card, { CardHeader } from '../../components/ui/Card'
import ApexWrapper from '../../components/charts/ApexWrapper'

const months = ['Jan','Fév','Mar','Avr','Mai','Jun','Jul','Aoû','Sep','Oct','Nov','Déc']

export default function WidgetsCharts() {
  return (
    <Layout title="Widgets – Graphiques" breadcrumb={[{ label:'Widgets' }, { label:'Graphiques' }]}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader title="Graphique en aires" subtitle="Exemple area chart" />
          <ApexWrapper
            options={{ xaxis:{ categories:months }, colors:['#4361ee'], dataLabels:{ enabled:false }, stroke:{ curve:'smooth', width:2 }, fill:{ type:'gradient', gradient:{ opacityFrom:0.4, opacityTo:0.05 } } }}
            series={[{ name:'Valeur', data:[31,40,28,51,42,109,100,88,74,66,95,120] }]}
            type="area" height={240}
          />
        </Card>
        <Card>
          <CardHeader title="Histogramme" subtitle="Exemple bar chart" />
          <ApexWrapper
            options={{ xaxis:{ categories:months }, colors:['#28c76f'], plotOptions:{ bar:{ borderRadius:4, columnWidth:'50%' } }, dataLabels:{ enabled:false } }}
            series={[{ name:'Ventes', data:[44,55,41,67,22,43,21,41,56,27,43,56] }]}
            type="bar" height={240}
          />
        </Card>
        <Card>
          <CardHeader title="Graphique linéaire" subtitle="Multi-séries" />
          <ApexWrapper
            options={{ xaxis:{ categories:months }, colors:['#4361ee','#ff9f43'], stroke:{ curve:'smooth', width:2 }, dataLabels:{ enabled:false }, markers:{ size:4 } }}
            series={[{ name:'Série A', data:[12,19,3,5,2,3,7,8,5,9,4,11] }, { name:'Série B', data:[7,11,5,8,3,7,12,5,3,8,6,9] }]}
            type="line" height={240}
          />
        </Card>
        <Card>
          <CardHeader title="Donut / Camembert" subtitle="Répartition" />
          <ApexWrapper
            options={{ labels:['Catégorie A','Catégorie B','Catégorie C','Catégorie D'], colors:['#4361ee','#7367f0','#28c76f','#ff9f43'], plotOptions:{ pie:{ donut:{ size:'65%' } } }, legend:{ position:'bottom' }, dataLabels:{ enabled:false } }}
            series={[44,28,18,10]}
            type="donut" height={240}
          />
        </Card>
        <Card>
          <CardHeader title="Radar" subtitle="Comparaison" />
          <ApexWrapper
            options={{ xaxis:{ categories:['Ventes','Marketing','Dev','Design','Support','Finance'] }, colors:['#4361ee'], dataLabels:{ enabled:false } }}
            series={[{ name:'Équipe', data:[80,50,30,40,100,20] }]}
            type="radar" height={240}
          />
        </Card>
        <Card>
          <CardHeader title="Heatmap" subtitle="Activité hebdomadaire" />
          <ApexWrapper
            options={{ xaxis:{ categories:['Lun','Mar','Mer','Jeu','Ven'] }, colors:['#4361ee'], dataLabels:{ enabled:true } }}
            series={[
              { name:'Semaine 1', data:[9,7,8,6,8] },
              { name:'Semaine 2', data:[7,8,6,9,7] },
              { name:'Semaine 3', data:[8,9,7,8,9] },
            ]}
            type="heatmap" height={240}
          />
        </Card>
      </div>
    </Layout>
  )
}

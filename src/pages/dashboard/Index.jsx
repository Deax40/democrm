import Layout from '../../components/layout/Layout'
import Card, { CardHeader } from '../../components/ui/Card'
import KpiCard from '../../components/ui/KpiCard'
import Badge from '../../components/ui/Badge'
import Avatar from '../../components/ui/Avatar'
import ProgressBar from '../../components/ui/ProgressBar'
import ApexWrapper from '../../components/charts/ApexWrapper'
import Icon from '../../components/ui/Icon'
import {
  kpiStats, revenueChartSeries, revenueCategories,
  leadsPipeline, recentLeads, upcomingEvents, teamProgress, salesByCategory,
} from '../../data/dashboard'
import clsx from 'clsx'

const statusVariant = {
  'Nouveau':     'primary',
  'Contacté':    'info',
  'Qualifié':    'purple',
  'Proposition': 'warning',
  'Négociation': 'secondary',
  'Conclu':      'success',
}

const eventIcons = { meeting: 'Video', call: 'Phone', review: 'FileText', training: 'BookOpen' }

export default function Dashboard() {
  const revenueOptions = {
    chart: { type: 'area', stacked: false },
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth', width: 2 },
    fill: { type: 'gradient', gradient: { opacityFrom: 0.4, opacityTo: 0.05 } },
    xaxis: { categories: revenueCategories },
    yaxis: { labels: { formatter: v => `€ ${(v/1000).toFixed(0)}k` } },
    colors: ['#4361ee', '#ff9f43'],
    legend: { position: 'top' },
  }

  const pipelineOptions = {
    chart: { type: 'bar' },
    plotOptions: { bar: { borderRadius: 6, horizontal: true, barHeight: '60%' } },
    dataLabels: { enabled: false },
    xaxis: { categories: leadsPipeline.map(l => l.name) },
    colors: leadsPipeline.map(l => l.color),
    fill: { colors: leadsPipeline.map(l => l.color) },
  }
  const pipelineSeries = [{ name: 'Leads', data: leadsPipeline.map(l => l.value) }]

  const donutOptions = {
    chart: { type: 'donut' },
    labels: salesByCategory.map(s => s.label),
    colors: salesByCategory.map(s => s.color),
    legend: { position: 'bottom' },
    plotOptions: { pie: { donut: { size: '70%' } } },
    dataLabels: { enabled: false },
  }
  const donutSeries = salesByCategory.map(s => s.value)

  return (
    <Layout
      title="Tableau de bord CRM"
      breadcrumb={[{ label: 'Tableau de bord' }]}
    >
      {/* KPI cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        {kpiStats.map(stat => (
          <KpiCard key={stat.id} {...stat} />
        ))}
      </div>

      {/* Revenue chart + Pipeline */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mb-4">
        <div className="xl:col-span-2">
          <Card>
            <CardHeader title="Évolution des revenus" subtitle="Revenus vs Dépenses – 2025" />
            <ApexWrapper options={revenueOptions} series={revenueChartSeries} type="area" height={280} />
          </Card>
        </div>
        <Card>
          <CardHeader title="Pipeline Leads" subtitle="Par étape" />
          <ApexWrapper options={pipelineOptions} series={pipelineSeries} type="bar" height={280} />
        </Card>
      </div>

      {/* Recent leads table + Events */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mb-4">
        <div className="xl:col-span-2">
          <Card padding={false}>
            <div className="p-5 pb-0">
              <CardHeader
                title="Derniers leads"
                subtitle="Leads récemment ajoutés"
                action={
                  <a href="/leads" className="text-sm text-primary-500 hover:text-primary-600 font-medium">
                    Voir tout
                  </a>
                }
              />
            </div>
            <div className="overflow-x-auto">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Prospect</th>
                    <th>Entreprise</th>
                    <th>Valeur</th>
                    <th>Statut</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {recentLeads.map(lead => (
                    <tr key={lead.id}>
                      <td>
                        <div className="flex items-center gap-2.5">
                          <Avatar initials={lead.avatar} color={lead.avatarColor} size="sm" />
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white text-sm">{lead.name}</p>
                            <p className="text-xs text-muted">{lead.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="text-sm">{lead.company}</td>
                      <td className="font-semibold text-sm">{lead.value}</td>
                      <td><Badge variant={statusVariant[lead.status] ?? 'secondary'}>{lead.status}</Badge></td>
                      <td className="text-sm text-muted">{lead.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Upcoming events */}
        <Card>
          <CardHeader title="Événements à venir" subtitle="Agenda du jour" />
          <div className="flex flex-col gap-3">
            {upcomingEvents.map(ev => (
              <div key={ev.id} className="flex items-start gap-3">
                <div className={clsx('w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0', ev.color)}>
                  <Icon name={eventIcons[ev.type]} size={14} className="text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{ev.title}</p>
                  <p className="text-xs text-muted">{ev.date} · {ev.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Team progress + Donut chart */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <div className="xl:col-span-2">
          <Card>
            <CardHeader title="Performance de l'équipe" subtitle="Tâches accomplies ce mois-ci" />
            <div className="flex flex-col gap-4">
              {teamProgress.map(member => (
                <div key={member.name} className="flex items-center gap-3">
                  <Avatar initials={member.avatar} color={member.avatarColor} size="md" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{member.name}</p>
                        <p className="text-xs text-muted">{member.role}</p>
                      </div>
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        {member.done}/{member.tasks}
                      </span>
                    </div>
                    <ProgressBar value={member.percent} color="primary" showLabel />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card>
          <CardHeader title="Ventes par catégorie" subtitle="Répartition 2025" />
          <ApexWrapper options={donutOptions} series={donutSeries} type="donut" height={260} />
        </Card>
      </div>
    </Layout>
  )
}

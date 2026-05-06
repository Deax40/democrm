import { useState } from 'react'
import Layout from '../../components/layout/Layout'
import Card from '../../components/ui/Card'
import Icon from '../../components/ui/Icon'
import { calendarEvents } from '../../data/messages'
import clsx from 'clsx'

const DAYS = ['Lun','Mar','Mer','Jeu','Ven','Sam','Dim']
const MONTHS = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre']

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate()
}
function getFirstDayOfMonth(year, month) {
  const d = new Date(year, month, 1).getDay()
  return d === 0 ? 6 : d - 1
}

export default function Calendar() {
  const today = new Date()
  const [year, setYear]   = useState(2025)
  const [month, setMonth] = useState(5) // juin 2025
  const [selected, setSelected] = useState(null)

  const daysInMonth  = getDaysInMonth(year, month)
  const firstDay     = getFirstDayOfMonth(year, month)

  const prevMonth = () => { if (month === 0) { setMonth(11); setYear(y => y-1) } else setMonth(m => m-1) }
  const nextMonth = () => { if (month === 11) { setMonth(0); setYear(y => y+1) } else setMonth(m => m+1) }

  const eventsForDay = day => {
    const dateStr = `${year}-${String(month+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`
    return calendarEvents.filter(e => e.start.startsWith(dateStr))
  }

  return (
    <Layout title="Calendrier" breadcrumb={[{ label:'Applications' }, { label:'Calendrier' }]}>
      <div className="grid xl:grid-cols-4 gap-4">
        <div className="xl:col-span-3">
          <Card padding={false}>
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-gray-700">
              <h2 className="font-semibold text-gray-900 dark:text-white">{MONTHS[month]} {year}</h2>
              <div className="flex gap-1">
                <button className="btn btn-secondary btn-sm btn-icon" onClick={prevMonth}><Icon name="ChevronLeft" size={15} /></button>
                <button className="btn btn-secondary btn-sm" onClick={() => { setMonth(today.getMonth()); setYear(today.getFullYear()) }}>Aujourd'hui</button>
                <button className="btn btn-secondary btn-sm btn-icon" onClick={nextMonth}><Icon name="ChevronRight" size={15} /></button>
              </div>
            </div>

            {/* Days header */}
            <div className="grid grid-cols-7">
              {DAYS.map(d => (
                <div key={d} className="text-center text-xs font-semibold text-muted py-3 border-b border-gray-50 dark:border-gray-700/50">{d}</div>
              ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7">
              {Array.from({ length: firstDay }).map((_, i) => (
                <div key={`empty-${i}`} className="h-24 border-b border-r border-gray-50 dark:border-gray-700/30" />
              ))}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day  = i + 1
                const dayEvs = eventsForDay(day)
                const isToday = day === today.getDate() && month === today.getMonth() && year === today.getFullYear()
                return (
                  <div
                    key={day}
                    onClick={() => setSelected(day)}
                    className="h-24 border-b border-r border-gray-50 dark:border-gray-700/30 p-1.5 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/20 transition-colors"
                  >
                    <div className={clsx(
                      'w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold mb-1 mx-auto',
                      isToday ? 'bg-primary-500 text-white' : 'text-gray-700 dark:text-gray-300'
                    )}>{day}</div>
                    <div className="flex flex-col gap-0.5">
                      {dayEvs.slice(0,2).map(ev => (
                        <div key={ev.id} className="text-[10px] text-white rounded px-1 truncate" style={{ backgroundColor: ev.color }}>
                          {ev.title}
                        </div>
                      ))}
                      {dayEvs.length > 2 && <p className="text-[10px] text-muted">+{dayEvs.length - 2}</p>}
                    </div>
                  </div>
                )
              })}
            </div>
          </Card>
        </div>

        {/* Sidebar events */}
        <Card>
          <p className="font-semibold text-gray-900 dark:text-white mb-4">Événements du mois</p>
          <div className="flex flex-col gap-3">
            {calendarEvents.map(ev => (
              <div key={ev.id} className="flex gap-2">
                <div className="w-1 rounded-full flex-shrink-0" style={{ backgroundColor: ev.color }} />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{ev.title}</p>
                  <p className="text-xs text-muted">{ev.start.split('T')[0]} · {ev.type}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Layout>
  )
}

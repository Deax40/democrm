import { useState } from 'react'
import Layout from '../../components/layout/Layout'
import Card, { CardHeader } from '../../components/ui/Card'
import Badge from '../../components/ui/Badge'
import Icon from '../../components/ui/Icon'
import Modal from '../../components/ui/Modal'
import { tasks, taskStatusColors, taskPriorityColors } from '../../data/tasks'
import clsx from 'clsx'

const cols = ['À faire','En cours','Bloqué','Terminé']
const colColors = {
  'À faire':  'border-gray-300 dark:border-gray-600',
  'En cours': 'border-primary-400',
  'Bloqué':   'border-red-400',
  'Terminé':  'border-green-400',
}

export default function Tasks() {
  const [taskList, setTaskList] = useState(tasks)
  const [modal, setModal] = useState(false)
  const [newTask, setNewTask] = useState({ title:'', project:'', assignee:'', priority:'Normale', status:'À faire', due:'' })

  const addTask = () => {
    if (!newTask.title.trim()) return
    setTaskList(t => [...t, { ...newTask, id: Date.now(), tags:[] }])
    setNewTask({ title:'', project:'', assignee:'', priority:'Normale', status:'À faire', due:'' })
    setModal(false)
  }

  return (
    <Layout title="Tâches" breadcrumb={[{ label:'Applications' }, { label:'Tâches' }]}>
      <div className="page-header">
        <p className="text-muted text-sm">{taskList.length} tâches au total</p>
        <button className="btn btn-primary" onClick={() => setModal(true)}>
          <Icon name="Plus" size={16} /> Nouvelle tâche
        </button>
      </div>

      {/* Kanban */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {cols.map(col => {
          const colTasks = taskList.filter(t => t.status === col)
          const variant = taskStatusColors[col]?.replace('badge-','') ?? 'secondary'
          return (
            <div key={col} className={clsx('card p-3', 'border-t-4', colColors[col])}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-sm text-gray-900 dark:text-white">{col}</span>
                  <Badge variant={variant}>{colTasks.length}</Badge>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                {colTasks.map(task => (
                  <div key={task.id} className="bg-gray-50 dark:bg-gray-700/40 rounded-lg p-3 cursor-pointer hover:shadow-sm transition-shadow">
                    <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">{task.title}</p>
                    <p className="text-xs text-muted mb-2">{task.project}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1 flex-wrap">
                        {task.tags.slice(0,2).map(tag => <Badge key={tag} variant="secondary" className="text-[10px]">{tag}</Badge>)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Flag" size={12} className={taskPriorityColors[task.priority]} />
                        {task.due && <span className="text-[10px] text-muted">{task.due}</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      <Modal open={modal} onClose={() => setModal(false)} title="Nouvelle tâche">
        <div className="flex flex-col gap-3">
          <div>
            <label className="form-label">Titre</label>
            <input value={newTask.title} onChange={e => setNewTask(t => ({...t, title:e.target.value}))} className="form-input" placeholder="Titre de la tâche" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="form-label">Priorité</label>
              <select value={newTask.priority} onChange={e => setNewTask(t => ({...t, priority:e.target.value}))} className="form-select">
                {['Critique','Haute','Normale','Basse'].map(p => <option key={p}>{p}</option>)}
              </select>
            </div>
            <div>
              <label className="form-label">Statut</label>
              <select value={newTask.status} onChange={e => setNewTask(t => ({...t, status:e.target.value}))} className="form-select">
                {cols.map(s => <option key={s}>{s}</option>)}
              </select>
            </div>
          </div>
          <div className="flex gap-2 justify-end pt-2">
            <button className="btn btn-secondary" onClick={() => setModal(false)}>Annuler</button>
            <button className="btn btn-primary" onClick={addTask}>Créer</button>
          </div>
        </div>
      </Modal>
    </Layout>
  )
}

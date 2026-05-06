import { useState } from 'react'
import Layout from '../../components/layout/Layout'
import Avatar from '../../components/ui/Avatar'
import Icon from '../../components/ui/Icon'
import { conversations, chatMessages } from '../../data/messages'
import clsx from 'clsx'

export default function Chat() {
  const [active, setActive] = useState(conversations[0])
  const [msg, setMsg] = useState('')
  const [msgs, setMsgs] = useState(chatMessages)

  const send = () => {
    if (!msg.trim()) return
    setMsgs(m => [...m, { id: Date.now(), from:'Moi', avatar:'Moi', avatarColor:'bg-primary-500', text:msg, time:'maintenant', mine:true }])
    setMsg('')
  }

  return (
    <Layout title="Chat" breadcrumb={[{ label:'Applications' }, { label:'Chat' }]}>
      <div className="card flex h-[calc(100vh-180px)] overflow-hidden">
        {/* Sidebar */}
        <div className="w-72 border-r border-gray-100 dark:border-gray-700 flex flex-col flex-shrink-0">
          <div className="p-3 border-b border-gray-100 dark:border-gray-700">
            <div className="relative">
              <Icon name="Search" size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Rechercher…" className="form-input pl-9 text-sm h-8" />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {conversations.map(conv => (
              <div
                key={conv.id}
                onClick={() => setActive(conv)}
                className={clsx(
                  'flex items-center gap-3 px-3 py-3 cursor-pointer transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/30',
                  active.id === conv.id && 'bg-primary-50 dark:bg-primary-900/10'
                )}
              >
                <div className="relative">
                  <Avatar initials={conv.avatar} color={conv.avatarColor} size="md" />
                  {conv.online && <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white dark:border-gray-800" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{conv.name}</p>
                    <span className="text-xs text-muted flex-shrink-0">{conv.time}</span>
                  </div>
                  <p className="text-xs text-muted truncate">{conv.lastMessage}</p>
                </div>
                {conv.unread > 0 && (
                  <span className="w-5 h-5 bg-primary-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center flex-shrink-0">
                    {conv.unread}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Chat area */}
        <div className="flex-1 flex flex-col">
          <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 dark:border-gray-700">
            <div className="relative">
              <Avatar initials={active.avatar} color={active.avatarColor} size="md" />
              {active.online && <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white dark:border-gray-800" />}
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white text-sm">{active.name}</p>
              <p className="text-xs text-muted">{active.online ? 'En ligne' : 'Hors ligne'}</p>
            </div>
            <div className="ml-auto flex gap-1">
              <button className="btn btn-secondary btn-icon btn-sm"><Icon name="Phone" size={15} /></button>
              <button className="btn btn-secondary btn-icon btn-sm"><Icon name="Video" size={15} /></button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
            {msgs.map(m => (
              <div key={m.id} className={clsx('flex gap-2 items-end', m.mine && 'flex-row-reverse')}>
                <Avatar initials={m.avatar} color={m.avatarColor} size="sm" className="flex-shrink-0" />
                <div className={clsx(
                  'max-w-[65%] px-3 py-2 rounded-2xl text-sm',
                  m.mine
                    ? 'bg-primary-500 text-white rounded-br-sm'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-sm'
                )}>
                  <p>{m.text}</p>
                  <p className={clsx('text-[10px] mt-0.5', m.mine ? 'text-primary-200' : 'text-muted')}>{m.time}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="px-4 py-3 border-t border-gray-100 dark:border-gray-700 flex gap-2">
            <input
              type="text"
              placeholder="Écrire un message…"
              value={msg}
              onChange={e => setMsg(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              className="form-input flex-1"
            />
            <button className="btn btn-primary btn-icon" onClick={send}>
              <Icon name="Send" size={16} />
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

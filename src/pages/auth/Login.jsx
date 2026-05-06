import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from '../../components/layout/AuthLayout'
import Icon from '../../components/ui/Icon'

// variant prop: 'cover' | 'minimal' | 'creative'
export default function Login({ variant = 'cover' }) {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: 'admin@deax.io', password: '' })
  const [showPwd, setShowPwd] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = e => {
    e.preventDefault()
    if (!form.email || !form.password) { setError('Veuillez remplir tous les champs.'); return }
    setLoading(true)
    setTimeout(() => { setLoading(false); navigate('/') }, 800)
  }

  return (
    <AuthLayout variant={variant}>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Connexion</h2>
      <p className="text-muted text-sm mb-6">Bienvenue sur DeaX CRM 👋</p>

      {error && (
        <div className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg mb-4 text-sm text-red-600 dark:text-red-400">
          <Icon name="AlertCircle" size={15} />{error}
        </div>
      )}

      <form onSubmit={submit} className="flex flex-col gap-4">
        <div>
          <label className="form-label">Email</label>
          <input name="email" type="email" value={form.email} onChange={handle} className="form-input" placeholder="vous@exemple.fr" />
        </div>
        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="form-label !mb-0">Mot de passe</label>
            <Link to="/auth/reset-cover" className="text-xs text-primary-500 hover:text-primary-600">Oublié ?</Link>
          </div>
          <div className="relative">
            <input
              name="password" type={showPwd ? 'text' : 'password'}
              value={form.password} onChange={handle}
              className="form-input pr-10" placeholder="••••••••"
            />
            <button type="button" onClick={() => setShowPwd(v => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              <Icon name={showPwd ? 'EyeOff' : 'Eye'} size={16} />
            </button>
          </div>
        </div>
        <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700 dark:text-gray-300">
          <input type="checkbox" className="w-4 h-4 accent-primary-500 rounded" /> Se souvenir de moi
        </label>
        <button type="submit" className="btn btn-primary w-full" disabled={loading}>
          {loading ? <><Icon name="Loader2" size={16} className="animate-spin" /> Connexion…</> : 'Se connecter'}
        </button>
      </form>

      <p className="text-center text-sm text-muted mt-5">
        Pas encore de compte ?{' '}
        <Link to="/auth/register-cover" className="text-primary-500 font-medium hover:text-primary-600">S'inscrire</Link>
      </p>
    </AuthLayout>
  )
}

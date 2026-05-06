import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from '../../components/layout/AuthLayout'
import Icon from '../../components/ui/Icon'

export default function Register({ variant = 'cover' }) {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })
  const [errors, setErrors] = useState({})
  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const validate = () => {
    const errs = {}
    if (!form.name.trim())   errs.name    = 'Nom requis'
    if (!form.email.trim())  errs.email   = 'Email requis'
    if (form.password.length < 8) errs.password = 'Min. 8 caractères'
    if (form.password !== form.confirm) errs.confirm = 'Les mots de passe ne correspondent pas'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const submit = e => {
    e.preventDefault()
    if (validate()) navigate('/')
  }

  return (
    <AuthLayout variant={variant}>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Créer un compte</h2>
      <p className="text-muted text-sm mb-6">Rejoignez DeaX CRM gratuitement</p>

      <form onSubmit={submit} className="flex flex-col gap-4">
        {[
          { label:'Nom complet',      name:'name',    type:'text',     placeholder:'Jean Dupont' },
          { label:'Email',            name:'email',   type:'email',    placeholder:'jean@exemple.fr' },
          { label:'Mot de passe',     name:'password',type:'password', placeholder:'Min. 8 caractères' },
          { label:'Confirmer',        name:'confirm', type:'password', placeholder:'Répéter le mot de passe' },
        ].map(f => (
          <div key={f.name}>
            <label className="form-label">{f.label}</label>
            <input name={f.name} type={f.type} value={form[f.name]} onChange={handle}
              className={`form-input ${errors[f.name] ? 'border-red-400' : ''}`} placeholder={f.placeholder} />
            {errors[f.name] && <p className="text-xs text-red-500 mt-1">{errors[f.name]}</p>}
          </div>
        ))}

        <label className="flex items-start gap-2 cursor-pointer text-sm text-gray-700 dark:text-gray-300">
          <input type="checkbox" className="w-4 h-4 accent-primary-500 rounded mt-0.5 flex-shrink-0" />
          J'accepte les <a href="#" className="text-primary-500 underline ml-1">conditions d'utilisation</a>
        </label>

        <button type="submit" className="btn btn-primary w-full">Créer mon compte</button>
      </form>

      <p className="text-center text-sm text-muted mt-5">
        Déjà un compte ?{' '}
        <Link to="/auth/login-cover" className="text-primary-500 font-medium hover:text-primary-600">Se connecter</Link>
      </p>
    </AuthLayout>
  )
}

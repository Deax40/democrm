import { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthLayout from '../../components/layout/AuthLayout'
import Icon from '../../components/ui/Icon'

export default function ResetPassword({ variant = 'cover' }) {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  return (
    <AuthLayout variant={variant}>
      {!sent ? (
        <>
          <div className="w-14 h-14 rounded-2xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mx-auto mb-4">
            <Icon name="KeyRound" size={26} className="text-primary-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 text-center">Mot de passe oublié</h2>
          <p className="text-muted text-sm mb-6 text-center">Entrez votre email pour recevoir un lien de réinitialisation.</p>
          <form onSubmit={e => { e.preventDefault(); setSent(true) }} className="flex flex-col gap-4">
            <div>
              <label className="form-label">Email</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-input" placeholder="vous@exemple.fr" />
            </div>
            <button type="submit" className="btn btn-primary w-full">Envoyer le lien</button>
          </form>
        </>
      ) : (
        <div className="text-center">
          <div className="w-14 h-14 rounded-2xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
            <Icon name="MailCheck" size={26} className="text-green-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Email envoyé !</h2>
          <p className="text-muted text-sm mb-6">Un lien de réinitialisation a été envoyé à <strong>{email}</strong>.</p>
          <button className="btn btn-primary w-full" onClick={() => setSent(false)}>Renvoyer</button>
        </div>
      )}
      <p className="text-center text-sm text-muted mt-5">
        <Link to="/auth/login-cover" className="text-primary-500 font-medium hover:text-primary-600 flex items-center justify-center gap-1">
          <Icon name="ArrowLeft" size={14} /> Retour à la connexion
        </Link>
      </p>
    </AuthLayout>
  )
}

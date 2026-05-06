import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthLayout from '../../components/layout/AuthLayout'
import Icon from '../../components/ui/Icon'

export default function VerifyOtp({ variant = 'cover' }) {
  const navigate = useNavigate()
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const inputs = useRef([])

  const handleChange = (i, val) => {
    if (!/^\d?$/.test(val)) return
    const next = [...otp]
    next[i] = val
    setOtp(next)
    if (val && i < 5) inputs.current[i + 1]?.focus()
  }

  const handleKey = (i, e) => {
    if (e.key === 'Backspace' && !otp[i] && i > 0) inputs.current[i - 1]?.focus()
  }

  const complete = otp.every(d => d !== '')

  return (
    <AuthLayout variant={variant}>
      <div className="w-14 h-14 rounded-2xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mx-auto mb-4">
        <Icon name="ShieldCheck" size={26} className="text-primary-500" />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 text-center">Vérification OTP</h2>
      <p className="text-muted text-sm mb-6 text-center">Entrez le code à 6 chiffres envoyé à votre email.</p>

      <div className="flex justify-center gap-2 mb-6">
        {otp.map((digit, i) => (
          <input
            key={i}
            ref={el => inputs.current[i] = el}
            type="text"
            maxLength={1}
            value={digit}
            onChange={e => handleChange(i, e.target.value)}
            onKeyDown={e => handleKey(i, e)}
            className="w-11 h-12 text-center text-xl font-bold form-input"
          />
        ))}
      </div>

      <button
        className="btn btn-primary w-full mb-4"
        disabled={!complete}
        onClick={() => navigate('/')}
      >
        Vérifier
      </button>

      <p className="text-center text-sm text-muted">
        Pas reçu ?{' '}
        <button className="text-primary-500 font-medium hover:text-primary-600">Renvoyer le code</button>
      </p>
    </AuthLayout>
  )
}

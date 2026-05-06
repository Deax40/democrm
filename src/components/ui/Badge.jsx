import clsx from 'clsx'

export default function Badge({ variant = 'secondary', children, className = '' }) {
  return (
    <span className={clsx('badge', `badge-${variant}`, className)}>
      {children}
    </span>
  )
}

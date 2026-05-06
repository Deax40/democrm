import clsx from 'clsx'

const sizes = { xs: 'avatar-xs', sm: 'avatar-sm', md: 'avatar-md', lg: 'avatar-lg', xl: 'avatar-xl' }

export default function Avatar({ initials, color = 'bg-primary-500', size = 'md', src, className = '' }) {
  const sizeClass = sizes[size] || sizes.md
  if (src) {
    return (
      <img
        src={src}
        alt={initials}
        className={clsx('avatar', sizeClass, 'object-cover', className)}
      />
    )
  }
  return (
    <span className={clsx('avatar', sizeClass, color, className)}>
      {initials}
    </span>
  )
}

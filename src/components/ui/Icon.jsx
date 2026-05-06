// Thin wrapper around lucide-react that accepts an icon name as a string
import * as Icons from 'lucide-react'

export default function Icon({ name, size = 18, className = '', strokeWidth = 1.8 }) {
  const LucideIcon = Icons[name]
  if (!LucideIcon) return null
  return <LucideIcon size={size} strokeWidth={strokeWidth} className={className} />
}

import { Link } from 'react-router-dom'
import { cn } from '../utils/cn'

type ButtonLinkProps = {
  to: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
}

const variantClasses: Record<NonNullable<ButtonLinkProps['variant']>, string> = {
  primary:
    'bg-ink text-white shadow-card hover:-translate-y-0.5 hover:shadow-soft transition',
  secondary:
    'border border-ink/15 bg-white text-ink hover:border-ink/30 hover:-translate-y-0.5 transition',
  ghost: 'text-ink/70 hover:text-ink',
}

const ButtonLink = ({ to, children, variant = 'primary', className }: ButtonLinkProps) => (
  <Link
    to={to}
    className={cn(
      'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-semibold',
      variantClasses[variant],
      className,
    )}
  >
    {children}
  </Link>
)

export default ButtonLink

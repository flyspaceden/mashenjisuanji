import { cn } from '../utils/cn'

type SectionHeaderProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

const SectionHeader = ({ eyebrow, title, subtitle, align = 'left' }: SectionHeaderProps) => (
  <div className={cn('space-y-3 motion-safe:animate-fade-up', align === 'center' && 'text-center')}>
    {eyebrow ? (
      <span className="inline-flex items-center gap-2 rounded-full bg-slate px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-ink/70">
        {eyebrow}
      </span>
    ) : null}
    <h2 className="text-2xl font-semibold md:text-4xl">{title}</h2>
    {subtitle ? <p className="text-base text-ink/70 md:text-lg">{subtitle}</p> : null}
  </div>
)

export default SectionHeader

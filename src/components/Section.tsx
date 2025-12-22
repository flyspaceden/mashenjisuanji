import { cn } from '../utils/cn'

type SectionProps = {
  children: React.ReactNode
  className?: string
  id?: string
}

const Section = ({ children, className, id }: SectionProps) => (
  <section id={id} className={cn('section-padding section-surface relative', className)}>
    {children}
  </section>
)

export default Section

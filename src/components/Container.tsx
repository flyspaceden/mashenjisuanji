import { cn } from '../utils/cn'

type ContainerProps = {
  children: React.ReactNode
  className?: string
}

const Container = ({ children, className }: ContainerProps) => (
  <div className={cn('mx-auto w-full max-w-7xl px-6 2xl:max-w-[1600px]', className)}>
    {children}
  </div>
)

export default Container

import { cn } from '../../lib/cn'

function Card({ className, ...props }) {
  return <article className={cn('ds-panel p-6', className)} {...props} />
}

export default Card

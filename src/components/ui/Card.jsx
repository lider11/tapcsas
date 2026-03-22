import { cn } from '../../lib/cn'

function Card({ className, ...props }) {
  return <article className={cn('rounded-xl border border-neutral-200 bg-white p-6 shadow-soft', className)} {...props} />
}

export default Card

import { cn } from '../../lib/cn'

function Badge({ className, ...props }) {
  return (
    <span
      className={cn('inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium', className)}
      {...props}
    />
  )
}

export default Badge

import { cn } from '../../lib/cn'

function Label({ className, ...props }) {
  return <label className={cn('mb-2 block text-sm font-medium text-neutral-200', className)} {...props} />
}

export default Label

import { cn } from '../../lib/cn'

function Input({ className, ...props }) {
  return (
    <input
      className={cn(
        'w-full rounded-md border border-white/30 bg-white/10 px-4 py-2.5 text-white placeholder:text-primary-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white',
        className,
      )}
      {...props}
    />
  )
}

export default Input

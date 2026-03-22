import { cn } from '../../lib/cn'

const variants = {
  primary: 'bg-primary-600 text-white hover:bg-primary-700',
  secondary: 'border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50',
  ghost: 'text-primary-700 hover:bg-primary-50',
  inverse: 'bg-white text-primary-700 hover:bg-primary-50',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
}

function Button({ as: Comp = 'button', variant = 'primary', size = 'md', className, ...props }) {
  return (
    <Comp
      className={cn(
        'inline-flex items-center justify-center rounded-md font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  )
}

export default Button

import { cn } from '../../lib/cn'

const levels = {
  1: 'text-4xl font-bold tracking-tight md:text-6xl',
  2: 'ds-section-title',
  3: 'text-2xl font-semibold tracking-tight',
}

function Heading({ as: Comp = 'h2', level = 2, className, ...props }) {
  return <Comp className={cn(levels[level], className)} {...props} />
}

export default Heading

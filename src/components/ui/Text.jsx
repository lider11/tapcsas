import { cn } from '../../lib/cn'

const tones = {
  default: 'text-neutral-700',
  muted: 'text-neutral-500',
  inverse: 'text-primary-100',
}

function Text({ as: Comp = 'p', tone = 'default', className, ...props }) {
  return <Comp className={cn('leading-relaxed', tones[tone], className)} {...props} />
}

export default Text

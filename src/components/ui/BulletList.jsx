import { cn } from '../../lib/cn'

function BulletList({ items, className, bulletClassName = 'bg-primary-600', textClassName = '' }) {
  return (
    <ul className={cn('space-y-2', className)}>
      {items.map((item) => (
        <li key={item} className={cn('flex gap-2', textClassName)}>
          <span className={cn('mt-2 h-1.5 w-1.5 shrink-0 rounded-full', bulletClassName)} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default BulletList

import { cn } from '../../lib/cn'

function Grid({ cols = '2', className, ...props }) {
  const colMap = {
    2: 'grid gap-6 md:grid-cols-2',
    3: 'grid gap-6 md:grid-cols-2 lg:grid-cols-3',
    auto: 'grid gap-6',
  }

  return <div className={cn(colMap[cols], className)} {...props} />
}

export default Grid

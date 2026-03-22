import { cn } from '../../lib/cn'
import Container from './Container'

function Section({ id, tone = 'default', className, containerClassName, children }) {
  const tones = {
    default: 'bg-neutral-50',
    surface: 'bg-white',
    brand: 'bg-primary-900 text-white',
  }

  return (
    <section id={id} className={cn('py-16 md:py-20', tones[tone], className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  )
}

export default Section

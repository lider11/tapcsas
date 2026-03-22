import { useMemo, useState } from 'react'
import BulletList from '../ui/BulletList'
import Button from '../ui/Button'
import Card from '../ui/Card'
import Grid from '../ui/Grid'
import Heading from '../ui/Heading'
import Section from '../ui/Section'
import Text from '../ui/Text'
import { cn } from '../../lib/cn'

function ServicesSection({ services, segments }) {
  const [activeSegment, setActiveSegment] = useState(segments[0])

  const filteredServices = useMemo(() => {
    if (activeSegment === 'Todos') return services
    return services.filter((service) => service.segments.includes(activeSegment))
  }, [activeSegment, services])

  return (
    <Section id="servicios" tone="surface">
      <Heading>Servicios</Heading>
      <Text className="mt-4 max-w-3xl text-lg">
        Estructuramos cada servicio con enfoque en resultados técnicos, cumplimiento normativo y eficiencia
        operativa.
      </Text>

      <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Filtrar servicios por segmento">
        {segments.map((segment) => (
          <button
            key={segment}
            type="button"
            onClick={() => setActiveSegment(segment)}
            className={cn(
              'rounded-full border px-4 py-2 text-sm font-medium transition',
              activeSegment === segment
                ? 'border-primary-600 bg-primary-600 text-white'
                : 'border-neutral-300 bg-white text-neutral-700 hover:border-primary-300',
            )}
          >
            {segment}
          </button>
        ))}
      </div>

      <Grid className="mt-8" cols="2">
        {filteredServices.map((service) => (
          <Card key={service.title} className="flex h-full flex-col">
            <Heading as="h3" level={3} className="text-primary-700">
              {service.title}
            </Heading>
            <Text className="mt-3">{service.summary}</Text>

            <div className="mt-4 flex flex-wrap gap-2">
              {service.levels.map((level) => (
                <span key={level} className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-700">
                  {level}
                </span>
              ))}
            </div>

            <BulletList items={service.items} className="mt-4 text-neutral-700" />
            <p className="mt-5 rounded-md bg-primary-50 px-3 py-2 text-sm font-medium text-primary-800">{service.outcome}</p>
            <p className="mt-3 text-sm text-neutral-600">{service.evidence}</p>
            <p className="mt-2 text-sm text-neutral-500">{service.idealFor}</p>

            <Button as="a" href="#contacto" variant="ghost" size="sm" className="mt-4 w-fit">
              Hablar con un especialista
            </Button>
          </Card>
        ))}
      </Grid>
    </Section>
  )
}

export default ServicesSection

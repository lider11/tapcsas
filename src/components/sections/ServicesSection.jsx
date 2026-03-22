import Card from '../ui/Card'
import Grid from '../ui/Grid'
import Heading from '../ui/Heading'
import Section from '../ui/Section'

function ServicesSection({ services }) {
  return (
    <Section id="servicios" tone="surface">
      <Heading>Servicios</Heading>
      <Grid className="mt-8" cols="2">
        {services.map((service) => (
          <Card key={service.title}>
            <Heading as="h3" level={3} className="text-primary-700">
              {service.title}
            </Heading>
            <ul className="mt-4 space-y-2 text-neutral-700">
              {service.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </Grid>
    </Section>
  )
}

export default ServicesSection

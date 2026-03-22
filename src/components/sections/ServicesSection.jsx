import BulletList from '../ui/BulletList'
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
            <BulletList items={service.items} className="mt-4 text-neutral-700" />
          </Card>
        ))}
      </Grid>
    </Section>
  )
}

export default ServicesSection

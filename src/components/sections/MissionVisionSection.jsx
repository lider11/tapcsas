import BulletList from '../ui/BulletList'
import Card from '../ui/Card'
import Grid from '../ui/Grid'
import Heading from '../ui/Heading'
import Section from '../ui/Section'
import Text from '../ui/Text'

function MissionVisionSection({ pillars }) {
  return (
    <Section tone="default">
      <Heading>Dirección estratégica</Heading>
      <Text className="mt-4 max-w-3xl text-lg">
        Definimos la misión y visión como guía operativa para asegurar coherencia técnica, crecimiento
        sostenible y resultados medibles para nuestros clientes.
      </Text>

      <Grid cols="2" className="mt-8 lg:grid-cols-2">
        {pillars.map((pillar) => (
          <Card key={pillar.title} className="flex h-full flex-col">
            <span className="w-fit rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-700">
              {pillar.label}
            </span>
            <Heading as="h3" level={3} className="mt-3">
              {pillar.title}
            </Heading>
            <Text className="mt-3">{pillar.description}</Text>
            <Text className="mt-4 text-sm font-semibold text-primary-700">{pillar.focus}</Text>
            <BulletList items={pillar.commitments} className="mt-3 text-neutral-700" />
          </Card>
        ))}
      </Grid>
    </Section>
  )
}

export default MissionVisionSection

import Card from '../ui/Card'
import Grid from '../ui/Grid'
import Heading from '../ui/Heading'
import Section from '../ui/Section'
import Text from '../ui/Text'

function MissionVisionSection() {
  return (
    <Section tone="default">
      <Grid cols="2" className="lg:grid-cols-2">
        <Card>
          <Heading as="h3" level={3}>
            Misión
          </Heading>
          <Text className="mt-4">
            Brindar servicios de consultoría, interventoría, supervisión y gerencia de proyectos ambientales
            y civiles que generen valor técnico, social y ambiental, cumpliendo altos estándares de calidad,
            seguridad y sostenibilidad.
          </Text>
        </Card>

        <Card>
          <Heading as="h3" level={3}>
            Visión
          </Heading>
          <Text className="mt-4">
            Ser una empresa referente en Colombia en soluciones ambientales y obras civiles, reconocida por
            su rigor técnico, cumplimiento, innovación y aporte al desarrollo sostenible de los territorios.
          </Text>
        </Card>
      </Grid>
    </Section>
  )
}

export default MissionVisionSection

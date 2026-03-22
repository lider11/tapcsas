import Card from '../ui/Card'
import Grid from '../ui/Grid'
import Heading from '../ui/Heading'
import Section from '../ui/Section'
import Text from '../ui/Text'

function MissionVisionSection({ pillars }) {
  return (
    <Section tone="default">
      <Grid cols="2" className="lg:grid-cols-2">
        {pillars.map((pillar) => (
          <Card key={pillar.title}>
            <Heading as="h3" level={3}>
              {pillar.title}
            </Heading>
            <Text className="mt-4">{pillar.description}</Text>
          </Card>
        ))}
      </Grid>
    </Section>
  )
}

export default MissionVisionSection

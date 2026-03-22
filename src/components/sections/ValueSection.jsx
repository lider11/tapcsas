import Grid from '../ui/Grid'
import Heading from '../ui/Heading'
import Section from '../ui/Section'

function ValueSection({ benefits }) {
  return (
    <Section id="valor" tone="surface">
      <Heading>Propuesta de valor</Heading>
      <Grid className="mt-6" cols="2">
        {benefits.map((benefit) => (
          <div key={benefit} className="rounded-lg border border-primary-100 bg-primary-50 p-4 text-primary-900">
            {benefit}
          </div>
        ))}
      </Grid>
    </Section>
  )
}

export default ValueSection

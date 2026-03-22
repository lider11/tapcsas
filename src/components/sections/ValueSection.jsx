import Heading from '../ui/Heading'
import Section from '../ui/Section'
import Text from '../ui/Text'

function ValueSection({ benefits }) {
  return (
    <Section id="valor" tone="surface">
      <Heading>Propuesta de valor</Heading>
      <Text className="mt-4 max-w-3xl text-lg">
        Combinamos rigor técnico, enfoque preventivo y ejecución integral para convertir requerimientos
        complejos en resultados medibles para tu organización.
      </Text>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {benefits.map((benefit) => (
          <article key={benefit.title} className="rounded-lg border border-primary-100 bg-primary-50 p-5 text-primary-900">
            <h3 className="text-base font-bold">{benefit.title}</h3>
            <p className="mt-2 text-sm text-primary-800">{benefit.description}</p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-primary-700">{benefit.impact}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}

export default ValueSection

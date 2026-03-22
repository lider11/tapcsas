import BulletList from '../ui/BulletList'
import Card from '../ui/Card'
import Heading from '../ui/Heading'
import Section from '../ui/Section'
import Text from '../ui/Text'

function AboutSection({ about }) {
  return (
    <Section id="nosotros" tone="default">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <article>
          <Heading>{about.title}</Heading>
          <Text className="mt-5 max-w-4xl text-lg">{about.descriptionPrimary}</Text>
          <Text className="mt-4 max-w-4xl text-lg">{about.descriptionSecondary}</Text>

          <div className="mt-8 flex flex-wrap gap-3">
            {about.metrics.map((metric) => (
              <span key={metric} className="rounded-full border border-primary-100 bg-white px-4 py-2 text-sm font-medium text-primary-700">
                {metric}
              </span>
            ))}
          </div>
        </article>

        <Card>
          <Heading as="h3" level={3} className="text-primary-700">
            Lo que nos diferencia
          </Heading>
          <BulletList items={about.strengths} className="mt-4 text-neutral-700" />
        </Card>
      </div>
    </Section>
  )
}

export default AboutSection

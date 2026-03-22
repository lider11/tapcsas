import heroEngineering from '../../assets/hero-engineering.svg'
import Badge from '../ui/Badge'
import BulletList from '../ui/BulletList'
import Button from '../ui/Button'
import Container from '../ui/Container'
import Heading from '../ui/Heading'
import ImageFrame from '../ui/ImageFrame'
import Text from '../ui/Text'

function HeroSection({ hero }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-700 to-primary-600 pb-20 text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[radial-gradient(circle_at_top_right,_white_0,_transparent_35%)]" />
      </div>

      <Container className="relative z-10 pt-12">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <Badge>{hero.badge}</Badge>
            <Heading as="h1" level={1} className="mt-4 max-w-4xl text-white">
              {hero.title}
            </Heading>
            <Text tone="inverse" className="mt-6 max-w-3xl text-lg">
              {hero.description}
            </Text>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button as="a" href={hero.primaryCta.href} variant="inverse" size="lg">
                {hero.primaryCta.label}
              </Button>
              <Button
                as="a"
                href={hero.secondaryCta.href}
                variant="secondary"
                size="lg"
                className="border-white/70 bg-transparent text-white hover:bg-white/10"
              >
                {hero.secondaryCta.label}
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <ImageFrame
              src={heroEngineering}
              alt="Ilustración técnica de planificación y gestión de proyectos ambientales y civiles"
              caption="Planeación técnica, control normativo y ejecución con trazabilidad."
            />

            <aside className="ds-glass p-6">
              <Heading as="h2" level={3} className="text-white">
                {hero.asideTitle}
              </Heading>
              <BulletList
                items={hero.asideItems}
                className="mt-4 text-primary-100"
                bulletClassName="bg-primary-100"
                textClassName="items-start"
              />
              <Text tone="inverse" className="mt-5 text-sm">
                {hero.asideNote}
              </Text>
            </aside>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HeroSection

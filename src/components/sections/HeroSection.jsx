import Badge from '../ui/Badge'
import Button from '../ui/Button'
import Container from '../ui/Container'
import Heading from '../ui/Heading'
import Text from '../ui/Text'

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-700 to-primary-600 pb-20 text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[radial-gradient(circle_at_top_right,_white_0,_transparent_35%)]" />
      </div>

      <Container className="relative z-10 pt-12">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <Badge>Consultoría ambiental + obras civiles</Badge>
            <Heading as="h1" level={1} className="mt-4 max-w-4xl text-white">
              Soluciones integrales en consultoría ambiental y obras civiles
            </Heading>
            <Text tone="inverse" className="mt-6 max-w-3xl text-lg">
              Acompañamos proyectos públicos y privados desde la planeación, permisos y estudios técnicos
              hasta la ejecución y supervisión, con enfoque en cumplimiento normativo, calidad y
              sostenibilidad.
            </Text>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button as="a" href="#contacto" variant="inverse" size="lg">
                Solicitar diagnóstico inicial
              </Button>
              <Button
                as="a"
                href="#servicios"
                variant="secondary"
                size="lg"
                className="border-white/70 bg-transparent text-white hover:bg-white/10"
              >
                Ver servicios
              </Button>
            </div>
          </div>

          <aside className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
            <Heading as="h2" level={3} className="text-white">
              ¿Por qué elegir TAPC SAS?
            </Heading>
            <ul className="mt-4 space-y-3 text-primary-100">
              <li>✔ Equipo multidisciplinario en ingeniería y ambiente.</li>
              <li>✔ Cumplimiento normativo con enfoque preventivo.</li>
              <li>✔ Gestión integral de principio a fin.</li>
            </ul>
            <Text tone="inverse" className="mt-5 text-sm">
              Atención para proyectos públicos y privados en Colombia.
            </Text>
          </aside>
        </div>
      </Container>
    </section>
  )
}

export default HeroSection

import Button from '../ui/Button'
import Heading from '../ui/Heading'
import Input from '../ui/Input'
import Label from '../ui/Label'
import Section from '../ui/Section'
import Text from '../ui/Text'

function CTASection() {
  return (
    <Section id="contacto" tone="brand">
      <div className="grid gap-10 rounded-2xl border border-white/20 bg-white/5 p-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Heading className="text-white">¿Tienes un proyecto ambiental o de infraestructura?</Heading>
          <Text tone="inverse" className="mt-4 max-w-3xl text-lg">
            Conversemos y construyamos una ruta técnica clara para ejecutarlo con seguridad, cumplimiento y
            eficiencia.
          </Text>
          <Button as="a" href="mailto:contacto@tapcsas.com" variant="inverse" size="lg" className="mt-8">
            Hablar con un especialista
          </Button>
        </div>

        <form className="rounded-xl border border-white/20 bg-white/5 p-6" aria-label="Formulario de contacto rápido">
          <Label htmlFor="nombre">Nombre</Label>
          <Input id="nombre" name="nombre" placeholder="Tu nombre" />

          <Label htmlFor="email" className="mt-4">
            Correo corporativo
          </Label>
          <Input id="email" type="email" name="email" placeholder="tu@empresa.com" />

          <Button type="submit" variant="inverse" size="md" className="mt-5 w-full">
            Solicitar contacto
          </Button>
        </form>
      </div>
    </Section>
  )
}

export default CTASection

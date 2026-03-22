import Heading from '../ui/Heading'
import Section from '../ui/Section'
import Text from '../ui/Text'

function AboutSection() {
  return (
    <Section id="nosotros" tone="default">
      <Heading>Quiénes somos</Heading>
      <Text className="mt-5 max-w-4xl text-lg">
        En TAPC SAS desarrollamos y ejecutamos proyectos ambientales, técnicos y de infraestructura civil
        con un equipo interdisciplinario de ingeniería y consultoría.
      </Text>
      <Text className="mt-4 max-w-4xl text-lg">
        Nos especializamos en transformar requerimientos normativos y operativos en soluciones viables,
        seguras y sostenibles para entidades públicas, empresas privadas y organizaciones territoriales.
      </Text>
    </Section>
  )
}

export default AboutSection

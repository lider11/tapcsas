import Container from '../ui/Container'
import Text from '../ui/Text'

function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white py-8">
      <Container className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <Text className="text-sm">© {new Date().getFullYear()} TAPC SAS. Todos los derechos reservados.</Text>
        <Text className="text-sm">Consultoría ambiental y obras civiles con estándares empresariales.</Text>
      </Container>
    </footer>
  )
}

export default Footer

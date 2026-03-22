import Container from '../ui/Container'
import Heading from '../ui/Heading'
import Text from '../ui/Text'

function Footer({ footer }) {
  return (
    <footer className="border-t border-neutral-200 bg-white py-12">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <section>
            <Heading as="h2" level={3} className="text-primary-700">
              {footer.company}
            </Heading>
            <Text className="mt-3 max-w-xl">{footer.description}</Text>
            <Text className="mt-2 text-sm">{footer.address}</Text>
            <Text className="mt-1 text-sm">{footer.email}</Text>

            <div className="mt-5 flex flex-wrap gap-3">
              {footer.socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-neutral-300 px-3 py-2 text-sm font-medium text-neutral-700 transition hover:border-primary-500 hover:text-primary-700"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </section>

          <section>
            <Heading as="h3" level={3} className="text-primary-700">
              Ubicación
            </Heading>
            <div className="mt-3 overflow-hidden rounded-xl border border-neutral-200 shadow-soft">
              <iframe
                title="Mapa de ubicación TAPC SAS"
                src={footer.mapEmbedUrl}
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </section>
        </div>

        <div className="mt-8 border-t border-neutral-200 pt-4">
          <Text className="text-sm">© {new Date().getFullYear()} TAPC SAS. Todos los derechos reservados.</Text>
        </div>
      </Container>
    </footer>
  )
}

export default Footer

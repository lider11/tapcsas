import Button from '../ui/Button'
import Container from '../ui/Container'
import { cn } from '../../lib/cn'

function Navbar({ links }) {
  return (
    <Container className="pt-6">
      <nav
        aria-label="Principal"
        className={cn(
          'flex items-center justify-between rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-md',
        )}
      >
        <a href="#" className="text-lg font-semibold tracking-wide md:text-xl">
          TAPC SAS
        </a>

        <ul className="hidden items-center gap-7 text-sm font-medium md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <a className="transition hover:text-primary-100" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <Button as="a" href="#contacto" variant="inverse" size="sm">
          Agenda una llamada
        </Button>
      </nav>
    </Container>
  )
}

export default Navbar

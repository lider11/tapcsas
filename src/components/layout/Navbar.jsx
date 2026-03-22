import { useState } from 'react'
import Button from '../ui/Button'
import Container from '../ui/Container'
import { cn } from '../../lib/cn'

function Navbar({ links }) {
  const [open, setOpen] = useState(false)

  return (
    <Container className="pt-6">
      <nav
        aria-label="Principal"
        className={cn(
          'rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-md',
          open && 'shadow-soft',
        )}
      >
        <div className="flex items-center justify-between">
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

          <div className="flex items-center gap-2">
            <Button as="a" href="#contacto" variant="inverse" size="sm" className="hidden md:inline-flex">
              Agenda una llamada
            </Button>

            <button
              type="button"
              className="inline-flex rounded-md border border-white/40 px-3 py-2 text-sm font-semibold md:hidden"
              onClick={() => setOpen((prev) => !prev)}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              Menú
            </button>
          </div>
        </div>

        <div id="mobile-menu" className={cn('overflow-hidden transition-all md:hidden', open ? 'max-h-72 pt-4' : 'max-h-0')}>
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  className="block rounded-md px-2 py-2 text-sm font-medium transition hover:bg-white/10"
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button as="a" href="#contacto" variant="inverse" size="sm" className="mt-4 w-full" onClick={() => setOpen(false)}>
            Agenda una llamada
          </Button>
        </div>
      </nav>
    </Container>
  )
}

export default Navbar

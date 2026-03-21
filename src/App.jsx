const services = [
  {
    title: 'Consultoría ambiental',
    items: [
      'Licenciamiento y permisos ambientales.',
      'Estudios de impacto y modelación.',
      'Gestión de vertimientos, emisiones y residuos.',
      'Instrumentos de cumplimiento y seguimiento.',
    ],
  },
  {
    title: 'Saneamiento básico y recursos hídricos',
    items: [
      'Diseño y optimización de sistemas de acueducto y alcantarillado.',
      'Soluciones de potabilización y reúso de agua.',
      'Evaluación técnica para operación eficiente.',
    ],
  },
  {
    title: 'Construcción y obras civiles',
    items: [
      'Planeación, diseño y supervisión de obras.',
      'Trámites de licencias urbanísticas y de construcción.',
      'Interventoría técnica y administrativa.',
    ],
  },
  {
    title: 'Asesoría técnica y regulatoria',
    items: [
      'Soporte jurídico-ambiental.',
      'Acompañamiento en procesos administrativos.',
      'Estrategias de prevención y mitigación de riesgos regulatorios.',
    ],
  },
]

const benefits = [
  'Equipo técnico multidisciplinario.',
  'Cumplimiento normativo con enfoque preventivo.',
  'Gestión integral: del diagnóstico a la ejecución.',
  'Atención oportuna y trazabilidad en cada etapa del proyecto.',
]

function App() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <header className="bg-gradient-to-br from-brand-900 to-brand-700 text-white">
        <section className="section-container py-24">
          <p className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium">
            TAPC SAS
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Soluciones integrales en consultoría ambiental y obras civiles
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-emerald-50">
            Acompañamos proyectos públicos y privados desde la planeación, permisos y estudios técnicos
            hasta la ejecución y supervisión, con enfoque en cumplimiento normativo, calidad y
            sostenibilidad.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-brand-700 transition hover:bg-emerald-100"
            >
              Solicitar diagnóstico inicial
            </a>
            <a
              href="#servicios"
              className="rounded-lg border border-white/70 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Ver servicios
            </a>
          </div>
        </section>
      </header>

      <main>
        <section className="section-container">
          <h2 className="text-3xl font-bold md:text-4xl">Quiénes somos</h2>
          <p className="mt-5 max-w-4xl text-lg text-slate-700">
            En TAPC SAS desarrollamos y ejecutamos proyectos ambientales, técnicos y de infraestructura
            civil con un equipo interdisciplinario de ingeniería y consultoría.
          </p>
          <p className="mt-4 max-w-4xl text-lg text-slate-700">
            Nos especializamos en transformar requerimientos normativos y operativos en soluciones viables,
            seguras y sostenibles para entidades públicas, empresas privadas y organizaciones territoriales.
          </p>
        </section>

        <section id="servicios" className="section-container bg-white">
          <h2 className="text-3xl font-bold md:text-4xl">Servicios</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="rounded-xl border border-slate-200 p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-brand-700">{service.title}</h3>
                <ul className="mt-4 space-y-2 text-slate-700">
                  {service.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section-container">
          <div className="grid gap-10 lg:grid-cols-2">
            <article className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold">Misión</h2>
              <p className="mt-4 text-slate-700">
                Brindar servicios de consultoría, interventoría, supervisión y gerencia de proyectos
                ambientales y civiles que generen valor técnico, social y ambiental, cumpliendo altos
                estándares de calidad, seguridad y sostenibilidad.
              </p>
            </article>
            <article className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold">Visión</h2>
              <p className="mt-4 text-slate-700">
                Ser una empresa referente en Colombia en soluciones ambientales y obras civiles, reconocida
                por su rigor técnico, cumplimiento, innovación y aporte al desarrollo sostenible de los
                territorios.
              </p>
            </article>
          </div>
        </section>

        <section className="section-container bg-white">
          <h2 className="text-3xl font-bold md:text-4xl">Propuesta de valor</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {benefits.map((benefit) => (
              <li key={benefit} className="rounded-lg border border-brand-100 bg-brand-50 p-4 text-brand-900">
                {benefit}
              </li>
            ))}
          </ul>
        </section>

        <section id="contacto" className="section-container">
          <div className="rounded-2xl bg-brand-900 p-10 text-white">
            <h2 className="text-3xl font-bold">¿Tienes un proyecto ambiental o de infraestructura?</h2>
            <p className="mt-4 max-w-3xl text-emerald-100">
              Conversemos y construyamos una ruta técnica clara para ejecutarlo con seguridad,
              cumplimiento y eficiencia.
            </p>
            <a
              href="mailto:contacto@tapcsas.com"
              className="mt-8 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-brand-700 transition hover:bg-emerald-100"
            >
              Hablar con un especialista
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App

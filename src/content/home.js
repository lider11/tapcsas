export const navLinks = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Valor', href: '#valor' },
  { label: 'Contacto', href: '#contacto' },
]

export const hero = {
  badge: 'Consultoría ambiental + obras civiles',
  title: 'Soluciones integrales en consultoría ambiental y obras civiles',
  description:
    'Acompañamos proyectos públicos y privados desde la planeación, permisos y estudios técnicos hasta la ejecución y supervisión, con enfoque en cumplimiento normativo, calidad y sostenibilidad.',
  primaryCta: { label: 'Solicitar diagnóstico inicial', href: '#contacto' },
  secondaryCta: { label: 'Ver servicios', href: '#servicios' },
  asideTitle: '¿Por qué elegir TAPC SAS?',
  asideItems: [
    'Equipo multidisciplinario en ingeniería y ambiente.',
    'Cumplimiento normativo con enfoque preventivo.',
    'Gestión integral de principio a fin.',
  ],
  asideNote: 'Atención para proyectos públicos y privados en Colombia.',
}

export const about = {
  title: 'Quiénes somos',
  descriptionPrimary:
    'En TAPC SAS desarrollamos y ejecutamos proyectos ambientales, técnicos y de infraestructura civil con un equipo interdisciplinario de ingeniería y consultoría.',
  descriptionSecondary:
    'Convertimos requerimientos normativos y operativos en soluciones viables, seguras y sostenibles para entidades públicas, empresas privadas y organizaciones territoriales.',
  metrics: ['Enfoque multidisciplinario', 'Cobertura nacional', 'Gestión integral de proyectos'],
  strengths: [
    'Equipo técnico con experiencia en consultoría, interventoría y obra.',
    'Metodología orientada a cumplimiento, riesgos y trazabilidad.',
    'Comunicación ejecutiva y reportes claros para toma de decisiones.',
  ],
}

export const serviceSegments = ['Todos', 'Público', 'Industrial', 'Construcción']

export const services = [
  {
    title: 'Consultoría ambiental',
    summary: 'Estructuramos la ruta regulatoria y técnica para viabilizar proyectos con seguridad jurídica y ambiental.',
    segments: ['Público', 'Industrial'],
    levels: ['Diagnóstico', 'Implementación', 'Seguimiento'],
    idealFor: 'Ideal para proyectos que requieren permisos, licencias y control de riesgos regulatorios.',
    evidence: 'Caso referencial: permisos aprobados en tiempo objetivo para proyecto industrial.',
    items: [
      'Licenciamiento y permisos ambientales.',
      'Estudios de impacto y modelación.',
      'Gestión de vertimientos, emisiones y residuos.',
      'Instrumentos de cumplimiento y seguimiento.',
    ],
    outcome: 'Resultado esperado: reducción de riesgos regulatorios y mayor trazabilidad técnica.',
  },
  {
    title: 'Saneamiento básico y recursos hídricos',
    summary: 'Diseñamos soluciones de agua y saneamiento orientadas a eficiencia operativa y sostenibilidad.',
    segments: ['Público', 'Industrial'],
    levels: ['Diagnóstico', 'Implementación', 'Seguimiento'],
    idealFor: 'Ideal para operadores y territorios que buscan mejorar continuidad y calidad del servicio.',
    evidence: 'Caso referencial: optimización de sistema regional de acueducto con mejora operativa.',
    items: [
      'Diseño y optimización de sistemas de acueducto y alcantarillado.',
      'Soluciones de potabilización y reúso de agua.',
      'Evaluación técnica para operación eficiente.',
    ],
    outcome: 'Resultado esperado: continuidad del servicio y mejora de indicadores de calidad.',
  },
  {
    title: 'Construcción y obras civiles',
    summary: 'Gestionamos obras de infraestructura con control técnico, cumplimiento contractual y enfoque en calidad.',
    segments: ['Público', 'Construcción'],
    levels: ['Diagnóstico', 'Implementación', 'Seguimiento'],
    idealFor: 'Ideal para contratistas y entidades que requieren control integral de alcance, plazo y calidad.',
    evidence: 'Caso referencial: interventoría urbana entregada conforme a especificaciones.',
    items: [
      'Planeación, diseño y supervisión de obras.',
      'Trámites de licencias urbanísticas y de construcción.',
      'Interventoría técnica y administrativa.',
    ],
    outcome: 'Resultado esperado: entregas en alcance, tiempo y especificación técnica.',
  },
  {
    title: 'Asesoría técnica y regulatoria',
    summary: 'Acompañamos decisiones críticas con soporte técnico-legal para minimizar contingencias.',
    segments: ['Público', 'Industrial', 'Construcción'],
    levels: ['Diagnóstico', 'Implementación', 'Seguimiento'],
    idealFor: 'Ideal para organizaciones que necesitan soporte experto ante procesos administrativos complejos.',
    evidence: 'Caso referencial: mitigación de riesgos regulatorios en procesos sancionatorios.',
    items: [
      'Soporte jurídico-ambiental.',
      'Acompañamiento en procesos administrativos.',
      'Estrategias de prevención y mitigación de riesgos regulatorios.',
    ],
    outcome: 'Resultado esperado: decisiones mejor informadas y menor exposición a sanciones.',
  },
]

export const projects = [
  {
    title: 'Optimización de sistema de acueducto regional',
    category: 'Saneamiento básico',
    description: 'Diseño técnico y plan de mejora para aumentar continuidad y calidad del servicio.',
    client: 'Entidad territorial',
    location: 'Caribe colombiano',
    result: 'Mejora operativa y trazabilidad normativa.',
  },
  {
    title: 'Gestión integral de permisos para proyecto industrial',
    category: 'Consultoría ambiental',
    description: 'Estructuración documental, acompañamiento regulatorio y seguimiento de cumplimiento.',
    client: 'Compañía privada',
    location: 'Centro del país',
    result: 'Aprobación de trámites en tiempo objetivo.',
  },
  {
    title: 'Interventoría técnica de obra civil urbana',
    category: 'Obras civiles',
    description: 'Control técnico-administrativo con foco en calidad constructiva y cronograma.',
    client: 'Contratista principal',
    location: 'Área metropolitana',
    result: 'Entrega conforme a especificaciones y alcance.',
  },
]

export const pillars = [
  {
    label: 'Misión',
    title: 'Generar valor técnico, social y ambiental',
    description:
      'Brindamos servicios de consultoría, interventoría, supervisión y gerencia de proyectos ambientales y civiles con altos estándares de calidad, seguridad y sostenibilidad.',
    focus: 'Enfoque operativo: excelencia técnica y cumplimiento riguroso.',
    commitments: [
      'Diseñar soluciones viables con trazabilidad técnica.',
      'Asegurar cumplimiento normativo en cada etapa del proyecto.',
      'Integrar criterios de sostenibilidad en decisiones clave.',
    ],
  },
  {
    label: 'Visión',
    title: 'Ser referente nacional en soluciones ambientales y civiles',
    description:
      'Buscamos consolidarnos en Colombia como una empresa reconocida por su innovación, cumplimiento y aporte al desarrollo sostenible de los territorios.',
    focus: 'Enfoque estratégico: posicionamiento, innovación y crecimiento sostenible.',
    commitments: [
      'Fortalecer capacidades interdisciplinarias de alto desempeño.',
      'Escalar metodologías de gestión con estándares empresariales.',
      'Construir relaciones de largo plazo basadas en resultados.',
    ],
  },
]

export const benefits = [
  'Equipo técnico multidisciplinario.',
  'Cumplimiento normativo con enfoque preventivo.',
  'Gestión integral: del diagnóstico a la ejecución.',
  'Atención oportuna y trazabilidad en cada etapa del proyecto.',
]

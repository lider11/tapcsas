# TAPC SAS Web – Design System Ready

Sitio corporativo construido con **React + Vite + Tailwind CSS** refactorizado con arquitectura de **Design System**.

## Stack
- React 18
- Vite 5
- Tailwind CSS 3

## Arquitectura

```text
src/
  components/
    ui/        # componentes base (Button, Card, Section, BulletList, etc.)
    layout/    # Navbar, Footer
    sections/  # Hero, About, Services, Projects, CTA, etc.
  content/     # contenido desacoplado (copy + data de render)
  lib/         # utilidades (cn)
  styles/      # tokens/documentación complementaria
```

## Fases implementadas
- ✅ Fase 1: tokens y base visual en Tailwind
- ✅ Fase 2: componentes atómicos reutilizables
- ✅ Fase 3: componentes compuestos (Navbar responsive, ProjectsSection, ProjectCard, CTA compuesta)
- ✅ Fase 4: refactor data-driven (hero/pillars desacoplados + reducción de duplicación visual)

## Principios aplicados
- Tokens de diseño centralizados en `tailwind.config.js`
- Componentes reutilizables con variantes (`variant`, `size`, `tone`)
- Separación entre estructura, contenido y presentación
- Accesibilidad base: foco visible, navegación semántica y jerarquía de headings
- Escalabilidad para múltiples páginas/secciones

## Scripts
- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`

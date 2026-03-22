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
    ui/        # componentes base (Button, Card, Section, etc.)
    layout/    # Navbar, Footer
    sections/  # Hero, Services, CTA, etc.
  content/     # contenido desacoplado
  lib/         # utilidades (cn)
```

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

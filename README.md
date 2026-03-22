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
- ✅ Fase 5: tailwind best practices (utilities de sistema: `ds-glass`, `ds-panel`, `ds-section-title`)

- ✅ Iteración servicios: filtros por segmento + niveles de servicio + evidencia por tarjeta

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


## Recomendaciones de imagen (atractivo visual)
- Usar hero visual técnico (obra + ingeniería + ambiente) con formato 3:2.
- Mantener estilo consistente: tonos corporativos, overlays suaves y enfoque profesional B2B.
- Priorizar imágenes con contexto real (equipo en campo, planos, supervisión, infraestructura).
- Definir `alt` descriptivo en cada imagen y `loading="lazy"` para performance.
- Estandarizar marcos de imagen mediante componentes reutilizables (`ImageFrame`).


- ✅ Footer con redes sociales y mapa de Google integrado

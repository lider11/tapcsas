import { useState } from 'react'
import Button from '../ui/Button'
import Heading from '../ui/Heading'
import Section from '../ui/Section'
import Text from '../ui/Text'
import ProjectCard from './ProjectCard'

function ProjectsSection({ projects }) {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((prev) => (prev + 1) % projects.length)
  const prev = () => setIndex((prev) => (prev - 1 + projects.length) % projects.length)

  return (
    <Section id="proyectos" tone="default">
      <Heading>Obras destacadas</Heading>
      <Text className="mt-4 max-w-3xl text-lg">
        Recorre algunas de las obras y proyectos de referencia donde aportamos diseño técnico,
        cumplimiento normativo y ejecución integral.
      </Text>

      <div className="mt-8">
        <ProjectCard project={projects[index]} />

        <div className="mt-5 flex items-center justify-between gap-4">
          <div className="flex gap-2">
            {projects.map((project, dotIndex) => (
              <button
                key={project.title}
                type="button"
                onClick={() => setIndex(dotIndex)}
                className={`h-2.5 w-2.5 rounded-full ${dotIndex === index ? 'bg-primary-600' : 'bg-neutral-300'}`}
                aria-label={`Ir al proyecto ${dotIndex + 1}`}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <Button type="button" variant="secondary" size="sm" onClick={prev}>
              Anterior
            </Button>
            <Button type="button" variant="primary" size="sm" onClick={next}>
              Siguiente
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default ProjectsSection

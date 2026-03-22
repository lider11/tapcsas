import { useEffect, useState } from 'react'
import Button from '../ui/Button'
import Heading from '../ui/Heading'
import Section from '../ui/Section'
import Text from '../ui/Text'
import ProjectCard from './ProjectCard'

function ProjectsSection({ projects }) {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((prev) => (prev + 1) % projects.length)
  const prev = () => setIndex((prev) => (prev - 1 + projects.length) % projects.length)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length)
    }, 7000)

    return () => clearInterval(id)
  }, [projects.length])

  return (
    <Section id="proyectos" tone="default">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Heading>Obras destacadas</Heading>
          <Text className="mt-4 max-w-3xl text-lg">
            Recorre algunas de las obras y proyectos de referencia donde aportamos diseño técnico,
            cumplimiento normativo y ejecución integral.
          </Text>
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

      <div className="mt-8">
        <ProjectCard project={projects[index]} />
      </div>

      <div className="mt-5 grid gap-2 sm:grid-cols-3">
        {projects.map((project, dotIndex) => (
          <button
            key={project.title}
            type="button"
            onClick={() => setIndex(dotIndex)}
            className={`rounded-md border px-3 py-2 text-left text-sm transition ${
              dotIndex === index
                ? 'border-primary-600 bg-primary-50 text-primary-700'
                : 'border-neutral-300 bg-white text-neutral-600 hover:border-primary-300'
            }`}
            aria-label={`Ir al proyecto ${dotIndex + 1}`}
          >
            {project.title}
          </button>
        ))}
      </div>
    </Section>
  )
}

export default ProjectsSection

import Heading from '../ui/Heading'
import Text from '../ui/Text'

function ProjectCard({ project }) {
  return (
    <article className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-soft">
      <div className="relative aspect-[16/8] w-full overflow-hidden bg-neutral-900">
        <img src={project.image} alt={project.imageAlt} className="h-full w-full object-cover" loading="lazy" />
      </div>

      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary-600">{project.category}</p>
        <Heading as="h3" level={3} className="mt-2 text-primary-800">
          {project.title}
        </Heading>
        <Text className="mt-3">{project.description}</Text>

        <ul className="mt-6 grid gap-2 text-sm text-neutral-600">
          <li>
            <strong>Cliente:</strong> {project.client}
          </li>
          <li>
            <strong>Ubicación:</strong> {project.location}
          </li>
          <li>
            <strong>Resultado:</strong> {project.result}
          </li>
        </ul>
      </div>
    </article>
  )
}

export default ProjectCard

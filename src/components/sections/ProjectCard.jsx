import Card from '../ui/Card'
import Heading from '../ui/Heading'
import Text from '../ui/Text'

function ProjectCard({ project }) {
  return (
    <Card className="flex h-full flex-col justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-primary-600">{project.category}</p>
        <Heading as="h3" level={3} className="mt-2 text-primary-800">
          {project.title}
        </Heading>
        <Text className="mt-3">{project.description}</Text>
      </div>
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
    </Card>
  )
}

export default ProjectCard

import Grid from '../ui/Grid'
import Heading from '../ui/Heading'
import Section from '../ui/Section'
import Text from '../ui/Text'
import ProjectCard from './ProjectCard'

function ProjectsSection({ projects }) {
  return (
    <Section id="proyectos" tone="default">
      <Heading>Proyectos destacados</Heading>
      <Text className="mt-4 max-w-3xl text-lg">
        Casos de referencia para demostrar capacidades de diseño técnico, cumplimiento normativo y
        ejecución integral.
      </Text>
      <Grid cols="3" className="mt-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </Grid>
    </Section>
  )
}

export default ProjectsSection

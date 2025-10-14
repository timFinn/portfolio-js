// ===========================================
// app/projects/page.tsx - Projects Page
// ===========================================
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/lib/projects'

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">Projects</h1>
      <p className="text-lg text-gray-600 mb-12">
        A selection of technical projects showcasing real-time systems, game engine development, 
        and innovative solutions.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
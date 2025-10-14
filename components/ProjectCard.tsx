// ===========================================
// components/ProjectCard.tsx
// ===========================================
import Image from 'next/image'
import Link from 'next/link'

interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  image?: string
  link?: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
      {project.image && (
        <div className="relative h-48 bg-gray-200">
          <Image 
            src={project.image} 
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span 
              key={t} 
              className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
        {project.link && (
          <Link 
            href={project.link}
            className="text-blue-600 hover:underline"
          >
            Learn more →
          </Link>
        )}
      </div>
    </div>
  )
}
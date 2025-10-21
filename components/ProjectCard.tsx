import Image from 'next/image'
import Link from 'next/link'

interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  image?: string
  highlight?: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.id}`} className="block">
      <div className="group bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full">
        {project.image ? (
          <div className="relative h-56 bg-gradient-to-br from-cyan-500 to-blue-600 overflow-hidden">
            <Image 
              src={project.image} 
              alt={project.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        ) : (
          <div className="h-56 bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div className="relative text-white text-6xl group-hover:scale-110 transition-transform duration-300">
              🚀
            </div>
          </div>
        )}
        
        <div className="p-8">
          {project.highlight && (
            <div className="inline-block px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-sm font-semibold rounded-full mb-4">
              {project.highlight}
            </div>
          )}
          
          <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-slate-400 mb-6 leading-relaxed line-clamp-3">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.slice(0, 4).map((t) => (
              <span 
                key={t} 
                className="px-3 py-1 bg-slate-800 border border-slate-700 text-slate-300 text-sm rounded-lg font-medium font-mono"
              >
                {t}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="px-3 py-1 text-slate-500 text-sm">
                +{project.tech.length - 4} more
              </span>
            )}
          </div>

          <div className="text-cyan-400 font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
            View Details
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
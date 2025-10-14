import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/lib/projects'

export default function Projects() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header Section */}
      <section className="relative bg-slate-950 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-6xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl">
            A showcase of technical projects spanning game engines, AI integration, real-time systems, 
            and defense applications. Each project demonstrates system architecture, technical leadership, 
            and measurable impact.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-slate-100 mb-8 text-center">
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['Unreal Engine', 'Unity', 'C++', 'C#', 'Python', 'TypeScript', 'Docker', 
              'Protobuf', 'iOS', 'Android', 'Meta Quest', 'Jenkins', 'Git', 'ROS',
              'LLM APIs', 'CloudXR', 'Cesium', 'DOTS'].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-slate-800 text-slate-300 border border-slate-700 rounded-lg font-medium font-mono text-sm hover:bg-slate-700 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
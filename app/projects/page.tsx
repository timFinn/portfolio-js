import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/lib/projects'

const professional = projects.filter((p) => p.category === 'professional')
const personal = projects.filter((p) => p.category === 'personal')

export default function Projects() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <section className="relative bg-slate-950 text-white pt-24 pb-12 border-b border-slate-800/60">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-cyan-400 font-mono text-sm uppercase tracking-widest mb-3">
            / portfolio &middot; {projects.length} projects
          </div>
          <div className="flex items-end justify-between gap-8 flex-wrap">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-100">
              Projects
            </h1>
            <p className="text-lg text-slate-400 max-w-xl">
              Real-time systems, game engine work, AI integration, and embedded
              applications &mdash; each one capturing a slice of architecture,
              leadership, and measurable impact.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Work */}
      <section className="max-w-6xl mx-auto px-4 pt-16 pb-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-100 mb-2">
            Professional <span className="gradient-text">Work</span>
          </h2>
          <p className="text-slate-400 max-w-2xl">
            Delivered for employers and clients across training, defense, and
            commercial programs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {professional.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Personal & Open Source */}
      <section className="max-w-6xl mx-auto px-4 pt-12 pb-16">
        <div className="mb-8 pt-12 border-t border-slate-800/60">
          <h2 className="text-3xl font-bold text-slate-100 mb-2">
            Personal &amp; <span className="gradient-text">Open Source</span>
          </h2>
          <p className="text-slate-400 max-w-2xl">
            Self-directed work, all of it running on self-hosted infrastructure.
            Contributions to forked projects are scoped to what I actually
            authored, and say so.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {personal.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-slate-100 mb-8 text-center">
            Technologies I Work <span className="gradient-text">With</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['C++', 'C#', 'Python', 'TypeScript', 'Java', 'bash',
              'Kubernetes', 'Docker', 'gRPC/Protobuf', 'Langchain',
              'Unreal Engine', 'Unity', 'CloudXR', 'Cesium', 'DOTS',
              'JNI', 'JAXB', 'Spring', 'Maven', 'Gradle', 'Swing', 'JOGL',
              'SQLite', 'PostgreSQL', 'MariaDB', 'MySQL', 'MongoDB', 'NoSQL',
              'Go', 'React', 'Flutter', 'Ansible', 'MQTT', 'Redis',
              'InfluxDB', 'Prometheus', 'Grafana', 'ArgoCD', 'Traefik', 'Ollama', 'MCP',
              'Linux', 'iOS', 'Android', 'Meta Quest', 'ROS',
              'Jenkins', 'Git', 'Forgejo', 'Perforce', ].map((tech) => (
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
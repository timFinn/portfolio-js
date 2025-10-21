// app/projects/[id]/page.tsx

import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '@/lib/projects'

// Generate static paths for all projects at build time
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} - Timothy Finnegan`,
    description: project.description,
  }
}

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  // Find previous and next projects for navigation
  const currentIndex = projects.findIndex((p) => p.id === params.id)
  const nextProject = projects[(currentIndex + 1) % projects.length]
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length]

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-5xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link 
              href="/projects" 
              className="text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-2 group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span> 
              Back to Projects
            </Link>
          </nav>

          {/* Project Header */}
          <div className="mb-8">
            {project.highlight && (
              <div className="inline-block px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-sm font-medium mb-4">
                {project.highlight}
              </div>
            )}
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">{project.title}</span>
            </h1>
            <p className="text-xl text-slate-400 mb-6 leading-relaxed">
              {project.description}
            </p>
            
            {/* Meta Info */}
            <div className="flex flex-wrap gap-6 text-slate-400">
              {project.year && (
                <div>
                  <span className="text-slate-500 text-sm">Year:</span>{' '}
                  <span className="text-slate-300">{project.year}</span>
                </div>
              )}
              {project.role && (
                <div>
                  <span className="text-slate-500 text-sm">Role:</span>{' '}
                  <span className="text-slate-300">{project.role}</span>
                </div>
              )}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-slate-800 border border-slate-700 text-slate-300 rounded-lg text-sm font-mono hover:bg-slate-700 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-4 py-16 space-y-16">
        {/* Hero Image */}
        {project.image && (
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-800 bg-gradient-to-br from-cyan-500/20 to-blue-600/20">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Detailed Description */}
        {project.detailedDescription && (
          <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-slate-100 mb-6 flex items-center gap-3">
              <span className="text-cyan-400">📋</span>
              Overview
            </h2>
            <div className="prose prose-invert prose-lg max-w-none space-y-4">
              {project.detailedDescription.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="text-slate-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* Challenges & Solutions Grid */}
        {(project.challenges || project.solutions) && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Challenges */}
            {project.challenges && (
              <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-3">
                  <span className="text-3xl">🎯</span>
                  Challenges
                </h2>
                <ul className="space-y-4">
                  {project.challenges.map((challenge, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1 text-lg flex-shrink-0">•</span>
                      <span className="text-slate-300 leading-relaxed">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Solutions */}
            {project.solutions && (
              <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-3">
                  <span className="text-3xl">💡</span>
                  Solutions
                </h2>
                <ul className="space-y-4">
                  {project.solutions.map((solution, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-emerald-400 mt-1 text-lg flex-shrink-0">✓</span>
                      <span className="text-slate-300 leading-relaxed">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Outcomes */}
        {project.outcomes && (
          <div className="relative bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-8 md:p-12 overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div className="relative">
              <h2 className="text-3xl font-bold text-slate-100 mb-8 flex items-center gap-3">
                <span className="text-3xl">🚀</span>
                Outcomes & Impact
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.outcomes.map((outcome, idx) => (
                  <li 
                    key={idx} 
                    className="flex items-start gap-3 bg-slate-900/60 backdrop-blur rounded-lg p-4 border border-slate-800/50 hover:border-cyan-500/30 transition-colors"
                  >
                    <span className="text-emerald-400 mt-1 text-xl flex-shrink-0">✓</span>
                    <span className="text-slate-100 font-medium leading-relaxed">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Additional Images Gallery */}
        {project.images && project.images.length > 1 && (
          <div>
            <h2 className="text-3xl font-bold text-slate-100 mb-8 flex items-center gap-3">
              <span className="text-cyan-400">🖼️</span>
              Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images.slice(1).map((img, idx) => (
                <div 
                  key={idx} 
                  className="relative aspect-video rounded-xl overflow-hidden border border-slate-800 bg-gradient-to-br from-slate-800 to-slate-900 hover:border-cyan-500/30 transition-colors"
                >
                  <Image
                    src={img}
                    alt={`${project.title} screenshot ${idx + 2}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* External Links */}
        {(project.demoUrl || project.repoUrl) && (
          <div className="flex flex-wrap gap-4">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg shadow-cyan-500/20 inline-flex items-center gap-2"
              >
                View Demo
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-cyan-500/50 rounded-lg font-semibold transition-all duration-200 inline-flex items-center gap-2"
              >
                <span>View Code</span>
                <span className="text-xl">→</span>
              </a>
            )}
          </div>
        )}
      </section>

      {/* Navigation to Other Projects */}
      <section className="max-w-5xl mx-auto px-4 py-16 border-t border-slate-800">
        <h2 className="text-2xl font-bold text-slate-100 mb-8">More Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Previous Project */}
          <Link 
            href={`/projects/${prevProject.id}`}
            className="group bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-6 hover:border-cyan-500/30 hover:bg-slate-900/70 transition-all"
          >
            <div className="text-sm text-slate-500 mb-2 flex items-center gap-2">
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
              Previous
            </div>
            <div className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
              {prevProject.title}
            </div>
            <div className="text-sm text-slate-400 mt-2 line-clamp-2">
              {prevProject.description}
            </div>
          </Link>

          {/* Next Project */}
          <Link 
            href={`/projects/${nextProject.id}`}
            className="group bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-6 hover:border-cyan-500/30 hover:bg-slate-900/70 transition-all text-right"
          >
            <div className="text-sm text-slate-500 mb-2 flex items-center justify-end gap-2">
              Next
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
            <div className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
              {nextProject.title}
            </div>
            <div className="text-sm text-slate-400 mt-2 line-clamp-2">
              {nextProject.description}
            </div>
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="relative bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-700 rounded-3xl p-12 text-center text-white shadow-2xl shadow-cyan-500/20 overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Interested in Working Together?
            </h2>
            <p className="text-lg mb-8 text-cyan-50 max-w-2xl mx-auto">
              I'm always open to discussing new projects and opportunities.
            </p>
            <Link 
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-slate-900 rounded-lg font-bold hover:bg-slate-100 transition-all duration-200 hover:scale-105 shadow-xl"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
'use client'

import { useRef, useState } from 'react'
import ProjectCard from './ProjectCard'
import type { Project } from '@/lib/projects'

interface Props {
  professional: Project[]
  personal: Project[]
}

export default function ProjectTabs({ professional, personal }: Props) {
  const tabs = [
    {
      id: 'professional',
      label: 'Professional',
      blurb:
        'Delivered for employers and clients across training, defense, and commercial programs.',
      projects: professional,
    },
    {
      id: 'personal',
      label: 'Personal & Open Source',
      blurb:
        'Self-directed work, ordered by maturity. Contributions to forked projects are scoped to what I actually authored, and say so.',
      projects: personal,
    },
  ]

  const [active, setActive] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  function onKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
    const keys = ['ArrowRight', 'ArrowLeft', 'Home', 'End']
    if (!keys.includes(event.key)) return
    event.preventDefault()

    let next = active
    if (event.key === 'ArrowRight') next = (active + 1) % tabs.length
    if (event.key === 'ArrowLeft') next = (active - 1 + tabs.length) % tabs.length
    if (event.key === 'Home') next = 0
    if (event.key === 'End') next = tabs.length - 1

    setActive(next)
    tabRefs.current[next]?.focus()
  }

  const current = tabs[active]

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      {/* Tabs */}
      <div
        role="tablist"
        aria-label="Project categories"
        className="flex flex-wrap gap-2 border-b border-slate-800 mb-8"
      >
        {tabs.map((tab, index) => {
          const selected = index === active
          return (
            <button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[index] = el
              }}
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={selected}
              aria-controls={`panel-${tab.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(index)}
              onKeyDown={onKeyDown}
              className={`relative -mb-px px-5 py-3 text-sm md:text-base font-medium rounded-t-lg border-b-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
                selected
                  ? 'text-cyan-400 border-cyan-400'
                  : 'text-slate-400 border-transparent hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {tab.label}
              <span
                className={`ml-2 font-mono text-xs ${
                  selected ? 'text-cyan-500/80' : 'text-slate-600'
                }`}
              >
                {tab.projects.length}
              </span>
            </button>
          )
        })}
      </div>

      {/* Panel */}
      <div
        role="tabpanel"
        id={`panel-${current.id}`}
        aria-labelledby={`tab-${current.id}`}
        tabIndex={0}
        className="focus:outline-none"
      >
        <p className="text-slate-400 max-w-2xl mb-8">{current.blurb}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {current.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

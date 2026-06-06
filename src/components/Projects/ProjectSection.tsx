'use client'

import { useEffect, useState } from 'react'
import { Project } from '@/lib/types'
import SectionHeading from '../SectionHeading/SectionHeading'
import ProjectCard from './ProjectCard'

interface ProjectSectionProps {
  projects: Project[]
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ projects }) => {
  const [visibleProjects, setVisibleProjects] = useState(6)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleProjects(3)
      } else if (window.innerWidth < 1024) {
        setVisibleProjects(4)
      } else {
        setVisibleProjects(6)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const displayedProjects = projects.slice(0, visibleProjects)

  const showLoadMore = visibleProjects < projects.length

  const loadMore = () => {
    if (window.innerWidth < 768) {
      setVisibleProjects((prev) => prev + 3)
    } else if (window.innerWidth < 1024) {
      setVisibleProjects((prev) => prev + 4)
    } else {
      setVisibleProjects((prev) => prev + 6)
    }
  }

  return (
    <section id="projects" className="py-20">
      <SectionHeading
        title="Featured Projects"
        subtitle="A collection of web applications, software systems, and digital products showcasing my expertise in full-stack development, enterprise systems, and problem-solving."
      />

      {/* Stats */}
      <div className="mt-12 mb-14 grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="bg-secondary rounded-2xl p-6 text-center">
          <h3 className="text-accent text-3xl font-bold">
            {projects.length}+
          </h3>
          <p className="text-primary-content mt-2 text-sm">
            Projects Built
          </p>
        </div>

        <div className="bg-secondary rounded-2xl p-6 text-center">
          <h3 className="text-accent text-3xl font-bold">5+</h3>
          <p className="text-primary-content mt-2 text-sm">
            Enterprise Systems
          </p>
        </div>

        <div className="bg-secondary rounded-2xl p-6 text-center">
          <h3 className="text-accent text-3xl font-bold">3+</h3>
          <p className="text-primary-content mt-2 text-sm">
            FinTech Solutions
          </p>
        </div>

        <div className="bg-secondary rounded-2xl p-6 text-center">
          <h3 className="text-accent text-3xl font-bold">
            100%
          </h3>
          <p className="text-primary-content mt-2 text-sm">
            Commitment
          </p>
        </div>
      </div>

      {/* Projects */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {displayedProjects.map((project) => (
          <ProjectCard
            key={project.priority}
            data={project}
          />
        ))}
      </div>

      {/* Load More */}
       {showLoadMore && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={loadMore}
            className="bg-accent text-primary hover:bg-accent/90 rounded-xl px-8 py-3 font-medium transition-all duration-300"
          >
            Load More Projects
          </button>
        </div>
      )}
    </section>
  )
}

export default ProjectSection
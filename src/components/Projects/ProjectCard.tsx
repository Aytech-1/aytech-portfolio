import { Project } from '@/lib/types'
import Image from 'next/image'
import { GithubIcon, PreviewIcon } from '@/utils/icons'

interface ProjectCardProps {
  data: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  const {
    title,
    shortDescription,
    livePreview,
    githubLink,
    cover,
    type,
    technologies,
  } = data

  return (
    <article className="group bg-secondary border-border hover:border-accent/40 hover:shadow-accent/10 overflow-hidden rounded-3xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <Image
          src={cover}
          alt={title}
          width={800}
          height={500}
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Project Type */}
        {type && (
          <span className="absolute top-4 left-4 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
            {type}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex h-[320px] flex-col p-6">
        <div>
          <h3 className="text-secondary-content text-xl font-bold">
            {title}
          </h3>

          <p className="text-secondary-content/70 mt-3 line-clamp-4 text-sm leading-relaxed">
            {shortDescription}
          </p>
        </div>

        {/* Technologies */}
        {technologies && technologies.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="bg-accent/10 text-accent rounded-full px-3 py-1 text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Push buttons to bottom */}
        <div className="mt-auto pt-6">
          <div className="flex flex-wrap gap-3">
            {livePreview && (
              <a
                href={livePreview}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-primary inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition hover:scale-105"
              >
                <PreviewIcon className="w-4" />
                Live Demo
              </a>
            )}

            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="border-border text-secondary-content hover:bg-primary inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold transition"
              >
                <GithubIcon className="w-4" />
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
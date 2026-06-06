interface SkillCardProps {
  icon: React.ElementType
  title: string
  technologies: string[]
}

const SkillCard: React.FC<SkillCardProps> = ({
  icon: Icon,
  title,
  technologies,
}) => {
  return (
    <div className="group bg-secondary border-border hover:border-accent/40 hover:shadow-accent/10 rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="bg-accent/10 text-accent mb-5 flex h-14 w-14 items-center justify-center rounded-2xl">
        <Icon size={26} />
      </div>

      <h3 className="text-secondary-content mb-4 text-xl font-semibold">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="bg-primary text-primary-content rounded-full px-3 py-1.5 text-xs font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

export default SkillCard
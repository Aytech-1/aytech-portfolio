interface ExperienceCardProps {
  title: string
  organization: string
  duration: string
  description: string
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  organization,
  duration,
  description,
}) => {
  return (
    <div className="relative flex gap-6">
      {/* Timeline Dot */}
      <div className="hidden md:flex">
        <div className="bg-accent relative z-10 mt-4 h-4 w-4 rounded-full border-4 border-black" />
      </div>

      {/* Card */}
      <div className="bg-secondary border-border hover:border-accent/40 w-full rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-secondary-content text-xl font-semibold">
              {title}
            </h3>

            <p className="text-accent mt-1 text-sm font-medium">
              {organization}
            </p>
          </div>

          <span className="bg-primary text-primary-content rounded-full px-4 py-2 text-sm">
            {duration}
          </span>
        </div>

        <p className="text-primary-content mt-5 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}

export default ExperienceCard
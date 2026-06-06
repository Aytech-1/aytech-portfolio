interface AchievementCardProps {
  title: string
  organization: string
  year: string
  description: string
}

const AchievementCard: React.FC<AchievementCardProps> = ({
  title,
  organization,
  year,
  description,
}) => {
  return (
    <div className="group bg-secondary border-border hover:border-accent/40 hover:shadow-accent/10 rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="flex-1">
          <h3 className="text-secondary-content text-xl font-semibold">
            {title}
          </h3>

          <p className="text-accent mt-1 font-medium">
            {organization}
          </p>

          <p className="text-primary-content/80 mt-4 leading-relaxed">
            {description}
          </p>
        </div>

        <span className="bg-primary text-primary-content shrink-0 rounded-full px-4 py-2 text-sm">
          {year}
        </span>
      </div>
    </div>
  )
}

export default AchievementCard
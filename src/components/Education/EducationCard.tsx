interface EducationCardProps {
  degree: string
  field: string
  institution: string
  location: string
  duration: string
}

const EducationCard: React.FC<EducationCardProps> = ({
  degree,
  field,
  institution,
  location,
  duration,
}) => {
  return (
    <div className="bg-secondary border-border hover:border-accent/40 rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-secondary-content text-xl font-semibold">
            {degree}
          </h3>

          <p className="text-accent mt-1 font-medium">
            {field}
          </p>

          <p className="text-primary-content mt-3">
            {institution}
          </p>

          <p className="text-primary-content/70 text-sm">
            {location}
          </p>
        </div>

        <span className="bg-primary text-primary-content w-fit rounded-full px-4 py-2 text-sm">
          {duration}
        </span>
      </div>
    </div>
  )
}

export default EducationCard
import { skills } from '../../appData'
import SectionHeading from '../SectionHeading/SectionHeading'
import SkillCard from './SkillCard'

const Skills = () => {
  return (
    <section id="skills" className="my-20">
      <SectionHeading
        title="Skills & Expertise"
        subtitle="Technologies, tools, and frameworks I use to build scalable web and software solutions."
      />

      {/* Stats Section */}
      <div className="mt-12 mb-14 grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="bg-secondary border-border rounded-2xl border p-6 text-center">
          <h3 className="text-accent text-3xl font-bold">5+</h3>
          <p className="text-primary-content mt-2 text-sm">Technologies</p>
        </div>

        <div className="bg-secondary border-border rounded-2xl border p-6 text-center">
          <h3 className="text-accent text-3xl font-bold">8+</h3>
          <p className="text-primary-content mt-2 text-sm">Projects Built</p>
        </div>

        <div className="bg-secondary border-border rounded-2xl border p-6 text-center">
          <h3 className="text-accent text-3xl font-bold">2+</h3>
          <p className="text-primary-content mt-2 text-sm">Years Experience</p>
        </div>

        <div className="bg-secondary border-border rounded-2xl border p-6 text-center">
          <h3 className="text-accent text-3xl font-bold">100%</h3>
          <p className="text-primary-content mt-2 text-sm">Commitment</p>
        </div>
      </div>

      {/* Skills Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </section>
  )
}

export default Skills
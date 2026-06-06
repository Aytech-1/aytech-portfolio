import SectionHeading from '../SectionHeading/SectionHeading'
import ExperienceCard from './ExperienceCard'
import { experiences } from '@/appData'

const ExperienceSection = () => {
    return (
        <section id="experience" className="my-20">
            <SectionHeading
                title="Experience & Leadership"
                subtitle="My professional journey, leadership roles, industrial training, and contributions to technology and software development."
            />

            <div className="mt-12 mb-14 grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="bg-secondary border-border rounded-3xl border p-6 text-center">
                    <h3 className="text-accent text-3xl font-bold">2+</h3>
                    <p className="text-primary-content mt-2 text-sm">
                        Years Experience
                    </p>
                </div>

                <div className="bg-secondary border-border rounded-3xl border p-6 text-center">
                    <h3 className="text-accent text-3xl font-bold">15+</h3>
                    <p className="text-primary-content mt-2 text-sm">
                        Projects Completed
                    </p>
                </div>

                <div className="bg-secondary border-border rounded-3xl border p-6 text-center">
                    <h3 className="text-accent text-3xl font-bold">3</h3>
                    <p className="text-primary-content mt-2 text-sm">
                        Leadership Roles
                    </p>
                </div>

                <div className="bg-secondary border-border rounded-3xl border p-6 text-center">
                    <h3 className="text-accent text-3xl font-bold">1st</h3>
                    <p className="text-primary-content mt-2 text-sm">
                        NCS Winner
                    </p>
                </div>
            </div>

            <div className="relative mt-14">
                {/* Timeline Line */}
                <div className="bg-border absolute left-4 top-0 hidden h-full w-px md:block" />

                <div className="space-y-8">
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} {...experience} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ExperienceSection
import { educationData } from '@/appData'
import SectionHeading from '../SectionHeading/SectionHeading'
import EducationCard from './EducationCard'

const EducationSection = () => {
    return (
        <section id="education" className="my-20">
            <SectionHeading
                title="Education"
                subtitle="My academic journey and formal training in Computer Science and Software Development."
            />

            <div className="mt-12 space-y-6">
                {educationData.map((education, index) => (
                    <EducationCard key={index} {...education} />
                ))}
            </div>
        </section>
    )
}

export default EducationSection
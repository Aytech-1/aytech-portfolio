import { achievements } from '@/appData'
import SectionHeading from '../SectionHeading/SectionHeading'
import AchievementCard from './AchievementCard'

const AchievementSection = () => {
    return (
        <section id="achievements" className="my-20">
            <SectionHeading
                title="Achievements & Awards"
                subtitle="Recognition, awards, certifications, and notable accomplishments throughout my academic and professional journey."
            />

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
                {achievements.map((achievement, index) => (
                    <AchievementCard
                        key={index}
                        {...achievement}
                    />
                ))}
            </div>
        </section>
    )
}

export default AchievementSection
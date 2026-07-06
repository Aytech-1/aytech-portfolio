import { skillList, projects } from '@/appData'
import ContactSection from '@/components/Contact/ContactSection'
import Hero from '@/components/Hero/Hero'
import ProjectSection from '@/components/Projects/ProjectSection'
import ServiceSection from '@/components/Services/ServiceSection'
import ExperienceSection from '@/components/Experience/ExperienceSection'
import EducationSection from '@/components/Education/EducationSection'
import AchievementSection from '@/components/Achievement/AchievementSection'
import SkillList from '@/components/Skills/Skills'
import Skills from '@/components/Skills/skillSection'

export default async function Home() {
  return (
    <main>
      <Hero />
      <div className="mx-auto my-8 max-w-7xl px-4 md:my-[3.75rem]">
        <Skills />
        <SkillList skills={skillList} />
        <ProjectSection projects={projects} />
        <ServiceSection />
        <ExperienceSection />
        <EducationSection />
        <AchievementSection />
        <ContactSection />
      </div>
    </main>
  )
}

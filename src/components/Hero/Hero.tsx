'use client'
import useRoleSwitcher from '@/hooks/useRoleSwitcher'
import useRotatingAnimation from '@/hooks/useRotatingAnimation'
import Image from 'next/image'
import { HeroImage } from '../../utils/images'
import Ellipse from './Ellipse'

const Hero = () => {
  const ellipseRef = useRotatingAnimation()
  const role = useRoleSwitcher({ roles: ['Full Stack Developer', 'Laravel Specialist', 'Next.js Developer'] })

  return (
    <section className="pt-20 md:pt-16 min-h-screen flex items-center justify-center bg-primary bg-small-glow bg-small-glow-position md:bg-large-glow-position lg:bg-large-glow bg-no-repeat">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1.2fr_0.8fr] lg:gap-16">

          <div className="flex flex-col justify-center">
            <h1>
              <span className="text-neutral mb-2 block text-2xl font-bold md:text-4xl lg:text-4xl">
                Hello, I'm Adeyemi Ayobami
              </span>

              <span className="text-accent block min-h-[3rem] text-2xl font-bold md:text-3xl lg:text-4xl">
                {role}
              </span>
            </h1>

            <h2 className="text-neutral/80 mt-6 max-w-xl text-lg leading-relaxed md:text-xl">
              Building scalable web applications, enterprise software,
              and digital solutions that solve real world business challenges.
            </h2>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="bg-accent text-primary rounded-xl px-7 py-3 font-semibold transition-all duration-300 hover:scale-105"
              >
                View Projects
              </a>

              <a
                href="/Adeyemi_Ayobami_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-border text-neutral rounded-xl border px-7 py-3 font-medium transition-all duration-300 hover:bg-secondary"
              >
                Download CV
              </a>

              <a
                href="#contact"
                className="text-accent rounded-xl px-4 py-3 font-medium transition-all duration-300 hover:translate-x-1"
              >
                Let's Talk →
              </a>

            </div>
          </div>

          {/* Right Image */}
          <div className="flex items-center justify-center">
            <div className="relative size-56 sm:size-64 md:size-[20rem] lg:size-[26rem]">

              <Image
                src={HeroImage}
                fill
                priority
                sizes="(min-width:1024px) 26rem, (min-width:768px) 20rem, (min-width:640px) 16rem, 14rem"
                alt="Adeyemi Ayobami - Full Stack Developer"
                className="object-contain p-6"
              />

              <Ellipse
                ref={ellipseRef}
                className="text-accent absolute inset-0 size-full transition-transform duration-500 ease-out"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero

import Link from 'next/link'
import Logo from '../Navbar/Logo'
import { socials } from '@/appData/personal'

const Footer = () => {
  return (
    <footer className="border-border bg-secondary border-t">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        {/* Top Section */}
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <Link href="/" className="mb-6 flex items-center gap-3">
              <Logo className="h-10 w-10" />

              <div className="flex flex-col">
                <span className="text-neutral text-xl font-bold">
                  AyTECH
                </span>

                <span className="text-accent text-xs uppercase tracking-wider">
                  Full Stack Developer
                </span>
              </div>
            </Link>

            <p className="text-tertiary-content max-w-md leading-relaxed">
              Building scalable web applications, enterprise software,
              and digital solutions that solve real-world business challenges.
            </p>

            <div className="mt-6 flex items-center gap-4">
              {socials.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tertiary-content hover:text-accent transition-colors duration-300"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-neutral mb-5 font-semibold">
              Quick Links
            </h4>

            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-tertiary-content hover:text-accent transition-colors">
                  Home
                </a>
              </li>

              <li>
                <a href="#skills" className="text-tertiary-content hover:text-accent transition-colors">
                  Skills
                </a>
              </li>

              <li>
                <a href="#projects" className="text-tertiary-content hover:text-accent transition-colors">
                  Projects
                </a>
              </li>

              <li>
                <a href="#experience" className="text-tertiary-content hover:text-accent transition-colors">
                  Experience
                </a>
              </li>

              <li>
                <a href="#education" className="text-tertiary-content hover:text-accent transition-colors">
                  Education
                </a>
              </li>

              <li>
                <a href="#achievements" className="text-tertiary-content hover:text-accent transition-colors">
                  Achievements
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-neutral mb-5 font-semibold">
              Services
            </h4>

            <ul className="space-y-3">
              <li className="text-tertiary-content">
                Web Development
              </li>

              <li className="text-tertiary-content">
                API Development
              </li>

              <li className="text-tertiary-content">
                Software Solutions
              </li>

              <li className="text-tertiary-content">
                Database Design
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-neutral mb-5 font-semibold">
              Contact
            </h4>

            <div className="space-y-3">
              <a
                href="mailto:adeyemiayobami273@gmail.com"
                className="text-tertiary-content hover:text-accent block"
              >
                adeyemiayobami273@gmail.com
              </a>

              <a
                href="tel:+2349030019355"
                className="text-tertiary-content hover:text-accent block"
              >
                +234 903 001 9355
              </a>

              <p className="text-tertiary-content">
                Ogun State, Nigeria
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-border mt-14 flex flex-col gap-4 border-t pt-8 text-sm md:flex-row md:items-center md:justify-between">

          <p className="text-tertiary-content">
            © {new Date().getFullYear()} AyTECH. All rights reserved.
          </p>

          <p className="text-tertiary-content">
            Built with Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
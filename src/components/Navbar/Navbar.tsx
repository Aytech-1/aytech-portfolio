'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { BurgerIcon, CloseIcon } from '../../utils/icons'
import Logo from './Logo'

export const navItems = [
  {
    label: 'Home',
    href: '#home',
  },
  {
    label: 'Skills',
    href: '#skills',
  },
  {
    label: 'Projects',
    href: '#projects',
  },
  {
    label: 'Services',
    href: '#services',
  },
  {
    label: 'Experience',
    href: '#experience',
  },
  {
    label: 'Education',
    href: '#education',
  },
  {
    label: 'Achievements',
    href: '#achievements',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
]

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsVisible(!isVisible)
  }

  return (
    <nav className="bg-primary border-border h-16 border-b fixed top-0 left-0 w-full z-20">
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-6">
        {isVisible ? (
          <div className="text-primary-content md:hidden">menu</div>
        ) : (
          <Link href="/">
            <div className="animate-fade-up relative flex items-center gap-3 transition-all duration-300 md:static">
              <Logo className="h-10 w-10 shrink-0" />

              <div className="flex flex-col">
                <span className="text-neutral text-xl font-bold">
                  AyTECH
                </span>

                <span className="text-accent text-xs uppercase tracking-wider">
                  Full Stack Developer
                </span>
              </div>
            </div>
          </Link>
        )}

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isVisible ? (
              <CloseIcon className="text-primary-content" />
            ) : (
              <BurgerIcon className="text-primary-content" />
            )}
          </button>
        </div>

        <ul
          className={`${isVisible ? 'flex' : 'hidden'
            } animate-fade-in bg-primary absolute top-16 left-0 z-10 h-dvh w-full flex-col pl-4 md:pl-0 md:static md:top-0 md:flex md:h-full md:w-[72%] md:flex-row md:items-center md:gap-4 lg:w-[65%] lg:gap-6`}
        >
          {navItems.map(({ label, href }) => (
            <li
              key={href}
              onClick={() => setIsVisible(false)}
              className="flex items-center whitespace-nowrap shrink-0 md:text-base"
            >
              <Link
                href={href}
                className={`text-primary-content hover:text-neutral py-7 transition-all duration-150 md:py-0 ${pathname === href ? 'text-neutral cursor-text' : ''
                  }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
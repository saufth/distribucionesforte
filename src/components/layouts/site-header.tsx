'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'
import {
  useMotionValueEvent,
  useScroll
} from 'framer-motion'
import { cn } from '@/lib/utils'
import { contactEmail, siteConfig, siteNav } from '@/config/site'

const contactLink = siteNav.find(({ title }) => title === 'Contáctanos')!

export default function SiteHeader () {
  const { scrollY } = useScroll()
  const [isOnTop, setIsOnTop] = React.useState(true)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  useMotionValueEvent(scrollY, 'change', (latestScrollY) => {
    setIsOnTop(latestScrollY < 1)
  })

  return (
    <>
      <header
        className={cn(
          'w-full sticky top-0 left-0 z-40 transition-colors duration-300 border-b border-black/20',
          isOnTop ? 'bg-transparent border-white/60' : 'bg-white/90 backdrop-filter backdrop-blur-sm',
          isMenuOpen && 'bg-black/80 backdrop-filter backdrop-blur-sm'
        )}
      >
        <nav
          className='relative'
          aria-label='Emah Directory'
        >
          <div className='container'>
            <div
              className='cols-container items-center w-full h-[68px] lg:h-[84px]'
            >
              <div className='w-3-cols md:w-4-cols lg:w-3-cols h-8 lg:h-10'>
                <Link href='/' onClick={closeMenu}>
                  <Icons.Logoname className={cn('w-auto h-full fill-primary', (isOnTop || isMenuOpen) && 'fill-white')} />
                  <span className='sr-only'>{siteConfig.name} home</span>
                </Link>
              </div>
              <div className='w-6-cols hidden lg:flex justify-around'>
                {siteNav.map((navItem, key) => (
                  key < siteNav.length - 1 && (
                    <Button variant='link' size='lg' asChild key={key}>
                      <Link className={cn('flex items-center gap-x-1 text-primary', isOnTop && 'text-white')} href={navItem.href}>
                        {navItem.title}
                      </Link>
                    </Button>
                  )))}
              </div>
              <div className='w-3-cols md:w-4-cols lg:w-3-cols flex justify-end'>
                <div className='hidden lg:flex justify-end'>
                  <Link href={contactLink.href}>
                    <div className='group max-w-fit px-6 py-2.5 relative text-md leading-none'>
                      <div className={cn('z-20 text-primary [&>span]:text-primary text-lg', isOnTop && 'text-white [&>span]:text-white')}>
                        {contactLink.title} <span className='group-hover:ml-4 text-lg leading-none transition-[margin] duration-300'>&rarr;</span>
                      </div>
                      <div className={cn('w-[48px] group-hover:w-full h-full absolute top-0 left-0 border border-primary rounded-full transition-[width,border] duration-300', isOnTop && 'border-white')} />
                    </div>
                  </Link>
                </div>
                <div className='block lg:hidden w-6 h-4 relative [&>span]:transition-all' onClick={toggleMenu}>
                  <span className={cn('w-full h-[2px] bg-primary absolute top-0 left-0', isMenuOpen && 'inset-0 m-auto rotate-45 bg-white', isOnTop && 'bg-white')} />
                  <span className={cn('w-full h-[2px] bg-primary absolute top-0 bottom-0 my-auto', isMenuOpen && 'opacity-0 bg-white', isOnTop && 'bg-white')} />
                  <span className={cn('w-full h-[2px] bg-primary absolute bottom-0 left-0', isMenuOpen && 'inset-0 m-auto -rotate-45 bg-white', isOnTop && 'bg-white')} />
                  <span className='sr-only'>Toggle menu</span>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div
        className={cn(
          'w-full h-0 bg-background fixed flex flex-col justify-between top-0 left-0 z-30 overflow-hidden transition-[height] duration-300',
          isMenuOpen && 'h-[100dvh]'
        )}
      >
        <nav className='container mt-spacing-9'>
          {siteNav.map((navItem, key) => (
            <Button className='rounded-none w-full px-0' variant='link' size='lg' asChild key={key}>
              <Link className='flex justify-between text-xl' href={navItem.href} onClick={() => setIsMenuOpen(false)}>
                {navItem.title}
              </Link>
            </Button>
          ))}
        </nav>
        <div className='container pb-8'>
          <div className='text-sm text-muted-foreground'>
            Correo electrónico
          </div>
          <Link className='text-baseg' href={`mailto:${contactEmail}`} onClick={() => setIsMenuOpen(false)}>
            {contactEmail}
          </Link>
        </div>
      </div>
    </>
  )
}

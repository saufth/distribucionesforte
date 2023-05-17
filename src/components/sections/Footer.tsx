// Components
import LinkToAction from '../navigation/LinkToAction'
import Image from 'next/image'
import Link from '../navigation/core/Link'
import LinkEmail from '../navigation/LinkEmail'
import NextLink from 'next/link'
// Config
import { NAV_LIST } from '@/modules/navigation/config'
import { copyright, organization } from '@/modules/app/config'
import { THEMES } from '@/modules/theme/config'
import { SIZES } from '@/modules/sizing/config'

/**
 * The footer section of application
 * @returns Footer section component
 */
export default function Footer () {
  return (
    <footer className='bg-primary-light'>
      <div className='px-5%'>
        <div className='max-w-8xl py-16 mx-auto flex flex-col lg:flex-row justify-between gap-y-8'>
          <div className='lg:w-[232px] grid lg:block place-content-center'>
            <NextLink href='/'>
              <Image
                src='/images/logomark-white.svg'
                alt={organization}
                className='w-auto h-9'
                width={36}
                height={35}
              />
            </NextLink>
          </div>
          <nav>
            <ul className='w-full flex flex-col lg:flex-row gap-4 text-center'>
              {NAV_LIST.map((navItem, key) => (
                <li
                  className='last:hidden last:lg:block'
                  key={key}
                >
                  <Link href={navItem.href} theme={THEMES.secondary} size={SIZES.sm}>
                    {navItem.children}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className='lg:w-[232px] text-center lg:text-right'>
            <LinkEmail theme={THEMES.secondary} />
          </div>
          <div className='lg:hidden grid place-content-center'>
            <LinkToAction />
          </div>
        </div>
      </div>
      <div className='bg-primary'>
        <div className='max-w-8xl px-1 py-4 mx-auto text-white text-center'>
          <div>
            {copyright}
          </div>
        </div>
      </div>
    </footer>
  )
}

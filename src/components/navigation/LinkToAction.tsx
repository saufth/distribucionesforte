// Components
import NextLink from 'next/link'
// Config
import { NAV } from '@/modules/navigation/config'
import { THEMES } from '@/modules/theme/config'
// Types
import type { Theme, Themeable } from '@/types/theme'

const THEME_STYLES: Readonly<Record<Theme, string>> = {
  primary: '[&>span]:text-sky-400 [&>div]:text-white [&>div]:bg-sky-400',
  secondary: '[&>span]:text-white [&>div]:text-sky-400 [&>div]:bg-white'
}

/**
 * The main link to action component of the application
 * @see {@link Themeable} for props specifications
 * @param Themeable The component props
 * @returns The LinkToAction component
 *
 * @default theme 'primary'
 */
export default function LinkToAction ({ theme = THEMES.primary }: Themeable) {
  return (
    <NextLink href={NAV.contact.href}>
      <div className={`hidden md:flex gap-x-4 items-center ${THEME_STYLES[theme]}`}>
        <span className='max-w-fit font-primary-semibold'>
          CONTÁCTANOS
        </span>
        <div className='w-7 h-7 grid place-content-center text-lg rounded-full leading-none'>
          @
        </div>
      </div>
    </NextLink>
  )
}

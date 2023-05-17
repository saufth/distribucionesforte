// Components
import LinkButton from './core/LinkButton'
// Config
import { NAV } from '@/modules/navigation/config'
// Types
import { Themeable } from '@/types/theme'

/**
 * The main link to services component of the application
 * @see {@link Themeable} for props specifications
 * @param Themeable The component props
 * @returns The LinkToServices component
 */
export default function LinkToServices ({ theme }: Themeable) {
  return (
    <LinkButton href={NAV.solutions.href} theme={theme}>
      {NAV.solutions.children}
    </LinkButton>
  )
}

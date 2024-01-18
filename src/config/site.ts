import { type Author } from 'next/dist/lib/metadata/types/metadata-types'
import { type MainNavItem } from '@/types'

interface SiteConfig {
  name: string,
  description: string,
  slogan?: string,
  url: URL | string,
  author: Author,
  mainNav: MainNavItem[]
}

export const author: Author = {
  name: 'saufth',
  url: 'https://github.com/saufth'
}

export const siteNav = [
  {
    title: 'Soluciones',
    href: '/#soluciones'
  },
  {
    title: 'Nosotros',
    href: '/#nosotros'
  },
  {
    title: 'Valores',
    href: '/#valores'
  },
  {
    title: 'Historia',
    href: '/historia'
  },
  {
    title: 'Contáctanos',
    href: '/contacto'
  }
]

export const domain = 'distribucionesforte.com'
export const contactEmail = `contacto@${domain}`

export const siteConfig: SiteConfig = {
  name: 'Distribuciones Forte Innovation',
  description: 'Venta de materiales para la construcción e industria y mantenimiento industrial',
  slogan: 'Innovaciones que generan valor',
  url: `https://${domain}`,
  author,
  mainNav: [
    {
      title: 'Inicio',
      href: '/'
    },
    ...siteNav
  ]
}

// Types
import type { HeaderListConfig } from '@/types/data-dislay'
import type { Author } from 'next/dist/lib/metadata/types/metadata-types'

/** The project author */
export const author: Author = {
  name: 'Sauftdev',
  url: 'https://emah.mx/'
}

/** The application domain name */
export const domain = process.env.NEXT_PUBLIC_DOMAIN

/** The base URL of the aplication */
export const baseUrl = `https://${domain}/`

/** The name of the organization */
export const organization = 'Distribuciones Forte Innovation'

/** The head desciption of the application */
export const description = 'Innovaciones que generan valor'

/** The email of the organizacion */
export const email = `contacto@${domain}`

/** Organization services */
export const SERVICES: HeaderListConfig = {
  constructionMaterials: {
    heading: 'Venta de material para la construcción',
    description: 'Ofrecemos materiales compuestos, de alta resistencia y avanzados para aplicaciones específicas. Nuestra materia prima es de alta calidad y cumple con las normas y estándares dentro de la industria.'
  },
  constructionTools: {
    heading: 'Venta de herramienta para la construcción',
    description: 'Nos aseguramos de que nuestros clientes cuenten con las herramientas adecuadas al llevar a cabo sus proyectos, para reducir el tiempo de construcción y minimizar errores en el proceso.'
  },
  industrialTools: {
    heading: 'Venta de herramienta y equipo industrial',
    description: 'Contamos con herramientas y equipo diseñado para ser utilizados en la fabricación y producción de bienes y productos industriales. Facilitamos sus procesos de industrialización asegurándonos de proveerle lo necesario a un precio justo.'
  },
  constructionRent: {
    heading: 'Renta de maquinaria para la construcción',
    description: 'Tenemos a disposición una amplia gama de equipos para la industria, incluyendo maquinarias de alta tecnología para la fabricación y producción, para el manejo de materiales, equipos de elevación y transporte, así como herramientas especializadas para aplicaciones específicas. Algunas de ellas son: excavadora, retroexcavadora, bulldozer, camión volquete, grúa, mezcladora de concreto, compactadora, montacargas, martillo hidráulico, pavimentadora, entre otras. Nuestros equipos se mantienen en excelentes condiciones para asegurar la eficiencia en el lugar de trabajo.'
  },
  industrialRent: {
    heading: 'Renta de maquinaria industrial',
    description: 'Ponemos a su servicio la renta de torno CNC, fresadora, prensa hidráulica, máquina de inyección de plástico, cizalla industrial, caldera industrial, equipo de soldadura, grúa, máquina de embalaje, máquina de impresión industrial, compresores y generadores de energía. Garantizamos el óptimo funcionamiento de nuestro equipo industrial con los mejores resultados.'
  },
  maintenance: {
    heading: 'Mantenimiento industrial',
    description: 'Realizamos mantenimiento preventivo y correctivo, reparación y reacondicionamiento de equipos y gestión de activos. Los servicios de mantenimiento se realizan de manera oportuna para minimizar el tiempo de inactividad y maximizar la disponibilidad del equipo.'
  }
}

/** Organization values */
export const VALUES: HeaderListConfig = {
  innovation: {
    heading: 'Innovación',
    description: 'Implementamos nuevas tecnologías, procesos y productos en la industria para mejorar la eficiencia, la productividad y la competitividad de las empresas.'
  },
  quality: {
    heading: 'Calidad',
    description: 'Estamos orientados a ofrecer soluciones que cumplan con las expectativas de nuestros clientes y superen sus requisitos.'
  },
  teamwork: {
    heading: 'Trabajo en equipo',
    description: 'Trabajamos en colaboración con nuestros clientes para lograr objetivos comunes y promover un ambiente positivo y cooperativo.'
  },
  integrity: {
    heading: 'Integridad',
    description: 'Nos comprometemos a actuar con integridad y transparencia en todas nuestras relaciones comerciales y personales.'
  },
  learning: {
    heading: 'Aprendizaje continuo',
    description: 'Fomentamos el aprendizaje continuo y el desarrollo profesional de nuestros empleados, para garantizar que estamos siempre a la vanguardia en la industria.'
  }
}

/** The copyright of the application */
export const copyright = `Copyright ${new Date().getFullYear()} ${organization}. All rights reserved.`

/** The keyword list of the application */
export const KEYWORDS: ReadonlyArray<string> = [
  organization,
  SERVICES.constructionMaterials.heading,
  SERVICES.constructionTools.heading,
  SERVICES.industrialTools.heading,
  SERVICES.constructionRent.heading,
  SERVICES.industrialRent.heading,
  SERVICES.maintenance.heading
]

/** The keyword list as string */
export const keywords = String(KEYWORDS)

/** Is used as a cover image for social networks */
export const coverImageUrl = `${baseUrl}cover.jpg`

/** Twitter account */
export const twitter: string = ''

/** Html theme color */
export const themeColor = '#113060'

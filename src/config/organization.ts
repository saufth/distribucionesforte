import { type Article, type Section } from '@/types'

export const filosophy: Section = {
  title: 'Nuestra filosofía',
  image: {
    src: '/images/home-filosophy.webp',
    alt: 'Tres trabajadores caminando dando la espalda en el interior de una bodega de materiales de construcción',
    width: 1500,
    height: 891
  },
  items: [
    {
      title: 'Nuestra misión',
      description: 'Transformar la industria a través de la innovación. Nos esforzamos por ser líderes en el desarrollo e implementación de soluciones que mejoren la eficiencia y la productividad en los procesos industriales.',
      label: 'Filosofía'
    },
    {
      title: 'Nuestra visión',
      description: 'Ofrecer soluciones disruptivas que cambian el juego en la industria. Logrando una ventaja competitiva a través de la mejora continua.',
      label: 'Filosofía'
    }
  ]
}

export const culture: Section = {
  title: 'Nuestros valores',
  description: 'Nuestros valores son los principios profesionales que guían las acciones y decisiones que tomamos. Representan la esencia de la empresa y la forma en que nos relacionamos con nuestros empleados, clientes, proveedores y comunidad.',
  items: [
    {
      title: 'Innovación',
      description: 'Implementamos nuevas tecnologías, procesos y productos en la industria para mejorar la eficiencia, la productividad y la competitividad de las empresas.',
      image: {
        src: '/images/culture1.svg',
        alt: 'Innovación',
        width: 512,
        height: 512
      }
    },
    {
      title: 'Calidad',
      description: 'Estamos orientados a ofrecer soluciones que cumplan con las expectativas de nuestros clientes y superen sus requisitos.',
      image: {
        src: '/images/culture2.svg',
        alt: 'Calidad',
        width: 512,
        height: 512
      }
    },
    {
      title: 'Trabajo en equipo',
      description: 'Trabajamos en colaboración con nuestros clientes para lograr objetivos comunes y promover un ambiente positivo y cooperativo.',
      image: {
        src: '/images/culture3.svg',
        alt: 'Trabajo en equipo',
        width: 512,
        height: 512
      }
    },
    {
      title: 'Integridad',
      description: 'Nos comprometemos a actuar con integridad y transparencia en todas nuestras relaciones comerciales y personales.',
      image: {
        src: '/images/culture4.svg',
        alt: 'Integridad',
        width: 512,
        height: 512
      }
    },
    {
      title: 'Aprendizaje continuo',
      description: 'Fomentamos el aprendizaje continuo y el desarrollo profesional de nuestros empleados, para garantizar que estamos siempre a la vanguardia en la industria.',
      image: {
        src: '/images/culture5.svg',
        alt: 'Aprendizaje continuo',
        width: 512,
        height: 512
      }
    }
  ]
}

export const history: Article = {
  title: 'Nuestra historia',
  items: [
    'Distribuciones Forte Innovation es la historia de esfuerzo y superación de un grupo de personas que, movidos por su pasión a la construcción, comenzaron el sueño de emprender a lo grande.',
    'En sus inicios la compañía se centró en la renta y venta de materiales para la construcción. No obstante, en el año 2020, en un mundo detenido por la pandemia, Distribuciones Forte Innovation decide expandirse ante la gran demanda de soluciones en el ramo industrial, tomando así, como punto de partida, la implementación de otros servicios, los cuales fueron surgiendo de necesidades apremiantes como la renta y venta de equipo tanto de construcción, como industrial.',
    'Así mismo en pocos años, la curva de crecimiento se duplicó gracias al profesionalismo de cada persona que forma parte de este gran proyecto. La compañía ha trabajado incansablemente para brindar el mejor servicio, posicionándose rápidamente en el mercado.',
    'Distribuciones Forte Innovation, una empresa orgullosamente mexicana que sigue pisando fuertemente con visión hacia el futuro.'
  ]
}

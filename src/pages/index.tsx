// Components
import Image from 'next/image'
import LinkToAction from '@/components/navigation/LinkToAction'
import LinkToServices from '@/components/navigation/LinkToServices'
import LinkToValues from '@/components/navigation/LinkToValues'
import PageLayout from '@/components/layout/PageLayout'
// Config
import { IMG_EXT } from '@/modules/data-display/config'
import { SERVICES, VALUES, description, organization } from '@/modules/app/config'
import { sectionsImgPath, PAGE_ROUTES, SECTION_ROUTES, NAV, APP_ROUTES } from '@/modules/navigation/config'
// Types
import type { MouseEvent } from 'react'

/**
* The Home page of the application
* @returns The HomePage component
*/
export default function HomePage () {
  /** Solutions name list */
  const SERVICES_NAMES: ReadonlyArray<string> = Object.keys(SERVICES)
  /** Values name list */
  const VALUES_NAMES: ReadonlyArray<string> = Object.keys(VALUES)
  /** Used for prevent video contect menu */
  const preventContextMenu = (event: MouseEvent) => event.preventDefault()

  return (
    <PageLayout page={PAGE_ROUTES.home}>
      <section className='h-3xl px-3% lg:px-0 md:h-[640px] relative overflow-hidden'>
        <div className='max-w-8xl h-full lg:pt-24 mx-auto'>
          <div className='lg:w-1/2 h-full lg:p-3% lg:mx-auto flex flex-col justify-center lg:justify-normal gap-y-5 text-center md:text-left lg:relative lg:border-x lg:border-x-secondary/40'>
            <h1 className='text-white'>
              {description}
            </h1>
            <div className='lg:w-lg lg:p-14 lg:absolute lg:bottom-0 lg:-right-16 space-y-6 lg:bg-black/10 lg:backdrop-filter lg:backdrop-blur-3xl lg:backdrop-saturate-150'>
              <p className='text-lg text-white'>
                Venta y distribución de material y equipo para la construcción e industria maquiladora.
              </p>
              <div className='grid md:block place-content-center'>
                <LinkToServices />
              </div>
            </div>
          </div>
        </div>
        <div className='absolute inset-0 -z-20 overflow-hidden flex items-center'>
          <video
            className='w-full h-full object-cover'
            width={1920}
            height={1080}
            controls={false}
            autoPlay
            muted
            loop
            playsInline
            disablePictureInPicture
            controlsList='nodownload noplaybackrate'
            onContextMenu={preventContextMenu}
          >
            <source src='/video/hero.mp4' type='video/mp4' />
          </video>
          <div className='absolute inset-0 bg-primary-light/60' />
        </div>
      </section>

      <section
        id={SECTION_ROUTES.solutions}
        className='py-24 lg:py-0 lg:grid lg:grid-cols-4 space-y-32 lg:space-y-0 lg:[&>div]:px-10 lg:[&>div]:py-24 [&>div]:space-y-32 lg:[&>div]:space-y-20 lg:[&>div]:grid lg:[&>div]:place-content-center lg:[&>div]:border-l lg:[&>div]:border-l-secondary/40'
      >
        <header className='lg:py-20 space-y-12 lg:space-y-24'>
          <div className='flex items-center gap-x-4'>
            <div className='w-10 h-0.5 bg-sky-400' />
            <h2 className='text-base text-sky-400'>
              {NAV.solutions.children.toUpperCase()}
            </h2>
          </div>
          <div className='px-10 space-y-6 font-primary-semibold text-xl md:text-3xl lg:text-lg text-zinc-600 leading-relaxed tracking-wider'>
            <p>
              Nos especializamos en ofrecer soluciones para el ramo industrial y de la
              construcción, con productos y servicios diseñados para satisfacer las
              necesidades más exigentes.
            </p>
            <p>
              Trabajamos para darle el mejor trato y
              garantizar los resultados en el menor tiempo posible.
            </p>
          </div>
        </header>
        <div>
          <article className='space-y-6'>
            <Image
              src={`${sectionsImgPath}${SERVICES_NAMES[0]}.${IMG_EXT.jpg}`}
              alt={SERVICES_NAMES[0]}
              width={1260}
              height={840}
            />
            <header className='px-7 md:px-10 lg:px-0 space-y-3'>
              <h3 className='font-primary-semibold text-lg text-sky-400'>
                {SERVICES[SERVICES_NAMES[0]].heading}
              </h3>
              <p className='text-sm text-zinc-500'>
                {SERVICES[SERVICES_NAMES[0]].description}
              </p>
            </header>
          </article>
          <article className='space-y-6'>
            <Image
              src={`${sectionsImgPath}${SERVICES_NAMES[3]}.${IMG_EXT.jpg}`}
              alt={SERVICES_NAMES[3]}
              width={1260}
              height={840}
            />
            <header className='px-7 md:px-10 lg:px-0 space-y-3'>
              <h3 className='font-primary-semibold text-lg text-sky-400'>
                {SERVICES[SERVICES_NAMES[3]].heading}
              </h3>
              <p className='text-sm text-zinc-500'>
                {SERVICES[SERVICES_NAMES[3]].description}
              </p>
            </header>
          </article>
        </div>
        <div>
          <article className='space-y-6'>
            <Image
              src={`${sectionsImgPath}${SERVICES_NAMES[1]}.${IMG_EXT.jpg}`}
              alt={SERVICES_NAMES[1]}
              width={1260}
              height={840}
            />
            <header className='px-7 md:px-10 lg:px-0 space-y-3'>
              <h3 className='font-primary-semibold text-lg text-sky-400'>
                {SERVICES[SERVICES_NAMES[1]].heading}
              </h3>
              <p className='text-sm text-zinc-500'>
                {SERVICES[SERVICES_NAMES[1]].description}
              </p>
            </header>
          </article>
          <article className='space-y-6'>
            <Image
              src={`${sectionsImgPath}${SERVICES_NAMES[4]}.${IMG_EXT.jpg}`}
              alt={SERVICES_NAMES[4]}
              width={1260}
              height={840}
            />
            <header className='px-7 md:px-10 lg:px-0 space-y-3'>
              <h3 className='font-primary-semibold text-lg text-sky-400'>
                {SERVICES[SERVICES_NAMES[4]].heading}
              </h3>
              <p className='text-sm text-zinc-500'>
                {SERVICES[SERVICES_NAMES[4]].description}
              </p>
            </header>
          </article>
        </div>
        <div>
          <article className='space-y-6'>
            <Image
              src={`${sectionsImgPath}${SERVICES_NAMES[2]}.${IMG_EXT.jpg}`}
              alt={SERVICES_NAMES[2]}
              width={1260}
              height={840}
            />
            <header className='px-7 md:px-10 lg:px-0 space-y-3'>
              <h3 className='font-primary-semibold text-lg text-sky-400'>
                {SERVICES[SERVICES_NAMES[2]].heading}
              </h3>
              <p className='text-sm text-zinc-500'>
                {SERVICES[SERVICES_NAMES[2]].description}
              </p>
            </header>
          </article>
          <article className='space-y-6'>
            <Image
              src={`${sectionsImgPath}${SERVICES_NAMES[5]}.${IMG_EXT.jpg}`}
              alt={SERVICES_NAMES[5]}
              width={1260}
              height={840}
            />
            <header className='px-7 md:px-10 lg:px-0 space-y-3'>
              <h3 className='font-primary-semibold text-lg text-sky-400'>
                {SERVICES[SERVICES_NAMES[5]].heading}
              </h3>
              <p className='text-sm text-zinc-500'>
                {SERVICES[SERVICES_NAMES[5]].description}
              </p>
            </header>
          </article>
        </div>
      </section>

      <section
        className='px-3% lg:px-0 pt-24 pb-[3vw] md:py-32 lg:py-0 md:relative lg:flex lg:items-center lg:justify-start lg:gap-y-12 md:gap-y-14 bg-gradient-primary'
      >
        <div className='lg:w-1/4 lg:pr-10 mb-16 lg:mb-0 flex md:block lg:flex justify-center lg:justify-end'>
          <Image
            src='/images/logo-white.svg'
            alt={organization}
            className='w-auto h-24 lg:h-32'
            width={157}
            height={126}
          />
        </div>
        <div className='md:w-2/3 lg:w-1/2 lg:pl-10 lg:pr-20 lg:py-48 lg:mx-auto space-y-14 lg:border-x lg:border-x-secondary/40'>
          <p className='text-xl md:text-[27px] text-center md:text-left text-white md:leading-normal'>
            Transformar la industria a través de la innovación. Nos esforzamos por ser líderes
            en el desarrollo y la implementación de soluciones que mejoren la eficiencia y la
            productividad en las empresas de nuestros clientes y asociados.
          </p>
          <p className='text-xl md:text-[27px] text-center md:text-left text-white md:leading-normal'>
            Destacarnos del resto al manejar estándares de excelencia en todos nuestros servicios,
            optimizando de manera innovadora los recursos y caminando con firmeza hacia el futuro
            en la industria de la logística y transporte.
          </p>
          <div className='flex md:block justify-center'>
            <LinkToValues />
          </div>
        </div>
        <div className='w-1/4 hidden lg:block' />
        <Image
          src={`${sectionsImgPath}${APP_ROUTES.solutions}.${IMG_EXT.jpg}`}
          alt={organization}
          className='md:w-auto md:h-2/3 mt-16 md:my-auto md:absolute md:left-[72%] md:top-0 md:bottom-0'
          width={1500}
          height={891}
        />
      </section>

      <div className='h-24 grid place-content-center border-b border-b-secondary/40'>
        <LinkToAction />
      </div>

      <section
        id={SECTION_ROUTES.values}
        className='py-24 lg:py-0 lg:grid lg:grid-cols-3 space-y-16 lg:space-y-0 lg:[&>*]:border-b lg:[&>*]:border-secondary/40'
      >
        <header className='lg:py-20 space-y-12 lg:space-y-24'>
          <div className='flex items-center gap-x-5'>
            <div className='w-10 h-0.5 bg-sky-400' />
            <h2 className='text-base text-sky-400'>
              {NAV.values.children.toUpperCase()}
            </h2>
          </div>
          <p className='px-10 space-y-6 font-primary-semibold text-xl md:text-3xl lg:text-lg text-zinc-600 leading-relaxed tracking-wider'>
            Nuestros valores son los principios profesionales que guían las acciones y
            decisiones que tomamos. Representan la esencia de la empresa y la forma en
            que nos relacionamos con nuestros empleados, clientes, proveedores y comunidad.
          </p>
        </header>
        {VALUES_NAMES.map((value, key) => (
          <article
            className='px-10 lg:py-36 lg:border-l lg:grid lg:place-content-center space-y-6'
            key={key}
          >
            <header className='flex items-center gap-x-5'>
              <Image
                src={`${sectionsImgPath}${value}.${IMG_EXT.svg}`}
                alt={value}
                className='w-auto h-12'
                width={64}
                height={64}
              />
              <h3 className='font-primary-semibold text-lg text-sky-400'>
                {VALUES[value].heading}
              </h3>
            </header>
            <p className='text-sm text-zinc-500'>
              {VALUES[value].description}
            </p>
          </article>))}
      </section>

      <section
        id={SECTION_ROUTES.history}
        className='lg:pt-24'
      >
        <div className='flex items-center gap-x-5'>
          <div className='w-10 h-0.5 bg-sky-400' />
          <h2 className='text-base text-sky-400'>
            {NAV.history.children.toUpperCase()}
          </h2>
        </div>
        <div className='max-w-8xl px-5% md:px-11% mx-auto my-24 text-center md:text-left space-y-6'>
          <p>
            Distribuciones Forte Innovation es la historia de esfuerzo y superación de un
            grupo de personas que, movidos por su pasión a la construcción, comenzaron el
            sueño de emprender a lo grande.
          </p>
          <p>
            En sus inicios la compañía se centró en la renta y venta de materiales para la
            construcción. No obstante, en el año 2020, en un mundo detenido por la pandemia,
            Distribuciones Forte Innovation decide expandirse ante la gran demanda de
            soluciones en el ámbito industrial en el mercado.
          </p>
          <p>
            Actualmente, con más de 10 años de experiencia, la empresa ha logrado mantenerse
            a la vanguardia gracias a su compromiso con la mejora continua y su capacidad
            para adaptarse a las necesidades cambiantes de sus clientes.
          </p>
        </div>
      </section>
    </PageLayout>
  )
}

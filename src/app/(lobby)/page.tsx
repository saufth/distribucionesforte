import Image from 'next/image'
import BackgroundVideo from '@/components/background-video'
import { CallToAction } from '@/components/call-to-action'
import { services } from '@/config/services'
import { siteConfig, siteNav } from '@/config/site'
import { culture, filosophy } from '@/config/organization'
import Link from 'next/link'
import { Icons } from '@/components/icons'

const contactLink = siteNav.find(({ title }) => title === 'Contáctanos')!

export default function IndexPage () {
  return (
    <>
      <section>
        <div className='w-full h-[100dvh] min-h-[500xp] lg:min-h-[600px] max-h-[1000px] relative z-10 -mt-[69px] lg:-mt-[85px] flex flex-col justify-center'>
          <div className='container relative z-10'>
            <div className='w-6-cols md:w-6-cols'>
              <h1 className='f-display-2 max-w-[322px] xs:max-w-none text-white'>
                {siteConfig.slogan}
              </h1>
              <p className='f-subhead-1 mt-spacing-5 text-white'>
                {siteConfig.description}.
              </p>
              <div className='mt-spacing-6'>
                <CallToAction />
              </div>
            </div>
          </div>
          <BackgroundVideo src='/video/home-hero.mp4' />
        </div>
      </section>
      <section id='soluciones' className='mt-spacing-7'>
        <div className='container'>
          <div>
            <h2 className='f-heading-1 md:pr-9 lg:pr-11'>
              {services.title}
            </h2>
            {services.description && (
              <p className='f-subhead-1 mt-spacing-4 max-w-6xl'>
                {services.description}
              </p>
            )}
            {services.image && (
              <div className='full-bleed-container mt-spacing-7'>
                <Image
                  src={services.image.src}
                  alt={services.image.alt}
                  width={1024}
                  height={1024}
                  sizes='(max-width: 744px) 100vw, (max-width: 1280px) 100vw, (max-width: 1440px) 100vw, 100vw'
                  loading='lazy'
                  className='w-full'
                />
              </div>
            )}
          </div>
          <div className='cols-container mt-spacing-4'>
            {services.items.map((serviceItem, key) => (
              <article className='w-8-cols md:w-4-cols lg:w-6-cols xl:w-4-cols mt-spacing-7' key={key}>
                <div>
                  {serviceItem.image && (
                    <Image
                      src={serviceItem.image.src}
                      alt={serviceItem.image.alt}
                      width={1260}
                      height={840}
                      sizes='(max-width: 744px) 100vw, (max-width: 1280px) 50vw, 500px'
                      loading='lazy'
                    />
                  )}
                </div>
                <div className='mt-4'>
                  <h3 className='f-subhead-1 text-accent font-bold'>
                    {serviceItem.title}
                  </h3>
                  {serviceItem.description && (
                    <div className='mt-4'>
                      <p className='f-body-1 text-muted-foreground'>
                        {serviceItem.description}
                      </p>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id='nosotros' className='cols-container items-center bg-gradient-to-bl from-primary via-accent to-accent mt-spacing-9 overflow-hidden'>
        <div className='w-8-cols lg:w-3-cols flex justify-center lg:justify-end pt-12 lg:pt-0'>
          <Icons.Logotype className='w-auto h-24 lg:h-32 fill-white' />
        </div>
        <div className='w-8-cols lg:w-6-cols lg:border-x lg:border-x-secondary/40 space-y-8 lg:space-y-12 py-12 lg:py-48 px-4 lg:px-12'>
          <h2 className='f-heading-3 text-white text-center lg:text-left'>
            {filosophy.title}
          </h2>
          {filosophy.items.map((filosophyItem, key) => (
            <article className='max-w-5xl space-y-4 lg:space-y-6' key={key}>
              <header>
                <h3 className='text-lg tetx-[27px] text-center lg:text-left text-white'>
                  {filosophyItem.title}
                </h3>
              </header>
              <p className='text-xl lg:text-[27px] text-center lg:text-left text-white'>
                {filosophyItem.description}
              </p>
            </article>
          ))}
          <div className='flex justify-center lg:justify-start'>
            <Link href={contactLink.href}>
              <div className='group max-w-fit px-6 py-2.5 relative text-md leading-none'>
                <div className='z-20 text-white [&>span]:text-white text-lg'>
                  {contactLink.title} <span className='group-hover:ml-4 text-lg leading-none transition-[margin] duration-300'>&rarr;</span>
                </div>
                <div className='w-[48px] group-hover:w-full h-full absolute top-0 left-0 border border-white rounded-full transition-[width,border] duration-300' />
              </div>
            </Link>
          </div>
        </div>
        <div className='w-8-cols lg:w-3-cols relative'>
          {filosophy.image && (
            <Image
              src={filosophy.image.src}
              alt={filosophy.image.alt}
              className='lg:max-w-4xl lg:-left-12 lg:my-auto lg:absolute lg:inset-y-0'
              width={1500}
              height={891}
            />
          )}
        </div>
      </section>
      <section id='valores' className='mt-spacing-9'>
        <div className='container'>
          <div>
            <h2 className='f-heading-1 md:pr-9 lg:pr-11'>
              {culture.title}
            </h2>
            {culture.description && (
              <p className='f-subhead-1 mt-spacing-4 max-w-6xl'>
                {culture.description}
              </p>
            )}
            {culture.image && (
              <div className='full-bleed-container mt-spacing-7'>
                <Image
                  src={culture.image.src}
                  alt={culture.image.alt}
                  width={1024}
                  height={1024}
                  sizes='(max-width: 744px) 100vw, (max-width: 1280px) 100vw, (max-width: 1440px) 100vw, 100vw'
                  loading='lazy'
                  className='w-full'
                />
              </div>
            )}
          </div>
          <div className='cols-container mt-spacing-4'>
            {culture.items.map((cultureItem, key) => (
              <article className='w-8-cols md:w-4-cols lg:w-6-cols xl:w-4-cols flex gap-x-4 mt-spacing-6' key={key}>
                <div className='w-32'>
                  {cultureItem.image && (
                    <Image
                      src={cultureItem.image.src}
                      alt={cultureItem.image.alt}
                      width={cultureItem.image.width}
                      height={cultureItem.image.height}
                      loading='lazy'
                    />
                  )}
                </div>
                <div className='mt-2'>
                  <h3 className='f-subhead-1 font-medium'>
                    {cultureItem.title}
                  </h3>
                  {cultureItem.description && (
                    <div className='mt-2'>
                      <p className='f-body-1 text-muted-foreground'>
                        {cultureItem.description}
                      </p>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

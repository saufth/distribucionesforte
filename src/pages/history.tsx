// Components
import Hero from '@/components/data-display/Hero'
import PageLayout from '@/components/layout/PageLayout'
// Config
import { PAGE_ROUTES } from '@/modules/navigation/config'

/** The History page of the application */
export default function HistoryPage () {
  return (
    <PageLayout page={PAGE_ROUTES.history}>
      <section>
        <Hero>
          Nuestra historia
        </Hero>
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

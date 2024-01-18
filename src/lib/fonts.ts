import localFont from 'next/font/local'

export const fontSans = localFont({
  src: [
    {
      path: '../../public/fonts/eina04/eina04-light.woff2',
      weight: '300'
    },
    {
      path: '../../public/fonts/eina04/eina04-regular.woff2',
      weight: '400'
    },
    {
      path: '../../public/fonts/eina04/eina04-semibold.woff2',
      weight: '600'
    },
    {
      path: '../../public/fonts/eina04/eina04-bold.woff2',
      weight: '700'
    }
  ],
  display: 'swap',
  variable: '--font-sans'
})

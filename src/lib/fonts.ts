import { Urbanist } from 'next/font/google'
import localFont from 'next/font/local'

// Google Font - Urbanist
export const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-urbanist',
  display: 'swap',
})

// Local Font - Satoshi
export const satoshi = localFont({
  src: [
    {
      path: '../assets/fonts/Satoshi-Light.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Satoshi-Regular.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Satoshi-Medium.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Satoshi-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-satoshi',
  display: 'swap',
})

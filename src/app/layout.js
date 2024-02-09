
import Link from 'next/link';
import './globals.css'
import { oswaldFont } from '@/utils/fonts';
import NavWrapper from '@/components/common/navWrapper/navWrapper';


export const metadata = {
  title: 'MCDM - BOILERPLATE',
  description: 'En ren NextJS template med alt det nødvendige for at komme i gang med at lave en ny hjemmeside.',
}

const globalNav = [
  {
    title: 'Site',
    url: '/',
  },
  {
    title: 'Backoffice',
    url: '/backoffice',
  },
]


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={oswaldFont.className}>
        {/* GLOBAL NAVIGATION */}
        <NavWrapper theme={'global'} title={'GLOBAL NAVIGATION'} navData={globalNav}></NavWrapper>
        {children}

      </body>
    </html>
  )
}

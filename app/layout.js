import Link from 'next/link'
import './globals.css'
import Header from './Header'
import Carousel from './Carousel'

export const metadata = {
  title: 'Fruit Shop',
  description: 'Hyperinflated fruit store - best prices 2024',
  
}

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" 
          crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      
      <body className={"min-h-screen flex flex-col relative" + inter.className} >
        <Header />
        <div id="portal"></div>
        <div className='flex-1'>
          {children}
        </div>
        <footer className='flex items-center flex-wrap justify-center 
        border-t border-solid border-slate-300 p-4 md:p-8'>
          <Link href={'#'}>
            <i className='fa-brands fa-instagram text-slate-700 hover:text-slate-500 
            cursor-pointer text-2xl sm:text-3xl md:text-4xl'></i>
          </Link>
        </footer>
        
      </body>
    </html>
  )
}

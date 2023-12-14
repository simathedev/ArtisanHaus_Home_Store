import { Inter} from 'next/font/google';
import './globals.css';
import FooterSection from '../components/FooterSection';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ArtisanHaus',
  description: 'Homeware store',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={inter.className}>
      {children}
    <FooterSection/>
    </body>
    </html>
   
  )
}

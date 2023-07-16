import Image from 'next/image'
import './globals.css'
import styles from './layout.module.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import logo from '../content/logo.png'
import { FaInstagram, FaFacebook } from 'react-icons/fa'
import ScrollLink from '@/components/ScrollLink'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pizzeria Okay Vasto',
  description: 'Piazza Santa Chiara n.51',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body className={inter.className}>

        <nav className={styles.header}>

          <div className={styles.headerInsideDiv}>

            <input className={styles.hamburgerMenuCheckBox} type="checkbox" />

            <span className={styles.spanElementOne}></span>
            <span className={styles.spanElementTwo}></span>
            <span className={styles.spanElementThree}></span>

            {
              logo &&
              <ScrollLink href='#homeSection'>
                <Image
                  src={logo}
                  className={styles.logoImage}
                  alt="Logo"
                />
              </ScrollLink>
            }



            <ul className={styles.menu}>
              <li><ScrollLink href='#homeSection'>Home</ScrollLink></li>
              <li><ScrollLink href='#menuSection'>Menu</ScrollLink></li>
              <li><ScrollLink href='#aboutUsSection'>About Us</ScrollLink></li>
              <li><ScrollLink href='#contactUsSection'>Contact Us</ScrollLink></li>
            </ul>

            <button><a href='tel:+393394431038'>Chiama Ora</a></button>
          </div>

        </nav>

        {children}

        <div className={styles.footer}>

          <h1>Prenota Subito</h1>
          <p>Inviaci un messaggio!
            <br></br>
            Siamo raggiungibili anche telefonicamente e tramite WhatsApp.
            <br></br>
            Siamo disponibili per eventi su prenotazione, riservare un tavolo o prenotare le vostre pizze da asporto.
          </p>
          <button><a href='tel:+393394431038'>Chiama Ora</a></button>

          <ul>
            <li><a
              href='https://www.instagram.com/pizzeria_okay/'
              target='_blank'
              rel="noreferrer"
            >
              <div className={styles.socialBox}>
                <FaInstagram
                  className={styles.socialIcon}
                />
              </div>
            </a></li>
            <li><a
              href='https://www.facebook.com/PizzeriaOkayVasto/'
              target='_blank'
              rel="noreferrer"
            >
              <div className={styles.socialBox}>
                <FaFacebook
                  className={styles.socialIcon}
                />
              </div>
            </a></li>
          </ul>

        </div>

      </body>
    </html>
  )
}

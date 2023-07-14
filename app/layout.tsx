import Image from 'next/image'
import './globals.css'
import styles from './layout.module.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import logo from '@/content/logo.png'
import { FaInstagram, FaFacebook } from 'react-icons/fa'

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

            <Image
              src={logo}
              className={styles.logoImage}
              alt="Logo"
              loading='lazy'
            />

            <ul>
              <li><a>Home</a></li>
              <li><a>Menu</a></li>
              <li><a>About Us</a></li>
              <li><a>Contact Us</a></li>
            </ul>
            <button>Chiama Ora</button>
          </div>

        </nav>

        {children}

        <div className={styles.footer}>

          <h1>Prenota Ora</h1>
          <p>Inviaci un messaggio!
            <br></br>
            Siamo raggiungibili anche telefonicamente e tramite WhatsApp.
            <br></br>
            Siamo disponibili per eventi su prenotazione, riservare un tavolo o prenotare le vostre pizze da asporto.
          </p>
          <button>Chiama Ora</button>

          <ul>
            <li><a
              href=''
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
              href=''
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

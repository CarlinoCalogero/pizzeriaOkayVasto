import styles from './page.module.css'
import { MenuTypeSnippet } from "@/components/MenuTypeSnippet"
import menu from "@/content/menu.json"
import { MenuEntry } from '@/types/MenuEntry';
import Iframe from 'react-iframe';

export default function Home() {

  menu as MenuEntry[];

  return (
    <div className={styles.outerDiv}>

      <div className={styles.homeDiv}>
        <h2>Piazza Santa Chiara, 51, 66054 Vasto CH</h2>
        <h1>Pizzeria Okay</h1>
        <h3>Dal Lunedì alla Domenica, 18:00 - 23:00</h3>
        <div className={styles.homeDivButtonDiv}>
          <button>Prenota Ora</button>
          <button>Esplora il menù</button>
        </div>
      </div>

      {menu.map(menuEntry => <div className={styles.menuTypeDiv}> <MenuTypeSnippet menuEntry={menuEntry} /></div>)}

      <Iframe
        className={styles.googleMap}
        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2959.8962216252526!2d14.70593761090689!3d42.10969337109724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1330dc54552a8bff%3A0x21b75859182a4a28!2sP.za%20Santa%20Chiara%2C%2051%2C%2066054%20Vasto%20CH!5e0!3m2!1sit!2sit!4v1689265097944!5m2!1sit!2sit"
        loading='lazy'
        allowFullScreen={false}
        referrerpolicy='no-referrer-when-downgrade'
      />

    </div>
  )
}

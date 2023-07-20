import ScrollLink from '../components/ScrollLink';
import styles from './page.module.css'
import { MenuTypeSnippet } from "../components/MenuTypeSnippet"
import menu from "../content/menu.json"
import { MenuEntry } from '../types/MenuEntry';

export default function Home() {

  menu as MenuEntry[];

  return (
    <div className={styles.outerDiv}>

      <div id="homeSection" className={styles.homeDiv}>
        <h2>Piazza Santa Chiara, 51, 66054 Vasto CH</h2>
        <h1>Pizzeria Okay</h1>
        <h3>Dal Lunedì alla Domenica, 18:00 - 23:00</h3>
        <div className={styles.homeDivButtonDiv}>
          <button><a href='tel:+393394431038'>Chiama ora</a></button>
          <button><ScrollLink href='#menuSection'>Esplora il menù</ScrollLink></button>
        </div>
      </div>

      <span id="menuSection"></span>
      {menu.map(menuEntry => <div key={menuEntry.categoryName} className={styles.menuTypeDiv}> <MenuTypeSnippet menuEntry={menuEntry} /></div>)}

      <iframe
        id="aboutUsSection"
        className={styles.googleMap}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2959.8972815836028!2d14.70594851090688!3d42.10967067109728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1330dc5454ddaf95%3A0x9722a68e12422ddc!2sPizzeria%20Okay!5e0!3m2!1sit!2sit!4v1689521544789!5m2!1sit!2sit"
        loading='lazy'
        allowFullScreen={false}
        referrerPolicy='no-referrer-when-downgrade'
      > </iframe>

      <div id="contactUsSection" className={styles.aboutUsDiv}>
        <h1>Orari di Apertura</h1>
        <div className={styles.orariAperturaDiv}>
          <p>Lun - Dom</p>
          <p>18:00 - 23:00</p>
        </div>
        <div className={styles.indirizzoETelefonoDiv}>
          <h2>P.za Santa Chiara, 51,</h2>
          <h2>66054 Vasto CH,</h2>
          <h3>(+39) 339 443 1038</h3>
        </div>
      </div>



    </div>
  )
}

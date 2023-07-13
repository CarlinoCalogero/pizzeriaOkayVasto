import styles from './page.module.css'
import { MenuTypeSnippet } from "@/components/MenuTypeSnippet"
import menu from "@/content/menu.json"
import { MenuEntry } from '@/types/MenuEntry';

export default function Home() {

  menu as MenuEntry[];

  return (
    <div className={styles.outerDiv}>
      {menu.map(menuEntry => <div className={styles.menuTypeDiv}> <MenuTypeSnippet menuEntry={menuEntry} /></div>)}
    </div>
  )
}

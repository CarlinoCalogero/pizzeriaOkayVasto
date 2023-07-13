import { MenuEntry } from '@/types/MenuEntry';
import styles from './MenuTypeSnippet.module.css'
import { SingleMenuEntry } from "./SingleMenuEntry"
import { FaPizzaSlice } from "react-icons/fa";

interface MenuTypeSnippetProps {
    menuEntry: MenuEntry;
}

export function MenuTypeSnippet({ menuEntry }: MenuTypeSnippetProps) {
    return (
        <div className={styles.outerDiv}>
            <h1>{menuEntry.categoryName}</h1>
            <div className={styles.innerDiv}>
                <div className={styles.line}></div>
                <div className={styles.pizzaSlice}>
                    <FaPizzaSlice />
                </div>
                <div className={styles.line}></div>
            </div>

            {
                menuEntry.entries &&
                menuEntry.entries.map(categoryEntry => <div className={styles.singleMenuEntry}><SingleMenuEntry categoryEntry={categoryEntry} /></div>)
            }


        </div>
    )
}
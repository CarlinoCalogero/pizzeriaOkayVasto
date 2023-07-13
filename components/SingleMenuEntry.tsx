import { CategoryEntry } from '@/types/CategoryEntry'
import styles from './SingleMenuEntry.module.css'
import { SingleMenuSubEntry } from './SingleMenuSubEntry';

interface SingleMenuEntryProps {
    categoryEntry: CategoryEntry;
}

export function SingleMenuEntry({ categoryEntry }: SingleMenuEntryProps) {
    return (
        <div className={styles.outerDiv}>

            <div className={styles.nameAndPrice}>
                <h3>{categoryEntry.name}</h3>
                <h2>{categoryEntry.price}</h2>
            </div>
            <div className={styles.line}></div>

            <p>{categoryEntry.description}</p>

            {categoryEntry.subEntries &&
                categoryEntry.subEntries.map(categorySubEntry => (<div className={styles.singleMenuSubEntryDiv}><SingleMenuSubEntry categorySubEntry={categorySubEntry} /></div>))
            }



        </div>
    )
}
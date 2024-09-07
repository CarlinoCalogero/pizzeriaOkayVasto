import { CategorySubEntry } from '../types/CategorySubEntry'
import styles from './SingleMenuSubEntry.module.css'

interface SingleMenuSubEntryProps {
    categorySubEntry: CategorySubEntry;
}

export function SingleMenuSubEntry({ categorySubEntry }: SingleMenuSubEntryProps) {
    return (
        <div className={styles.outerDiv}>

            <div className={styles.nameAndPrice}>
                <p>{categorySubEntry.name}</p>
                {categorySubEntry.price &&
                    <h2>{categorySubEntry.price}</h2>
                }
            </div>

        </div >
    )
}
import fonts from '@/app/fonts'
import styles from '@/components/testi/testi.module.css'
import Clients from '../clients/clients'



export default function Testi() {
  return (
    <div className={styles.testi}>
      <div className={styles.container}>
        <h2 className={styles.title}>ABOUT US</h2>
        <p className={`${styles.text} ${fonts.dm.className}`}>Out Awesome Clients</p>
        
      </div>
      <Clients />
    </div>
  )
}
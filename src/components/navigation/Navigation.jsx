import Logo from '../logo/logo'
import styles from '@/components/navigation/Navigation.module.css'

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <Logo />
      <ul className={styles['navigation-list']}>
        <li className={styles['navigation-item']}><a href='#about'>ABOUT</a></li>
        <li className={styles['navigation-item']}><a href='#how-to'>HOW TO</a></li>
        <li className={styles['navigation-item']}><a href='#faqs'>FAQS</a></li>
        <li className={styles['navigation-item']}><a href='#contact'>CONTACT US</a></li>
      </ul>
    </nav>
  )
}


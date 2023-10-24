import styles from '@/components/footer/footer.module.css'
import ContactForm from '../form/form'
import Logo from '../logo/logo'
import Social from '../social/social'

export default function Footer() {
  return (
    <footer id='contact' className={styles.footer}>
      <div className='wrapper'>
        <div className={styles['footer-container']}>
          <img className={styles.illustration} src="/img/illustration4.svg" />
          <ContactForm />
          <div className={styles['text-container']}>
            <p className={styles.text}>
              We provide traffic management consultants&nbsp;so you get started quickly,&nbsp;contact us for a quote<br /> today!
            </p>
          </div>

          <nav className={styles.navigation}>
            <Logo />
            <ul className={styles['navigation-list']}>
              <li className={styles['navigation-item']}><a href='#about'>ABOUT</a></li>
              <li className={styles['navigation-item']}><a href='#how-to'>HOW TO</a></li>
              <li className={styles['navigation-item']}><a href='#faqs'>FAQS</a></li>
            </ul>
          </nav>
        </div>
        <Social />
      </div>

    </footer>
  )
}


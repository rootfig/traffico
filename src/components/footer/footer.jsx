import styles from '@/components/footer/footer.module.css'
import ContactForm from '../form/form'
import Logo from '../logo/logo'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className='wrapper'>
        <div className={styles['footer-container']}>
          <img className={styles.illustration} src="/img/illustration4.svg" />
          <ContactForm />

          <nav className='navigation'>
            <Logo />
            <ul className={styles['navigation-list']}>
              <li className='navigation-item'><a>ABOUT</a></li>
              <li className='navigation-item'><a>HOW TO</a></li>
              <li className='navigation-item'><a>FAQS</a></li>
            </ul>
          </nav>

          <div className='foo'>
            <div className="copyright">
              &copy; Copyright @ 2019
            </div>
            <div className={styles.social}>
              <a href="#" className={styles.link}><img src="/img/social/i.svg" alt="Instagram" /></a>
              <a href="#" className={styles.link}><img src="/img/social/f.svg" alt="Facebook" /></a>
              <a href="#" className={styles.link}><img src="/img/social/t.svg" alt="Twitter" /></a>

            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


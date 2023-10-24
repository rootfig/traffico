import styles from '@/components/social/social.module.css'

export default function Social() {
  return (
    <div className={styles.social}>
      <div className={styles.container}>
        <div className="copyright">
          &copy; Copyright @ 2019
      </div>
      <ul className={styles['social-list']}>
        <li><a href="#" className={styles.link}><img src="/img/social/i.svg" alt="Instagram" /></a></li>
        <li><a href="#" className={styles.link}><img src="/img/social/f.svg" alt="Facebook" /></a></li>
        <li><a href="#" className={styles.link}><img src="/img/social/t.svg" alt="Twitter" /></a></li>
      </ul>
    </div>
    </div>
  )
}

import styles from '@/components/header/header.module.css'
import Logo from '../logo/logo'
import fonts from '@/app/fonts'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className='wrapper'>
        <div className={styles.container}>
          <img src='./img/header-scene.png' alt='фоновая сцена' className={styles.background}></img>
          <img src='./img/mobel.svg' alt="фоновое изображение" className={styles.mobel} />
          <nav className={styles.navigation}>
            <Logo />
            <ul className={styles['navigation-list']}>
              <li className={styles['navigation-item']}><a href='#about'>ABOUT</a></li>
              <li className={styles['navigation-item']}><a href='#how-to'>HOW TO</a></li>
              <li className={styles['navigation-item']}><a href='#faqs'>FAQS</a></li>
              <li className={styles['navigation-item']}><a href='#contact'>CONTACT US</a></li>
            </ul>
          </nav>
          <h1 className={`${fonts.dm.className} ${styles.title}`}>Your awesome traffic permit consultant.</h1>
          <button className={styles.button}><img src="./img/get-sturted.svg" alt="Кнопка старта" /></button>
        </div>
      </div>
    </header>
  )
}
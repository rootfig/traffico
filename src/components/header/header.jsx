import styles from '@/components/header/header.module.css'
import Logo from '../logo/logo'
import { DM_Serif_Display } from 'next/font/google'
const font = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  
})

export default function Header() {
  return (
    <header className={styles.header}>
      <div className='wrapper'>
        <div className={styles.container}>
        <img  src='./img/header-scene.png' alt='фоновая сцена' className={styles.background}></img>
        <img src='./img/mobel.svg' alt="фоновое изображение" className={styles.mobel} />
        <nav className={styles.navigation}>
          <Logo />
          <ul className={styles['navigation-list']}>
            <li className={styles['navigation-item']}><a>ABOUT</a></li>
            <li className={styles['navigation-item']}><a>HOW TO</a></li>
            <li className={styles['navigation-item']}><a>FAQS</a></li>
            <li className={styles['navigation-item']}><a>CONTACT US</a></li>
          </ul>
        </nav>
        <h1 className={`${font.className} ${styles.title}`}>Your awesome traffic permit consultant.</h1>
        <button className={styles.button}><img src="./img/get-sturted.svg" alt="Кнопка старта" /></button>
      </div>
      </div>
    </header>
  )
}
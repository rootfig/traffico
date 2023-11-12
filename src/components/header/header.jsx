import styles from '@/components/header/header.module.css'
import fonts from '@/fonts'
import Navigation from '@/components/navigation/Navigation'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className='wrapper'>
        <div className={styles.container}>
          <Navigation />
          <img src='./img/header-scene.png' alt='фоновая сцена' className={styles.background}></img>
          <img src='./img/mobel.svg' alt="фоновое изображение" className={styles.mobel} />
          <h1 className={`${fonts.dm.className} ${styles.title}`}>Your awesome traffic permit consultant.</h1>
          <button className={styles.button}><img src="./img/get-sturted.svg" alt="Кнопка старта" /></button>
        </div>
      </div>
    </header>
  )
}
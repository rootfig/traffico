import styles from'@/components/about/About.module.css'
import fonts from '@/app/fonts'
import Image from 'next/image'

export default function About() {
  return (
    <section id='about' className={`${fonts.rubik.className} ${styles.about}`}>
          <div className={styles.container}>
            <h2 className={` ${styles.title}`}>ABOUT US</h2>
            <p className={`${fonts.rubik.className} ${styles.description}`}>
              The occupational traffic permit is one of the most important things in the company when carrying out
              freight transport.&nbsp;&nbsp;In fact, it is a prerequisite for doing business traffic at all.
            </p>
            <div className={styles['text-container']}> 
              <p className={`${fonts.rubik.className} ${styles.text}`}>
                How do you do when you need to obtain <br />a commercial traffic permit for freight transport to your
                business?
              </p>
            </div>
            
          </div>
          <Image 
            className={styles.illustration} 
            src='./img/illustration.svg' 
            width={575}
            height={480}
            />
        </section>
  )
}
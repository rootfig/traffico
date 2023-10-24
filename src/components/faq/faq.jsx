import { questionData } from "@/common"
import styles from '@/components/faq/faq.module.css'
import fonts from '@/app/fonts'
import Accordion from "../accordion/accordion"

export default function Faq() {
  return (
    <section id='faqs' className={styles.faq}>
      <header className={styles.header}>
        <div className={styles.container}>
          <h2 className={styles.title}>FAQ</h2>
          <p className={`${fonts.dm.className} ${styles.text}`}>Questions and Answers on Professional Traffic Permits:</p>
        </div>
        <img className={styles.illustration} alt="Иллюстрация" src="/img/illustration3.svg" />
      </header>
      <Accordion questionData={questionData}/>
      <button className={styles.button}><span>LOAD MORE</span></button>
    </section>
  )
}

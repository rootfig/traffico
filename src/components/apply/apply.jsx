import styles from '@/components/apply/apply.module.css'
import fonts from '@/app/fonts'

export default function Apply() {
  return (
    <section className={`${fonts.rubik.className} ${styles.apply}`}>
        <div className={styles.container}>
          <h2 className={styles.title}>HOW TO APPLY</h2>
          <p className={styles.text}>
            When applying for a traffic permit, there are certain requirements that you must meet that are included in
            the examination: requirements for professional knowledge, solid establishment, good reputation and financial
            resources. Important to remember is to confirm your application for a traffic permit by the company&#39;s
            company signer or CEO.
          </p>
          </div>
          <img className={styles.illustration} src='./img/illustration2.svg'/>
        </section>
  )
}
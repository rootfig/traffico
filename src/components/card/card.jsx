import fonts from '@/app/fonts'
import styles from '@/components/card/card.module.css'

export default function Card({item}) {
  
  return (
    <blockquote
      className={styles.card}>

      <p className={styles.reviewText}>
        {item.message}
      </p>
      <footer className={styles.author}>
        <figure className={styles.avatar}>
          <img width={60} height={60} src={item.photo} alt={item.name} />
        </figure>
        <cite className={`${styles.name} ${fonts.roboto.className}`}>{item.name}</cite>
      </footer>
    </blockquote>
  )
}

'use client'
import { useState } from "react";
import styles from '@/components/form/form.module.css'

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Добавьте здесь логику для отправки данных формы на сервер
    // Например, можно использовать fetch API или библиотеки для отправки данных на сервер
  };

  return (
    <div className={styles.container}>
      <p className={styles.text}>
        We provide traffic management consultants&nbsp;so you get started quickly,&nbsp;contact us for a quote<br /> today!
      </p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className="form-group">
          <label className={styles.label} htmlFor="name">Имя:</label>
          <input
            className={styles.input}
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className={styles.label} htmlFor="email">Email:</label>
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button className={styles.button} type="submit">Отправить</button>
      </form>
      
    </div>
  );
}

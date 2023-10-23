'use client'
import { useState } from "react";
import styles from '@/components/form/form.module.css'

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className="form-group">
          <label className={styles.label} htmlFor="name">Name</label>
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
          <label className={styles.label} htmlFor="email">Email address</label>
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

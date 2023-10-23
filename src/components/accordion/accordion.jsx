'use client'
import { useState } from 'react';
import styles from './accordion.module.css';

const Accordion = ({ questionData }) => {
  const [expanded, setExpanded] = useState(null);

  const toggleItem = (index) => {
    if (expanded === index) {
      setExpanded(null);
    } else {
      setExpanded(index);
    }
  };

  return (
    <ul className={styles.questions}>
      {questionData.map((item, index) => (
        <li
          key={item.question}
          className={`${styles['question-item']} ${expanded === index ? styles.open : ''}`}
          onClick={() => toggleItem(index)}
        >
          <div className={styles.question}>
            <span className={styles['question-text']}>{item.question}</span>
            
          </div>
          <span className={styles['question-icon']}>{expanded === index ? <img src='./img/minus.svg' /> : <img src='./img/plus.svg' />}</span>
          <div className={styles.answer}>
            <span className={styles['answer-text']}>{item.answer}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Accordion;
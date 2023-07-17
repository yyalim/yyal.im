import styles from './Introduction.module.scss'

export default function Introduction() {
  return (
    <h1 className={styles['introduction']}>
      <span className={styles['name']}>Yusuf Yalım,</span>
      a software engineer.
    </h1>
  );
}

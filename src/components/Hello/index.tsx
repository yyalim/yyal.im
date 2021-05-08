import styles from './Hello.module.scss'

export default function Hello() {
  return (
    <div className={styles['animated-title']}>
      <div className={styles['text-top']}>
        <div>
          <span>Hello</span>
          <span>I am Yusuf Yalim</span>
        </div>
      </div>
      <div className={styles['text-bottom']}>
        <div>A software engineer</div>
      </div>
    </div>
  );
}

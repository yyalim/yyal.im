import Hello from '../components/Hello'
import styles from './index.module.scss'

export default function Home() {
  return (
    <div className={`${styles['homepage']} page-container`}>
      <Hello />
    </div>
  )
}

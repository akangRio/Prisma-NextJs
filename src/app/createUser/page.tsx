import SimplePaper from '@/components/inputPaper'
import styles from '../page.module.css'
export default function CreatePage() {
    return <main className={styles.main}>
    <div className={styles.description}>
      <SimplePaper/>
    </div>
  </main>
}
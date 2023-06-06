import styles from '../page.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Levels() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/level-select.png"
          alt="Level Select Title"
          width={400}
          height={80}
          priority
        />
      </div>

      <div className={styles.grid}>
        <Link href="/game/implicit-flow" className={styles.card}>
          <h1>
            Level 1
          </h1>
          <p>Implicit flow</p>
        </Link>
      </div>
    </main>
  )
}
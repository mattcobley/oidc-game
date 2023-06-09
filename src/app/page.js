'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { resetLevel } from './answerSlice'
import { setStepId } from './stepSlice'
import { setText } from './textSlice'

export default function Home() {
  const dispatch = useDispatch()
  const stepId = useSelector((state) => state.step?.level1?.stepId)

  if (stepId !== 1) {
    dispatch(resetLevel({ levelId: "level1" }))
    dispatch(setStepId({ levelId: "level1", stepId: 1 }))
    dispatch(setText(""))
  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Learn Open ID Connect in this interactive game!
        </p>
        <div>
          <a
            href="https://moneyhub.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/moneyhub-logo_teal.png"
              alt="Moneyhub Logo"
              className={styles.vercelLogo}
              width={150}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/token-raider-title.png"
          alt="Token Raider Title"
          width={700}
          height={180}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://openid.net/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn more about Open ID Connect</p>
        </a>

        <Link href="/levels" className={styles.card}>
          <h1>
            PLAY <span>-&gt;</span>
          </h1>
          <p>Play the game</p>
        </Link>

        <a
          href="https://moneyhub.com"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Moneyhub <span>-&gt;</span>
          </h2>
          <p>
            Find out more about us
          </p>
        </a>
      </div>
    </main>
  )
}

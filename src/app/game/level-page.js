'use client'
import styles from './game.module.css'
import Image from 'next/image'
import StepsList from './steps-list'
import OptionsList from './options-list'
import { useSelector, useDispatch } from 'react-redux'
import { setStepId } from '../stepSlice'

export default function LevelPage({
  levelTitleImageName,
  levelTitleAltText,
  levelTitleWidth = 0,
  levelTitleHeight = 0,
  steps = [],
  options = [],
  stepId,
  levelId,
  children
}) {
  const dispatch = useDispatch()
  const text = useSelector((state) => state.text.text)
  const answers = useSelector((state) => state.answer[levelId][stepId])
  const showConsentComplete = stepId === 2 && levelId === "level1" && answers.consent

  const onClick = () => {
    dispatch(setStepId({ levelId: "level1", stepId: 3 }))
  }

  return (
    <div className={styles.levelpage}>
      <div className={styles.pagetitle}>
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src={`/${levelTitleImageName}.png`}
            alt={`${levelTitleAltText}`}
            width={levelTitleWidth}
            height={levelTitleHeight}
            priority
            unoptimized
          />
        </div>
      </div>
      <div className={styles.content}>
        <StepsList steps={steps}></StepsList>
        {children}
        <OptionsList options={options}></OptionsList>
      </div>
      <div className={styles.speech}>
        <div className={styles.hero}>
          <Image
            className={styles.innerhero}
            src="/hacker_hero.gif"
            alt="hero image"
            width={120}
            height={120}
            priority
            unoptimized
          />
        </div>
        <div className={styles.innerspeech}>{text}</div>
      </div>
      <Image
        className={styles.consentcomplete}
        src={`/access_token.png`}
        alt={`Consent complete`}
        width={512}
        height={512}
        priority
        unoptimized
        hidden={!showConsentComplete}
        onClick={() => onClick()}
      />
    </div>
  )
}
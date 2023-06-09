'use client'
import styles from './game.module.css'
import Image from 'next/image'
import StepsList from './steps-list'
import OptionsList from './options-list'
import { useSelector } from 'react-redux'

export default function LevelPage({
  levelTitleImageName,
  levelTitleAltText,
  levelTitleWidth = 0,
  levelTitleHeight = 0,
  steps = [],
  options = [],
  children
}) {
  const text = useSelector((state) => state.text.text)
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
        <div className={styles.innerspeech}>{text}</div>
      </div>
    </div>
  )
}
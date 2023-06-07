'use client'
import styles from './game.module.css'
import Image from 'next/image'
import StepsList from './steps-list'
import Code from './code'
import OptionsList from './options-list'

export default function LevelPage({
  levelTitleImageName,
  levelTitleAltText,
  levelTitleWidth = 0,
  levelTitleHeight = 0,
  steps = [],
  options = [],
}) {
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
          />
        </div>
      </div>
      <div className={styles.content}>
        <StepsList steps={steps}></StepsList>
        <Code />
        <OptionsList steps={options}></OptionsList>
      </div>
      <div className={styles.speech}>
        <div className={styles.innerspeech}>Here is some test text</div>
      </div>
    </div>
  )
}
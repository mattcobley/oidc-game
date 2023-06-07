import styles from './game.module.css'
import Image from 'next/image'
import Step from './step'

export default function StepsList({ steps = [] }) {
  return (
    <div className={styles.stepslist}>
      <div className={styles.stepslisttitle}>
        <Image
          className={styles.logo}
          src={`/flow-steps.png`}
          alt={"Flow steps"}
          width={150}
          height={30}
          priority
        />
      </div>
      <ul className={styles.steps}>{
        steps.map((step, i) => <Step key={step?.name || i} step={step} />)
      }</ul>
    </div>
  )
}
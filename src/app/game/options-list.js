import styles from './game.module.css'
import Image from 'next/image'
import Option from './option'

export default function OptionsList({ options = [] }) {
  return (
    <div className={styles.optionslist}>
      <div className={styles.optionslisttitle}>
        <Image
          className={styles.logo}
          src={`/actions.png`}
          alt={"Actions"}
          width={150}
          height={30}
          priority
          unoptimized
        />
      </div>
      <ul className={styles.options}>{
        options.map((option, i) => <Option key={option?.name || i} option={option} />)
      }</ul>
    </div>
  )
}
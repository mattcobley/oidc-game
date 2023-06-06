import styles from '../page.module.css'

export default function Template({ children, levelName }) {
  return (
    <div className={styles.main}>
      <h1>{levelName}</h1>
      <div>{children}</div>
    </div>
  )
}
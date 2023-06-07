import styles from './game.module.css'

export default function Code({ code }) {
  // TODO how to format?
  return (
    <div className={styles.code}>
      <div className={styles.codeinternal}>{code}</div>
    </div>)
}
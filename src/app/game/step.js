import styles from './game.module.css'

export default function Step({ step }) {
  const { label, id, selected } = step
  return (<div id={id} className={`${styles.step} ${selected ? styles.selected : ""}`}>{label}</div>)
}
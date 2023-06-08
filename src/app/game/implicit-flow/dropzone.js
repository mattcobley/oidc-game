import styles from '../game.module.css'
import { useSelector } from 'react-redux'

export default function Dropzone({ code }) {
  const dragId = useSelector((state) => state.drag.dragId)
  const allowDrop = (event) => {
    event.preventDefault()
  }

  const drop = (event) => {
    event.preventDefault()
    if (dragId === "post-request") {
      alert("Sorry, not correct!")
    }
    else {
      event.target.appendChild(document.getElementById(dragId))
      alert("Well done!")
    }
  }
  return (
    <div className={styles.code}>
      <div
        className={styles.codeinternal}
        id="dropzone1"
        onDrop={(e) => drop(e)}
        onDragOver={(e) => allowDrop(e)}>
      </div>
    </div>)
}
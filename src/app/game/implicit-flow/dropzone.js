import styles from '../game.module.css'
import { useSelector } from 'react-redux'
import Image from 'next/image'

export default function Dropzone({ requestPanelImagePath }) {
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
      document.getElementById("dropzone1").appendChild(document.getElementById(dragId))
      alert("Well done!")
    }
  }
  return (
    <div
      className={styles.codeinternal}
      id="dropzone1"
      onDrop={(e) => drop(e)}
      onDragOver={(e) => allowDrop(e)}
    >
      <div className={styles.center}>
        <Image
          className={styles.requestPanel}
          src={`${requestPanelImagePath}`}
          alt={`Request panel`}
          width={512}
          height={512}
          priority
        />
      </div>
    </div>
  )
}
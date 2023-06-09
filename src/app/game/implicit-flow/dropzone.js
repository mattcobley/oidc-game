import styles from '../game.module.css'
import { useSelector } from 'react-redux'
import Image from 'next/image'

export default function Dropzone({ requestPanelImagePath, options = 0 }) {
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
          unoptimized
        />
        {options.map((option) => {
          return <Image
            key={option.name}
            id={`${option.name}-drag`}
            className={styles.optionimageDrag}
            src={`${option.imagePath}`}
            alt={`${option.name}`}
            width={option.imageWidth}
            height={option.imageHeight}
            priority
            style={{ top: option.targetTop, left: option.targetLeft }}
            unoptimized
          />
        })}
      </div>
    </div>
  )
}
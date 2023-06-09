import styles from '../game.module.css'
import { useSelector, useDispatch } from 'react-redux'
import Image from 'next/image'
import { setAnswer } from '../../answerSlice'

export default function Dropzone({ requestPanelImagePath, options = 0, levelId }) {
  const dispatch = useDispatch()
  const dragId = useSelector((state) => state.drag.dragId)
  const answers = useSelector((state) => state.answer[levelId])
  const allowDrop = (event) => {
    event.preventDefault()
  }

  const optionNames = options.map((option) => option.name)

  const drop = (event) => {
    event.preventDefault()
    if (optionNames.includes(dragId)) {
      dispatch(setAnswer({ levelId: "level1", answerName: dragId }))
    }
    else {
      alert("Sorry, not correct!")
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
            hidden={!(answers[option.name])}
          />
        })}
      </div>
    </div>
  )
}
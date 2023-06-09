import styles from '../game.module.css'
import { useSelector, useDispatch } from 'react-redux'
import Image from 'next/image'
import { setAnswer } from '../../answerSlice'
import { setText, resetText } from '../../textSlice'
import { setStepId } from '../../stepSlice'

export default function Dropzone({ requestPanelImagePath, options = [], levelId, stepId = 1 }) {
  const dispatch = useDispatch()
  const dragId = useSelector((state) => state.drag.dragId)
  const answers = useSelector((state) => state.answer[levelId][stepId])
  const allowDrop = (event) => {
    event.preventDefault()
  }

  const optionNames = options.map((option) => option.name)

  const drop = (event) => {
    event.preventDefault()
    if (optionNames.includes(dragId)) {
      dispatch(setAnswer({ levelId, stepId, answerName: dragId }))
      dispatch(resetText())
    }
    else {
      dispatch(setText("Sorry, that's incorrect"))
    }
  }

  const click = (event) => {
    event.preventDefault()
    if (levelId === "level1" && stepId === 2) {
      dispatch(setAnswer({ levelId, stepId, answerName: "consent" }))
    }
  }

  return (
    <div
      className={styles.codeinternal}
      id="dropzone1"
      onDrop={(e) => drop(e)}
      onDragOver={(e) => allowDrop(e)}
      onClick={(e) => click(e)}
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
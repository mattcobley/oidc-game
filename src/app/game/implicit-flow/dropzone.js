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
  const answersCorrect = Object.keys(answers).map((answerKey) => answers[answerKey])
  const allCorrect = answersCorrect.length > 0 && answersCorrect.every((answerCorrect) => answerCorrect)

  if (allCorrect) {
    console.log("HERE")
    dispatch(setText("Nice work! Let's move on to the next step"))
    dispatch(setStepId({ levelId, stepId: stepId + 1 }))
  }
  const drop = (event) => {
    event.preventDefault()
    if (optionNames.includes(dragId)) {
      dispatch(setAnswer({ levelId: "level1", stepId, answerName: dragId }))
      dispatch(resetText())
    }
    else {
      dispatch(setText("Sorry, that's incorrect"))
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
import styles from '../game.module.css'
import { useSelector, useDispatch } from 'react-redux'
import Image from 'next/image'
import { setAnswer } from '../../answerSlice'
import { setText, resetText } from '../../textSlice'

export default function Dropzone({ requestPanelImagePath, options = 0, levelId }) {
  const dispatch = useDispatch()
  const dragId = useSelector((state) => state.drag.dragId)
  const answers = useSelector((state) => state.answer[levelId])
  const allowDrop = (event) => {
    event.preventDefault()
  }

  const optionNames = options.map((option) => option.name)
  const answersCorrect = Object.keys(answers).map((answerKey) => answers[answerKey])
  const allCorrect = answersCorrect.every((answerCorrect) => answerCorrect)

  console.log("answersCorrect", answersCorrect)
  console.log("allCorrect", allCorrect)
  if (allCorrect) {
    alert("Nice work! Let's move on to the next step")
  }

  const drop = (event) => {
    event.preventDefault()
    if (optionNames.includes(dragId)) {
      dispatch(setAnswer({ levelId: "level1", answerName: dragId }))
      dispatch(resetText())
      if (allCorrect) {
        alert("Nice work! Let's move on to the next step")
      }
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
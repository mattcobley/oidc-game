import Image from 'next/image'
import styles from './game.module.css'
import { useDispatch } from 'react-redux'
import { setDragId } from '../dragSlice'

export default function Option({ option }) {
  const dispatch = useDispatch()
  const { name, text, imagePath, imageHeight = 0, imageWidth = 0 } = option

  const drag = (event) => {
    dispatch(setDragId(event.target.id))
  }

  return (
    <li className={styles.option} >
      <div>{text}</div>
      <Image
        id={option.name}
        className={styles.optionimage}
        src={`${imagePath}`}
        alt={`${name}`}
        width={imageWidth}
        height={imageHeight}
        priority
        draggable="true"
        onDragStart={(e) => drag(e)}
        unoptimized
      />
    </li>
  )
}
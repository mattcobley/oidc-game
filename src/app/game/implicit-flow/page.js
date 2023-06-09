'use client'
import LevelPage from '../level-page'
import Dropzone from './dropzone'
import { useSelector, useDispatch } from 'react-redux'
import { setStepId } from '../../stepSlice'

export default function ImplicitFlow() {
  const dispatch = useDispatch()
  let stepId = useSelector((state) => state.step?.level1?.dragId)
  if (!stepId) {
    dispatch(setStepId({ levelId: "level1", stepId: "step1" }))
  }
  return (
    <LevelPage
      levelId={"implicit"}
      levelTitleImageName={"implicit-flow"}
      levelTitleAltText={"Level 1: Implicity Flow"}
      levelTitleWidth={500}
      levelTitleHeight={60}
      options={[
        { name: "get-request", text: "GET", imagePath: "/get1.png", imageWidth: 150, imageHeight: 100 },
        { name: "post-request", text: "POST", imagePath: "/post.png", imageWidth: 150, imageHeight: 100 }
      ]}
      answers={[{ dropzoneId: "dropzone1", dragId: "get-request" }]}
      steps={[
        { label: "STEP 1", id: "step1", selected: stepId === "step1" },
        { label: "STEP 2", id: "step2", selected: stepId === "step2" },
        { label: "STEP 3", id: "step3", selected: stepId === "step3" }
      ]}
    >
      <Dropzone />
    </LevelPage>
  )
}

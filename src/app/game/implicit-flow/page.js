'use client'
import LevelPage from '../level-page'
import Dropzone from './dropzone'

export default function ImplicitFlow() {
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
    >
      <Dropzone />
    </LevelPage>
  )
}

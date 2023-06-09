'use client'
import LevelPage from '../level-page'
import Dropzone from './dropzone'
import { useSelector, useDispatch } from 'react-redux'
import { setStepId } from '../../stepSlice'

export default function ImplicitFlow() {
  const dispatch = useDispatch()
  let stepId = useSelector((state) => state.step?.level1?.stepId)

  if (!stepId) {
    dispatch(setStepId({ levelId: "level1", stepId: "step1" }))
  }

  const options = [
    { name: "get-request", text: "GET", imagePath: "/get_method.png", imageWidth: 76, imageHeight: 40 },
    { name: "post-request", text: "POST", imagePath: "/post_method.png", imageWidth: 76, imageHeight: 40 },
    { name: "auth-endpoint", text: "Authorize", imagePath: "/auth_endpoint.png", imageWidth: 212, imageHeight: 68 },
    { name: "token-endpoint", text: "Token", imagePath: "/token_endpoint.png", imageWidth: 212, imageHeight: 68 },
    { name: "client-id", text: "ID", imagePath: "/client_id.png", imageWidth: 28, imageHeight: 64 },
    { name: "client-secret", text: "Secret", imagePath: "/client_secret.png", imageWidth: 28, imageHeight: 64 },
    { name: "redirect-uri", text: "Redirect", imagePath: "/redirect.png", imageWidth: 76, imageHeight: 88 },
    { name: "token-response", text: "Token Response", imagePath: "/token_response.png", imageWidth: 136, imageHeight: 80 },
    { name: "scopes", text: "Scopes", imagePath: "/scopes.gif", imageWidth: 168, imageHeight: 152 }
  ]

  const answerOptions = [
    { name: "get-request", text: "GET", imagePath: "/get_method.png", imageWidth: 76, imageHeight: 40, targetTop: "96px !important", targetLeft: "132px !important" },
    { name: "auth-endpoint", text: "Authorize", imagePath: "/auth_endpoint.png", imageWidth: 212, imageHeight: 68, targetTop: "96px !important", targetLeft: "218px !important" },
    { name: "client-id", text: "ID", imagePath: "/client_id.png", imageWidth: 28, imageHeight: 64, targetTop: "409px !important", targetLeft: "120px !important" },
    { name: "redirect-uri", text: "Redirect", imagePath: "/redirect.png", imageWidth: 76, imageHeight: 88, targetTop: "96px !important", targetLeft: "448px !important" },
    { name: "token-response", text: "Token Response", imagePath: "/token_response.png", imageWidth: 136, imageHeight: 80, targetTop: "225px !important", targetLeft: "156px !important" },
    { name: "scopes", text: "Scopes", imagePath: "/scopes.gif", imageWidth: 168, imageHeight: 152, targetTop: "310px !important", targetLeft: "340px !important" }
  ]

  return (
    <LevelPage
      levelId={"implicit"}
      levelTitleImageName={"implicit-flow"}
      levelTitleAltText={"Level 1: Implicity Flow"}
      levelTitleWidth={500}
      levelTitleHeight={60}
      options={options}
      answers={[{ dropzoneId: "dropzone1", dragId: "get-request" }]}
      steps={[
        { label: "STEP 1", id: "step1", selected: stepId === "step1" },
        { label: "STEP 2", id: "step2", selected: stepId === "step2" },
        { label: "STEP 3", id: "step3", selected: stepId === "step3" }
      ]}
    >
      <Dropzone requestPanelImagePath={"/request_panel.png"} options={answerOptions} levelId={"level1"} />
    </LevelPage>
  )
}

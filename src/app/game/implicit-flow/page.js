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
  return (
    <LevelPage
      levelId={"implicit"}
      levelTitleImageName={"implicit-flow"}
      levelTitleAltText={"Level 1: Implicity Flow"}
      levelTitleWidth={500}
      levelTitleHeight={60}
      options={[
        { name: "get-request", text: "GET", imagePath: "/get_method.png", imageWidth: 152, imageHeight: 80 },
        { name: "post-request", text: "POST", imagePath: "/post_method.png", imageWidth: 152, imageHeight: 80 },
        { name: "auth-endpoint", text: "Authorize", imagePath: "/auth_endpoint.png", imageWidth: 212, imageHeight: 68 },
        { name: "token-endpoint", text: "Token", imagePath: "/token_endpoint.png", imageWidth: 212, imageHeight: 68 },
        { name: "client-id", text: "ID", imagePath: "/client_id.png", imageWidth: 28, imageHeight: 64 },
        { name: "client-secret", text: "Secret", imagePath: "/client_secret.png", imageWidth: 28, imageHeight: 64 },
        { name: "redirect-uri", text: "Redirect", imagePath: "/redirect.png", imageWidth: 76, imageHeight: 88 },
        { name: "token-response", text: "Token Response", imagePath: "/token_response.png", imageWidth: 136, imageHeight: 80 },
        { name: "scopes", text: "Scopes", imagePath: "/scopes.gif", imageWidth: 42, imageHeight: 38 }
      ]}
      answers={[{ dropzoneId: "dropzone1", dragId: "get-request" }]}
      steps={[
        { label: "STEP 1", id: "step1", selected: stepId === "step1" },
        { label: "STEP 2", id: "step2", selected: stepId === "step2" },
        { label: "STEP 3", id: "step3", selected: stepId === "step3" }
      ]}
    >
      <Dropzone requestPanelImagePath={"/request_panel.png"} />
    </LevelPage>
  )
}

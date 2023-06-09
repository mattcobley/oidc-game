'use client'
import LevelPage from '../level-page'
import Dropzone from './dropzone'
import { useSelector, useDispatch } from 'react-redux'
import { setStepId } from '../../stepSlice'

export default function ImplicitFlow() {
  const dispatch = useDispatch()
  let stepId = useSelector((state) => state.step?.level1?.stepId)

  if (!stepId) {
    dispatch(setStepId({ levelId: "level1", stepId: 1 }))
  }

  const options = [
    { name: "get-request", text: "Method: GET", imagePath: "/get_method.png", imageWidth: 76, imageHeight: 40 },
    { name: "post-request", text: "Method: POST", imagePath: "/post_method.png", imageWidth: 76, imageHeight: 40 },
    { name: "auth-endpoint", text: "Endpoint: Authorize", imagePath: "/auth_endpoint.png", imageWidth: 212, imageHeight: 68 },
    { name: "token-endpoint", text: "Endpoint: Token", imagePath: "/token_endpoint.png", imageWidth: 212, imageHeight: 68 },
    { name: "client-id", text: "Client: ID", imagePath: "/client_id.png", imageWidth: 28, imageHeight: 64 },
    { name: "client-secret", text: "Client: Secret", imagePath: "/client_secret.png", imageWidth: 28, imageHeight: 64 },
    { name: "redirect-uri", text: "URI: Redirect", imagePath: "/redirect.png", imageWidth: 76, imageHeight: 88 },
    { name: "token-response", text: "Response Type: Token", imagePath: "/token_response.png", imageWidth: 136, imageHeight: 80 },
    { name: "scopes", text: "Scopes", imagePath: "/scopes.gif", imageWidth: 168, imageHeight: 152 }
  ]

  const answerOptions = {
    1: [
      { name: "get-request", text: "GET", imagePath: "/get_method.png", imageWidth: 76, imageHeight: 40, targetTop: "96px !important", targetLeft: "132px !important" },
      { name: "auth-endpoint", text: "Authorize", imagePath: "/auth_endpoint.png", imageWidth: 212, imageHeight: 68, targetTop: "96px !important", targetLeft: "218px !important" },
      { name: "client-id", text: "ID", imagePath: "/client_id.png", imageWidth: 28, imageHeight: 64, targetTop: "409px !important", targetLeft: "120px !important" },
      { name: "redirect-uri", text: "Redirect", imagePath: "/redirect.png", imageWidth: 76, imageHeight: 88, targetTop: "96px !important", targetLeft: "448px !important" },
      { name: "token-response", text: "Token Response", imagePath: "/token_response.png", imageWidth: 136, imageHeight: 80, targetTop: "225px !important", targetLeft: "156px !important" },
      { name: "scopes", text: "Scopes", imagePath: "/scopes.gif", imageWidth: 168, imageHeight: 152, targetTop: "310px !important", targetLeft: "340px !important" }
    ],
    2: [],
    3: []
  }

  const requestPanelImagePath = {
    1: "/request_panel.png",
    2: "",
    3: ""
  }

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
        { label: "STEP 1", id: 1, selected: stepId === 1 },
        { label: "STEP 2", id: 2, selected: stepId === 2 },
        { label: "STEP 3", id: 3, selected: stepId === 3 }
      ]}
    >
      <Dropzone requestPanelImagePath={requestPanelImagePath[stepId]} options={answerOptions[stepId] || []} levelId={"level1"} stepId={stepId} />
    </LevelPage>
  )
}

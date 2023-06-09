'use client'
import LevelPage from '../level-page'
import Dropzone from './dropzone'
import { useSelector, useDispatch } from 'react-redux'
import { setStepId } from '../../stepSlice'
import messages from "./prompt-test.json"

export default function ImplicitFlow() {
  const dispatch = useDispatch()
  let stepId = useSelector((state) => state.step?.level1?.stepId)

  if (!stepId) {
    dispatch(setStepId({ levelId: "level1", stepId: 1 }))
  }

  const options = [
    { name: "get-request", text: "Method: GET", imagePath: "/get_method.png", imageWidth: 76, imageHeight: 40 },
    { name: "post-request", text: "Method: POST", imagePath: "/post_method.png", imageWidth: 76, imageHeight: 40 },
    { name: "data-endpoint", text: "Endpoint: Data", imagePath: "/data_endpoint.png", imageWidth: 212, imageHeight: 68 },
    { name: "auth-endpoint", text: "Endpoint: Authorize", imagePath: "/auth_endpoint.png", imageWidth: 212, imageHeight: 68 },
    { name: "token-endpoint", text: "Endpoint: Token", imagePath: "/token_endpoint.png", imageWidth: 212, imageHeight: 68 },
    { name: "client-id", text: "Client: ID", imagePath: "/client_id.png", imageWidth: 28, imageHeight: 64 },
    { name: "client-secret", text: "Client: Secret", imagePath: "/client_secret.png", imageWidth: 28, imageHeight: 64 },
    { name: "redirect-uri", text: "URI: Redirect", imagePath: "/redirect.png", imageWidth: 76, imageHeight: 88 },
    { name: "token-response", text: "Response Type: Token", imagePath: "/token_response.png", imageWidth: 136, imageHeight: 80 },
    { name: "scopes", text: "Scopes", imagePath: "/scopes.gif", imageWidth: 168, imageHeight: 152 },
    { name: "access-token", text: "Access Token", imagePath: "/code.png", imageWidth: 56, imageHeight: 56 }
  ]

  const messageOptions = {
    1: [
      {name: "post-request", message: messages.step_one.post},
      {name: "data-endpoint", message: messages.step_one.data_endpoint},
      {name: "token-endpoint", message: messages.step_one.token_endpoint},
      {name: "client-secret", message: messages.step_one.client_secret},
      {name: "get-request", message: messages.step_one.get},
      {name: "auth-endpoint", message: messages.step_one.auth_endpoint},
      {name: "client-id", message: messages.step_one.client_id},
      {name: "redirect-uri", message: messages.step_one.redirect_uri},
      {name: "token-response", message: messages.step_one.token_response},
      {name: "scopes", message: messages.step_one.scopes},
      {name: "access-token", message: messages.step_one.access_token},
    ],
    2: [],
    3: [
      {name: "post-request", message: messages.step_three.post},
      {name: "data-endpoint", message: messages.step_three.data_endpoint},
      {name: "token-endpoint", message: messages.step_three.token_endpoint},
      {name: "client-secret", message: messages.step_three.client_secret},
      {name: "get-request", message: messages.step_three.get},
      {name: "auth-endpoint", message: messages.step_three.auth_endpoint},
      {name: "client-id", message: messages.step_three.client_id},
      {name: "redirect-uri", message: messages.step_three.redirect_uri},
      {name: "token-response", message: messages.step_three.token_response},
      {name: "scopes", message: messages.step_three.scopes},
      {name: "access-token", message: messages.step_three.access_token},
    ]
  }

  const answerOptions = {
    1: [
      { name: "get-request", text: "GET", imagePath: "/get_method.png", imageWidth: 76, imageHeight: 40, targetTop: "96px", targetLeft: "132px" },
      { name: "auth-endpoint", text: "Authorize", imagePath: "/auth_endpoint.png", imageWidth: 212, imageHeight: 68, targetTop: "96px", targetLeft: "218px" },
      { name: "client-id", text: "ID", imagePath: "/client_id.png", imageWidth: 28, imageHeight: 64, targetTop: "409px", targetLeft: "120px" },
      { name: "redirect-uri", text: "Redirect", imagePath: "/redirect.png", imageWidth: 76, imageHeight: 88, targetTop: "96px", targetLeft: "448px" },
      { name: "token-response", text: "Token Response", imagePath: "/token_response.png", imageWidth: 136, imageHeight: 80, targetTop: "225px", targetLeft: "156px" },
      { name: "scopes", text: "Scopes", imagePath: "/scopes.gif", imageWidth: 168, imageHeight: 152, targetTop: "310px", targetLeft: "340px" }
    ],
    2: [],
    3: [
      { name: "get-request", text: "GET", imagePath: "/get_method.png", imageWidth: 76, imageHeight: 40, targetTop: "96px", targetLeft: "132px" },
      { name: "data-endpoint", text: "Endpoint: Data", imagePath: "/data_endpoint.png", imageWidth: 212, imageHeight: 68, targetTop: "96px", targetLeft: "218px" },
      { name: "access-token", text: "Access token", imagePath: "/code.png", imageWidth: 56, imageHeight: 56, targetTop: "217px", targetLeft: "368px" }
    ]
  }

  const requestPanelImagePath = {
    1: "/request_panel.png",
    2: "/consent.gif",
    3: "/request_panel.png"
  }

  return (
    <LevelPage
      levelId={"level1"}
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
      stepId={stepId}
    >
      <Dropzone requestPanelImagePath={requestPanelImagePath[stepId]} options={answerOptions[stepId] || []} messages={messageOptions[stepId] || []} levelId={"level1"} stepId={stepId} />
    </LevelPage>
  )
}

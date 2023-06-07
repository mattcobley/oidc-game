
//import styles from './page.module.css'
import LevelPage from '../level-page'

export default function ImplicitFlow() {
  return (
    <LevelPage
      levelTitleImageName={"implicit-flow"}
      levelTitleAltText={"Level 1: Implicity Flow"}
      levelTitleWidth={500}
      levelTitleHeight={60}
    >
      <div>Hello implicit flow</div>
    </LevelPage>
  )
}

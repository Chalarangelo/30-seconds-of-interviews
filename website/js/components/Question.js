import { h } from "hyperapp"
import marked from "marked"

export default ({ question, answer }) => (
  <div class="Question">
    <div class="Question__heading" innerHTML={marked(`## ${question}`)} />
    <div class="Question__answer" innerHTML={marked(answer)} />
  </div>
)

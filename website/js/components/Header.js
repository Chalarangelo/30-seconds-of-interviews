import { h } from "hyperapp"
import Icon from "./Icon"

export default () => (
  <div>
    <header class="Header" />
    <div class="Header__lower">
      <a
        class="btn Header__github"
        href="https://github.com/fejes713/30-seconds-of-interviews"
        target="_blank"
        rel="noopener"
      >
        <Icon class="Header__github-star" name="star" />
        Star on GitHub
      </a>
    </div>
  </div>
)

import { h } from "hyperapp"
import feather from "feather-icons"

const init = () => {
  feather.replace()
}

export default ({ icon }) => <i data-feather="icon" oncreate={init} />

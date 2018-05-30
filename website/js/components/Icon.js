import { h } from "hyperapp"
import feather from "feather-icons"

const setInnerHTML = html => el => {
  el.innerHTML = html
}
const svg = ({ name, ...props }) => feather.icons[name].toSvg(props)

export default props => <i oncreate={setInnerHTML(svg(props))} />

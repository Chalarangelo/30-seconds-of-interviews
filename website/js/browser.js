import { onUserInputChange } from "./utils"

const html = document.documentElement.classList

if (window.chrome) {
  html.add("browser-chrome")
}

// Make iOS behave normally
document.addEventListener("touchstart", function x() {
  if (/iPhone|iPad|iPod/.test(navigator.platform)) {
    document.body.style.cursor = "pointer"
  }
  document.removeEventListener("touchstart", x)
})

onUserInputChange(type => {
  html[type === "touch" ? "add" : "remove"]("browser-touch")
})

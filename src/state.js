import { observable } from "@legendapp/state"
import { enableReactUse } from "@legendapp/state/config/enableReactUse"
enableReactUse()

export const state = observable()

function stepRound(number, increment, offset) {
  return Math.round((number - offset) / increment) * increment + offset
}

state.scroll.set(0)
var timeout

window.onwheel = (ev) => {
  state.scroll.set((prev) => Math.max(Math.min(prev + Math.sign(ev.deltaY) / 2, 20), 0))

  clearTimeout(timeout)

  timeout = setTimeout(() => {
    state.scroll.set((prev) => stepRound(prev, 5, 0))
  }, "400")
} 

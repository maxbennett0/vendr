import { appState } from "../AppState.js"
import { Snack } from "../Models/Snack.js"
import { setHTML } from "../Utils/Writer.js"


export class SnacksController {
  constructor() {
    _drawSnacks()
  }
}

function _drawSnacks() {
  let template = ''
  appState.snacks.forEach(s => template += s.Template)
  setHTML('snacks', template)
}
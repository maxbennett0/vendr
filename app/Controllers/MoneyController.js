import { appState } from "../AppState.js";
import { moneyService } from "../Services/MoneyService.js";
import { setText } from "../Utils/Writer.js";
import { SnacksController } from "./SnacksController.js";


function _drawMoney() {
  setText('money', appState.money)
}

export class MoneyController {
  // constructor() {
  //   _drawMoney()
  // }
  addMoney() {
    moneyService.addMoney()
    _drawMoney()
  }

  buySnack(name) {
    moneyService.buySnack(name)
    _drawMoney()
  }

}
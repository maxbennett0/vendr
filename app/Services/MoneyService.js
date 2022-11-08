import { appState } from "../AppState.js"
import { Snack } from "../Models/Snack.js";

class MoneyService {
  addMoney() {
    appState.money += 0.25
    console.log(appState.money);
  }

  buySnack(name) {
    let found = appState.snacks.find(s => s.name == name)
    if (appState.money >= found.price) {
      appState.money -= found.price
      console.log('bought snack');
    } else {
      console.log('no money');
    }
  }
}

export const moneyService = new MoneyService()
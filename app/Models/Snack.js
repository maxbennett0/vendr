export class Snack {
  constructor(name, price) {
    this.name = name,
      this.price = price
  }

  get Template() {
    return `
      <div class="col-6 card p-2 m-3">
        <h2 id="name">${this.name}</h2>
        <h2 id="price">${this.price}</h2>
        <button id="buyButton" class="btn btn-primary" onclick="app.moneyController.buySnack('${this.name}')">buy snack</button>
      </div>
    `
  }
}
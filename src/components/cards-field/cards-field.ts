import "./cards-field.scss";
import { BaseComponentDiv } from "../base-component-div";
import { Card } from "../card/card";
import { SHOW_TIME } from "../shared/const";
import store from "../settings/store";

export class CardsField extends BaseComponentDiv {
  private cards: Card[] = [];

  constructor() {
    super("div", [`cards-field_${store.difficult}elem`]);
  }

  clear(): void {
    this.cards = [];
    this.element.innerHTML = "";
  }

  addCards(cards: Card[]): void {
    this.cards = cards;
    this.cards.forEach((card) => this.element.appendChild(card.element));
    setTimeout(() => {
      this.cards.forEach((card) => card.flipToBack());
    }, SHOW_TIME);
  }
}

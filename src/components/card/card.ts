import "./card.scss";
import { BaseComponentDiv } from "../base-component-div";

const FLIP_CLASS = "flipped";

export class Card extends BaseComponentDiv {
  constructor(readonly image: string) {
    super("div", ["card-container"]);
    this.element.innerHTML = `
      <div class="card">
        <div class="card__front" style = "background-image: url('./images/${image}')"></div>
        <div class="card__back"></div>
      </div>`;
  }

  flipToBack(): Promise<void> {
    return this.flip(true);
  }

  flipToFront(): Promise<void> {
    return this.flip(false);
  }

  private flip(isFront = false): Promise<void> {
    return new Promise((resolve) => {
      this.element.classList.toggle(FLIP_CLASS, isFront);
      this.element.addEventListener("transitionend", () => resolve(), {
        once: true,
      });
    });
  }
}

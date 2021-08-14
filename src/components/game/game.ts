import { BaseComponentDiv } from '../base-component-div';
import { Card } from '../card/card';
import { CardsField } from '../cards-field/cards-field';
import { delay, clearContainer } from '../shared/utils';
import '../card/card.scss';
import { getMinutes, getSeconds } from '../shared/utils/timer-function';
import { addInDB, setScoreDBObject } from '../db/db';
import { WinModal } from '../win-modal/win-modal';
import store from '../settings/store';
import { cardsPair, FLIP_DELAY } from '../shared/const';

export class Game extends BaseComponentDiv {
  private readonly cardsField;

  private activeCard?: Card;

  private isAnimation = false;

  difficult = store.difficult;

  cardStyle = store.style;

  private CardCounter = this.difficult * cardsPair;

  private ErrorCounter = 0;

  private FlipCounter = 0;

  constructor() {
    super();
    this.cardsField = new CardsField();
    this.element.appendChild(this.cardsField.element);
  }

  newGame(images: string[]): void {
    this.cardsField.clear();
    const cards = images
      .concat(images)
      .map((url) => new Card(url))
      .sort(() => Math.random() - 0.5);
    cards.forEach((card) => {
      card.element.addEventListener('click', () => this.cardHandler(card));
    });
    this.cardsField.addCards(cards);
  }

  private async cardHandler(card: Card) {
    if (this.isAnimation) return;
    this.isAnimation = true;

    await card.flipToFront();

    if (!this.activeCard) {
      this.activeCard = card;
      this.isAnimation = false;
      return;
    }

    if (this.activeCard.image !== card.image) {
      this.activeCard.element
        .querySelector('.card__front')
        ?.classList.add('error');
      card.element.querySelector('.card__front')?.classList.add('error');
      this.ErrorCounter += cardsPair;
      await delay(FLIP_DELAY);
      await Promise.all([this.activeCard.flipToBack(), card.flipToBack()]);
      this.activeCard.element
        .querySelector('.card__front')
        ?.classList.remove('error');
      card.element.querySelector('.card__front')?.classList.remove('error');
    } else {
      this.activeCard.element
        .querySelector('.card__front')
        ?.classList.add('right');
      card.element.querySelector('.card__front')?.classList.add('right');
      this.CardCounter -= cardsPair;
    }
    this.activeCard = undefined;
    this.isAnimation = false;
    this.FlipCounter += cardsPair;
    if (this.CardCounter === 0) {
      const seconds = getSeconds();
      const minutes = getMinutes();
      let secondsToScore = seconds;
      if (minutes !== 0) {
        secondsToScore += minutes * 60;
      }
      let score =
        (this.FlipCounter - this.ErrorCounter) * 100 - secondsToScore * 10;
      if (score < 0) {
        score = 0;
      }
      const appElement = document.querySelector('main');
      const startBtn = document.querySelector('.start-game__wrapper');
      const stopBtn = document.querySelector('.stop-game__wrapper');

      if (!appElement) throw Error('App root element not found');

      clearContainer('main');
      setScoreDBObject(score);
      addInDB();

      stopBtn?.classList.remove('game__wrapper__active');
      startBtn?.classList.add('game__wrapper__active');
      WinModal(appElement);
      const text = document.querySelector('.modal-text') as HTMLElement;

      if (minutes !== 0) {
        text.textContent = `Поздравляем вы победили! Ваше время ${minutes} минут ${seconds} секунд`;
      } else {
        text.textContent = `Поздравляем вы победили! Ваше время ${seconds} секунд`;
      }
    }
  }
}

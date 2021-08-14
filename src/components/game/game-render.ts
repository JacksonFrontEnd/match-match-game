import { Game } from './game';
import { ImageCategoryModel } from '../../models/image-actegory-model';
import store from '../settings/store';

export class GameRender {
  private readonly game: Game;

  constructor(private readonly rootElement: HTMLElement) {
    this.game = new Game();
    this.rootElement.appendChild(this.game.element);
  }

  async startGame(): Promise<void> {
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();
    const cardStyle = categories[store.style];
    const images: string[] = [];
    let { difficult } = store;
    cardStyle.images.forEach((item, index) => {
      if (difficult === 0) {
        this.game.newGame(images);
        return;
      }
      images[index] = `${cardStyle.category}/${item}`;
      difficult--;
    });
    this.game.newGame(images);
  }
}

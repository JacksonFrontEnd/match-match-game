import { GameRender } from "../game/game-render";
import { RegistrationFormHandler } from "../registration/registration-form-handler";
import { Settings } from "../settings/settings";
import {
  removeTimerFunction,
  timerFunction,
} from "../shared/utils/timer-function";
import { renderTable } from "../db/db";
import { SHOW_TIME } from "../shared/const";
import { AboutGameRender } from "../about-game/about-game-render";
import { BestGamersRender } from "../best-gamers/best-gamers-render";
import { RegistrationFormRender } from "../registration/registration-form__render";
import { TimerRender } from "../timer/timer-render";

export function routing(location: string): void {
  const appElement = document.querySelector("main") as HTMLElement;
  let game;
  const startBtn = document.querySelector(".start-game__wrapper");
  const stopBtn = document.querySelector(".stop-game__wrapper");
  switch (location) {
    case "about-game":
      AboutGameRender(appElement);
      break;
    case "start-game":
      removeTimerFunction();
      startBtn?.classList.remove("game__wrapper__active");
      stopBtn?.classList.add("game__wrapper__active");
      TimerRender(appElement);
      setTimeout(timerFunction, SHOW_TIME);
      game = new GameRender(appElement);
      game.startGame();
      break;
    case "stop-game":
      stopBtn?.classList.remove("game__wrapper__active");
      startBtn?.classList.add("game__wrapper__active");
      AboutGameRender(appElement);
      break;
    case "settings":
      Settings(appElement);
      break;
    case "best-score":
      BestGamersRender(appElement);
      renderTable();
      break;
    case "registration":
      RegistrationFormRender(appElement);
      RegistrationFormHandler();
      break;
    default:
      break;
  }
}

import "./header-style.scss";
import { clearContainer } from "../utils";
import { routing } from "../../routing/routing";

export const render = (): void => {
  const body = document.querySelector("body") as HTMLElement;
  body.innerHTML += `
    <header id="header">
    <div class="logo">
      <div>match</div>
      <div class="logo-bottom">match</div>
    </div>
    <nav id="navigation">
      <ul class="nav-btn">
        <li>
          <a class="nav-btn__elem" href="#/about-game" data-href="#/about-game" id='nav-btn__first'>
            <img src="./images/header/Ellipse 5.png" alt="" />
            <p>About Game</p>
          </a>
        </li>
        <li>
          <a class="nav-btn__elem" href="#/best-score" data-href="#/best-score">
            <img src="./images/header/stars.png" alt="" />
            <p>Best Score</p>
          </a>
        </li>
        <li>
          <a class="nav-btn__elem" href="#/settings" data-href="#/settings">
            <img src="./images/header/gear.png" alt="" />
            <p>Game Settings</p>
          </a>
        </li>
      </ul>
    </nav>
    <a class="header-btn__style registration" href="#/registration"
    data-href="#/registration" id = 'registration-btn'>register new player</a>
    <div class="start-game__wrapper">
      <a class="header-btn__style" href="#/start-game" data-href="#/start-game">start game</a>
      <img src="./images/header/avatar.png" alt="" class="game-img__style">
    </div>
    <div class="stop-game__wrapper">
      <a class="header-btn__style" href="#/stop-game" data-href="#/stop-game">stop game</a>
      <img src="./images/header/avatar.png" alt="" class="game-img__style">
    </div>
  </header>`;
  const links = document.querySelectorAll("a");
  links.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const target =
        event.currentTarget as unknown as HTMLHyperlinkElementUtils;
      if (!btn.classList.contains("header-btn__style")) {
        links.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
      }
      if (!btn.classList.contains("registration")) {
        clearContainer("main");
      }
      const location = window.location.hash;
      const path = target?.href.split("/").pop();
      if (location) {
        routing(path!);
      }
    });
  });
};

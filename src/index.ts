import "./index.scss";
import { App } from "./app";
import { AboutGameRender } from "./components/about-game/about-game-render";

window.onload = () => {
  App();
  const main = document.createElement("main");
  document.body.appendChild(main);
  const rootElement = document.querySelector("main");
  if (!rootElement) throw Error("App root element not found");
  AboutGameRender(rootElement);
  window.location.hash = "#/about-game/";
};

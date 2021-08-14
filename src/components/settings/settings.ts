import { SettingsRender } from "./settings-render";
import store from "./store";

export const Settings = (root: HTMLElement): void => {
  SettingsRender(root);
  const button = document.querySelector(".btn-submit") as HTMLInputElement;
  const difficultInput = document.querySelector(
    "#difficult"
  ) as HTMLInputElement;
  const styleInput = document.querySelector("#style") as HTMLInputElement;
  button.addEventListener("click", (event) => {
    event.preventDefault();
    store.difficult = Number(difficultInput.value);
    store.style = Number(styleInput.value);
    console.log(store.difficult);
  });
};

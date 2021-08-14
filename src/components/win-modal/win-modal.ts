import { BestGamersRender } from "../best-gamers/best-gamers-render";
import { CreateDB, renderTable } from "../db/db";
import { clearContainer } from "../shared/utils";
import { WinModalRender } from "./win-modal-render";

export const WinModal = (root: HTMLElement): void => {
  WinModalRender(root);
  const button = document.querySelector(".btn-style") as HTMLInputElement;
  button.addEventListener("click", () => {
    const appElement = document.querySelector("main") as HTMLElement;
    clearContainer("main");
    BestGamersRender(appElement);
    CreateDB();
    renderTable();
  });
};

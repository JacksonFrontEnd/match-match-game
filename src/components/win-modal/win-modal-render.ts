import "./win-modal-style.scss";

export const WinModalRender = (root: HTMLElement): void => {
  const content = `
    <div class="win-modal-wrapper">
      <p class="modal-text">Congratulations! You successfully found all matches on 1.21 minutes.</p>
      <a class="btn-style" href="#/registration/" data-href="#/registration/" id='registration-btn'>ok</a>
    </div>`;
  const wrapper = document.createElement("div");
  wrapper.classList.add("win-modal");
  wrapper.innerHTML = content;
  root?.appendChild(wrapper);
};

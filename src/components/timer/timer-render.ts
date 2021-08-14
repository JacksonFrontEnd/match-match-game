import "./timer-style.scss";

export const TimerRender = (root: HTMLElement): void => {
  const content = `
    <div id="timer">0:0</div>`;
  const wrapper = document.createElement("div");
  wrapper.classList.add("timer-wrapper");
  wrapper.innerHTML = content;
  root?.appendChild(wrapper);
};

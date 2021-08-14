import "./about-game-style.scss";

export const AboutGameRender = (root: HTMLElement): void => {
  const content = `
      <h6>How to play?</h6>
      <div class="rules-section_elem_wrapper">
        <div class="rules-section_elem">
          <div class="rules-step">1</div>
          <p>Register new player in game</p>
        </div>
        <img src="./images/about_game/reg_rukes.png" alt="">
      </div>
      <div class="rules-section_elem_wrapper">
        <div class="rules-section_elem">
          <div class="rules-step">2</div>
          <p>Configure your game settings</p>
        </div>
        <img src="./images/about_game/settings.png" alt="" class="little-img_settings">
      </div>
      <div class="rules-section_elem_wrapper">
        <div class="rules-section_elem">
          <div class="rules-step">3</div>
          <p>Start you new game! Remember card positions and match it before times up.</p>
        </div>
        <img src="./images/about_game/game_examples.png" alt="">
      </div>`;
  const aboutGameWrapper = document.createElement("div");
  aboutGameWrapper.classList.add("rules-section");
  aboutGameWrapper.innerHTML = content;
  root?.appendChild(aboutGameWrapper);
};

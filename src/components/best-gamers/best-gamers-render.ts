import "./best-gamets-style.scss";

export const BestGamersRender = (root: HTMLElement): void => {
  const content = `
    <h6 class="best-players__title">Best players</h6>
    <div class="best-players__wrapper">
      <div class="name-block">
        <div class="best-players__name">Name: </div>
        <div class="best-players__email">email: </div>
      </div>
      <div class="best-players__score">Score: </div>
    </div>
    <div class="best-players__wrapper">
      <div class="name-block">
        <div class="best-players__name">Name: </div>
        <div class="best-players__email">email: </div>
      </div>
      <div class="best-players__score">Score: </div>
    </div>
    <div class="best-players__wrapper">
      <div class="name-block">
        <div class="best-players__name">Name: </div>
        <div class="best-players__email">email: </div>
      </div>
      <div class="best-players__score">Score: </div>
    </div>
    <div class="best-players__wrapper">
      <div class="name-block">
        <div class="best-players__name">Name: </div>
        <div class="best-players__email">email: </div>
      </div>
      <div class="best-players__score">Score: </div>
    </div>
    <div class="best-players__wrapper">
      <div class="name-block">
        <div class="best-players__name">Name: </div>
        <div class="best-players__email">email: </div>
      </div>
      <div class="best-players__score">Score: </div>
    </div>
    <div class="best-players__wrapper">
      <div class="name-block">
        <div class="best-players__name">Name: </div>
        <div class="best-players__email">email: </div>
      </div>
      <div class="best-players__score">Score: </div>
    </div>
    <div class="best-players__wrapper">
      <div class="name-block">
        <div class="best-players__name">Name: </div>
        <div class="best-players__email">email: </div>
      </div>
      <div class="best-players__score">Score: </div>
    </div>
    <div class="best-players__wrapper">
      <div class="name-block">
        <div class="best-players__name">Name: </div>
        <div class="best-players__email">email: </div>
      </div>
      <div class="best-players__score">Score: </div>
    </div>
    <div class="best-players__wrapper">
      <div class="name-block">
        <div class="best-players__name">Name: </div>
        <div class="best-players__email">email: </div>
      </div>
      <div class="best-players__score">Score: </div>
    </div>
    <div class="best-players__wrapper">
      <div class="name-block">
        <div class="best-players__name">Name: </div>
        <div class="best-players__email">email: </div>
      </div>
      <div class="best-players__score">Score: </div>
    </div>
`;
  const renderContainer = document.createElement("div");
  renderContainer.classList.add("best-players");
  renderContainer.innerHTML = content;
  root?.appendChild(renderContainer);
};

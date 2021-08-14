import "./settings-style.scss";

export const SettingsRender = (root: HTMLElement): void => {
  const content = `
  <form class="form-settings">
    <label for="difficult">Difficult</label>
    <select name="" id="difficult" class="difficult-select">
      <option value="8">Eazy</option>
      <option value="18">Normal</option>
      <option value="32">Hard</option>
    </select>
    <label for="style">Card style</label>
    <select name="" id="style" class="style-select">
      <option value="0">Bears</option>
      <option value="1">Animals</option>
    </select>
    <button class="btn-submit">Apply changes</button>
  </form>`;
  const renderContainer = document.createElement("div");
  renderContainer.classList.add("form-wrapper__settings");
  renderContainer.innerHTML = content;
  root?.appendChild(renderContainer);
};

import "./registration-form-style.scss";

export const RegistrationFormRender = (root: HTMLElement): void => {
  const content = `
    <div class="modal-wrapper">
      <h5 class="modal-title">Register new Player</h5>
      <div class="form-wrapper">
        <form action="" class="form">
          <div class ='textfield-wrapper'>
            <input type="text" class="modal-textfield"
            placeholder="Name : more than 2 characters" id="name-tf" required>
            <label for="name-tf" class = 'tf-label' id="name-label"></label>
          </div>
          <div class ='textfield-wrapper'>
            <input type="text" class="modal-textfield"
            placeholder="Surname: more than 2 characters" id="surname-tf" required>
            <label for="name-tf" class = 'tf-label' id="surname-label"></label>
          </div>
          <div class ='textfield-wrapper'>
            <input type="email" class="modal-textfield" placeholder="Email: xxxx@xxxx.xx" id="email-tf" required>
            <label for="name-tf" class = 'tf-label' id="email-label"></label>
          </div>
          <div class="btn-container">
            <button id="btn-submit" class="btn-submit" type="submit">add user</button>
            <button id="btn-reset" class="btn-reset" type="reset">cancel</button>
          </div>
        </form>
        <img src="./images/about_game/avatar.png" alt="">
      </div>
    </div>`;
  const renderContainer = document.createElement("div");
  renderContainer.classList.add("modal");
  renderContainer.innerHTML = content;
  root?.appendChild(renderContainer);
};

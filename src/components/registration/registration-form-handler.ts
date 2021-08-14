import './registration-form-style.scss';
import { validateEmail, validateName } from '../shared/utils';
import { User } from '../user/user';
import { setUser } from '../db/db';

export function RegistrationFormHandler(): void {
  const modal = document.querySelector('.modal');
  const nameTextField = document.getElementById('name-tf') as HTMLInputElement;
  const nameLabel = document.getElementById('name-label') as HTMLElement;
  const surnameTextField = document.getElementById(
    'surname-tf'
  ) as HTMLInputElement;
  const surnameLabel = document.getElementById('surname-label') as HTMLElement;
  const emailTextField = document.getElementById(
    'email-tf'
  ) as HTMLInputElement;
  const emailLabel = document.getElementById('email-label') as HTMLElement;
  const submitBtn = document.getElementById('btn-submit');
  const cancelBtn = document.getElementById('btn-reset');
  const startGameBtn = document.querySelector('.start-game__wrapper');
  const registrationBtn = document.getElementById('registration-btn');
  modal?.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target === cancelBtn) {
      modal.remove();
    }
  });
  submitBtn?.addEventListener('click', (event) => {
    let isCorrect = false;

    if (!validateName(nameTextField?.value)) {
      nameLabel.classList.remove('tf-label__right');
      nameLabel.textContent = 'Wrong';
      nameLabel.classList.add('tf-label__wrong');
      isCorrect = true;
    } else {
      nameLabel.classList.remove('tf-label__wrong');
      nameLabel.textContent = 'Correct';
      nameLabel.classList.add('tf-label__right');
    }

    if (!validateName(surnameTextField?.value)) {
      surnameLabel.classList.remove('tf-label__right');
      surnameLabel.textContent = 'Wrong';
      surnameLabel.classList.add('tf-label__wrong');
      isCorrect = true;
    } else {
      surnameLabel.classList.remove('tf-label__wrong');
      surnameLabel.textContent = 'Correct';
      surnameLabel.classList.add('tf-label__right');
    }

    if (!validateEmail(emailTextField?.value)) {
      emailLabel.classList.remove('tf-label__right');
      emailLabel.textContent = 'Wrong';
      emailLabel.classList.add('tf-label__wrong');
      isCorrect = true;
    } else {
      emailLabel.classList.remove('tf-label__wrong');
      emailLabel.textContent = 'Correct';
      emailLabel.classList.add('tf-label__right');
    }

    if (!isCorrect) {
      const name = `${nameTextField?.value} ${surnameTextField?.value}`;
      const email = emailTextField?.value;
      event.preventDefault();
      registrationBtn?.remove();
      const user = new User(name, email);
      setUser(user);
      startGameBtn?.classList.add('game__wrapper__active');
      modal?.remove();
    }
  });
}

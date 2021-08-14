import { User } from '../user/user';

let score: IDBObjectStore;
let db: IDBDatabase;
let user: User;

export function CreateDB(): void {
  const dbVersion = 3;
  const dbRequest = indexedDB.open('jacksonfrontend', dbVersion);
  dbRequest.onupgradeneeded = () => {
    db = dbRequest.result;
    if (!db.objectStoreNames.contains('scores')) {
      db.createObjectStore('scores', { keyPath: 'scores' });
    }
  };
  dbRequest.onsuccess = () => {
    db = dbRequest.result;
    db.onversionchange = () => {
      db.close();
    };
  };
  dbRequest.onerror = (error) => {
    console.error(error);
  };
}

export function setUser(users: User): void {
  user = users;
}

export function setScoreDBObject(scores: number): void {
  user.setScore(scores);
}

function createTransaction() {
  const transaction = db.transaction(['scores'], 'readwrite');
  score = transaction.objectStore('scores');
}

export function addInDB(): void {
  const name = user.getName();
  const email = user.getEmail();
  const scores = user.getScore();
  createTransaction();

  const transactionRequest = score.put({ name, email, scores });
  transactionRequest.onerror = () => {};
}
export function renderTable(): void {
  createTransaction();
  const scoreField = document.querySelectorAll('.best-players__score');
  const nameField = document.querySelectorAll('.best-players__name');
  const emailField = document.querySelectorAll('.best-players__email');
  const gamers = score.getAll();
  gamers.onsuccess = () => {
    const gamersArr: Array<{ name: string; email: string; scores: number }> =
      gamers.result;
    gamersArr.sort((prev, next) => next.scores - prev.scores);
    gamersArr.forEach((gamer, i) => {
      if (i > 9) {
        return;
      }
      nameField[i].textContent += gamer.name;
      emailField[i].textContent += gamer.email;
      scoreField[i].textContent! += gamer.scores;
    });
  };
  gamers.onerror = () => {};
}

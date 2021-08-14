import { CreateDB } from "./components/db/db";
import { render } from "./components/shared/header/header";

export function App(): void {
  render();
  document.querySelector("#nav-btn__first")?.classList.add("active");
  CreateDB();
}

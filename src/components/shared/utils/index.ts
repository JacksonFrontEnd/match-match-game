export const clearContainer = (selector: string): void => {
  const container = document.querySelector(selector) as HTMLElement;
  container.innerHTML = "";
};

export function validateName(str: string): boolean {
  return /^[a-zа-яА-Я0-9_-]{3,30}$/.test(str);
}

export function validateEmail(str: string): boolean {
  const reg =
    /^((([A-Za-z]{1}[-0-9A-z_.]{1,}[0-9A-Za-z]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u;
  return reg.test(str);
}

export function delay(timeout: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

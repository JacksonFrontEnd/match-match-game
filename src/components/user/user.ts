export class User {
  private name: string;

  private email: string;

  private score: number;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
    this.score = 0;
  }

  getName(): string {
    return this.name;
  }

  getEmail(): string {
    return this.email;
  }

  getScore(): number {
    return this.score;
  }

  setScore(score: number): void {
    this.score = score;
  }
}

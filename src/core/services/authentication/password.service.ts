import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PasswordService {
  private specials = "!@#$%^&*()_+{}:\"<>?|[];',./`~";
  private lowercase = "abcdefghijklmnopqrstuvwxyz";
  private uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  private numbers = "0123456789";

  private all = this.specials + this.lowercase + this.uppercase + this.numbers;

  public generate() {
    let password = "";
    password += this.pick(password, this.specials, 1, 3);
    password += this.pick(password, this.lowercase, 1, 3);
    password += this.pick(password, this.uppercase, 1, 3);
    password += this.pick(password, this.all, 10, 10);

    return this.shuffle(password);
  }

  private pick(exclusions, string, min, max) {
    let n,
      chars = "";
    if (max === undefined) {
      n = min;
    } else {
      n = min + Math.floor(Math.random() * (max - min + 1));
    }
    let i = 0;
    while (i < n) {
      const character = string.charAt(
        Math.floor(Math.random() * string.length)
      );
      if (exclusions.indexOf(character) < 0 && chars.indexOf(character) < 0) {
        chars += character;
        i++;
      }
    }

    return chars;
  }

  private shuffle(string) {
    const array = string.split("");
    let tmp,
      current,
      top = array.length;

    if (top) {
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    }

    return array.join("");
  }
}

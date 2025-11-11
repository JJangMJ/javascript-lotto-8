import { validateDuplicateNumber, validateNumberCount, validateNumbersRange } from "../validator/validator.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    validateNumberCount(numbers);
    validateNumbersRange(numbers);
    validateDuplicateNumber(numbers);
    this.#numbers = numbers;
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;

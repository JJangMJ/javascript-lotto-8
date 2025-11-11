import {
  validateDuplicateNumber,
  validateNumberCount,
  validateNumbersRange,
} from "../validator/validator.js";

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

  countMatches(numbers) {
    return this.#numbers.filter((num) => numbers.includes(num)).length;
  }

  containsBonusNumber(bonusNumber) {
    const bonus = bonusNumber.getBonusNumber();
    return this.#numbers.includes(bonus);
  }
}

export default Lotto;

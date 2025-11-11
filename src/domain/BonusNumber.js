import {
  validateBonusNotInWinningNumbers,
  validateNumberRange,
} from "../validator/validator.js";

class BonusNumber {
  #number;

  constructor(number, winningNumbers) {
    validateNumberRange(number);
    validateBonusNotInWinningNumbers(
      number,
      winningNumbers.getWinningNumbers()
    );
    this.#number = number;
  }

  getBonusNumber() {
    return this.#number;
  }
}

export default BonusNumber;

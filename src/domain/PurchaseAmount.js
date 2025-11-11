import { parseToInt } from "../parser";
import { validateMultipleOfThousand, validateNotBlank, validatePositive } from "../validator/validator";

class PurchaseAmount {
  #purchaseAmount;

  constructor(amount) {
    this.#purchaseAmount = amount;
  }

  static from(input) {
    validateNotBlank(input);
    const parsedInput = parseToInt(input);
    validatePositive(parsedInput);
    validateMultipleOfThousand(parsedInput);
    
    return new PurchaseAmount(parsedInput);
  }

  getPurchaseAmount() {
    return this.#purchaseAmount;
  }
}

export default PurchaseAmount;
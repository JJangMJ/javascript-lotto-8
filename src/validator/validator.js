import { ERROR_MESSAGES } from "../constant/errorMessages.js";
import { LOTTO_CONSTANTS } from "../constant/lottoConstants.js";

export function validateNotBlank(input) {
  if (input === null || input === undefined || input.trim() === "") {
    throw new Error(ERROR_MESSAGES.CANNOT_BE_BLANK);
  }
}

export function validatePositive(value) {
  if (value <= 0) {
    throw new Error(ERROR_MESSAGES.CANNOT_BE_NEGATIVE);
  }
}

export function validateMultipleOfThousand(value) {
  if (value % LOTTO_CONSTANTS.PRICE !== 0) {
    throw new Error(ERROR_MESSAGES.SHOULD_BE_MULTIPLE_OF_1000);
  }
}

export function validateNumberCount(numbers) {
  if (numbers.length !== LOTTO_CONSTANTS.SIZE) {
    throw new Error(ERROR_MESSAGES.SHOULD_BE_SIX_NUMBER);
  }
}

export function validateNumberRange(number) {
  if (!Number.isInteger(number)) {
    throw new Error(ERROR_MESSAGES.SHOULD_BE_NUMBER);
  }

  if (number < LOTTO_CONSTANTS.MIN_NUMBER || number > LOTTO_CONSTANTS.MAX_NUMBER) {
    throw new Error(ERROR_MESSAGES.SHOULD_BE_IN_RANGE);
  }
}

export function validateNumbersRange(numbers) {
  numbers.forEach((number) => validateNumberRange(number));
}

export function validateDuplicateNumber(numbers) {
  const uniqueNumbers = new Set(numbers);
  if (uniqueNumbers.size !== numbers.length) {
    throw new Error(ERROR_MESSAGES.CANNOT_BE_DUPLICATED);
  }
}
import { ERROR_MESSAGES } from "../constants/errorMessages.js";

const LOTTO_PRICE = 1000;

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
  if (value % LOTTO_PRICE !== 0) {
    throw new Error(ERROR_MESSAGES.SHOULD_BE_MULTIPLE_OF_1000);
  }
}
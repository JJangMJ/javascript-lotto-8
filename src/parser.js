import { ERROR_MESSAGES } from "./constant/errorMessages.js";
import { LOTTO_CONSTANTS } from "./constant/lottoConstants.js";
import {
  validateNotBlank,
  validateNumberRange,
  validateDuplicateNumber,
} from "./validator/validator.js";

export function parseToInt(rawInput) {
  const trimmed = rawInput.trim();

  if (!/^-?\d+$/.test(trimmed)) {
    throw new Error(ERROR_MESSAGES.SHOULD_BE_NUMBER);
  }

  const value = Number(trimmed);

  if (!Number.isFinite(value)) {
    throw new Error(ERROR_MESSAGES.SHOULD_BE_NUMBER);
  }

  return value;
}

export function parseWinningNumbers(input) {
  validateNotBlank(input);

  const splittedInput = input
    .split(",")
    .map((value) => value.trim())
    .filter((value) => value !== "");

  if (splittedInput.length !== LOTTO_CONSTANTS.SIZE) {
    throw new Error(ERROR_MESSAGES.SHOULD_BE_SIX_NUMBER);
  }

  const numbers = splittedInput.map((number) => {
    const parsedNumber = parseToInt(number);
    validateNumberRange(parsedNumber);
    return parsedNumber;
  });

  validateDuplicateNumber(numbers);

  return numbers;
}

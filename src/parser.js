import { ERROR_MESSAGES } from "./constant/errorMessages.js"

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
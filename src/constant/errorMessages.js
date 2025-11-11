const ERROR_PREFIX = "[ERROR]";

export const ERROR_MESSAGES = Object.freeze({
  CANNOT_BE_BLANK: `${ERROR_PREFIX} 입력이 비어있습니다.`,
  SHOULD_BE_NUMBER: `${ERROR_PREFIX} 숫자만 입력할 수 있습니다.`,
  CANNOT_BE_NEGATIVE: `${ERROR_PREFIX} 구입 금액은 0보다 큰 숫자만 입력할 수 있습니다.`,
  SHOULD_BE_MULTIPLE_OF_1000: `${ERROR_PREFIX} 1000원 단위로만 구입할 수 있습니다.`,
  SHOULD_BE_SIX_NUMBER: `${ERROR_PREFIX} 6개의 숫자로 이루어져야 합니다.`,
  SHOULD_BE_IN_RANGE: `${ERROR_PREFIX} 1~45 사이의 숫자만 입력할 수 있습니다.`,
  CANNOT_BE_DUPLICATED: `${ERROR_PREFIX} 중복된 숫자가 있습니다.`,
  SHOULD_BE_SINGLE_NUMBER: `${ERROR_PREFIX} 하나의 숫자만 입력해야 합니다.`,
  CANNOT_BE_DUPLICATED_WITH_WINNING_NUMBER: `${ERROR_PREFIX} 당첨 번호에 없는 숫자를 입력해야 합니다.`,
});

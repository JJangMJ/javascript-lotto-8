import { Random } from "@woowacourse/mission-utils";
import { LOTTO_CONSTANTS } from "../constant/lottoConstants.js";

class RandomLottoNumberGenerator {
  generate() {
    const numbers = Random.pickUniqueNumbersInRange(
      LOTTO_CONSTANTS.MIN_NUMBER,
      LOTTO_CONSTANTS.MAX_NUMBER,
      LOTTO_CONSTANTS.SIZE
    );
    return numbers.sort((a, b) => a - b);
  }
}

export default RandomLottoNumberGenerator;
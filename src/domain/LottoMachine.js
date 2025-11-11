import Lotto from "./Lotto.js";
import LottoPurchaseResult from "../dto/LottoPurchaseResult.js";
import { LOTTO_CONSTANTS } from "../constant/lottoConstants.js";

class LottoMachine {
  #purchaseAmount;
  #lottoNumberGenerator;

  constructor(purchaseAmount, lottoNumberGenerator) {
    this.#purchaseAmount = purchaseAmount;
    this.#lottoNumberGenerator = lottoNumberGenerator;
  }

  generateLottos() {
    const purchaseCount =
      this.#purchaseAmount.getPurchaseAmount() / LOTTO_CONSTANTS.PRICE;

    const lottos = Array.from({ length: purchaseCount }, () => {
      const numbers = this.#lottoNumberGenerator.generate();
      return new Lotto(numbers);
    });

    return new LottoPurchaseResult(purchaseCount, lottos);
  }
}

export default LottoMachine;

import LottoMachine from "../domain/LottoMachine.js";
import PurchaseAmount from "../domain/PurchaseAmount.js";
import RandomLottoNumberGenerator from "../domain/RandomLottoNumberGenerator.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";

class LottoGameController {
  #inputView;
  #outputView;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
  }

  async run() {
    await this.#purchaseLottos();
  }

  async #purchaseLottos() {
    while (true) {
      try {
        const input = await this.#inputView.inputLottoPurchasePrice();
        const purchaseAmount = PurchaseAmount.from(input);
        const lottoMachine = new LottoMachine(
          purchaseAmount,
          new RandomLottoNumberGenerator()
        );
        const purchaseResult = lottoMachine.generateLottos();
        this.#outputView.printPurchasedLottos(purchaseResult);
        break;
      } catch (error) {
        this.#outputView.printErrorMessage(error.message);
      }
    }
  }
}

export default LottoGameController;

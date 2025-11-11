import PurchaseAmount from "../domain/PurchaseAmount.js";
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
    this.#purchaseLottos();
  }

  async #purchaseLottos() {
    while (true) {
      try {
        const input = await this.#inputView.inputLottoPurchasePrice();
        const purchaseAmount = PurchaseAmount.getPurchaseAmount();
        break;
      } catch (error) {
        this.#outputView.printErrorMessage(error.message);
      }
    }
  }
}

export default LottoGameController;

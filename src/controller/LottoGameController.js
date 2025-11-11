import LottoMachine from "../domain/LottoMachine.js";
import PurchaseAmount from "../domain/PurchaseAmount.js";
import RandomLottoNumberGenerator from "../domain/RandomLottoNumberGenerator.js";
import WinningNumbers from "../domain/WinningNumbers.js";
import BonusNumber from "../domain/BonusNumber.js";
import { parseWinningNumbers, parseBonusNumber } from "../parser.js";
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
    const purchaseResult = await this.#purchaseLottos();
    const winningNumbers = await this.#generateWinningNumbers();
    const bonusNumber = await this.#generateBonusNumber(winningNumbers);
    const winningStatistic = winningNumbers.getWinningStatistic(
      purchaseResult,
      bonusNumber
    );
    this.#outputView.printWinningStatistic(winningStatistic);
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
        return purchaseResult;
      } catch (error) {
        this.#outputView.printErrorMessage(error.message);
      }
    }
  }

  async #generateWinningNumbers() {
    while (true) {
      try {
        const input = await this.#inputView.inputWinningNumbers();
        const numbers = parseWinningNumbers(input);
        return new WinningNumbers(numbers);
      } catch (error) {
        this.#outputView.printErrorMessage(error.message);
      }
    }
  }

  async #generateBonusNumber(winningNumbers) {
    while (true) {
      try {
        const input = await this.#inputView.inputBonusNumber();
        const bonus = parseBonusNumber(input);
        return new BonusNumber(bonus, winningNumbers);
      } catch (error) {
        this.#outputView.printErrorMessage(error.message);
      }
    }
  }
}

export default LottoGameController;

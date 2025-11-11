import { Console } from "@woowacourse/mission-utils";
import { PROMPT_MESSAGES } from "../constant/promptMessages.js";

class OutputView {
  printPurchasedLottos(purchaseResult) {
    Console.print("");
    const { purchaseCount, lottos } = purchaseResult;

    Console.print(`${purchaseCount}${PROMPT_MESSAGES.PURCHASED_COUNT_PREFIX}`);

    lottos.forEach((lotto) => {
      const numbers = lotto.getNumbers();
      Console.print(`[${numbers.join(", ")}]`);
    });

    Console.print("");
  }

  printErrorMessage(message) {
    Console.print(message);
  }
}

export default OutputView;

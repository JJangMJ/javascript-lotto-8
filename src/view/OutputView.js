import { Console } from "@woowacourse/mission-utils";
import { PROMPT_MESSAGES } from "../constant/promptMessages.js";
import { RANK_ORDER } from "../domain/Rank.js";

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

  printWinningStatistic(winningStatistic) {
    Console.print("");
    Console.print(PROMPT_MESSAGES.WINNING_STATISTICS_HEADER);
    Console.print(PROMPT_MESSAGES.SEPARATOR);

    RANK_ORDER.forEach((rank) => {
      const count = winningStatistic.rankResults[rank.key] ?? 0;
      Console.print(`${rank.description} - ${count}개`);
    });

    Console.print(`총 수익률은 ${winningStatistic.profitRate}%입니다.`);
  }

  printErrorMessage(message) {
    Console.print(message);
  }
}

export default OutputView;

import { Console } from "@woowacourse/mission-utils";
import { PROMPT_MESSAGES } from "../constant/promptMessages.js";

class InputView {
  async inputLottoPurchasePrice() {
    Console.print(PROMPT_MESSAGES.ASK_PURCHASE_AMOUNT);
    return await Console.readLineAsync("");
  }

  async inputWinningNumbers() {
    Console.print(PROMPT_MESSAGES.ASK_WINNING_NUMBERS);
    return await Console.readLineAsync("");
  }

  async inputBonusNumber() {
    Console.print("");
    Console.print(PROMPT_MESSAGES.ASK_BONUS_NUMBER);
    return await Console.readLineAsync("");
  }
}

export default InputView;

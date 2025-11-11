import { Console } from "@woowacourse/mission-utils";
import { PROMPT_MESSAGES } from "../constant/promptMessages.js";

class InputView {
  async inputLottoPurchasePrice() {
    return Console.readLineAsync(PROMPT_MESSAGES.ASK_PURCHASE_AMOUNT);
  }
}

export default InputView;

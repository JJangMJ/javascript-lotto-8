import { Console } from "@woowacourse/mission-utils";
import { PROMPT_MESSAGES } from "../constant/promptMessages.js";

class InputView {
  async inputLottoPurchasePrice() {
    Console.print(PROMPT_MESSAGES.ASK_PURCHASE_AMOUNT);
    return await Console.readLineAsync("");
  }
}

export default InputView;

import {
  validateDuplicateNumber,
  validateNumberCount,
  validateNumbersRange,
} from "../validator/validator.js";
import { LOTTO_CONSTANTS } from "../constant/lottoConstants.js";
import { Rank, calculateRank } from "./Rank.js";
import WinningStatistic from "../dto/WinningStatic.js";

class WinningNumbers {
  #numbers;

  constructor(numbers) {
    validateNumberCount(numbers);
    validateNumbersRange(numbers);
    validateDuplicateNumber(numbers);
    this.#numbers = numbers;
  }

  contains(number) {
    return this.#numbers.includes(number);
  }

  getWinningNumbers() {
    return [...this.#numbers];
  }

  getWinningStatistic(purchaseResult, bonusNumber) {
    const rankResults = {
      [Rank.FIRST.key]: 0,
      [Rank.SECOND.key]: 0,
      [Rank.THIRD.key]: 0,
      [Rank.FOURTH.key]: 0,
      [Rank.FIFTH.key]: 0,
      [Rank.NOTHING.key]: 0,
    };

    let totalPrize = 0;

    purchaseResult.lottos.forEach((lotto) => {
      const matchCount = lotto.countMatches(this.#numbers);
      const hasBonus = lotto.containsBonusNumber(bonusNumber);
      const rank = calculateRank(matchCount, hasBonus);

      rankResults[rank.key] += 1;
      totalPrize += rank.prize;
    });

    const totalPurchase = purchaseResult.purchaseCount * LOTTO_CONSTANTS.PRICE;
    const profitRate =
      totalPurchase === 0 ? 0 : ((totalPrize / totalPurchase) * 100).toFixed(1);

    return new WinningStatistic(rankResults, profitRate);
  }
}

export default WinningNumbers;

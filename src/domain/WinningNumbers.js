class WinningNumbers {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  contains(number) {
    return this.#numbers.includes(number);
  }

  getWinningNumbers() {
    return [...this.#numbers];
  }
}

export default WinningNumbers;

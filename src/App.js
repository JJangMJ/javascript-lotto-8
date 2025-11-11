import LottoGameController from "./controller/LottoGameController.js";

class App {
  async run() {
    const lottoGameController = new LottoGameController();
    await lottoGameController.run();
  }
}

export default App;

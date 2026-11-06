import cross from "./assets/icons/cross.svg";
import zero from "./assets/icons/zero.svg";

export class Logic {
  private playingFieldsElement;
  private gameStartBroButton;
  private textElement;
  private gameStopElement;

  private gameWin = false;
  private listenersAdded = false;

  private movePlayer = 1;
  private matrixPlay = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  constructor() {
    this.playingFieldsElement = document.querySelectorAll<HTMLElement>(".tic");
    this.gameStartBroButton = document.querySelector("#gameStartBro");
    this.textElement = document.querySelector("#text");
    this.gameStopElement =
      document.querySelector<HTMLButtonElement>("#gameStop");

    this.gameStartBroButton?.addEventListener("click", () =>
      this.startGameBro(),
    );

    this.gameStopElement?.addEventListener("click", () => this.clearGame());
  }

  private startGameBro() {
    if (this.gameStopElement === null) return;
    this.gameStopElement.disabled = false;

    if (this.listenersAdded) return;
    this.listenersAdded = true;

    this.playingFieldsElement.forEach((el, index) => {
      el.addEventListener("click", () => {
        if (this.textElement === null) return;
        el.style.pointerEvents = "none";
        el.innerHTML = `
          <img src="${this.movePlayer === 1 ? cross : zero}">
        `;

        this.movePlayer++;
        this.movePlayer = this.movePlayer % 2;

        if (this.movePlayer % 2) {
          this.textElement.innerHTML = `ход: крестика`;
        } else {
          this.textElement.innerHTML = `ход: нолика`;
        }

        if (index < 3) {
          this.matrixPlay[0][index] = this.movePlayer % 2 ? 3 : 4;
        } else if (index < 6) {
          this.matrixPlay[1][index - 3] = this.movePlayer % 2 ? 3 : 4;
        } else {
          this.matrixPlay[2][index - 6] = this.movePlayer % 2 ? 3 : 4;
        }

        console.log(this.matrixPlay);

        this.examination();
      });
    });
  }

  private examination() {
    for (let i = 0; i < this.matrixPlay.length; i++) {
      if (this.textElement === null) return;
      let sumRows = this.matrixPlay[i].reduce((acc, num) => acc + num, 0);

      if (sumRows === 9) {
        this.textElement.innerHTML = `выиграли нолики`;
        this.gameWin = true;
      } else if (sumRows === 12) {
        this.textElement.innerHTML = `выиграли крестики`;
        this.gameWin = true;
      }
    }

    for (let i = 0; i < this.matrixPlay.length; i++) {
      if (this.textElement === null) return;
      let sumColums = this.matrixPlay.reduce((accumulator, currentRow) => {
        return accumulator + currentRow[i];
      }, 0);

      if (sumColums === 9) {
        this.textElement.innerHTML = `выиграли нолики`;
        this.gameWin = true;
      } else if (sumColums === 12) {
        this.textElement.innerHTML = `выиграли крестики`;
        this.gameWin = true;
      }
    }

    for (let i = 0; i < this.matrixPlay.length; i++) {
      if (this.textElement === null) return;
      let sumMainDiogonal = this.matrixPlay.reduce(
        (sum, row, i) => sum + row[i],
        0,
      );
      let sumAccentDiogonal = this.matrixPlay.reduce(
        (sum, row, i) => sum + row[row.length - 1 - i],
        0,
      );

      if (sumMainDiogonal === 9 || sumAccentDiogonal === 9) {
        this.textElement.innerHTML = `выиграли нолики`;
        this.gameWin = true;
      } else if (sumMainDiogonal === 12 || sumAccentDiogonal === 12) {
        this.textElement.innerHTML = `выиграли крестики`;
        this.gameWin = true;
      }
    }

    if (this.gameWin) {
      this.playingFieldsElement.forEach((el) => {
        el.style.pointerEvents = "none";
      });

      setTimeout(() => {
        this.clearGame();
      }, 5000);
    }
  }

  private clearGame() {
    this.playingFieldsElement.forEach((el) => {
      el.style.pointerEvents = "auto";
      el.innerHTML = "";
    });

    this.gameWin = false;

    this.matrixPlay = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    this.movePlayer = 1;
  }
}

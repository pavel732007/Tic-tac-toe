import "./style/main.css";
import {Logic} from './logic.ts';

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <h1>Крестики Нолики</h1>

  <div class="hero">
    <div class="line">
      <div class="tic"></div>
      <div class="tic"></div>
      <div class="tic"></div>
    </div>
    <div class="line">
      <div class="tic"></div>
      <div class="tic"></div>
      <div class="tic"></div>
    </div>
    <div class="line">
      <div class="tic"></div>
      <div class="tic"></div>
      <div class="tic"></div>
    </div>
  </div>

  <div id="btns">
    <button id="gameStartBro">Игра на 2</button>
    <button id="gameStartBot" disabled>Игра с ботом</button>
    <button id="gameStop" disabled>Заново</button>
  </div>

  <p id="text">ход: </p>
`;

new Logic();
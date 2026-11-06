(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`data:image/svg+xml,%3csvg%20width='157'%20height='154'%20viewBox='0%200%20157%20154'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.30329%201.76777L155.21%20151.674'%20stroke-width='5'%20stroke='white'/%3e%3cpath%20d='M151.674%201.76777L1.76777%20151.674'%20stroke-width='5'%20stroke='white'/%3e%3c/svg%3e`,t=`data:image/svg+xml,%3csvg%20width='150'%20height='150'%20viewBox='0%200%20150%20150'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M147.5%2075C147.5%20115.041%20115.041%20147.5%2075%20147.5C34.9594%20147.5%202.5%20115.041%202.5%2075C2.5%2034.9594%2034.9594%202.5%2075%202.5C115.041%202.5%20147.5%2034.9594%20147.5%2075Z'%20stroke-width='5'%20stroke='white'/%3e%3c/svg%3e`,n=class{playingFieldsElement;gameStartBroButton;textElement;gameStopElement;gameWin=!1;listenersAdded=!1;movePlayer=1;matrixPlay=[[0,0,0],[0,0,0],[0,0,0]];constructor(){this.playingFieldsElement=document.querySelectorAll(`.tic`),this.gameStartBroButton=document.querySelector(`#gameStartBro`),this.textElement=document.querySelector(`#text`),this.gameStopElement=document.querySelector(`#gameStop`),this.gameStartBroButton?.addEventListener(`click`,()=>this.startGameBro()),this.gameStopElement?.addEventListener(`click`,()=>this.clearGame())}startGameBro(){this.gameStopElement!==null&&(this.gameStopElement.disabled=!1,this.listenersAdded||(this.listenersAdded=!0,this.playingFieldsElement.forEach((n,r)=>{n.addEventListener(`click`,()=>{this.textElement!==null&&(n.style.pointerEvents=`none`,n.innerHTML=`
          <img src="${this.movePlayer===1?e:t}">
        `,this.movePlayer++,this.movePlayer%=2,this.movePlayer%2?this.textElement.innerHTML=`ход: крестика`:this.textElement.innerHTML=`ход: нолика`,r<3?this.matrixPlay[0][r]=this.movePlayer%2?3:4:r<6?this.matrixPlay[1][r-3]=this.movePlayer%2?3:4:this.matrixPlay[2][r-6]=this.movePlayer%2?3:4,console.log(this.matrixPlay),this.examination())})})))}examination(){for(let e=0;e<this.matrixPlay.length;e++){if(this.textElement===null)return;let t=this.matrixPlay[e].reduce((e,t)=>e+t,0);t===9?(this.textElement.innerHTML=`выиграли нолики`,this.gameWin=!0):t===12&&(this.textElement.innerHTML=`выиграли крестики`,this.gameWin=!0)}for(let e=0;e<this.matrixPlay.length;e++){if(this.textElement===null)return;let t=this.matrixPlay.reduce((t,n)=>t+n[e],0);t===9?(this.textElement.innerHTML=`выиграли нолики`,this.gameWin=!0):t===12&&(this.textElement.innerHTML=`выиграли крестики`,this.gameWin=!0)}for(let e=0;e<this.matrixPlay.length;e++){if(this.textElement===null)return;let e=this.matrixPlay.reduce((e,t,n)=>e+t[n],0),t=this.matrixPlay.reduce((e,t,n)=>e+t[t.length-1-n],0);e===9||t===9?(this.textElement.innerHTML=`выиграли нолики`,this.gameWin=!0):(e===12||t===12)&&(this.textElement.innerHTML=`выиграли крестики`,this.gameWin=!0)}this.gameWin&&(this.playingFieldsElement.forEach(e=>{e.style.pointerEvents=`none`}),setTimeout(()=>{this.clearGame()},5e3))}clearGame(){this.playingFieldsElement.forEach(e=>{e.style.pointerEvents=`auto`,e.innerHTML=``}),this.gameWin=!1,this.matrixPlay=[[0,0,0],[0,0,0],[0,0,0]],this.movePlayer=1}};document.querySelector(`#app`).innerHTML=`
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
`,new n;
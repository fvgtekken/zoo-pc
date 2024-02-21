import { setupForm } from './src/js/setupForm';
import panda from './src/img/panda.png';
import lion from './src/img/lion.png';
import tigger from './src/img/tigger.png';
import cheetah from './src/img/cheetah.png';
import logoMain2 from './src/img/logoMain2.png';
import './src/css/normalize.css';
import './src/css/app.css';
import './src/css/modal.css';

document.querySelector('#app').innerHTML = `
    
   <div class="containerLogo">
         <img src="${logoMain2}" alt="logoInte" />
    <div>
    <h1 >Welcome to Zoo Pc!</h1>
     <div class="container">
      <div class="panel">
        <img src="${panda}" alt="Panda" />
        <div><input name="panda" id="panda" class="speak" type="text" /> <button id="bpanda" name="panda" class="buttonSpeak">Speak!</button></div>
      </div>
     <div class="panel">
        <img src="${tigger}" alt="Tigger" />
        <div><input name="tigger" id="tigger" class="speak" type="text" /> <button id="btigger"  name="tigger" class="buttonSpeak">Speak!</button></div>
      </div>
       <div class="panel">
        <img src="${cheetah}" alt="cheetah" />
        <div><input name="cheetah" id="cheetah" class="speak" type="text" /> <button id="bcheetah" name="cheetah" class="buttonSpeak">Speak!</button></div>
      </div>
      <div class="panel">
        <img src="${lion}" alt="Lion" />
        <div><input name="lion" id="lion" class="speak" type="text" /> <button id="blion"  name="lion"  class="buttonSpeak">Speak!</button></div>
      </div>
    </div>
    <div id="myModal" class="modal">

    <!-- Modal content -->
    <div class="modal-content">
      <span class="close">&times;</span>
      <div id="textModal" class="containerModal" ></div>
    </div>
`;

const animals = ['panda', 'tigger', 'cheetah', 'lion'];

animals.forEach((animal) => {
  setupForm(document.querySelector(`#${animal}`), document.querySelector(`#b${animal}`));
});

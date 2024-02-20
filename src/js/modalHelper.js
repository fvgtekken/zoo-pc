import panda from '../img/panda2.jpg';
import tigger from '../img/tigger2.jpg';
import cheetah from '../img/cheetah2.jpg';
import lion from '../img/lion2.jpg';

const typeImage = {
  panda,
  tigger,
  cheetah,
  lion,
};

export class ModalHelper {
  initModal(animalWords, animal) {
    const modal = document.getElementById('myModal');
    modal.style.display = 'block';

    const span = document.getElementsByClassName('close')[0];
    span.onclick = function () {
      modal.style.display = 'none';
    };

    let parrafo = document.getElementById('textModal');
    parrafo.innerHTML = ` <img src="${typeImage[animal]}" alt="Panda" />
                          <p class="textP"><strong>${animalWords}</strong></p>
                          `;
  }
}

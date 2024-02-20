import { ModalHelper } from './modalHelper';

//  Example with Inheritance
/******************************************************/

class Animal {
  constructor(sound) {
    this.sound = sound;
  }

  speak(words, aninal) {
    const animalWords = words.replace(/ /g, ` ${this.sound} `) + ` ${this.sound}`;
    modal.initModal(animalWords, aninal);
    //alert(t);
  }
}

class Lion extends Animal {
  constructor() {
    super('roar');
  }
}

class Tiger extends Animal {
  constructor() {
    super('grrr');
  }
}

class Cheetah extends Animal {
  constructor() {
    super('uuaaau');
  }
}

class Panda extends Animal {
  constructor() {
    super('ouo');
  }
}

const tiger = new Tiger();
const panda = new Panda();
const cheetah = new Cheetah();
const lion = new Lion();
const modal = new ModalHelper();

export const animalsV1 = {
  panda: (words = 'Pandas are cute if you are not close to them') => {
    //Pandas are cute if you are not close to them'
    panda.speak(words, 'panda');
  },
  tigger: (words = 'Lions suck') => {
    tiger.speak(words, 'tigger');
  },
  cheetah: (words = "I'm the fastest") => {
    cheetah.speak(words, 'cheetah');
  },
  lion: (words = "I'm a lion") => {
    lion.speak(words, 'lion');
  },
};

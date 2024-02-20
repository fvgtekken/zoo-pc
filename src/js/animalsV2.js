import { ModalHelper } from './modalHelper';

//  Example with Composition
/******************************************************/
class Animal {
  constructor(sound) {
    this.sound = sound;
  }

  typeSpeak(words) {
    return words.replace(/ /g, ` ${this.sound} `) + ` ${this.sound}`;
  }
}

class AnimalZoo {
  constructor(animal) {
    this.zooAnimal = animal;
  }

  speak(words, animal) {
    const animalWords = this.zooAnimal.animal.typeSpeak(words);
    modal.initModal(animalWords, animal);
  }
}

/******************************************************/
// Our Animals
class Panda {
  constructor() {
    this.animal = new Animal('ouo');
  }
}

class Tigger {
  constructor() {
    this.animal = new Animal('grrr');
  }
}

class Cheetah {
  constructor() {
    this.animal = new Animal('uuaaau');
  }
}

class Lion {
  constructor() {
    this.animal = new Animal('roar');
  }
}
const panda = new AnimalZoo(new Panda());
const tigger = new AnimalZoo(new Tigger());
const cheetah = new AnimalZoo(new Cheetah());
const lion = new AnimalZoo(new Lion());
const modal = new ModalHelper();

export const animalsV2 = {
  panda: (words = "I'm a big super Panda") => {
    panda.speak(words, 'panda');
  },
  tigger: (words = "I'm a big tigger love Lions") => {
    tigger.speak(words, 'tigger');
  },
  cheetah: (words = "I'm a super fast Cheetah") => {
    cheetah.speak(words, 'cheetah');
  },
  lion: (words = "I'm a friendly Lion") => {
    lion.speak(words, 'lion');
  },
};

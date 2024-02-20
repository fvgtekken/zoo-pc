import { animalsV1 } from './animalsV1';
import { animalsV2 } from './animalsV2';

const wordsAnimals = {
  panda: '',
  tigger: '',
  cheetah: '',
  lion: '',
};

export const validateInput = (e) => {
  const valueInput = e.target.value;

  if (e.inputType === 'deleteContentBackward') {
    console.log('Persiste backspace');
    return true;
  }

  e.target.value = valueInput.replace(/[^a-zA-Z ]/g, '');
};

export const addText = (e, animal) => {
  let textValue = e.target.value;
  wordsAnimals[animal] = textValue;
  //console.log('obj animal', wordsAnimals[animal]);
};

export const callMe = (animal) => {
  const words = wordsAnimals[animal] !== '' ? wordsAnimals[animal] : undefined;
  animalsV1[animal](words);
};

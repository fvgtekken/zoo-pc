import { validateInput, addText, callMe } from './formValidations';

export function setupForm(element, eleButton) {
  //console.log('Heloo', eleButton);

  element.addEventListener('input', (e) => {
    const animal = e.target.name;
    validateInput(e);
    addText(e, animal);
  });

  eleButton.addEventListener('click', (e) => {
    const animal = e.target.name;
    callMe(animal);
  });
}

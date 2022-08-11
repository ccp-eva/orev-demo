import './css/landingpages.css';
mdc.ripple.MDCRipple.attachTo(document.getElementById('button-center-item'));
const button = document.getElementById('button-center-item');
let continueIDOK = false;
let continueWOK = false;

// FOR INPUT FORM
const textField = document.querySelector('.mdc-text-field__input');

// define what happens on input
const handleInput = (event) => {
  event.preventDefault();
  // to get most recent value, get element fresh
  // count number of characters and display the count
  document.querySelector('.mdc-text-field-character-counter').innerHTML = `${
    document.querySelector('.mdc-text-field__input').value.length
  } / 10`;

  // FOR DEMO, ALLOW ANY LENGTH OF ID
  continueIDOK =
    document.querySelector('.mdc-text-field__input').value.length > 0;

  // enable button when at least one character is entered
  button.disabled = !(continueIDOK && continueWOK);
};

textField.addEventListener('keyup', handleInput, { capture: false });

// FOR WEBCAM RECORIDING
// get both radio buttons
const radiosWebcam = Array.from(document.getElementsByName('radios-webcam'));
let webcam = false;

// when users click on a button...
radiosWebcam.forEach((radio) => {
  radio.onclick = function () {
    // if first 'yes' button is selected, save consent as true
    if (this.getAttribute('id') === 'radio-webcam-yes') {
      webcam = true;
    }

    if (this.getAttribute('id') === 'radio-webcam-no') {
      webcam = false;
    }

    continueWOK = true;

    // enable submit button
    button.disabled = !(continueIDOK && continueWOK);
  };
});

// FOR CONTINUE BUTTON
// define what happens on button click
const handleContinueClick = (event) => {
  event.preventDefault();
  const subjID = document.querySelector('.mdc-text-field__input').value;

  // inhouse variable hardcoded to true for kiga version
  window.location.href = `./instructions.html?ID=${subjID}&webcam=${webcam}`;
};

button.addEventListener('click', handleContinueClick);

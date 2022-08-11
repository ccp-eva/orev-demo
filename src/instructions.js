import './css/landingpages.css';
// import { hideURLparams } from './js/hideURLparams.js';

mdc.ripple.MDCRipple.attachTo(document.getElementById('button-center-item'));
const button = document.getElementById('button-center-item');

// get and store id
const subjID =
  new URL(document.location.href).searchParams.get('ID') || 'testID';

const webcam =
  new URL(document.location.href).searchParams.get('webcam') || false;

// hide url parameters
// hideURLparams();

// define what happens on button click
const handleContinueClick = (event) => {
  event.preventDefault();
  window.location.href = `./orderShort.html?ID=${subjID}&webcam=${webcam}`;
};

const handleWebcamClick = (event) => {
  event.preventDefault();
};

button.addEventListener('click', handleContinueClick, {
  capture: false,
});

button.addEventListener('click', handleWebcamClick, {
  capture: false,
});

import './css/landingpages.css';
const button = document.getElementById('start-button');
let continueIDOK = false;

// FOR NEW VERSIONS: notify users
// Check if the user has already seen the notification
const currentVersion = '1.0.2';

if (localStorage.getItem('website-version') !== currentVersion) {
  // Show the pop-up and update the version in localStorage
  const popup = document.getElementById('version-popup');
  const closeButton = document.getElementById('close-popup');

  popup.style.display = 'flex';

  closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
    localStorage.setItem('website-version', currentVersion);
  });
}

// FOR INPUT FORM
const textField = document.getElementById('participant-id');

// define what happens on input
const handleInput = (event) => {
  event.preventDefault();
  // to get most recent value, get element fresh
  // count number of characters and display the count
  document.getElementById('id-counter').innerHTML = `${
    document.getElementById('participant-id').value.length
  } / 8`;

  continueIDOK = document.getElementById('participant-id').value.length > 0;
  // enable button when eight characters are entered
  button.disabled = !continueIDOK;
};

textField.addEventListener('keyup', handleInput, { capture: false });

// FOR WEBCAM RECORIDING
// get both radio buttons
const webcamOptions = document.getElementsByName('webcam-options');
let webcam = 'false'; // no as default

for (const option of webcamOptions) {
  option.onclick = () => {
    if (option.checked) {
      webcam = option.value;
    }
  };
}

// FOR CONTINUE BUTTON
// define what happens on button click
const handleContinueClick = (event) => {
  event.preventDefault();
  const subjID = document.getElementById('participant-id').value;
  window.location.href = `./instructions.html?ID=${subjID}&webcam=${webcam}`;
};

button.addEventListener('click', handleContinueClick);

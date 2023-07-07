import './css/landingpages.css';

const button = document.getElementById('confirm-btn');
const checkbox = document.getElementById('confirm-checkbox');
const pDelete = document.getElementById('p-delete');
const aDownload = document.getElementById('a-download');
const subjID = new URL(document.location.href).searchParams.get('ID');

const handleChecked = () => {
  button.disabled = !checkbox.checked;
};

document
  .querySelector('.mdc-checkbox')
  .addEventListener('click', handleChecked);

// function for response logging, creating json file on server
function downloadData(safe, ID) {
  fetch('data/data.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data: JSON.stringify(safe), fname: ID }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

const handleConfirmClick = (event) => {
  event.preventDefault();

  pDelete.innerHTML = '<strong>Wir werden Ihre Daten löschen. Danke!</strong>';

  const date = new Date();

  const toSave = {
    // get ID out of URL parameter
    subjID: new URL(document.location.href).searchParams.get('ID'),
    deleteData: true,
    timestamp: date.toISOString(),
    epoch: date.getTime(),
  };
  const toSaveID = `DELETE${subjID}`;
  downloadData(toSave, toSaveID);
};

button.addEventListener('click', handleConfirmClick, {
  capture: false,
  once: true,
});

// define what happens on button click
const handleDownloadClick = () => {
  window.open('images/thanks.pdf');
};

aDownload.addEventListener('click', handleDownloadClick, { capture: false });

// ---------------------------------------------------------------------------------------------------------------------
// FUNCTION FOR DOWNLOADING DATA LOCALLY; WITH BLOB
// ---------------------------------------------------------------------------------------------------------------------
export const downloadData = (safe, ID) => {
  const toSave = new Blob([JSON.stringify(safe, null, 1)]);
  const day = new Date().toISOString().substr(0, 10);
  // note: it's UTC time (so for germany add +1)
  const time = new Date().toISOString().substr(11, 8);

  const hiddenElement = document.createElement('a');
  hiddenElement.href = window.URL.createObjectURL(toSave);
  hiddenElement.download = `orev-demo-${ID}-${day}-${time}.json`;
  hiddenElement.click();
};

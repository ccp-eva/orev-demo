// ---------------------------------------------------------------------------------------------------------------------
// FUNCTION FOR HIDING URL PARAMETERS
// ---------------------------------------------------------------------------------------------------------------------
export const hideURLparams = () => {
  window.history.replaceState(null, document.title, window.location.pathname);
};

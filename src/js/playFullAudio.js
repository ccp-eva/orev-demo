// ---------------------------------------------------------------------------------------------------------------------
// PLAYS AUDIO AND RETURNS PROMISE (so that we can await end of audio)
// ---------------------------------------------------------------------------------------------------------------------
export const playFullAudio = (audio) =>
  new Promise((resolve) => {
    audio.play();
    audio.onended = resolve;
    // WHEN ACTIVE: GETS THROWN; THEN OBVIOUSLY PROMISE "OVER"; AWAIT DONE...
    // audio.onerror = reject(new Error(`Error in playing audio ${audio.src}`));
  }).catch((error) => console.log(error));

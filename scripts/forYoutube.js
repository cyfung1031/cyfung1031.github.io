'use strict';
window['ndsbagbckgkp'] = (() => {
  let _status = 0;
  let _callback = null;
  const ready = () => {
    if (_status === (0x20 | 0x40 | 0x80)) {
      let callback = _callback;
      _callback = null;
      _status = 0;
      callback();
    }
  }
  const apiReady = () => {
    _status |= 0x20;
    ready();
  }
  const domReady = () => {
    _status |= 0x40;
    ready();
  }
  const callbackReady = (callback) => {
    _callback = callback;
    _status |= 0x80;
    ready();
  }
  return {
    uid: 'ytp-ndsbagbckgkp',
    apiReady,
    domReady,
    callbackReady
  }
})();

function onYouTubeIframeAPIReady() {

  window['ndsbagbckgkp'].apiReady();

  window.onYouTubeIframeAPIReady = null;
}
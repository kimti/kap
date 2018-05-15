'use strict';
const {homedir} = require('os');
const Store = require('electron-store');

const store = new Store({
  defaults: {
    kapturesDir: `${homedir()}/Movies/Kaptures`,
    allowAnalytics: true,
    showCursor: true,
    highlightClicks: false,
    hideDesktopIcons: false,
    record60fps: false,
    recordKeyboardShortcut: true,
    doNotDisturb: false,
    recordAudio: false,
    audioInputDeviceId: null
  }
});

store.set('cropper', {});
store.set('actionbar', {});

module.exports = store;

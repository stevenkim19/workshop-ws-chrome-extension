chrome.browserAction.setBadgeText({ text: 'OFF' });
let enable = false;
chrome.storage.sync.set({ enable });
chrome.browserAction.onClicked.addListener((tab) => {
  enable = !enable;

  if (enable) {
    chrome.browserAction.setBadgeText({ text: 'ON' });
    chrome.tabs.executeScript(null, { file: 'tim.js' });
  } else {
    chrome.browserAction.setBadgeText({ text: 'OFF' });
    chrome.tabs.executeScript(tab.id, { code: 'window.location.reload();' });
  }

  chrome.storage.sync.set({ enable }, () => {
    console.log(`Value is set to ${enable}`);
  });
});

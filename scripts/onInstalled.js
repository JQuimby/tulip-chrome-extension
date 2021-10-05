/**
 * Returns if an object is empy or not.
 * @param {Object} obj Object
 */
function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
}

/**
 * Sets default preferences.
 */
function setDefaultPreferences() {
  chrome.storage.sync.set({
    fromTextArray: ["NFT","Non-fungible","Token","non-fungible","token"],
    toTextArray: ["Tulip Bulb","Tulip","Bulb","tulip","bulb"],
    hideBadge: false
  });
}

chrome.runtime.onInstalled.addListener(function(reason, previousVersion, id) {
    chrome.storage.sync.get(function(items) {
        if (isObjectEmpty(items)) {
            setDefaultPreferences();
        }
    });
});

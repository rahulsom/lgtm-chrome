'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
    console.log('previousVersion', details.previousVersion);
});

chrome.browserAction.onClicked.addListener(function(tab){
  console.log ("Starting Browser Action!");
  $.getJSON("http://www.lgtm.in/g", function (data) {
    var msg = data.markdown;
    console.log ("Sending request...");
    chrome.tabs.sendRequest(tab.id, msg);
  });
  console.log ("Triggered Browser Action!");

});

console.log('\'Allo \'Allo! Event Page for Browser Action');

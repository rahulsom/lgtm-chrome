/*global $:false */
'use strict';

console.log('LGTM Registering listener in contentscript...');

chrome.extension.onRequest.addListener(function(request) {
    console.log('LGTM Listener invoked...');
    $('textarea[name="comment[body]"]').append('\n\n' + request);
    console.log('... LGTM Applied to github');
});

console.log('... Done registering contentscript.');

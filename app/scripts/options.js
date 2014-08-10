'use strict';

function saveOptions() {
    var username = $('#username').val();
    var settings = {
        username: username
    };
    chrome.storage.sync.set(settings, function() {
        var status = document.getElementById('status');
        $('#status').html('Options saved.');
        setTimeout(function() {
            $('#status').html('');
        }, 750);
    });
}

function loadOptions() {
    var defaults = {
        username: ''
    };
    chrome.storage.sync.get(defaults, function(items) {
        $('#username').val(items.username);
    });
};

$('#save').click(saveOptions);
document.addEventListener('DOMContentLoaded', loadOptions);

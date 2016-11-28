'use strict';
exports.handleIDConflict = function (data) {
    for (var item of data) {
        item['topic_id'] = item['id'];
    }
}

exports.isPage = function (bundleUrl) {
    var isPage = bundleUrl.includes('http');

    if (isPage) {
        return 88;
    }
}

exports.timeReform = function (timeStr) {
    var timeResult = '';

    var timeArr = timeStr.split('T');
    var timeHMS = timeArr[1].split('.');
    timeResult = timeArr[0] + ' ' + timeHMS[0];

    return timeResult;
}

exports.accesstoken = 'ccbc466f-dd0a-4dd3-bcfe-55ee53e29976';

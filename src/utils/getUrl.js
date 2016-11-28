'use strict';
var stream;
__weex_define__('@weex-temp/getUrl', function (__weex_require__) {
    stream = __weex_require__('@weex-module/stream');
});

module.exports = function (bundleUrl) {
    var nativeBase;
    var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;
    var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;

    if (isAndroidAssets) {
        nativeBase = 'file://assets/dist/';
    } else if (isiOSAssets) {
        nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
    } else {
        var host = 'localhost:12580';
        var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
        if (matches && matches.length >= 2) {
            host = matches[1];
        }

        nativeBase = 'http://' + host + '/web/?page=../dist/';
    }

    return nativeBase;
}

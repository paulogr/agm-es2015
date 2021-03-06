"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var WindowRef = function () {
    function WindowRef() {}
    WindowRef.prototype.getNativeWindow = function () {
        return window;
    };
    return WindowRef;
}();
exports.WindowRef = WindowRef;

var DocumentRef = function () {
    function DocumentRef() {}
    DocumentRef.prototype.getNativeDocument = function () {
        return document;
    };
    return DocumentRef;
}();
exports.DocumentRef = DocumentRef;
var BROWSER_GLOBALS_PROVIDERS = exports.BROWSER_GLOBALS_PROVIDERS = [WindowRef, DocumentRef];
//# sourceMappingURL=browser-globals.js.map
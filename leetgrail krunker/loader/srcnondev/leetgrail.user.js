// ==UserScript==
// @name         leetgrail
// @namespace    https://greasyfork.org/en/users/391960
// @version      1.0
// @description  Third Person View for Krunker.io
// @author       Ampuja Kid
// @match        *://krunker.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    Object.defineProperty(
    Object.prototype,
    "thirdPerson",
    { enumerable: false,
     get() {
         return true
     },
});
})();

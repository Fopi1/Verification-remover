// ==UserScript==
// @name         Remove Age Verification Divs
// @namespace    http://tampermonkey.net/
// @version      2024-09-24
// @description  Remove age verification divs on Pornhub
// @author       Fopi1
// @match        https://*.pornhub.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=pornhub.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const ageVerificationContainer = document.getElementById('age-verification-container');
    if (ageVerificationContainer) {
        ageVerificationContainer.remove();
    }

    const ageVerificationWrapper = document.getElementById('age-verification-wrapper');
    if (ageVerificationWrapper) {
        ageVerificationWrapper.remove();
    }

})();
// ==UserScript==
// @name         Block Downloads
// @namespace    Pls credit Eploit
// @version      full
// @description  Block downloads from a specific link
// @author       Eploit
// @match        *://*.*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('click', function(event) {
        const link = event.target.closest('a');

        if (link && link.href && typeof link.href === 'string' && link.href.endsWith('.exe')) {
            event.preventDefault();
            event.stopPropagation();
            alert('Download of this .exe was blocked.');
        }
    });
})();

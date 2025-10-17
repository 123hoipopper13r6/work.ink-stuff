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

    // Example: Block all links that point to a PDF file
    function blockdownload() {
          document.addEventListener('click', function(event) {
          const target = event.target;

          if (target.href.endsWith('.exe')) {
              event.preventDefault();
              alert('Download of this PDF was blocked.');
          }
      });
    }
    setInterval(blockdownload,100)
})();

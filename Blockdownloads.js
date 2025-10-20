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

    // Example: Block all links that point to a .EXE file
    function blockdownload() {
          document.addEventListener('click', function(event) {
          const target = event.target;

          if (target.href.endsWith('.exe')) {
              event.preventDefault();
              alert('Download of this .EXE was blocked.');
          }
      });
    }
    setInterval(blockdownload,100)
})();

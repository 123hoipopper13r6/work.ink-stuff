// ==UserScript==
// @name         work.ink Opera GX Spoof
// @namespace    http://tampermonkey.net/
// @version      beta
// @author       Eploit
// @match        https://*.work.ink/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Wait for page to load
    setTimeout(() => {
        simulateOperaGXEvents();
    }, 1000);

    function simulateOperaGXEvents() {
        const plausible = window.plausible;

        if (typeof plausible === 'function') {
            console.log('[OperaGX] Plausible detected, sending events...');

            plausible('operaGX-install', {
                props: {
                    type: 'operaGX',
                    event: 'installClicked',
                    browser: 'operaGX',
                    version: '1.0'
                }
            });

            plausible('operaGX-start', {
                props: {
                    type: 'operaGX',
                    event: 'start',
                    status: 'active'
                }
            });

            console.log('[OperaGX] Events sent successfully');

            fetch('https://work.ink/_api/v2/callback/operaGX', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    installed: true,
                    noteligible: false,
                    browser: 'operaGX'
                })
            }).then(() => {
                console.log('[OperaGX] Callback sent');
            }).catch(err => {
                console.log('[OperaGX] Callback failed');
            });

        } else {
            console.log('[OperaGX] Plausible not found.');

            const eventData = {
                n: 'operaGX-install',
                u: window.location.href,
                d: 'work.ink',
                p: {
                    type: 'operaGX',
                    event: 'installClicked',
                    browser: 'operaGX'
                },
                v: 3
            };

            fetch('https://work.ink/api/event', {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain'
                },
                body: JSON.stringify(eventData)
            }).then(() => {
                console.log('[OperaGX] Direct event sent');
            });
        }
    }

    function interceptMonetizationSystem() {
        const originalSendMessage = window._sendMessage;

        if (originalSendMessage) {
            window._sendMessage = function(...args) {
                const [packetType, data] = args;

                if (packetType === 'c_monetization' && data.type !== 'operaGX') {
                    console.log('[OperaGX] Intercepted monetization request');

                    originalSendMessage.call(this, 'c_monetization', {
                        type: "operaGX",
                        payload: { event: "start" }
                    });

                    originalSendMessage.call(this, 'c_monetization', {
                        type: "operaGX",
                        payload: { event: "installClicked" }
                    });
                }

                return originalSendMessage.apply(this, args);
            };
            console.log('[OperaGX] Monetization system intercepted');
        }
    }

    setTimeout(interceptMonetizationSystem, 3000);

    // retrying...
    setInterval(simulateOperaGXEvents, 500);
})();

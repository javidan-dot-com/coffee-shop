import Menu from './Menu.js';
import Order from './Order.js';
import Router from './Router.js';

// Request persistent storage access

(async function() {
if (navigator.storage && navigator.storage.persist) {
    if (!await navigator.storage.persisted()) {
        const result = await navigator.storage.persist();
        
        if (!result) {
            console.log("Storage will not be cleared except by explicit user action");
        } else {
            console.log("Storage may be cleared by the UA under storage pressure.");
        }
        };
    }
})();

// Request persistent storage estimation

(async function () {
    if (navigator.storage && navigator.storage.estimate) {
        const estimate = await navigator.storage.estimate();
        const usageInMB = Math.round(estimate.usage / 1024 / 1024);
        const quotaInMB = Math.round(estimate.quota / 1024 / 1024);
        console.log(`Using ${usageInMB}MB out of ${quotaInMB}MB`);
    }
})();


window.addEventListener("DOMContentLoaded", () => {
    Router.init();
    Menu.load();
    Order.render();
 } );

// Mock only, not part of the Webflow port: stops the copied form from posting to the live Webflow form API.
document.addEventListener("submit", function (event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}, true);

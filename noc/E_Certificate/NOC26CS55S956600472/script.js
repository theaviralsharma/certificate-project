const pdfURL = "NOC26CS55S956600472.pdf";

function openPDF() {
  window.location.href = pdfURL;
}

const ua = navigator.userAgent;

const isAndroid = /Android/i.test(ua);
const isIphone = /iPhone/i.test(ua);
const isIpad =
  /iPad/i.test(ua) ||
  (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

const isMac = /Macintosh|Mac OS X/i.test(ua);
const isWindows = /Windows/i.test(ua);

const androidView = document.getElementById("androidView");
const iphoneView = document.getElementById("iphoneView");
const desktopView = document.getElementById("desktopView");

if (isAndroid) {
  androidView.style.display = "flex";
} else if (isIphone || isIpad) {
  iphoneView.style.display = "flex";
} else if (isMac || isWindows) {
  desktopView.style.display = "flex";
  window.location.href = pdfURL;
} else {
  desktopView.style.display = "flex";
  window.location.href = pdfURL;
}

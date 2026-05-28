// ==========================================
// PDF OPEN
// ==========================================

const pdfURL =
  "NOC26MG61S65660429105018576.pdf";



function openPDF(){

    window.location.href = pdfURL;
}



// ==========================================
// DEVICE DETECTION
// ==========================================

const ua = navigator.userAgent;


const isAndroid =
    /Android/i.test(ua);


const isIphone =
    /iPhone/i.test(ua);


const isIpad =
    /iPad/i.test(ua);


const isMac =
    /Macintosh|Mac OS X/i.test(ua);


const isWindows =
    /Windows/i.test(ua);



// ==========================================
// ELEMENTS
// ==========================================

const androidView =
    document.getElementById("androidView");


const iphoneView =
    document.getElementById("iphoneView");


const desktopView =
    document.getElementById("desktopView");



// ==========================================
// ANDROID
// ==========================================

if(isAndroid){

    androidView.style.display = "block";
}



// ==========================================
// IPHONE / IPAD
// ==========================================

else if(isIphone || isIpad){

    iphoneView.style.display = "block";
}



// ==========================================
// MAC / WINDOWS
// DIRECTLY OPEN PDF
// ==========================================

else if(isMac || isWindows){

    desktopView.style.display = "flex";

    window.location.href = pdfURL;
}



// ==========================================
// OTHER DEVICES
// ==========================================

else{

    desktopView.style.display = "flex";

    window.location.href = pdfURL;
}
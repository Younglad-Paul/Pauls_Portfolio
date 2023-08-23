function DownloadCV() {
    // document.location = "img/BORISADE DAYO PAUL CV 1 (1).pdf";
    var cv = document.createElement('a');
    cv.href = "images/BORISADE+DAYO+PAUL+CV+1+(1).pdf";
    cv.download = "img/BORISADE+DAYO+PAUL+CV+1+(1).pdf";
    cv.dispatchEvent( new MouseEvent('click'))
}
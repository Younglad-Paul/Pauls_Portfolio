function DownloadCV() {
    const cvLink = document.createElement('a');
    cvLink.href = "images/BORISADE+DAYO+PAUL+CV+1+(1).pdf";
    cvLink.download = "BORISADE_DAYO_PAUL_CV.pdf";
    cvLink.click();
}

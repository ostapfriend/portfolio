function downloadCV() {
  const url = "/data/CV_Ostap_Salo.pdf";
  const a = document.createElement("a");
  a.href = url;
  a.download = url.split("/").pop();
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export { downloadCV };

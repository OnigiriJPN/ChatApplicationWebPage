// Index.js 2026/04/03記入
const IsOnline = Navigator.onLine;
const Dld = document.getElementById("Dld-Spin");
const downloadBtn = document.getElementById("downloadBtn");
// もしインターネットがオフラインだった時
if(IsOnline === false){
  Dld.style.display = "block";
  downloadBtn.disabled = true;
}
else{
  Dld.style.display = "none";
  downloadBtn.disabled = false;
}


// Index.js 2026/04/03記入
const IsOnline = Navigator.onLine;
const Dld = document.getElementById("Dld-Spin");
// もしインターネットがオフラインだった時
if(IsOnline === false){
  Dld.style.display = "block";
  
}

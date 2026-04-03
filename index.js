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
window.onerror = (Message, Source, Lineno, Colno, Error) => {
  alert(`エラーが発生しました。
  理由: {Message}
  エラー: {Error}`);

  return true;
};

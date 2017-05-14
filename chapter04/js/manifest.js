function changePng() {
  
  // var i=Math.ceil(Math.random()*3);
  // document.getElementById("id-png").src="./image/img_"+i.toString()+".png";

  if (localStorage.imgIndex && localStorage.imgIndex!=7) {
    localStorage.imgIndex = Number(localStorage.imgIndex) + 1;
  } else {
    localStorage.imgIndex = 0;
  }
  document.getElementById("id-png").src="./image/img_"+localStorage.imgIndex.toString()+".png";
}

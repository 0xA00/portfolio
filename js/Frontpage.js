var i =0;
function alternate(){
  var doc = document.getElementById("whitespace1");
  var color = ["#300a24","white"];
  doc.style.backgroundColor = color[i];
  doc.style.color=color[i];
  i = (i+1)%color.length;
}
setInterval(alternate,1000);


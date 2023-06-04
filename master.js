// var c = document.getElementById("cursor");
// var element = document.getElementById('body');

// element.addEventListener('mousemove', handleMouseMove);

// function handleMouseMove(event) {
//   var mouseX = event.clientX;
//   var mouseY = event.clientY;
//   mouseY += window.pageYOffset;
//   c.style.left = mouseX + "px";
//   c.style.top = mouseY + "px";
// }


// var myDiv = document.getElementById('cursor-focus');
// myDiv.addEventListener('mouseenter', function () {
//   document.getElementById("cursor").style.height = "5rem";
//   document.getElementById("cursor").style.width = "5rem";
// });

// myDiv.addEventListener('mouseleave', function () {
//   document.getElementById("cursor").style.height = "3rem";
//   document.getElementById("cursor").style.width = "3rem";
// });
var f = 0;
function menus(){
  var m1 = document.getElementById("menuname1");
  var m2 = document.getElementById("menuname2");
  var b = document.getElementById("gridb");
  if (f==0) {
    b.style.zIndex = "5";
    m1.innerHTML = "BACK";
    m2.innerHTML = "BACK";
    document.body.style.overflowY = "hidden";
    b.style.top = "0%";
    // console.log(f);
    f=1;
  }
  else {
    // b.style.transitionDuration = ".5s";
    // b.style.transitionTimingFunction = "cubic-bezier(0,.8,.13,1.01)";
    b.style.zIndex = "-5";
    b.style.top = "100%";
    m1.innerHTML = "MENU";
    m2.innerHTML = "MENU";
    document.body.style.overflowY = "visible";
    // console.log(f);
    f=0;
  }
}








// function scattertext(){
//   var ele =document.getElementById("kawaii");
//   var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
//   var text = ele.innerHTML;
//   var textSize = text.trim().length;
//   // ele.innerHTML = textSize;
// }



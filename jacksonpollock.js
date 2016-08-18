
var painting = false;

var bodyEl = document.getElementsByTagName('body')[0];
var onMouseMove = function(event) {
    if ((event.clientY < 135) && (event.clientX < 110)) { 
        return;
    } else if (painting) {
        var dot = document.createElement("div");
        dot.className = "dot";
        document.body.appendChild(dot);
        dot.style.top = event.clientY + "px";
        dot.style.left = event.clientX + "px";
        var r = event.clientX % 255;
        var g = event.clientY % 255;
        var b = parseInt(Math.random() * 255);
        // console.log("r:" + r + " g:" + g + " b:" + b);
        dot.style.background = "rgb(" + r + "," + g+ "," + b + ")"; 
        var radius = parseInt(Math.random()*20 + 20) + "px";
        dot.style.width = radius;
     	dot.style.height = radius; 
     	dot.style.borderRadius =  "50%";
     }
}; 
bodyEl.addEventListener("mousemove", onMouseMove);

/*clear button*/
var clearButton = document.getElementById("clear_div");
var clearPaint = function (event) {
    console.log("clearing paint");
    var dots = document.getElementsByClassName("dot");
    while(dots[0]) {
        dots[0].parentNode.removeChild(dots[0]);
    }
};
clearButton.addEventListener("click", clearPaint);

/*toggle paint button*/
var toggleButton = document.getElementById("paint_div");
var togglePaint = function (event) {
    console.log("toggle paint");
    var toggleEl = document.getElementById("paint_div");
    if (painting) {
        painting = false;
        toggleEl.innerHTML = "<span id='paint_icon' class='fa fa-paint-brush' aria-hidden='true'></span>"
        // toggleEl.innerHTML = "<p>PAINT ON</p>";
    } else {
        painting = true;
        toggleEl.innerHTML = "<span id='paint_icon' class='fa fa-ban' aria-hidden='true'></span>"
        //toggleEl.innerHTML = "<p>PAINT OFF</p>";
    }
};
toggleButton.addEventListener("click", togglePaint);






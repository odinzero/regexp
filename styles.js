var st = document.getElementsByTagName("BODY")[0];
st.style.overflowX = "hidden";

var arrLeft = document.getElementById("arrowLeft");
arrLeft.style.position = "fixed";
arrLeft.style.top = "35px";
arrLeft.style.right = "805px";
arrLeft.style.zoom = "20.0%";
arrLeft.style.display = "none";

var arrRight = document.getElementById("arrowRight");
arrRight.style.position = "fixed";
arrRight.style.top = "35px";
arrRight.style.right = "2005px";
arrRight.style.zoom = "8.2%";
arrRight.style.display = "none";

var arrDown = document.getElementById("arrowDown");
arrDown.style.position = "fixed";
arrDown.style.top = "35px";
arrDown.style.right = "2005px";
arrDown.style.display = "none";
arrDown.style.zoom = "8.2%";

var arrUp = document.getElementById("arrowUp");
arrUp.style.position = "fixed";
arrUp.style.top = "35px";
arrUp.style.right = "2005px";
arrUp.style.display = "none";
arrUp.style.zoom = "8.2%";

var st = document.getElementById("h3");
st.style.position = "fixed";
st.style.top = "-10px";
st.style.marginLeft = "200px";

var st = document.getElementById("syntax");
st.style.position = "fixed";
st.style.top = "25px";
st.style.width = "400px";
st.style.height = "80px";
st.style.background = "#ffccff";
st.style.padding = "20px 20px";
st.style.margin = "10px"; // -  -  -  left
st.style.border = "1px #ccccff outset";

var st = document.getElementById("select_mod");
st.style.background = "#ffccff";

var st = document.getElementById("search"); // div
st.style.width = "360px";
st.style.height = "100px";
st.style.background = "#ffffcc";
st.style.padding = "20px";
st.style.marginTop = "20px";
st.style.marginLeft = "-20px";
st.style.fontSize = "18px";
st.style.border = "1px #ccccff outset";
st.style.fontFamily = "Arial";

var st = document.getElementById("otherExamples");
st.style.width = "420px";
st.style.height = "25px";
st.style.margin = "5px";
st.style.marginBottom = "-5px";
st.style.paddingTop = "5px";
st.style.paddingLeft = "20px";
st.style.marginLeft = "-20px";
st.style.background = "#ccccff";
st.style.fontSize = "16px";
st.style.fontFamily = "Arial";
st.style.border = "1px outset";
st.style.display = "none";

var st = document.getElementById("exampleExplanation");
st.style.width = "420px";
st.style.height = "25px";
st.style.margin = "5px";
st.style.marginBottom = "0";
st.style.paddingTop = "5px";
st.style.paddingLeft = "20px";
st.style.marginLeft = "-20px";
st.style.background = "#ccccff";
st.style.fontSize = "16px";
st.style.fontFamily = "Arial";
st.style.border = "1px outset";
st.style.display = "none";

var st = document.getElementById("marked_result"); // div  
st.style.width = "420px";
st.style.height = "25px";
st.style.margin = "5px";
st.style.marginTop = "5px";
st.style.paddingTop = "5px";
st.style.paddingLeft = "20px";
st.style.marginLeft = "-20px";
st.style.background = "#ccccff";
st.style.fontSize = "18px";
st.style.fontFamily = "Arial";
st.style.border = "1px outset";

var st = document.getElementById("res"); // div
st.style.width = "400px";
st.style.height = "100px";
st.style.background = "#ccccff";
st.style.padding = "20px";
st.style.marginTop = "10px";
st.style.marginLeft = "-20px";
st.style.border = "1px #ccccff solid";
st.style.fontSize = "18px";
st.style.fontFamily = "Arial";
st.style.border = "1px outset";

var st = document.getElementById("tf");
st.style.width = "200px";
st.style.height = "20px";
st.style.marginTop = "5px";
st.style.marginLeft = "-20px";
st.style.fontStyle = "italic";
st.style.fontSize = "18px";
st.style.border = "1px outset";
st.onfocus = function() {
    var st = document.getElementById("tf");
    st.style.background = "white";
    st.style.opacity = "1.0";
    st.style.fontStyle = "normal";
}
st.onblur = function() {
    var st = document.getElementById("tf");
    st.style.opacity = "0.7";
    st.style.fontStyle = "italic";
}

var st = document.getElementById("tf_replace");
st.style.width = "150px";
st.style.height = "20px";
st.style.marginTop = "5px";
st.style.marginLeft = "20px";
st.style.opacity = "0.7";
st.style.color = "black";
st.style.fontStyle = "italic";
st.style.display = "none";
st.style.fontSize = "18px";
st.style.border = "1px outset";
st.onfocus = function() {
    var st = document.getElementById("tf_replace");
    st.style.background = "white";
    st.style.opacity = "1.0";
    st.style.fontStyle = "normal";
}

st.onblur = function() {
    var st = document.getElementById("tf_replace");
    st.style.background = "white";
    st.style.opacity = "0.5";
    st.style.fontStyle = "italic";
}

var st = document.getElementById("methods");
st.style.background = "yellow";
st.style.padding = "5px";
st.style.margin = "5px";
st.style.marginLeft = "-20px";
st.style.width = "420px";

var st = document.getElementsByClassName("check")[0];
st.style.marginLeft = "5px";
st.style.marginRight = "5px";

//var st = document.getElementById("explaination");  // run-animation1
//st.style.position = "absolute";
////st.style.top = "0px";
//st.style.left = "500px";
//st.style.width = "700px";
//st.style.height = "600px";
//
var st = document.getElementById("content");    // opacity
st.style.position = "fixed";
//st.style.position = "absolute";
//st.style.top = "0px";
//st.style.left = "500px";
//st.style.width = "700px";
//st.style.height = "600px";

var st = document.getElementById("mod");

var st = document.getElementsByTagName("table");
for (i = 0; i < st.length; i++)
{
    st[i].style.border = "1px solid black";
    st[i].style.borderCollapse = "collapse";
    st[i].style.fontSize = "18px";
    st[i].style.fontFamily = "Arial";
}

var st = document.getElementsByTagName("tr");
for (i = 0; i < st.length; i++)
{
    st[i].style.border = "1px solid black";
    st[i].style.padding = "2px 4px";
    st[i].style.textAlign = "center";
    st[i].style.height = "18px";
}


var st = document.getElementsByTagName("th");
for (i = 0; i < st.length; i++)
{
    st[i].style.border = "1px solid black";
    st[i].style.padding = "2px 4px";
    st[i].style.background = "#000066";
    st[i].style.color = "white";
    st[i].style.textAlign = "left";
    st[i].style.borderCollapse = "collapse";
    st[i].style.height = "18px";
}

var st = document.getElementsByTagName("td");
for (i = 0; i < st.length; i++)
{
    st[i].style.border = "1px solid black";
    st[i].style.padding = "2px 4px";
    st[i].style.textAlign = "left";
    st[i].style.height = "18px";

}
//============================= hover tr a =====================================
var array = document.getElementsByClassName("cc");
for (var i = 0; i < array.length; i++)
{
    array[i].addEventListener("click", highlight);
    focusAndBlur(array[i]);
}

ccclick = 0;
function highlight()
{
    var array = document.getElementsByClassName("cc");
    for (var i = 0; i < array.length; i++)
    {
        array[i].style.background = "white";
    }
    this.style.background = "green";
    ccclick = 1;
}

var tr_arr = document.getElementsByTagName("tr");
for (var i = 0; i < tr_arr.length; i++)
{
    tr_arr[i].addEventListener("click", highlight_tr);
    focusAndBlur_tr(tr_arr[i]);
}

function highlight_tr()
{
    var tr_arr = document.getElementsByTagName("tr");
    for (var i = 0; i < tr_arr.length; i++)
    {
        tr_arr[i].style.background = "white";
    }
    this.style.background = "blue";
    ccclick = 1;
}


var st = document.getElementsByTagName("a");
for (i = 0; i < st.length; i++)
{
//    focusAndBlur(st[i]);
//    st[i].onfocus = function() {
//       // var st = document.getElementById("tf");
//        st[i].style.background = "white";
//        st[i].style.opacity = "1.0";
//        st[i].style.fontStyle = "normal";
//    }
}

function focusAndBlur(x)
{
    x.onmouseover = function() {
        x.style.background = "yellow";
        x.style.fontSize = "26px";
    }
    x.onmouseout = function() {
        x.style.background = "white";
        x.style.fontSize = "18px";
    }
}

function focusAndBlur_tr(x)
{
    x.onmouseover = function() {
        x.style.background = "yellowgreen";
    }
    x.onmouseout = function() {
        x.style.background = "white";
    }
}

//var st = document.getElementsByClassName("exm")[0];
//st.style.color = "#009900";

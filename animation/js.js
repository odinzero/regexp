
var cnt = 0;
var rev = 0;
var ini = 0;
var rightSide = false;
var leftSide = false;

var element;
var opacity;

function initAnimation(elmt, opcty)
{
    element = document.getElementById(elmt);
    opacity = document.getElementById(opcty);
}

function myClick(e) {
    e.preventDefault;
    // in order to avoid some bug 
    if (ini > 1)
    {
        cnt++;
    }
    //alert("cnt out  " + cnt + "  " );

    if (cnt == 1)
    {
//         alert(" ????? : " + cnt);
        cnt = 0;

//        
        // if( ini % 2 == 0)
        rev++;
        if (rev % 2 != 0)   // 1
        {
//            alert(cntClick);
            if (cntClick > 0)
            {  //-=====  move to left ======-
                document.styleSheets[0].disabled = false; // left
                document.styleSheets[1].disabled = true;  // right
                element.style.left = "500px";
                // dissappear opacity
                document.styleSheets[3].disabled = true; // appear
                document.styleSheets[2].disabled = false; // disappear
                // opacity.style.display = "none";
                arrDown.style.display = "none";

                arrLeft.style.display = "none";
                arrRight.style.display = "none";
//             alert("rev : move to left " + rev + " " + ini);
                //cntClick = 0;
//                alert("rightSide = false  != ");
//                alert("!!!!");
            }
        }
        if (rev % 2 == 0)  // 2
        {  //-=====  move to right ======-
            document.styleSheets[0].disabled = true;  // left
            document.styleSheets[1].disabled = false; // right
            element.style.left = "1200px";
            // dissappear opacity
            document.styleSheets[3].disabled = false; // appear
            document.styleSheets[2].disabled = true; // disappear
            opacity.style.display = "block";

            arrLeft.style.display = "none";
            arrRight.style.display = "block";
//             alert("rev out: move to right" + rev + "  " + ini );
            //alert("INI  right:" + ini + "  " );
//            rightSide = true;
//            leftSide = false;
//            alert("rightSide = true  ==");
        }

    }

//     if(cntLeft > 0)
//        {
//             arrLeft.style.display = "none";
//             arrRight.style.display = "none";
//        }

}

function animation(elmt, opcty)  // function animation() 
{
    if (cnt == 0)
    {
        initAnimation(elmt, opcty);

        ini++;

//    if (ini == 1)
        addAnimation();

        document.styleSheets[3].disabled = false; // appear
        opacity.style.display = "block";
        //  alert("addAnimation_1() : " + cnt);
    }
    if (rev == 1)
    {
        // alert(" styleSheets[0].disabled = true :  " + rev);
    }

}



function addAnimation()
{
    // reset the transition by...
    element.addEventListener("click", myClick, false);

    document.styleSheets[1].disabled = false; // to right
    // document.styleSheets[0].disabled = true;

    element.style.left = "1200px";

    arrRight.style.display = "block";
    arrLeft.style.display = "none";

//    var arrows = document.getElementById("arrows");     
}

function removeAnimation()
{
    element.removeEventListener("click", myClick);

    document.styleSheets[0].disabled = true; // left

}

//------------------------------------------------------------------------------

//=========================== mouseenter, mouseleave ==========================

cntClick = 0;

var arrLeft = document.getElementById("arrowLeft");
var arrRight = document.getElementById("arrowRight");
var hrefs = document.getElementsByClassName("cc");
for (i = 0; i < hrefs.length; i++)
{
    hrefs[i].addEventListener("mouseenter", mouseEnter);
}


arrRight.addEventListener("mouseenter", mouseOverRightArrow);
//arrRight.addEventListener("mouseleave", mouseLeaveLeft);
//arrLeft.addEventListener("mouseenter", mouseOverRightArrow);
//arrLeft.addEventListener("mouseleave", mouseLeaveLeft);

function mouseOverRightArrow()  // for right image
{
    cntClick++;
//    alert("ooooo");
    arrRight.style.display = "none";
    arrLeft.style.display = "block";
}

//function mouseLeaveRight()  // for  right image
//{
//    arrRight.style.display = "block";
//    arrLeft.style.display = "none";
////    var x = element.offsetLeft;
//}

//function mouseOverLeftArrow()  // for left image
//{
//    cntClick++;
//    
//    arrRight.style.display = "block";
//    arrLeft.style.display = "none";
////    alert("ooooo");
//}

function mouseLeaveLeft()  // for left image
{

    arrRight.style.display = "block";

    arrLeft.style.display = "none";

//    alert("ooooo!");
}



function leftClick()
{
    arrLeft.style.display = "none";
    setTimeout(function() {
        arrRight.style.display = "block";
    }, 5000);
//    alert("ooooo clk");
}


function mouseEnter()  // for table values
{
    if (cntClick > 0)
        cntClick = 0;

    arrDown.style.display = "none";
    arrUp.style.display = "none";
    arrLeft.style.top = "35px";
    arrRight.style.top = "35px";
    
    elmt = document.getElementById("explaination");
    if(elmt.style.left == "1200px")
    {
    arrRight.style.display = "inline";
    arrLeft.style.display = "none";
    }
//    else
//    {
//    arrRight.style.display = "none";
//    arrLeft.style.display = "none";   
//    }
}

//---------------------------- window scroll -----------------------------------
var arrDown = document.getElementById("arrowDown");
var arrUp = document.getElementById("arrowUp");

var i = 0;
var arr = [];

window.onscroll = function onScrolled()
{
//    var scrolledY = window.pageYOffset || document.documentElement.scrollTop;
    arrRight.style.display = "none";
    arrLeft.style.display = "none";

    scrolledY = window.pageYOffset;
    i++;
    arr[i] = scrolledY;

    elmt = document.getElementById("explaination");

    if (elmt.style.left < "1200px")
    {
//        alert("< 1200");
    arrDown.style.position = "fixed";
    arrDown.style.top = "35px";
    arrDown.style.right = "805px";

    arrUp.style.position = "fixed";
    arrUp.style.top = "35px";
    arrUp.style.right = "805px";

    if ((scrolledY <= -500) || (scrolledY == 0))
    {
        arrDown.style.display = "none";
        arrUp.style.display = "none";
    }
    else if ((scrolledY > 0) && (scrolledY < 1230))
    {
        if (arr[i] > arr[i - 1])  // direction down
        {
            arrDown.style.display = "block";
            arrUp.style.display = "none";
            arrRight.style.display = "none";
            arrLeft.style.display = "none";
        } else                  // direction up
        {
            arrUp.style.display = "block";
            arrDown.style.display = "none";
            arrRight.style.display = "none";
            arrLeft.style.display = "none";
        }
    }
    else
    {
        arrDown.style.display = "none";
        arrUp.style.display = "block";
    }
    
    }



    if (elmt.style.left == "1200px")// -------------- 'explaination' -----------
    {
        //alert("== 1200");
        arrDown.style.position = "fixed";
        arrDown.style.top = "35px";
        arrDown.style.right = "2005px";

        arrUp.style.position = "fixed";
        arrUp.style.top = "35px";
        arrUp.style.right = "2005px";

        if ((scrolledY <= -500) || (scrolledY == 0))
        {
            arrDown.style.display = "none";
            arrUp.style.display = "none";
        }
        else if ((scrolledY > 0) && (scrolledY < 1230))
        {
            if (arr[i] > arr[i - 1])  // direction down
            {
                arrDown.style.display = "block";
                arrUp.style.display = "none";
                arrRight.style.display = "none";
                arrLeft.style.display = "none";
            } else                  // direction up
            {
                arrUp.style.display = "block";
                arrDown.style.display = "none";
                arrRight.style.display = "none";
                arrLeft.style.display = "none";
            }
        }
        else
        {
            arrDown.style.display = "none";
            arrUp.style.display = "block";
        }
    }
    else
    {
        arrRight.style.display = "none";
        arrLeft.style.display = "none";
    }

}

window.onfocus = function()
{
    arrLeft.style.display = "none";
    arrRight.style.display = "none";
}

window.onblur = function()
{
//    arrDown.style.display = "none";
//    arrUp.style.display = "none";
}

function scrolltoUP()
{
//    arrLeft.style.top = "-500px";
//    arrRight.style.top = "-500px";
    window.scrollTo(0, 0);
    arrUp.style.display = "none";
}

function scrolltoDOWN()
{
//    arrLeft.style.top = "-500px";
//    arrRight.style.top = "-500px";
    window.scrollTo(0, 1230);
    arrDown.style.display = "none";
}

// arrRight.onfocus = function() {
//    var arrLeft = document.getElementById("arrowLeft");
//    var arrRight = document.getElementById("arrowRight");
//    arrLeft.style.display = "block";
//    arrRight.style.display = "none";
//}
//    arrRight.onblur = function() {
//    var arrLeft = document.getElementById("arrowLeft");
//    var arrRight = document.getElementById("arrowRight");
//    arrLeft.style.display = "none";
//    arrRight.style.display = "block";
//}

//   var x = element.offsetLeft;
//    if (x < 1200)
//    {
//        arrRight.style.display = "none";
//        arrLeft.style.display = "none";
//    }


function _exampleExplanation(str, h)
{
    exmExpln.style.display = "block";
    mrest.style.marginTop = "0px";

    switch (h) {
        case 1:
            exmExpln.style.height = "25px";
            tarea.style.height = "85px";
            result.style.height = "85px";
            break;
        case 2:
            exmExpln.style.height = "40px";
            tarea.style.height = "80px";
            result.style.height = "80px";
            break;
        case 3:
            exmExpln.style.height = "80px";
            tarea.style.height = "45px";
            result.style.height = "45px";
            break;
        case 4:
            tarea.style.height = "85px";
            result.style.height = "85px";
            break;
        case 5:
            tarea.style.height = "85px";
            result.style.height = "85px";
            break;
    }

    exmExpln.innerHTML = "" + str;
}

function hide_exampleExplanation()
{
    exmExpln.style.display = "none";
    result.style.height = "100px";
    tarea.style.height = "100px";
    mrest.style.marginTop = "5px";
}

function focusAndBlur(x)
{
    x.onfocus = function() {
        x.style.background = "#eaed99";
    }
    x.onblur = function() {
        x.style.background = "#f2e8f6";
    }
 
}

function showOtherExamples(qty, text1, text2, text3, text4, text5, text6, text7, text8, text9, text10,
        f1, f2, f3, f4, f5, f6, f7, f8, f9, f10)
{
    result.style.height = "65px";
    tarea.style.height = "65px";

    switch (qty) {
        case 1:
            clearAll();

            var btn1 = document.createElement("BUTTON");
            btn1.addEventListener("click", f1);
            focusAndBlur(btn1);

            var t1 = document.createTextNode(text1);

            btn1.appendChild(t1);

            otherExm.appendChild(btn1);
            otherExm.style.display = "block";

            buttonStyles(btn1);
            break;
        case 2:
            clearAll();

            var btn1 = document.createElement("BUTTON");
            var btn2 = document.createElement("BUTTON");
            btn1.addEventListener("click", f1);
            btn2.addEventListener("click", f2);
            focusAndBlur(btn1);
            focusAndBlur(btn2);

            var t1 = document.createTextNode(text1);
            var t2 = document.createTextNode(text2);

            btn1.appendChild(t1);
            btn2.appendChild(t2);

            otherExm.appendChild(btn1);
            otherExm.appendChild(btn2);
            otherExm.style.display = "block";

            buttonStyles(btn1);
            buttonStyles(btn2);
            break;
        case 3:
            clearAll();

            var btn1 = document.createElement("BUTTON");
            var btn2 = document.createElement("BUTTON");
            var btn3 = document.createElement("BUTTON");
            btn1.addEventListener("click", f1);
            btn2.addEventListener("click", f2);
            btn3.addEventListener("click", f3);
            focusAndBlur(btn1);
            focusAndBlur(btn2);
            focusAndBlur(btn3);

            var t1 = document.createTextNode(text1);
            var t2 = document.createTextNode(text2);
            var t3 = document.createTextNode(text3);

            btn1.appendChild(t1);
            btn2.appendChild(t2);
            btn3.appendChild(t3);

            otherExm.appendChild(btn1);
            otherExm.appendChild(btn2);
            otherExm.appendChild(btn3);
            otherExm.style.display = "block";

            buttonStyles(btn1);
            buttonStyles(btn2);
            buttonStyles(btn3);
            break;
        case 4:
            clearAll();

            var btn1 = document.createElement("BUTTON");
            var btn2 = document.createElement("BUTTON");
            var btn3 = document.createElement("BUTTON");
            var btn4 = document.createElement("BUTTON");
            btn1.addEventListener("click", f1);
            btn2.addEventListener("click", f2);
            btn3.addEventListener("click", f3);
            btn4.addEventListener("click", f4);
            focusAndBlur(btn1);
            focusAndBlur(btn2);
            focusAndBlur(btn3);
            focusAndBlur(btn4);

            var t1 = document.createTextNode(text1);
            var t2 = document.createTextNode(text2);
            var t3 = document.createTextNode(text3);
            var t4 = document.createTextNode(text4);

            btn1.appendChild(t1);
            btn2.appendChild(t2);
            btn3.appendChild(t3);
            btn4.appendChild(t4);

            otherExm.appendChild(btn1);
            otherExm.appendChild(btn2);
            otherExm.appendChild(btn3);
            otherExm.appendChild(btn4);
            otherExm.style.display = "block";

            buttonStyles(btn1);
            buttonStyles(btn2);
            buttonStyles(btn3);
            buttonStyles(btn4);
            break;
        case 5:
            clearAll();

            var btn1 = document.createElement("BUTTON");
            var btn2 = document.createElement("BUTTON");
            var btn3 = document.createElement("BUTTON");
            var btn4 = document.createElement("BUTTON");
            var btn5 = document.createElement("BUTTON");
            btn1.addEventListener("click", f1);
            btn2.addEventListener("click", f2);
            btn3.addEventListener("click", f3);
            btn4.addEventListener("click", f4);
            btn5.addEventListener("click", f5);
            focusAndBlur(btn1);
            focusAndBlur(btn2);
            focusAndBlur(btn3);
            focusAndBlur(btn4);
            focusAndBlur(btn5);

            var t1 = document.createTextNode(text1);
            var t2 = document.createTextNode(text2);
            var t3 = document.createTextNode(text3);
            var t4 = document.createTextNode(text4);
            var t5 = document.createTextNode(text5);

            btn1.appendChild(t1);
            btn2.appendChild(t2);
            btn3.appendChild(t3);
            btn4.appendChild(t4);
            btn5.appendChild(t5);

            otherExm.appendChild(btn1);
            otherExm.appendChild(btn2);
            otherExm.appendChild(btn3);
            otherExm.appendChild(btn4);
            otherExm.appendChild(btn5);
            otherExm.style.display = "block";

            buttonStyles(btn1);
            buttonStyles(btn2);
            buttonStyles(btn3);
            buttonStyles(btn4);
            buttonStyles(btn5);
            break;
        case 6:
            clearAll();

            var btn1 = document.createElement("BUTTON");
            var btn2 = document.createElement("BUTTON");
            var btn3 = document.createElement("BUTTON");
            var btn4 = document.createElement("BUTTON");
            var btn5 = document.createElement("BUTTON");
            var btn6 = document.createElement("BUTTON");
            btn1.addEventListener("click", f1);
            btn2.addEventListener("click", f2);
            btn3.addEventListener("click", f3);
            btn4.addEventListener("click", f4);
            btn5.addEventListener("click", f5);
            btn6.addEventListener("click", f6);
            focusAndBlur(btn1);
            focusAndBlur(btn2);
            focusAndBlur(btn3);
            focusAndBlur(btn4);
            focusAndBlur(btn5);
            focusAndBlur(btn6);

            var t1 = document.createTextNode(text1);
            var t2 = document.createTextNode(text2);
            var t3 = document.createTextNode(text3);
            var t4 = document.createTextNode(text4);
            var t5 = document.createTextNode(text5);
            var t6 = document.createTextNode(text6);

            btn1.appendChild(t1);
            btn2.appendChild(t2);
            btn3.appendChild(t3);
            btn4.appendChild(t4);
            btn5.appendChild(t5);
            btn6.appendChild(t6);

            otherExm.appendChild(btn1);
            otherExm.appendChild(btn2);
            otherExm.appendChild(btn3);
            otherExm.appendChild(btn4);
            otherExm.appendChild(btn5);
            otherExm.appendChild(btn6);
            otherExm.style.display = "block";

            buttonStyles(btn1);
            buttonStyles(btn2);
            buttonStyles(btn3);
            buttonStyles(btn4);
            buttonStyles(btn5);
            buttonStyles(btn6);
            break;
        case 7:
            clearAll();

            var btn1 = document.createElement("BUTTON");
            var btn2 = document.createElement("BUTTON");
            var btn3 = document.createElement("BUTTON");
            var btn4 = document.createElement("BUTTON");
            var btn5 = document.createElement("BUTTON");
            var btn6 = document.createElement("BUTTON");
            var btn7 = document.createElement("BUTTON");
            btn1.addEventListener("click", f1);
            btn2.addEventListener("click", f2);
            btn3.addEventListener("click", f3);
            btn4.addEventListener("click", f4);
            btn5.addEventListener("click", f5);
            btn6.addEventListener("click", f6);
            btn7.addEventListener("click", f7);
            focusAndBlur(btn1);
            focusAndBlur(btn2);
            focusAndBlur(btn3);
            focusAndBlur(btn4);
            focusAndBlur(btn5);
            focusAndBlur(btn6);
            focusAndBlur(btn7);

            var t1 = document.createTextNode(text1);
            var t2 = document.createTextNode(text2);
            var t3 = document.createTextNode(text3);
            var t4 = document.createTextNode(text4);
            var t5 = document.createTextNode(text5);
            var t6 = document.createTextNode(text6);
            var t7 = document.createTextNode(text7);

            btn1.appendChild(t1);
            btn2.appendChild(t2);
            btn3.appendChild(t3);
            btn4.appendChild(t4);
            btn5.appendChild(t5);
            btn6.appendChild(t6);
            btn7.appendChild(t7);

            otherExm.appendChild(btn1);
            otherExm.appendChild(btn2);
            otherExm.appendChild(btn3);
            otherExm.appendChild(btn4);
            otherExm.appendChild(btn5);
            otherExm.appendChild(btn6);
            otherExm.appendChild(btn7);
            otherExm.style.display = "block";

            buttonStyles(btn1);
            buttonStyles(btn2);
            buttonStyles(btn3);
            buttonStyles(btn4);
            buttonStyles(btn5);
            buttonStyles(btn6);
            buttonStyles(btn7);
            break;
        case 8:
            clearAll();

            var btn1 = document.createElement("BUTTON");
            var btn2 = document.createElement("BUTTON");
            var btn3 = document.createElement("BUTTON");
            var btn4 = document.createElement("BUTTON");
            var btn5 = document.createElement("BUTTON");
            var btn6 = document.createElement("BUTTON");
            var btn7 = document.createElement("BUTTON");
            var btn8 = document.createElement("BUTTON");
            btn1.addEventListener("click", f1);
            btn2.addEventListener("click", f2);
            btn3.addEventListener("click", f3);
            btn4.addEventListener("click", f4);
            btn5.addEventListener("click", f5);
            btn6.addEventListener("click", f6);
            btn7.addEventListener("click", f7);
            btn8.addEventListener("click", f8);
            focusAndBlur(btn1);
            focusAndBlur(btn2);
            focusAndBlur(btn3);
            focusAndBlur(btn4);
            focusAndBlur(btn5);
            focusAndBlur(btn6);
            focusAndBlur(btn7);
            focusAndBlur(btn8);

            var t1 = document.createTextNode(text1);
            var t2 = document.createTextNode(text2);
            var t3 = document.createTextNode(text3);
            var t4 = document.createTextNode(text4);
            var t5 = document.createTextNode(text5);
            var t6 = document.createTextNode(text6);
            var t7 = document.createTextNode(text7);
            var t8 = document.createTextNode(text8);

            btn1.appendChild(t1);
            btn2.appendChild(t2);
            btn3.appendChild(t3);
            btn4.appendChild(t4);
            btn5.appendChild(t5);
            btn6.appendChild(t6);
            btn7.appendChild(t7);
            btn8.appendChild(t8);

            otherExm.appendChild(btn1);
            otherExm.appendChild(btn2);
            otherExm.appendChild(btn3);
            otherExm.appendChild(btn4);
            otherExm.appendChild(btn5);
            otherExm.appendChild(btn6);
            otherExm.appendChild(btn7);
            otherExm.appendChild(btn8);
            otherExm.style.display = "block";

            buttonStyles(btn1);
            buttonStyles(btn2);
            buttonStyles(btn3);
            buttonStyles(btn4);
            buttonStyles(btn5);
            buttonStyles(btn6);
            buttonStyles(btn7);
            buttonStyles(btn8);
            break;
        case 9:
            clearAll();

            var btn1 = document.createElement("BUTTON");
            var btn2 = document.createElement("BUTTON");
            var btn3 = document.createElement("BUTTON");
            var btn4 = document.createElement("BUTTON");
            var btn5 = document.createElement("BUTTON");
            var btn6 = document.createElement("BUTTON");
            var btn7 = document.createElement("BUTTON");
            var btn8 = document.createElement("BUTTON");
            var btn9 = document.createElement("BUTTON");
            btn1.addEventListener("click", f1);
            btn2.addEventListener("click", f2);
            btn3.addEventListener("click", f3);
            btn4.addEventListener("click", f4);
            btn5.addEventListener("click", f5);
            btn6.addEventListener("click", f6);
            btn7.addEventListener("click", f7);
            btn8.addEventListener("click", f8);
            btn9.addEventListener("click", f9);
            focusAndBlur(btn1);
            focusAndBlur(btn2);
            focusAndBlur(btn3);
            focusAndBlur(btn4);
            focusAndBlur(btn5);
            focusAndBlur(btn6);
            focusAndBlur(btn7);
            focusAndBlur(btn8);
            focusAndBlur(btn9);

            var t1 = document.createTextNode(text1);
            var t2 = document.createTextNode(text2);
            var t3 = document.createTextNode(text3);
            var t4 = document.createTextNode(text4);
            var t5 = document.createTextNode(text5);
            var t6 = document.createTextNode(text6);
            var t7 = document.createTextNode(text7);
            var t8 = document.createTextNode(text8);
            var t9 = document.createTextNode(text9);

            btn1.appendChild(t1);
            btn2.appendChild(t2);
            btn3.appendChild(t3);
            btn4.appendChild(t4);
            btn5.appendChild(t5);
            btn6.appendChild(t6);
            btn7.appendChild(t7);
            btn8.appendChild(t8);
            btn9.appendChild(t9);

            otherExm.appendChild(btn1);
            otherExm.appendChild(btn2);
            otherExm.appendChild(btn3);
            otherExm.appendChild(btn4);
            otherExm.appendChild(btn5);
            otherExm.appendChild(btn6);
            otherExm.appendChild(btn7);
            otherExm.appendChild(btn8);
            otherExm.appendChild(btn9);
            otherExm.style.display = "block";

            buttonStyles(btn1);
            buttonStyles(btn2);
            buttonStyles(btn3);
            buttonStyles(btn4);
            buttonStyles(btn5);
            buttonStyles(btn6);
            buttonStyles(btn7);
            buttonStyles(btn8);
            buttonStyles(btn9);
            break;
        case 10:
            clearAll();

            var btn1 = document.createElement("BUTTON");
            var btn2 = document.createElement("BUTTON");
            var btn3 = document.createElement("BUTTON");
            var btn4 = document.createElement("BUTTON");
            var btn5 = document.createElement("BUTTON");
            var btn6 = document.createElement("BUTTON");
            var btn7 = document.createElement("BUTTON");
            var btn8 = document.createElement("BUTTON");
            var btn9 = document.createElement("BUTTON");
            var btn10 = document.createElement("BUTTON");
            btn1.addEventListener("click", f1);
            btn2.addEventListener("click", f2);
            btn3.addEventListener("click", f3);
            btn4.addEventListener("click", f4);
            btn5.addEventListener("click", f5);
            btn6.addEventListener("click", f6);
            btn7.addEventListener("click", f7);
            btn8.addEventListener("click", f8);
            btn9.addEventListener("click", f9);
            btn10.addEventListener("click", f10);
            focusAndBlur(btn1);
            focusAndBlur(btn2);
            focusAndBlur(btn3);
            focusAndBlur(btn4);
            focusAndBlur(btn5);
            focusAndBlur(btn6);
            focusAndBlur(btn7);
            focusAndBlur(btn8);
            focusAndBlur(btn9);
            focusAndBlur(btn10);

            var t1 = document.createTextNode(text1);
            var t2 = document.createTextNode(text2);
            var t3 = document.createTextNode(text3);
            var t4 = document.createTextNode(text4);
            var t5 = document.createTextNode(text5);
            var t6 = document.createTextNode(text6);
            var t7 = document.createTextNode(text7);
            var t8 = document.createTextNode(text8);
            var t9 = document.createTextNode(text9);
            var t10 = document.createTextNode(text10);

            btn1.appendChild(t1);
            btn2.appendChild(t2);
            btn3.appendChild(t3);
            btn4.appendChild(t4);
            btn5.appendChild(t5);
            btn6.appendChild(t6);
            btn7.appendChild(t7);
            btn8.appendChild(t8);
            btn9.appendChild(t9);
            btn10.appendChild(t10);

            otherExm.appendChild(btn1);
            otherExm.appendChild(btn2);
            otherExm.appendChild(btn3);
            otherExm.appendChild(btn4);
            otherExm.appendChild(btn5);
            otherExm.appendChild(btn6);
            otherExm.appendChild(btn7);
            otherExm.appendChild(btn8);
            otherExm.appendChild(btn9);
            otherExm.appendChild(btn10);
            otherExm.style.display = "block";

            buttonStyles(btn1);
            buttonStyles(btn2);
            buttonStyles(btn3);
            buttonStyles(btn4);
            buttonStyles(btn5);
            buttonStyles(btn6);
            buttonStyles(btn7);
            buttonStyles(btn8);
            buttonStyles(btn9);
            buttonStyles(btn10);
            break;
    }

}

function buttonStyles(x)
{
    x.style.border = "1px lightgray outset";
    x.style.borderRadius = "3px 3px";
    x.style.padding = "3px 3px";
    x.style.marginRight = "4px";
    x.style.background = "#f2e8f6";
}

function clearAll()
{
    var t = otherExm.firstChild;

    while (t) {
        otherExm.removeChild(t);
        t = otherExm.firstChild;
    }

}
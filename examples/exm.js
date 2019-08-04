
var _fform = document.getElementById('fullForm');
var _sform = document.getElementById('shortForm');

var objSel = document.getElementById("select_mod");
var selectedValue;

var tarea = document.getElementById('search');
var otherExm = document.getElementById('otherExamples');
var exmExpln = document.getElementById('exampleExplanation'); 
var mrest = document.getElementById('marked_result');
var tfield = document.getElementById('tf');
var result = document.getElementById('res');
var replacevalue = document.getElementById('tf_replace');
var cntFocus;
var newrest;

var _test = document.getElementsByClassName("_test")[0];
var _search = document.getElementsByClassName("_search")[0];
var _exec = document.getElementsByClassName("_exec")[0];
var _replace = document.getElementsByClassName("_replace")[0];
var _match = document.getElementsByClassName("_match")[0];
var expr;
// --------------------------Modifiers------------------------------------------
// --g--
//var str = "Visit W3Schools my friends visit";
////  Visit  my friends Z a a a
//var patt1 = /Visit/gi;
//var tempField;

function setInitValues_i()
{
    expr = undefined;
    resetMarkedResult();
    unblockTextArea_if_property_constructor_exists();
    disable_global_property();
    disable_ignoreCase_property();
    disable_multiline_property();
    disable_source_property();
    disable_regexpMethods_toString();
    _exampleExplanation("Do a case-sensitive search for ''Visit'':",  1 );

    var str = "Visit W3Schools my friends visit";
    var patt = /Visit/i;

    patt1 = patt;

    tarea.value = str;

    tfield.value = patt1;
//    tempField = patt1;
//    tfield.value = tempField;

    newrest = str.match(patt1); // 

    result.innerHTML = newrest;

    // alert(newrest);

    selectedMatch();// select Match
    select_match(); // remove other selection if exists.
    selectedSForm(); // select short form

    parseMarkedResult();
//    mrest.innerHTML = str;
}

var strArray;
function parseMarkedResult()    // str.substr(1,2));   push() 
{
    if (expr === undefined) // show initial result, when  'expr' not defined
    {
        alert("undefined");
        //alert("expr :  " + expr);
        strArray = tarea.value.split(patt1); // patt1   tfield.value   tempField
        resetMarkedResult();
        alert("strArray : " + strArray[0] + ":   " + newrest + ":  " + strArray[1]);
        highlightResult(strArray[0], newrest, strArray[1]);
        // alert("str : " + strArray[0] + " :  " + newrest + " : " + strArray[1] );
    }
    else  // when user try use diferent values 'expr' in textField but  not initial
    {
        strArray = tarea.value.split(expr);
        resetMarkedResult();
        highlightResult(strArray[0], newrest, strArray[1]);
        // defineTextFieldLength();
//       myFunction1();
        //alert("defined");
        //alert("strArray:  " + strArray.length + "   " + strArray[0] + "  " + strArray[1] );
        //  alert("strArray.length :  " + strArray.length);
    }

}


function highlightResult(str1, markedStr, str2)
{
//    alert("strArray.length :  " + strArray.length);

    // myFunction1();
    if (str2 != null) // if 'strArray.length' > 1
    {
        alert("Hi");
        var x0 = document.createElement("SPAN");
        var x1 = document.createElement("SPAN");
        var x2 = document.createElement("SPAN");

        var t0 = document.createTextNode(str1);
        var t1 = document.createTextNode(markedStr);
        var t2 = document.createTextNode(str2);

        x0.appendChild(t0);
        x1.appendChild(t1);
        x2.appendChild(t2);

        x1.style.color = "red";
        mrest.appendChild(x0);
        mrest.appendChild(x1);
        mrest.appendChild(x2);

        if (strArray.length > 2) // if in str present more then 2 equal elements 
        {
            // all 'modifiers' without 'g' (global)
            if (((selectedValue == 'i') || (selectedValue == 'modifiers') ||
                    (selectedValue == 'm') || (selectedValue == 'im')) && (_fform.checked == true))
            {
                alert("modif");
                resetMarkedResult();
                // alert("00  strArray: "  +  "  " +  strArray[2]  ); 
                //strArray = tarea.value.split(expr);
                // newrest = tarea.value.search(expr);

                var span0 = document.createElement("SPAN");
                var span1 = document.createElement("SPAN");
                var span2 = document.createElement("SPAN");
                span1.style.color = "red";

                var t0 = document.createTextNode(str1);
                var t1 = document.createTextNode(markedStr);
                var t2 = document.createTextNode(saveEndStrokWithoutChanges());

                span0.appendChild(t0);
                span1.appendChild(t1);
                span2.appendChild(t2);

                mrest.appendChild(span0);
                mrest.appendChild(span1);
                mrest.appendChild(span2);

                if (tfield.value == "")
                    wrongFormatOfExpression();
            }

            // all 'modifiers' only with 'g' (global)
            if (((selectedValue == 'g') || (selectedValue == 'ig') ||
                    (selectedValue == 'gm') || (selectedValue == 'gim')) && (_fform.checked == true))
            {
                alert("g :" + selectedValue);
                resetMarkedResult();
                searchWhen_G_Modifiers_isUsed();
            }

            if ((_sform.checked == true) && !check_G_modifier_inTField())
            {
                alert("sform + false");
                // alert( check_G_modifier_inTField() );  
                resetMarkedResult();

                var span0 = document.createElement("SPAN");
                var span1 = document.createElement("SPAN");
                var span2 = document.createElement("SPAN");
                span1.style.color = "red";

                var t0 = document.createTextNode(str1);
                var t1 = document.createTextNode(markedStr);
                var t2 = document.createTextNode(saveEndStrokWithoutChanges());

                alert("!!! :" + str1 + "   " + markedStr + "   " + saveEndStrokWithoutChanges());

                span0.appendChild(t0);
                span1.appendChild(t1);
                span2.appendChild(t2);

                mrest.appendChild(span0);
                mrest.appendChild(span1);
                mrest.appendChild(span2);
            }

            if ((_sform.checked == true) && check_G_modifier_inTField())
            {
                alert("sform + true");
                resetMarkedResult();
                searchWhen_G_Modifiers_isUsed();
            }

        }
    }
    else  // if (str2 != null) 
    {
//        alert("ggg ??  : " + strArray.length);
//        resetMarkedResult();
//        searchWhen_G_Modifiers_isUsed();

        if (strArray.length == 1)
        {
            alert("ggg" + strArray.length);
            wrongFormatOfExpression();
            // alert("222  strArray: " + i +  "  " +  strArray[i]);
        }
    }


}

function wrongFormatOfExpression()
{
    mrest.innerHTML = "";

    var x0 = document.createElement("SPAN");
    var x1 = document.createElement("SPAN");

    var t0 = document.createTextNode(tarea.value);
    var explain = "   (null)";
    var t1 = document.createTextNode(explain);

    x0.appendChild(t0);
    x1.appendChild(t1);

    x1.style.color = "red";

    mrest.appendChild(x0);
    mrest.appendChild(x1);

    // when user click 'constructor' property 
    if (constructorProperty)
    {
        mrest.innerHTML = expr.constructor;
        result.innerHTML = expr.constructor;
    }
    // when user click 'global' property 
    if (gglobal)
    {
        try {
            expr = eval(tfield.value);

            mrest.innerHTML = expr.global;
            mrest.style.color = "red";

            newrest = expr.global;
            result.innerHTML = newrest;
        } catch (e) {
            result.innerHTML = "Wrong Format of literal form";
            mrest.innerHTML = "Wrong Format of literal form";
            mrest.style.color = "red";
        }
    }
    // when user click 'global' property 
    if (ignorCase)
    {
        try {
            expr = eval(tfield.value);

            mrest.innerHTML = expr.ignoreCase;
            mrest.style.color = "red";

            newrest = expr.ignoreCase;
            result.innerHTML = newrest;
        } catch (e) {
            result.innerHTML = "Wrong Format of literal form";
            mrest.innerHTML = "Wrong Format of literal form";
            mrest.style.color = "red";
        }
    }
    // when user click 'multiline' property 
    if (mmultiline)
    {
        try {
            expr = eval(tfield.value);

            mrest.innerHTML = expr.multiline;
            mrest.style.color = "red";

            newrest = expr.multiline;
            result.innerHTML = newrest;
        } catch (e) {
            result.innerHTML = "Wrong Format of literal form";
            mrest.innerHTML = "Wrong Format of literal form";
            mrest.style.color = "red";
        }
    }
    // when user click 'multiline' property 
    if (ssource)
    {
        try {
            expr = eval(tfield.value);

            mrest.innerHTML = expr.source;
            mrest.style.color = "red";

            newrest = expr.source;
            result.innerHTML = newrest;
        } catch (e) {
            result.innerHTML = "Wrong Format of literal form";
            mrest.innerHTML = "Wrong Format of literal form";
            mrest.style.color = "red";
        }
    }
    // when user click 'toString()'  
    if (ttostring)
    {
        try {
            expr = eval(tfield.value);

            mrest.innerHTML = expr.toString();
            mrest.style.color = "red";

            newrest = expr.toString();
            result.innerHTML = newrest;
        } catch (e) {
            result.innerHTML = "Wrong Format of literal form";
            mrest.innerHTML = "Wrong Format of literal form";
            mrest.style.color = "red";
        }
    }

}

function check_G_modifier_inTField()
{
    var str = tfield.value;
    var strArr = str.split("/"); // возвращает массив элементов

    if (_sform.checked == true)
    {
        if (strArr[2].match(/g/g))
            return true;
        //alert(strArr[2] + "  " + "true");
        else
            return false;
        //alert(strArr[2] + "  " + "false");
    }
}

function defineTextFieldLength()
{
    var fieldLength;
    if (_sform.checked == true)
    {
        var str = tfield.value;
        var strArr = str.split("/"); // возвращает массив элементов

//        if(strArr[2].match(/g/g))
//        alert(strArr[2] + "  " + "true" );
//        else alert(strArr[2] + "  " + "false" );

        fieldLength = strArr[1].length;
    }
    if (_fform.checked == true)
    {
        fieldLength = tfield.value.length;
    }
    return fieldLength;
}

function saveEndStrokWithoutChanges()
{
    var str = tarea.value; //   tarea.value 
    var len = defineTextFieldLength(); // tfield.value

    var expr0 = expr;
//    var strArray = str.split(expr0, len);

    var pos = str.search(expr0);
//    var strStart = str.substring(0, str.length);
    var strEnd = str.substring(pos + len, str.length);

    // alert("strEnd :: " + strEnd);

    return strEnd;
}

function myFunction() {
    var str = "Hello myy world myy";

    var expr = /my/i;
    var strArray = str.split(expr, 2);

    pos = str.search(expr);

    var str0 = str.substring(0, str.length);
    var str1 = str.substring(pos + 2, str.length);

    document.getElementById("demo").innerHTML = strArray + " :::   " + str1;
}


function searchWhen_G_Modifiers_isUsed()
{
    //var str = "myHello myy world myy myy  myt ";
    var str = tarea.value;

    alert("searchWhen_G_Modifiers_isUsed()");
    if (expr != null)
    {
        var strArray = str.split(expr);
        var result = str.match(expr);
    } else
    {
        var strArray = str.split(patt1);
        var result = str.match(patt1);
        
//        for (var i = 0; i < strArray.length; i++)
//        {
//        alert(strArray[i]);
//        }

//          for (var i = 0; i < result.length; i++)
//        {
//        alert(result[i]);
//        }
    
    }
    // pos = str.search(expr);
//    var str0 = str.substring(0, str.length);
//    var str1 = str.substring(pos + 1, str.length);

    var t = [];
    t.length = strArray.length;

    var mt = [];
    mt.length = strArray.length;

    var spans = [];
    spans.length = strArray.length;

    var mspans = [];
    mspans.length = strArray.length;

    // var ss =  document.getElementById("demo2") ;

    for (var i = 0; i < strArray.length; i++)
    {
        spans[i] = document.createElement("SPAN");
        mspans[i] = document.createElement("SPAN");

        t[i] = document.createTextNode(strArray[i]);
        mt[i] = document.createTextNode(result[i]);

        spans[i].appendChild(t[i]);
        mspans[i].appendChild(mt[i]);
        spans[i].style.background = "yellow";
        mspans[i].style.background = "red";

        mrest.appendChild(spans[i]);
        
//        if(strArray[i] != null)
//            mrest.appendChild(spans[i]);
        
        if (result[i] != null)
            mrest.appendChild(mspans[i]);

        // document.getElementById("demo").innerHTML += strArray[i]  ;
        // document.getElementById("demo1").innerHTML = strArray[0] + result[0];
    }

}

function resetMarkedResult()
{
    mrest.innerHTML = "";
}

function choiceFunction()
{
    //var field = document.getElementById('tf').value;
    // var sear = document.getElementById('search').innerHTML;
    //var result = document.getElementById('res');
    otherExm.style.display = "none";
    hide_exampleExplanation();
    //  ---------------------------- test() ------------------------------------ 
    if (_test.checked == true)
    {
        if (_fform.checked == true)
        {
            try {
                expr = selectModifier();
                newrest = expr.test(tarea.value);
                result.innerHTML = newrest;

                parseMarkedResult();
            } catch (e)
            {
                result.innerHTML = "Wrong Format of full form";
                wrongFormatOfExpression();
            }
        }

        if (_sform.checked == true)
        {
            try {
                expr = eval(tfield.value);
                newrest = expr.test(tarea.value);
                result.innerHTML = newrest;

                parseMarkedResult();
            } catch (e)
            {
                result.innerHTML = "Wrong Format of literal form";
                wrongFormatOfExpression();
            }
        }
    }

    //  ----------------------------- search() ---------------------------------      
    if (_search.checked == true)
    {
        if (_fform.checked == true)
        {
            try {
                expr = selectModifier();
                newrest = tarea.value.search(expr);
                result.innerHTML = newrest;

                parseMarkedResult();
            } catch (e)
            {
                result.innerHTML = "Wrong Format of full form";
                wrongFormatOfExpression();
            }
        }

        if (_sform.checked == true)
        {
            try {
                expr = eval(tfield.value);
                newrest = tarea.value.search(expr);
                result.innerHTML = newrest;

                parseMarkedResult();
            } catch (e)
            {
                result.innerHTML = "Wrong Format of literal form";
                wrongFormatOfExpression();
            }
        }
    }


    // ------------------------------ exec() -----------------------------------
    if (_exec.checked == true)
    {
        if (_fform.checked == true)
        {
            try {
                expr = selectModifier();
                newrest = expr.exec(tarea.value);
                result.innerHTML = newrest;

                parseMarkedResult();
            } catch (e)
            {
                result.innerHTML = "Wrong Format of full form";
                wrongFormatOfExpression();
            }
        }

        if (_sform.checked == true)
        {
            try {
                expr = eval(tfield.value);
                newrest = expr.exec(tarea.value);
                result.innerHTML = newrest;

                parseMarkedResult();
            } catch (e)
            {
                result.innerHTML = "Wrong Format of literal form";
                wrongFormatOfExpression();
            }
        }
    }


    // ------------------------------ replace() --------------------------------
    // tarea.value.replace(expr,replacevalue.value)
    if (_replace.checked == true)
    {
        if (_fform.checked == true)
        {
            try {
                expr = selectModifier();

//                if(tfield.value == '') 
//                    result.innerHTML = "Wrong Format of full form";

                newrest = tarea.value.replace(expr, replacevalue.value);
                result.innerHTML = newrest;

                newrest = expr.source; // in order to keep right highlight in marked result

                parseMarkedResult();
            } catch (e)
            {
                result.innerHTML = "Wrong Format of full form";
                wrongFormatOfExpression();
            }
        }

        if (_sform.checked == true)
        {
            try {
                expr = eval(tfield.value);
                newrest = tarea.value.replace(expr, replacevalue.value);
                result.innerHTML = newrest;

                newrest = expr.source; // in order to keep right highlight in marked result
                //alert("expr!!! : " + newrest);

                parseMarkedResult();
            } catch (e)
            {
                result.innerHTML = "Wrong Format of literal form";
                wrongFormatOfExpression();
            }
        }
    }

    // ------------------------------- match() ---------------------------------
    if (_match.checked == true)
    {
        if (_fform.checked == true)
        {
            try {
                expr = selectModifier();
//                newrest = expr.exec(tarea.value);   
                newrest = tarea.value.match(expr);
                result.innerHTML = newrest;
                resultForMatch(); // to avoid case when compare is absent !!!

                parseMarkedResult();
            } catch (e)
            {
                result.innerHTML = "Wrong Format of full form";
                //  alert("Wrong Format of full form");
                wrongFormatOfExpression();

            }
        }

        if (_sform.checked == true)
        {
            try {
                expr = eval(tfield.value);
//                newrest = expr.exec(tarea.value);
                newrest = tarea.value.match(expr);
                result.innerHTML = newrest;
                resultForMatch(); // to avoid case when compare is absent !!!

                parseMarkedResult();
                catchWrongFormatsInField();

            } catch (e)
            {
                result.innerHTML = "Wrong Format of literal form";
                wrongFormatOfExpression();
            }
        }
    }

    // used for property 'global;
    if (gglobal)
    {
//        alert("patt1 : " + patt1 );
        catchWrongFormatsInField();
        wrongFormatOfExpression();

        var str = tfield.value;
        var strArr = str.split("/"); // возвращает массив элементов
        if (strArr.length !== 3)
        {
            mrest.innerHTML = "Wrong format of literal form";
            mrest.style.color = "red";
        }
        else
        {
            try {
                expr = eval(tfield.value);

                var str;
                if (expr.global == true)
                {
                    str = "  - ''g'' modifier is set";
                    mrest.style.color = "green";
                }
                else {
                    alert("NOT ");
                    str = "  - ''g'' modifier is not set";
                    mrest.style.color = "red";
                }

                mrest.innerHTML = expr.global + str;

                newrest = expr.global + str;
                result.innerHTML = newrest;
            } catch (e) {
                result.innerHTML = "Wrong Format of literal form";
                mrest.style.color = "red";
                wrongFormatOfExpression();
            }
        }
    }
//    else {
//        mrest.style.color = "black";
//    }

    //it is used for property 'ignoreCase'
    if (ignorCase)
    {
        catchWrongFormatsInField();
        wrongFormatOfExpression();

        var str = tfield.value;
        var strArr = str.split("/"); // возвращает массив элементов
        if (strArr.length !== 3)
        {
            mrest.innerHTML = "Wrong format of literal form";
            mrest.style.color = "red";
        }
        else
        {
            try {
                expr = eval(tfield.value);

                var str;
                if (expr.ignoreCase == true)
                {
                    str = "  - ''i'' modifier is set";
                    mrest.style.color = "green";
                }
                else {
                    str = "  - ''i'' modifier is not set";
                    mrest.style.color = "red";
                }

                mrest.innerHTML = expr.ignoreCase + str;

                newrest = expr.ignoreCase + str;
                result.innerHTML = newrest;
            } catch (e) {
                result.innerHTML = "Wrong Format of literal form";
                mrest.style.color = "red";
                wrongFormatOfExpression();
            }
        }
    }

    //it is used for property 'multiline'
    if (mmultiline)
    {
        catchWrongFormatsInField();
        wrongFormatOfExpression();

        var str = tfield.value;
        var strArr = str.split("/"); // возвращает массив элементов
        if (strArr.length !== 3)
        {
            mrest.innerHTML = "Wrong format of literal form";
            mrest.style.color = "red";
        }
        else
        {
            try {
                expr = eval(tfield.value);

                var str;
                if (expr.multiline == true)
                {
                    str = "  - ''m'' modifier is set";
                    mrest.style.color = "green";
                }
                else {
                    str = "  - ''m'' modifier is not set";
                    mrest.style.color = "red";
                }

                mrest.innerHTML = expr.multiline + str;

                newrest = expr.multiline + str;
                result.innerHTML = newrest;
            } catch (e) {
                result.innerHTML = "Wrong Format of literal form";
                mrest.style.color = "red";
                wrongFormatOfExpression();
            }
        }
    }

    //it is used for property 'source'
    if (ssource)
    {
        catchWrongFormatsInField();
        wrongFormatOfExpression();

        var str = tfield.value;
        var strArr = str.split("/"); // возвращает массив элементов
        if (strArr.length !== 3)
        {
            mrest.innerHTML = "Wrong format of literal form";
            mrest.style.color = "red";
        }
        else
        {
            try {
                expr = eval(tfield.value);

                var str;
                if (expr.source !== null)
                {
                    str = " The text of the RegExp is:  ";
                    mrest.style.color = "green";
                }
                else {
                    str = " The text of the RegExp is null ";
                    mrest.style.color = "red";
                }

                mrest.innerHTML = str + expr.source;

                newrest = str + expr.source;
                result.innerHTML = newrest;
            } catch (e) {
                result.innerHTML = "Wrong Format of literal form";
                mrest.style.color = "red";
                wrongFormatOfExpression();
            }
        }
    }
    //it is used for property 'toString'
    if (ttostring)
    {
        catchWrongFormatsInField();

        var str = tfield.value;
        var strArr = str.split("/"); // возвращает массив элементов
        if (_fform.checked == true)
        {
            if (strArr.length !== 1)
            {
                mrest.innerHTML = "Wrong format of literal form";
                mrest.style.color = "red";
                result.innerHTML = "Wrong format of literal form";
            }
            else
            {
                try {
                    expr = new RegExp(tfield.value, "" + selectedValue);
                    //  expr = eval(tfield.value);

                    mrest.innerHTML = expr.toString();

                    newrest = expr.toString();
                    result.innerHTML = newrest;
                } catch (e) {
                    result.innerHTML = "Wrong Format of literal form";
                    mrest.style.color = "red";
                    wrongFormatOfExpression();
                }
            }
        } //--

        if (_sform.checked == true)
        {
            //alert(strArr.length);
            if (strArr.length !== 3)
            {
                mrest.innerHTML = "Wrong format of literal form";
                mrest.style.color = "red";
                result.innerHTML = "Wrong format of literal form";
            }
            else
            {
                try {
                    expr = eval(tfield.value);

                    mrest.innerHTML = expr.toString();

                    newrest = expr.toString();
                    result.innerHTML = newrest;

//                    var rexp1 = /\D/g;
//                    var rexp2 = /\W/g
//                    if( (strArr[2].match(rexp1)) || (strArr[2].match(rexp2))  )
//                    {
//                       result.innerHTML = "Wrong Format of literal form"; 
//                       mrest.innerHTML = "Wrong Format of literal form"; 
//                       mrest.style.color = "red";
//                    }
                    wrongFormatOfExpression();
                } catch (e) {
                    result.innerHTML = "Wrong Format of literal form";
                    mrest.style.color = "red";
                    wrongFormatOfExpression();
                }
            }
        }


    }

}
//-----------------------wrong formats -----------------------------------------
function catchWrongFormatsInField()
{
    var frmt0 = /\w/;
    var expr0 = tfield.value.match(frmt0);

    mrest.style.color = "black";

    if (expr0 == null)
    {
        mrest.innerHTML = tarea.value;
        //mrest.style.color = "black";
        result.innerHTML = "Wrong Format of literal form";
    }

    if ((tfield.value == '//') || (tfield.value == '//') || (tfield.value == '') ||
            (tfield.value == '/'))
    {
        mrest.innerHTML = tarea.value;
        //mrest.style.color = "black";
        if (gglobal)
        {
            mrest.innerHTML = "Wrong Format of literal form";
        }
    }
}

function resultForMatch()
{
    if (result.innerHTML == "")
        result.innerHTML = "null";
}

function selectModifier()
{
    selectedValue = objSel.options[objSel.selectedIndex].value;

    if (selectedValue == 'modifiers')
    {
        expr = new RegExp(tfield.value);
        //alert(selectedValue);
        // alert("HHHH ::" + expr);
    }
    else
    {
        expr = new RegExp(tfield.value, "" + selectedValue);
        // alert(selectedValue);
        // alert("HHH-- ::" + expr);
    }
    return expr;
}


function textAreaValue()
{
//    initial = 0;
    document.getElementById('search').value = tarea.value;
}

function select_fform()
{
    if (_fform.disabled)
        _fform.disabled = false;

    if (_fform.checked == true)
    {
        _sform.checked = false;
        objSel.disabled = false;
        //  tfield.value = "";
    }
}

function select_sform()
{
    if (_sform.disabled)
        _sform.disabled = false;

    if (_sform.checked == true)
    {
        _fform.checked = false;
        objSel.disabled = true;
        //tfield.value = "";
    }
}

function selectedFForm()
{
    _fform.checked = true;
    _sform.checked = false;
    objSel.disabled = false;
}

function selectedSForm()
{
    _sform.checked = true;
    _fform.checked = false;
    selectedValue = 'modifiers';
    objSel.disabled = true; // block 'modifiers' if short_form is enabled
}

function  select_test()
{
    if (_test.checked == true)
    {
        replacevalue.style.display = "none";
        _search.checked = false;
        _exec.checked = false;
        _replace.checked = false;
        _match.checked = false;
    }
}

function select_search()
{
    if (_search.checked == true)
    {
        replacevalue.style.display = "none";
        _test.checked = false;
        _exec.checked = false;
        _replace.checked = false;
        _match.checked = false;
    }
}

function select_exec()
{
    if (_exec.checked == true)
    {
        replacevalue.style.display = "none";
        _test.checked = false;
        _search.checked = false;
        _replace.checked = false;
        _match.checked = false;
    }
}

function select_replace()
{
    if (_replace.checked == true)
    {
        replacevalue.style.display = "inline";
        _test.checked = false;
        _search.checked = false;
        _exec.checked = false;
        _match.checked = false;
    }
}

function select_match()
{
    if (_match.checked == true)
    {
        replacevalue.style.display = "none";
        _test.checked = false;
        _search.checked = false;
        _exec.checked = false;
        _replace.checked = false;
    }

}

function disableAll()
{
    _match.checked = false;
    replacevalue.style.display = "none";
    _test.checked = false;
    _search.checked = false;
    _exec.checked = false;
    _replace.checked = false;

    _match.disabled = true;
    _test.disabled = true;
    _search.disabled = true;
    _exec.disabled = true;
    _replace.disabled = true;
}

function enableAll()
{
    _match.disabled = false;
    _test.disabled = false;
    _search.disabled = false;
    _exec.disabled = false;
    _replace.disabled = false;
}

function selectedTest()
{
    _test.checked = true;
}

function selectedSearch()
{
    _search.checked = true;
}

function selectedExec()
{
    _exec.checked = true;
}

function selectedReplace()
{
    _replace.checked = true;
}

function selectedMatch()
{
    _match.checked = true;
}

// ====================== checkboxes 'shortForm' & 'fullForm' ==================
var initSForm = 0; // checkbox 'shortForm'
var initFForm = 0; // checkbox 'fullForm'
function resetSForm()
{
    initFForm = 0;
    initSForm++;

    //alert("sssss");
    var slash = /\//g;

    if (expr !== undefined)
    {
        if ((!tfield.value.match(slash)) && (initSForm == 1))
            tfield.value = "/" + expr.source + "/";
    } else
    {
        tfield.value = "/" + patt1.source + "/";
    }
}

function resetFForm()
{
    initSForm = 0; //
    initFForm++; //

    var slash = /\//g;

    // alert("sssss :  " + expr );

    if (expr !== undefined)
    {
        // expr = new RegExp(tfield.value, "" + selectedValue);
        if ((tfield.value.match(slash)) && (initFForm == 1))
            tfield.value = expr.source;
    } else
    {
        tfield.value = patt1.source;
    }
}

//---------------------------- -------------------------------------------------

//document.getElementsByTagName('BODY')[0].addEventListener("load", initValuesOnload );
//
function initSettingsOnload()
{
    var str = "Австралия Бахрейн";
    var patt = /страл/gim;

    patt1 = patt;

    tarea.value = str;

    tfield.value = patt1;

    newrest = str.match(patt1); // 

    result.innerHTML = newrest;

    selectedMatch();// select Match
    select_match(); // remove other selection if exists.
    selectedSForm(); // select short form

    parseMarkedResult();
}


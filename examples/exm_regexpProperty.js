var constructorProperty = false;

function unblockTextArea_if_property_constructor_exists()
{
    tarea.disabled = false;
    constructorProperty = false; // block action 'constructor'
    tarea.style.background = "#ffffcc";
    enableAll();
}

//================================== constructor =========================================

function example1_property_constructor()
{
    expr = undefined;
    resetMarkedResult();
    disable_ignoreCase_property();
    disable_global_property();
    disable_multiline_property();
    disable_source_property();
    disable_regexpMethods_toString();
    disableAll();
    //**********************
    //******* The constructor property returns a regular expression's constructor function:
    //***********************
    _exampleExplanation("The constructor property returns a regular expression's constructor function:",  2 );
    
    tarea.value = "";
    tarea.disabled = true;
    constructorProperty = true;
    tarea.style.background = "lightgray";

    tfield.value = "Hello World";

    objSel.selectedIndex = "2";
    selectedValue = 'g';

    expr = new RegExp(tfield.value, "" + selectedValue);

    var res = expr.constructor;

    mrest.innerHTML = res;
    result.innerHTML = res;

    selectedFForm(); // select short form
}

//================================== global =========================================
var gglobal = false;
function disable_global_property()
{
    gglobal = false;
    _fform.disabled = false;
    mrest.style.color = "black";
}

function example1_property_global()
{
    expr = undefined;
    resetMarkedResult();
    unblockTextArea_if_property_constructor_exists();
    disable_ignoreCase_property();
    disable_multiline_property();
    disable_source_property();
    disable_regexpMethods_toString();
    disableAll();
    select_sform();
    _fform.disabled = true;
    //**********************
    //******* Check whether or not the "g" modifier is set:
    //***********************
    _exampleExplanation("Check whether or not the ''g'' modifier is set:",  1 );
    
    var str = "Visit W3Schools!";
    var patt = /W3S/g;
    // turn on this varible
    gglobal = true;

    patt1 = patt;

    tarea.value = str;

    tfield.value = patt1;

    var str;
    if (patt1.global == true)
    {
        str = "  - ''g'' modifier is set";
        mrest.style.color = "green";
    }
    else {
        str = "  - ''g'' modifier is not set";
        mrest.style.color = "red";
    }

    mrest.innerHTML = patt1.global + str;
    //mrest.style.color = "red";

    newrest = patt1.global + str;
    result.innerHTML = newrest;

}

//================================== ignoreCase =========================================
var ignorCase = false;
function disable_ignoreCase_property()
{
    ignorCase = false;
    _fform.disabled = false;
    mrest.style.color = "black";
}

function example1_property_ignoreCase()
{
    expr = undefined;
    resetMarkedResult();
    unblockTextArea_if_property_constructor_exists();
    disable_global_property();
    disable_multiline_property();
    disable_source_property();
    disable_regexpMethods_toString();
    disableAll();
    select_sform();
    _fform.disabled = true;
    //**********************
    //******* Check whether or not the "i" modifier is set:
    //***********************
    _exampleExplanation("Check whether or not the ''i'' modifier is set:",  1 );
    
    var str = "Visit W3Schools!";
    var patt = /W3S/i;
    // turn on this varible
    ignorCase = true;

    patt1 = patt;

    tarea.value = str;

    tfield.value = patt1;

    var str;
    if (patt1.ignoreCase === true)
    {
        str = "  - ''i'' modifier is set";
        mrest.style.color = "green";
    }
    else {
        str = "  - ''i'' modifier is not set";
        mrest.style.color = "red";
    }

    mrest.innerHTML = patt1.ignoreCase + str;
    //mrest.style.color = "red";

    newrest = patt1.ignoreCase + str;
    result.innerHTML = newrest;

}

//==================================== lastIndex ===============================

function example1_property_lastIndex()
{
    expr = undefined;
    resetMarkedResult();
    unblockTextArea_if_property_constructor_exists();
    disable_global_property();
    disable_ignoreCase_property();
    disable_multiline_property();
    disable_source_property();
    disable_regexpMethods_toString();
    //**********************
    //******* Do a global search for "ain" in a string, and output the index after a match is found:
    //***********************
    _exampleExplanation("Do a global search for ''ain'' in a string, and output the index after a match is found:",  2 );
    
    var str = "The rain in Spain stays mainly in the plain";
    var patt = /ain/g;

    patt1 = patt;

    tarea.value = str;

    tfield.value = patt1;

    result.innerHTML = "";
    
        while (patt1.test(str) == true) {
        //mrest.innerHTML += patt1.lastIndex + ", " ;
                
        newrest = "'ain' found. Index now at: " +  patt1.lastIndex + "<br>";
        result.innerHTML += newrest;
    }
    
    selectedTest();// select Test() 
    select_test(); // remove other selection if exists.
    selectedSForm(); // select short form

    parseMarkedResult();
}

//================================== multiline =========================================
var mmultiline = false;
function disable_multiline_property()
{
    mmultiline = false;
    _fform.disabled = false;
    mrest.style.color = "black";
}

function example1_property_multiline()
{
    expr = undefined;
    resetMarkedResult();
    unblockTextArea_if_property_constructor_exists();
    disable_global_property();
    disable_ignoreCase_property();
    disable_source_property();
    disable_regexpMethods_toString();
    disableAll();
    select_sform();
    _fform.disabled = true;
    //**********************
    //******* Check whether or not the "m" modifier is set:
    //***********************
    _exampleExplanation("Check whether or not the ''m'' modifier is set:",  1 );
    
    var str = "Visit W3Schools!";
    var patt = /W3S/i;
    // turn on this varible
    mmultiline = true;

    patt1 = patt;

    tarea.value = str;

    tfield.value = patt1;

    var str;
    if (patt1.multiline === true)
    {
        str = "  - ''m'' modifier is set";
        mrest.style.color = "green";
    }
    else {
        str = "  - ''m'' modifier is not set";
        mrest.style.color = "red";
    }

    mrest.innerHTML = patt1.multiline + str;
    //mrest.style.color = "red";

    newrest = patt1.multiline + str;
    result.innerHTML = newrest;
    
    }

//================================== source =========================================
var ssource = false;
function disable_source_property()
{
    ssource = false;
    _fform.disabled = false;
    mrest.style.color = "black";
}

function example1_property_source()
{
    expr = undefined;
    resetMarkedResult();
    unblockTextArea_if_property_constructor_exists();
    disable_global_property();
    disable_ignoreCase_property();
    disable_multiline_property();
    disable_regexpMethods_toString();
    disableAll();
    select_sform();
    _fform.disabled = true;
    //**********************
    //******* Return the text of the RegExp pattern:
    //***********************
    _exampleExplanation("Return the text of the RegExp pattern:",  1 );
    
    var str = "Visit W3Schools";
    var patt = /W3S/g;
    // turn on this varible
    ssource = true;

    patt1 = patt;

    tarea.value = str;

    tfield.value = patt1;

    var str;
    if (patt1.source !== null)
    {
        str = " The text of the RegExp is: ";
        mrest.style.color = "green";
    }
    else {
        str = " The text of the RegExp is null ";
        mrest.style.color = "red";
    }

    mrest.innerHTML = str +  patt1.source ;

    newrest = str +  patt1.source ;
    result.innerHTML = newrest;
    
    }
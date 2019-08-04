//================================== compile() =========================================

function example1_regexpMethods_compile()
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
    //******* Do a global search for "man" in a string, and replace it with "person". 
    //******* Then change the regular expression and replace either "man" or "woman" with "person",
    //******* with the compile() method:
    //***********************
    _exampleExplanation("Do a global search for ''man'' in a string, and replace it with ''person''.\n\
                        Then change the regular expression and replace either ''man'' or ''woman'' with\n\
                        ''person'', with the compile() method: ",  2 );
    
    var str = "Every man in the world! Every woman on earth!";
    var patt= /man/g;

    
    patt1 = patt;
    
    tarea.value = str;

    tfield.value = patt;
    replacevalue.value = "person";

    newrest = str.replace(patt1, replacevalue.value );
    result.innerHTML = newrest ;

    selectedReplace();// select Replace
    select_replace(); // remove other selection if exists.
    selectedSForm(); // select short form

    parseMarkedResult();
}

function example2_regexpMethods_compile()
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
    //******* Do a global search for "man" in a string, and replace it with "person". 
    //******* Then change the regular expression and replace either "man" or "woman" with "person",
    //******* with the compile() method:
    //***********************
    _exampleExplanation("Do a global search for ''man'' in a string, and replace it with ''person''.\n\
                        Then change the regular expression and replace either ''man'' or ''woman'' with\n\
                        ''person'', with the compile() method: ",  3 );
    
    var str = "Every man in the world! Every woman on earth!";
    var patt=/(wo)?man/g;

    
    patt1 = patt;
    patt1.compile(patt1); 
    
    tarea.value = str;

    tfield.value = patt;
    replacevalue.value = "person";

    newrest = str.replace(patt1, replacevalue.value );
    result.innerHTML = newrest ;

    selectedReplace();// select Replace
    select_replace(); // remove other selection if exists.
    selectedSForm(); // select short form

    parseMarkedResult();
}


//================================== exec() =========================================

function example1_regexpMethods_exec()
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
    //******* Search a string for the string "be". 
    //******* Since there is an "be" in the string, the result of res will be:
    //***********************
    _exampleExplanation("Search a string for the string ''be''.\n\
                         Since there is an ''be'' in the string, the result of res will be:",  2 );
    showOtherExamples(2, "example 1","example 2","","","","","","","","",
                          example2_regexpMethods_exec,
                          example3_regexpMethods_exec,null,null,null,
                          null,null,null,null,null );
    
    
    var str = "The best things in life are free";
    var patt = new RegExp("be");

    
    patt1 = /be/;
    
    tarea.value = str;

    tfield.value = "be";

    newrest = patt.exec(str); 
    result.innerHTML = newrest;

    selectedExec();// select Exec
    select_exec(); // remove other selection if exists.
    selectedFForm(); // select short form
    objSel.selected = "modifiers";
    //selectedValue = 'modifiers';

    parseMarkedResult();
}

function example2_regexpMethods_exec()
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
    //******* Do a global search, and test for "Hello" :
    //***********************
    _exampleExplanation("Do a global search, and test for ''Hello'' :",  1 );
    
    var str = "Hello world!";
    var patt = /Hello/g;

    
    patt1 = patt;
    
    tarea.value = str;

    tfield.value = patt1;

    newrest = patt1.exec(str); 
    result.innerHTML = newrest;

    selectedExec();// select Exec
    select_exec(); // remove other selection if exists.
    selectedSForm(); // select short form

    parseMarkedResult();
}

function example3_regexpMethods_exec()
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
    //******* Do a global search, and test for "java" :
    //***********************
    _exampleExplanation("Do a global search, and test for ''java'' :",  1 );
    
    var str = "Hello world java!";
    var patt = /java/g;

    
    patt1 = patt;
    
    tarea.value = str;

    tfield.value = patt1;

    newrest = patt1.exec(str); 
    result.innerHTML = newrest;

    selectedExec();// select Exec
    select_exec(); // remove other selection if exists.
    selectedSForm(); // select short form

    parseMarkedResult();
}

//================================= test() =====================================

function example1_regexpMethods_test()
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
    //******* Search a string "life":
    //***********************
    _exampleExplanation("Search a string ''life'':",  1 );
    
    var str = "The best things in life are free";
    var patt = new RegExp("life");

    
    patt1 = /life/;
    
    tarea.value = str;

    tfield.value = patt.source;

    newrest = patt.test(str); 
    result.innerHTML = newrest;

    selectedTest();// select Test
    select_test(); // remove other selection if exists.
    selectedFForm(); // select short form
    objSel.selected = "modifiers";
    //selectedValue = 'modifiers';

    parseMarkedResult();
}

// =============================== toString() ==================================
var ttostring = false;

function disable_regexpMethods_toString()
{
    tarea.disabled = false;
    ttostring = false; // block action 'constructor'
    tarea.style.background = "#ffffcc";
    enableAll();
}

function example1_regexpMethods_toString()
{
    expr = undefined;
    resetMarkedResult();
    disable_ignoreCase_property();
    disable_global_property();
    disable_multiline_property();
    disable_source_property();
    disableAll();
    //**********************
    //******* Return the string value of the regular expression:
    //***********************
    _exampleExplanation("Return the string value of the regular expression:",  1 );
    
    tarea.value = "";
    tarea.disabled = true;
    ttostring = true;
    tarea.style.background = "lightgray";

    tfield.value = "Hello World";

    objSel.selectedIndex = "2";
    selectedValue = 'g';

    expr = new RegExp(tfield.value, "" + selectedValue);

    var res = expr.toString();

    mrest.innerHTML = res;
    result.innerHTML = res;

    selectedFForm(); // select short form
}
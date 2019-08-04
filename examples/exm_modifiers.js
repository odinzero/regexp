//------------------------------ g ---------------------------------------------
function example1_g()
{
    expr = undefined; 
    resetMarkedResult();
    unblockTextArea_if_property_constructor_exists();
    disable_global_property();
    disable_ignoreCase_property();
    disable_multiline_property();
    disable_source_property();
    disable_regexpMethods_toString();
    //********************** Do a global search for "is":***********************
    _exampleExplanation("Do a global search for ''is'':",  1 );
    showOtherExamples(1, "global, case-insensitive search for ''is''","","","","","","","","","",
                         example2_g, null,null,null,null,null,null,null,null,null );
    
    var str = "Is this all there is?";
    var patt = /is/g;
    
    patt1 = patt;
    
    tarea.value = str;

    //tempField = patt1;
    tfield.value = patt1;

    newrest = str.match(patt1); 
    result.innerHTML = newrest;

    selectedMatch();// select Match
    select_match(); // remove other selection if exists.
    selectedSForm(); // select short form

    parseMarkedResult();
}

function example2_g()
{
     expr = undefined; 
    resetMarkedResult();
    unblockTextArea_if_property_constructor_exists();
    disable_global_property();
    disable_ignoreCase_property();
    disable_multiline_property();
    disable_source_property();
    disable_regexpMethods_toString();
    //**************** Do a global, case-insensitive search for "is" *************
    _exampleExplanation("Do a global, case-insensitive search for ''is''",  1 );
    
    var str = "Is this all there is?";
    var patt = /is/gi;
    
    patt1 = patt;
    
    tarea.value = str;

    //tempField = patt1;
    tfield.value = patt1;

    newrest = str.match(patt1);
    result.innerHTML = newrest;

    selectedMatch();// select Match
    select_match(); // remove other selection if exists.
    selectedSForm(); // select short form

    parseMarkedResult();
}

//-------------------------------- m -------------------------------------------

   
function example1_m()
{
     expr = undefined; 
    resetMarkedResult();
    unblockTextArea_if_property_constructor_exists();
    disable_global_property();
    disable_ignoreCase_property();
    disable_multiline_property();
    disable_source_property();
    disable_regexpMethods_toString();
    // Do a multiline search for "is" at the beginning of each line in a string:
    // *************************************************************************
    _exampleExplanation("Do a multiline search for ''is'' at the beginning of each line in a string:",  2 );
    showOtherExamples(3, "example 1","example 2","example 3","","","","","","","",
                         example2_m, example3_m, example4_m,null,null,null,null,null,null,null );
    
    
    var str = "\nIs th\nis it?";
    var patt = /^is/m;
    
    patt1 = patt;
    
    tarea.value = str;

    //tempField = patt1;
    tfield.value = patt1;

    newrest = str.match(patt1);
    result.innerHTML = newrest;

    selectedMatch();// select Match
    select_match(); // remove other selection if exists.
    selectedSForm(); // select short form

    parseMarkedResult();
}


function example2_m()
{
    expr = undefined; 
    resetMarkedResult();
    unblockTextArea_if_property_constructor_exists();
    disable_global_property();
    disable_ignoreCase_property();
    disable_multiline_property();
    disable_source_property();
    disable_regexpMethods_toString();
    // Do a global, multiline search for "is" at the beginning of each line in a string.
    // *************************************************************************
    _exampleExplanation("Do a global, multiline search for ''is'' at the beginning of each line in a string.",  2 );
    
    var str = "\nIs th\nis it?";
    var patt = /^is/gm;
    
    patt1 = patt;
    
    tarea.value = str;

    //tempField = patt1;
    tfield.value = patt1;

    newrest = str.match(patt1);
    result.innerHTML = newrest;

    selectedMatch();// select Match
    select_match(); // remove other selection if exists.
    selectedSForm(); // select short form

    parseMarkedResult();
}


function example3_m()
{
    expr = undefined; 
    resetMarkedResult();
    unblockTextArea_if_property_constructor_exists();
    disable_global_property();
    disable_ignoreCase_property();
    disable_multiline_property();
    disable_source_property();
    disable_regexpMethods_toString();
    // Do a global, case-insensitive, multiline search for "is" at the beginning of each line in a string:
    // *************************************************************************
    _exampleExplanation("Do a global, case-insensitive, multiline search for ''is'' at the beginning of each line in a string:",  2 );
    
    var str = "\nIs th\nis it?";
    var patt = /^is/gmi;
    
    patt1 = patt;
    
    tarea.value = str;

    //tempField = patt1;
    tfield.value = patt1;

    newrest = str.match(patt1);
    result.innerHTML = newrest;

    selectedMatch();// select Match
    select_match(); // remove other selection if exists.
    selectedSForm(); // select short form

    parseMarkedResult();
}


function example4_m()
{
    expr = undefined; 
    resetMarkedResult();
    unblockTextArea_if_property_constructor_exists();
    disable_global_property();
    disable_ignoreCase_property();
    disable_multiline_property();
    disable_source_property();
    disable_regexpMethods_toString();
    // Do a global, multiline search for "is" at the end of each line in a string:
    // *************************************************************************
    _exampleExplanation("Do a global, multiline search for ''is'' at the end of each line in a string:",  2 );
    
    var str = "\nIs th\nis it?";
    var patt = /is$/gm;
    
    patt1 = patt;
    
    tarea.value = str;

    //tempField = patt1;
    tfield.value = patt1;

    newrest = str.match(patt1);
    result.innerHTML = newrest;

    selectedMatch();// select Match
    select_match(); // remove other selection if exists.
    selectedSForm(); // select short form

    parseMarkedResult();
}
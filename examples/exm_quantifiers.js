//================================== /n+/ =========================================

function example1_quantifier_plus()
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
    //******* Do a global search for at least one "o":
    //***********************
    _exampleExplanation("Do a global search for at least one ''o'':",  1 );
    
    var str = "Hellooo World! Hello W3Schools!"; 
    var patt = /o+/g;

    
    patt1 = patt;
    
    tarea.value = str;

    tfield.value = patt1;

    newrest = str.match(patt1); 
    result.innerHTML = newrest;

    selectedMatch();// select Match
    select_match(); // remove other selection if exists.
    selectedSForm(); // select short form

    parseMarkedResult();
}

//================================== /n*/ =========================================

function example1_quantifier_star()
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
    //******* Do a global search for an "l", followed by zero or more "o" characters:
    //***********************
    _exampleExplanation("Do a global search for an ''l'', followed by zero or more ''o'' characters:",  2 );
    showOtherExamples(1, "example 1","","","","","","","","","",
                          example2_quantifier_star,
                          null,null,null,null,
                          null,null,null,null,null );
    
    var str = "Hellooo World! Hello W3Schools!"; 
    var patt = /lo*/g;

    
    patt1 = patt;
    
    tarea.value = str;

    tfield.value = patt1;

    newrest = str.match(patt1); 
    result.innerHTML = newrest;

    selectedMatch();// select Match
    select_match(); // remove other selection if exists.
    selectedSForm(); // select short form

    parseMarkedResult();
}

function example2_quantifier_star()
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
    //******* Do a global search for a "1", followed by zero or more "0" characters:
    //***********************
    _exampleExplanation("Do a global search for a ''1'', followed by zero or more ''0'' characters:",  2 );
    
    var str = "1, 100 or 1000?";
    var patt = /10*/g;

    
    patt1 = patt;
    
    tarea.value = str;

    tfield.value = patt1;

    newrest = str.match(patt1); 
    result.innerHTML = newrest;

    selectedMatch();// select Match
    select_match(); // remove other selection if exists.
    selectedSForm(); // select short form

    parseMarkedResult();
}

//================================== /n?/ =========================================

function example1_quantifier_question()
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
    //******* Do a global search for a "1", followed by zero or one "0" characters:
    //***********************
    _exampleExplanation("Do a global search for a ''1'', followed by zero or one ''0'' characters:",  2 );
    
    var str = "1, 100 or 1000?";
    var patt = /10?/g;

    
    patt1 = patt;
    
    tarea.value = str;

    tfield.value = patt1;

    newrest = str.match(patt1); 
    result.innerHTML = newrest;

    selectedMatch();// select Match
    select_match(); // remove other selection if exists.
    selectedSForm(); // select short form

    parseMarkedResult();
}

//================================== {X} =========================================

function example1_quantifier_x_inBrackets()
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
    //******* Do a global search for a substring that contains a sequence of four digits:
    //***********************
    _exampleExplanation("Do a global search for a substring that contains a sequence of four digits:",  2 );
    
    var str = "100, 1000 or 10000?";
    var patt = /\d{4}/g;

    
    patt1 = patt;
    
    tarea.value = str;

    tfield.value = patt1;

    newrest = str.match(patt1); 
    result.innerHTML = newrest;

    selectedMatch();// select Match
    select_match(); // remove other selection if exists.
    selectedSForm(); // select short form

    parseMarkedResult();
}

//================================== {X,Y} =========================================

function example1_quantifier_xy_inBrackets()
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
    //******* Do a global search for a substring that contains a sequence of three to four digits:
    //***********************
    _exampleExplanation("Do a global search for a substring that contains a sequence of three to four digits:",  2 );
    
    var str = "100, 1000 or 10000?";
    var patt = /\d{3,4}/g; 

    
    patt1 = patt;
    
    tarea.value = str;

    tfield.value = patt1;

    newrest = str.match(patt1); 
    result.innerHTML = newrest;

    selectedMatch();// select Match
    select_match(); // remove other selection if exists.
    selectedSForm(); // select short form

    parseMarkedResult();
}

//================================== {X,} =========================================

function example1_quantifier_x_comma_inBrackets()
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
    //******* Do a global search for a substring that contains a sequence of at least three digits:
    //***********************
    _exampleExplanation("Do a global search for a substring that contains a sequence of at least three digits:",  2 );
    
    var str = "100, 1000 or 10000?";
    var patt = /\d{3,}/g; 

    
    patt1 = patt;
    
    tarea.value = str;

    tfield.value = patt1;

    newrest = str.match(patt1); 
    result.innerHTML = newrest;

    selectedMatch();// select Match
    select_match(); // remove other selection if exists.
    selectedSForm(); // select short form

    parseMarkedResult();
}

//================================== {n$} =========================================

function example1_quantifier_dollar_inBrackets()
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
    //******* Do a global search for "is" at the end of a string:
    //***********************
    _exampleExplanation("Do a global search for ''is'' at the end of a string:",  1 );
    
    var str = "Is this his";
    var patt = /is$/g;

    
    patt1 = patt;
    
    tarea.value = str;

    tfield.value = patt1;

    newrest = str.match(patt1); 
    result.innerHTML = newrest;

    selectedMatch();// select Match
    select_match(); // remove other selection if exists.
    selectedSForm(); // select short form

    parseMarkedResult();
}

//================================== {n^} =========================================

function example1_quantifier_notdollar_inBrackets()
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
    //******* Do a global search for "Is" at the beginning of a string:
    //***********************
    _exampleExplanation("Do a global search for ''Is'' at the beginning of a string:",  1 );
    
    var str = "Is this his";
    var patt = /^Is/g;

    
    patt1 = patt;
    
    tarea.value = str;

    tfield.value = patt1;

    newrest = str.match(patt1); 
    result.innerHTML = newrest;

    selectedMatch();// select Match
    select_match(); // remove other selection if exists.
    selectedSForm(); // select short form

    parseMarkedResult();
}

//================================== {?=n} =========================================

function example1_quantifier_questionequal_inBrackets()
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
    //******* Do a global search for "is" followed by " all":
    //***********************
    _exampleExplanation("Do a global search for ''is'' followed by ''all''",  1 );
    
    var str = "Is this all there is";
    var patt = /is(?= all)/;

    
    patt1 = patt;
    
    tarea.value = str;

    tfield.value = patt1;

    newrest = str.match(patt1); 
    result.innerHTML = newrest;

    selectedMatch();// select Match
    select_match(); // remove other selection if exists.
    selectedSForm(); // select short form

    parseMarkedResult();
}

//================================== {?!n} =========================================

function example1_quantifier_questionznak_inBrackets()
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
    //******* Do a global, case insensitive search for "is" not followed by " all":
    //***********************
    _exampleExplanation("Do a global, case insensitive search for ''is'' not followed by ''all'':",  2 );
    
    var str = "Is this all there is";
    var patt = /is(?! all)/gi;

    
    patt1 = patt;
    
    tarea.value = str;

    tfield.value = patt1;

    newrest = str.match(patt1); 
    result.innerHTML = newrest;

    selectedMatch();// select Match
    select_match(); // remove other selection if exists.
    selectedSForm(); // select short form

    parseMarkedResult();
}


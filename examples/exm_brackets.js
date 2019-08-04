
//=================================== [abc] ====================================

function example1_brackets_abc()
{
    expr = undefined; 
    resetMarkedResult();
    unblockTextArea_if_property_constructor_exists();
    disable_global_property();
    disable_ignoreCase_property();
    disable_multiline_property();
    disable_source_property();
    disable_regexpMethods_toString();
    //******* Do a global search for the character "h" in a string:***********************
    _exampleExplanation("Do a global search for the character ''h'' in a string:",  1 );
    showOtherExamples(7, "exm1","exm2","exm3","exm4","exm5","exm6","exm7","","","",
                          example2_brackets_abc,
                          example3_brackets_abc,
                          example4_brackets_abc,
                          example5_brackets_abc,
                          example6_brackets_abc,
                          example7_brackets_abc,
                          example8_brackets_abc,
                          null,null,null );
    
    
    var str = "Is this all there is?";
    var patt = /[h]/g;
    
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


function example2_brackets_abc()
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
    //******* Do a global search for the characters "i" and "s" in a string:
    //***********************
    _exampleExplanation("Do a global search for the characters ''i'' and ''s'' in a string:",  1 );
    
    var str = "Do you know if this is all there is?";
    var patt = /[is]/gi; 
    
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


function example3_brackets_abc()
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
    //******* Do a global search for the character-span from lowercase "a" to lowercase "h" in a string:
    //***********************
    _exampleExplanation("Do a global search for the character-span from lowercase ''a'' to lowercase ''h'' in a string:",  2 );
    
    var str = "Is this all there is?";
    var patt = /[a-h]/g;
    
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


function example4_brackets_abc()
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
    //******* Do a global search for the character-span from uppercase "A" to uppercase "E":
    //***********************
    _exampleExplanation("Do a global search for the character-span from uppercase ''A'' to uppercase ''E:''",  2 );
    
    var str = "I SCREAM FOR ICE CREAM!";
    var patt = /[A-E]/g;
    
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

function example5_brackets_abc()
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
    //******* Do a global search for the character-span from uppercase "A" to lowercase "e"
    // (will search for all uppercase letters, but only lowercase letters from a to e.)
    //***********************
    _exampleExplanation("Do a global search for the character-span from uppercase ''A'' to lowercase ''e''\n\
                        (will search for all uppercase letters, but only lowercase letters from a to e.)",  3 );
    
    var str = "I Scream For Ice Cream, is that OK?!";
    var patt = /[A-e]/g;
    
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


function example6_brackets_abc()
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
    //******* Do a global, case-insensitive search for the character-span [a-s]:
    //***********************
    _exampleExplanation("Do a global, case-insensitive search for the character-span [a-s]:",  2 );
    
    var str = "I Scream For Ice Cream, is that OK?!";
    var patt = /[a-s]/gi;
    
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


function example7_brackets_abc()
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
    //******* A demonstration of "g"  for characters:
    //***********************
    _exampleExplanation("A demonstration of ''g''  for characters:",  1 );
    
    var str = "THIS This this";
    var patt = /[THIS]/g;

    
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

function example8_brackets_abc()
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
    //******* A demonstration of "gi"-search for characters:
    //***********************
    _exampleExplanation("A demonstration of ''gi''-search for characters:",  1 );
    
    var str = "THIS This this";
    var patt = /[THIS]/gi;

    
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

//=================================== [^abc] ===================================


function example1_brackets_not_abc()
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
    //******* Do a global search for characters that are NOT inside the brackets [h]:
    //***********************
    _exampleExplanation("Do a global search for characters that are NOT inside the brackets [h]:",  2 );
    
    var str = "Is this all there is?";
    var patt = /[^h]/g;
    showOtherExamples(5, "exm1","exm2","exm3","exm4","exm5","","","","","",
                          example2_brackets_not_abc,
                          example3_brackets_not_abc,
                          example4_brackets_not_abc,
                          example5_brackets_not_abc,
                          example6_brackets_not_abc,
                          null,null,null,null,null );

    
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


function example2_brackets_not_abc()
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
    //******* Do a global search for characters that are NOT "i" and "s" in a string:
    //***********************
    _exampleExplanation("Do a global search for characters that are NOT ''i'' and ''s'' in a string:",  2 );
    
    var str = "Do you know if this is all there is?";
    var patt = /[^is]/gi;

    
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


function example3_brackets_not_abc()
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
    //******* Do a global search for the character-span NOT from lowercase "a" to lowercase "h" in a string:
    //***********************
    _exampleExplanation("Do a global search for the character-span NOT from lowercase ''a''\n\
                         to lowercase ''h'' in a string:",  2 );
    
    var str = "Is this all there is?";
    var patt = /[^a-h]/g;

    
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


function example4_brackets_not_abc()
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
    //******* Do a global search for the character-span NOT from uppercase "A" to uppercase "E":
    //***********************
    _exampleExplanation("Do a global search for the character-span NOT from uppercase ''A'' to uppercase ''E'':",  2 );
    
    var str = "I SCREAM FOR ICE CREAM!";
    var patt = /[^A-E]/g;

    
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


function example5_brackets_not_abc()
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
    //******* Do a global search for the character-span NOT from uppercase "A" to lowercase "e":
    //***********************
    _exampleExplanation("Do a global search for the character-span NOT from uppercase ''A'' to lowercase ''e'':",  2 );
    
    var str = "I Scream For Ice Cream, is that OK?!";
    var patt = /[^A-e]/g;

    
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


function example6_brackets_not_abc()
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
    //******* Do a global, case-insensitive search for the character-span that's NOT [a-s]:
    //***********************
    _exampleExplanation("Do a global, case-insensitive search for the character-span that's NOT [a-s]:",  2 );
    
    var str = "I Scream For Ice Cream, is that OK?!";
    var patt = /[^a-s]/gi;

    
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

//================================ [0-9] =======================================

function example1_brackets_09()
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
    //******* Do a global search for the numbers 1, 2, 3 and 4 in a string:
    //***********************
    _exampleExplanation("Do a global search for the numbers 1, 2, 3 and 4 in a string:",  2 );
    showOtherExamples(1, "example 1","","","","","","","","","",
                          example2_brackets_09,null,null,null,null,
                          null,null,null,null,null );
    
    var str = "123456789";
    var patt = /[1-4]/g;

    
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


function example2_brackets_09()
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
    //******* Do a global search for the number "1" in a string:
    //***********************
    _exampleExplanation("Do a global search for the number ''1'' in a string:",  1 );
    
    var str = "12121212";
    var patt = /[1]/g;

    
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

// =============================== [^0-9] ======================================

function example1_brackets_not09()
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
    //******* Do a global search for the numbers that are NOT 1 to 4 in a string:
    //***********************
    _exampleExplanation("Do a global search for the numbers that are NOT 1 to 4 in a string:",  2 );
    showOtherExamples(2, "example 1","example 2","","","","","","","","",
                          example2_brackets_not09,
                          example3_brackets_not09,null,null,null,
                          null,null,null,null,null );
    
    var str = "123456789";
    var patt = /[^1-4]/g;

    
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

function example2_brackets_not09()
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
    //******* Do a global search for numbers that are NOT "1" in a string:
    //***********************
    _exampleExplanation("Do a global search for numbers that are NOT ''1'' in a string:",  2 );
    
    var str = "12121212";
    var patt = /[^1]/g;

    
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

function example3_brackets_not09()
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
    //******* Do a global search for numbers that are NOT 5 to 8 in a string:
    //***********************
    _exampleExplanation("Do a global search for numbers that are NOT 5 to 8 in a string:",  2 );
    
    var str = "123456789";
    var patt = /[^5-8]/g;

    
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

//================================== (x|y) =====================================

function example1_brackets_xy()
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
    //******* Do a global search to find any of the specified alternatives (red|green):
    //***********************
    _exampleExplanation("Do a global search to find any of the specified alternatives (red|green):",  2 );
    showOtherExamples(1, "example 1","","","","","","","","","",
                          example2_brackets_xy,
                          null,null,null,null,
                          null,null,null,null,null );
    
    var str = "re, green, red, green, gren, gr, blue, yellow";
    var patt = /(red|green)/g;

    
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

function example2_brackets_xy()
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
    //******* Do a global search to find any of the specified alternatives (0|5|7):
    //***********************
    _exampleExplanation("Do a global search to find any of the specified alternatives (0|5|7):",  2 );
    
    var str = "01234567890123456789";
    var patt = /(0|5|7)/g; 

    
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
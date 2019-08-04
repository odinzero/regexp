//================================== . =========================================

function example1_brackets_point()
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
    //******* Do a global search for "h.t" in a string:
    //***********************
    _exampleExplanation("Do a global search for ''h.t'' in a string:",  1 );
    
    var str = "That's hot!";
    var patt = /h.t/g;

    
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


//================================== \w =========================================

function example1_brackets_word()
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
    //******* Do a global search for word characters in a string:
    //***********************
    _exampleExplanation("Do a global search for word characters in a string:",  1 );
    
    var str = "Give 100%!"; 
    var patt = /\w/g;

    
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

//================================== \W =========================================

function example1_brackets_nonword()
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
    //******* Do a global search for non-word characters in a string
    //***********************
    _exampleExplanation("Do a global search for non-word characters in a string:",  1 );
    
    var str = "Give 100%!";
    var patt = /\W/g;

    
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

//================================== \d =========================================

function example1_brackets_d()
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
    //******* Do a global search for digits:
    //***********************
    _exampleExplanation("Do a global search for digits:",  1 );
    
    var str = "Give 100%!"; 
    var patt = /\d/g;

    
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

//================================== \D =========================================

function example1_brackets_D()
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
    //******* Do a global search for non-digit characters:
    //***********************
    _exampleExplanation("Do a global search for non-digit characters:",  1 );
    
    var str = "Give 100%!"; 
    var patt = /\D/g;

    
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

//================================== \s =========================================

function example1_brackets_s()
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
    //******* Do a global search for whitespace characters in a string:
    //***********************
    _exampleExplanation("Do a global search for whitespace characters in a string:",  2 );
    
    var str = "Is this all there is?";
    var patt = /\s/g;

    
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

//================================== \S =========================================

function example1_brackets_S()
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
    //******* Do a global search for non-whitespace characters in a string:
    //***********************
    _exampleExplanation("Do a global search for non-whitespace characters in a string:",  2 );
    
    var str = "Is this all there is?";
    var patt = /\S/g;

    
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

//================================== \b =========================================

function example1_brackets_b()
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
    //******* Do a global search for "W3" at the beginning or end of a word in a string:
    //***********************
    _exampleExplanation("Do a global search for ''W3'' at the beginning or end of a word in a string:",  2 );
    
    var str = "Visit W3Schools"; 
    var patt = /\bW3/g;

    
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

//================================== \B =========================================

function example1_brackets_B()
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
    //******* Do a global search for "Schools" NOT at the beginning or end of a word in a string:
    //***********************
    _exampleExplanation("Do a global search for ''Schools'' NOT at the beginning or end of a word in a string:",  2 );
    
    var str = "Visit W3Schools";
    var patt = /\BSchool/g;

    
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

//================================== \0 =========================================

function example1_brackets_0()
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
    //******* Search for a NUL character in a string:
    //***********************
    _exampleExplanation("Search for a NUL character in a string:",  1 );
    
    var str = "Visit W3Schools.\0Learn JavaScript."; 
    var patt = /\0/;

    
    patt1 = patt;
    
    tarea.value = str;

    tfield.value = patt1;

    newrest = str.search(patt1); 
    result.innerHTML = newrest;

    selectedSearch();// select Search
    select_search(); // remove other selection if exists.
    selectedSForm(); // select short form

    parseMarkedResult();
}

//================================== \n =========================================

function example1_brackets_n()
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
    //******* Search for a newline character in a string:
    //***********************
    _exampleExplanation("Search for a newline character in a string:",  1 );
    
    var str = "Visit W3Schools.\nLearn JavaScript."; 
    var patt = /\n/;

    
    patt1 = patt;
    
    tarea.value = str;

    tfield.value = patt1;

    newrest = str.search(patt1); 
    result.innerHTML = newrest;

    selectedSearch();// select Search
    select_search(); // remove other selection if exists.
    selectedSForm(); // select short form

    parseMarkedResult();
}

//================================== \f =========================================

function example1_brackets_f()
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
    //******* Search for a form feed character in a string:
    //***********************
    _exampleExplanation("Search for a form feed character in a string:",  1 );
    
    var str = "Visit W3Schools.\fLearn JavaScript."; 
    var patt = /\f/;

    
    patt1 = patt;
    
    tarea.value = str;

    tfield.value = patt1;

    newrest = str.search(patt1); 
    result.innerHTML = newrest;

    selectedSearch();// select Search
    select_search(); // remove other selection if exists.
    selectedSForm(); // select short form

    parseMarkedResult();
}

//================================== \r =========================================

function example1_brackets_r()
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
    //******* Search for a carriage return character in a string:
    //***********************
    _exampleExplanation("Search for a carriage return character in a string:",  1 );
    
    var str = "Visit\r W3Schools.Learn JavaScript."; 
    var patt = /\r/;

    
    patt1 = patt;
    
    tarea.value = str;

    tfield.value = patt1;

    newrest = str.search(patt1); 
    result.innerHTML = newrest;

    selectedSearch();// select Search
    select_search(); // remove other selection if exists.
    selectedSForm(); // select short form

    parseMarkedResult();
}

//================================== \t =========================================

function example1_brackets_t()
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
    //******* Search for a tab character in a string:
    //***********************
    _exampleExplanation("Search for a tab character in a string:",  1 );
    
    var str = "Visit W3Schools.\tLearn JavaScript."; 
    var patt = /\t/;

    
    patt1 = patt;
    
    tarea.value = str;

    tfield.value = patt1;

    newrest = str.search(patt1); 
    result.innerHTML = newrest;

    selectedSearch();// select Search
    select_search(); // remove other selection if exists.
    selectedSForm(); // select short form

    parseMarkedResult();
}

//================================== \v =========================================

function example1_brackets_v()
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
    //******* Search for a vertical tab character in a string:
    //***********************
    _exampleExplanation("Search for a vertical tab character in a string:",  1 );
    
    var str = "Visit W3Schools.\vLearn JavaScript."; 
    var patt = /\v/;

    
    patt1 = patt;
    
    tarea.value = str;

    tfield.value = patt1;

    newrest = str.search(patt1); 
    result.innerHTML = newrest;

    selectedSearch();// select Search
    select_search(); // remove other selection if exists.
    selectedSForm(); // select short form

    parseMarkedResult();
}

//================================== \xxx =========================================

function example1_brackets_xxx()
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
    //******* Do a global search for octal number 127 (W) in a string:
    //***********************
    _exampleExplanation("Do a global search for octal number 127 (W) in a string:",  1 );
    
    var str = "Visit W3Schools. Hello World!"; 
    var patt = /\127/g;

    
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

//================================== \xdd =========================================

function example1_brackets_xdd()
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
    //******* Do a global search for the hexadecimal number 57 (W) in a string:
    //***********************
    _exampleExplanation("Do a global search for the hexadecimal number 57 (W) in a string:",  2 );
    
    var str = "Visit W3Schools. Hello World!"; 
    var patt = /\x57/g;

    
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

//================================== \uxxxx =========================================

function example1_brackets_uxxxx()
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
    //******* Do a global search for the hexadecimal number 0057 (W) in a string:
    //***********************
    _exampleExplanation("Do a global search for the hexadecimal number 0057 (W) in a string:",  2 );
    
    var str = "Visit W3Schools. Hello World!"; 
    var patt = /\u0057/g;

    
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

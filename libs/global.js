
function getFileById(file, id)
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState == 4 && xhr.status == 200)
            document.getElementById(id).innerHTML = xhr.responseText;
    }
    xhr.open("GET", file, true);
    xhr.send();
}

function getFileByClassName(file, name)
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState == 4 && xhr.status == 200)
            document.getElementsByClassName(name)[0].innerHTML = xhr.responseText;
    }
    xhr.open("GET", file, true);
    xhr.send();
}

function showContentInIFrame(id, file)
{
    // var icontent = document.getElementById('ishowContent');
    var content = document.getElementById(id);

    // content.style.display = 'none';
    content.style.display = 'block';
    content.src = file;
}



// This technique is useful if your page has loaded and you want to load extra CSS files
//  when certain elements exist in the DOM
function loadCssScript0(cssFile)
{
    //$(document).ready(function(){

    if ($("#content").size() > 0) {
        if (document.createStyleSheet) {
            document.createStyleSheet(cssFile);
        }
        else {
            $("head").append($("<link rel='stylesheet' href='" + cssFile + "' type='text/css' />"));
        }
    }
    // });
}

 // OK !
function loadCssScript(cssFile)
{
    $('<link>')
            .appendTo('head')
            .attr({type: 'text/css', rel: 'stylesheet'})
            .attr('href', '' + cssFile)
            .attr('id', 'style1')
            .attr('title', 'move');
    //alert("loadCssScript");
}


function removeCssScript(id)
{
    $("#"+id).click(function() {
      //$('link[id=style1]')[0].disabled=true;
      // document.styleSheets[0].disabled = true;
      $('link[id=style1]').remove();
     // alert("removeCssScript");
    });
}

 // OK
function enableCssScript(id)
{
    $("#"+id).click(function() {
        // $("#"+id).attr("enabled", "enabled");
        $('link[id=style1]')[0].enabled=true;
       // alert("enableCssScript");
    });
}
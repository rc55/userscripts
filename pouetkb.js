// ==UserScript==
// @name     Pouet Keyboard Navigation - use alt+j/k in prod view to go back and forward
// @version  1
// @grant    none
// ==/UserScript==

function getQueryStringValue (key) {  
  return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));  
}  

var URLsnip = window.location.href.substring(0,37);
var previous = getQueryStringValue("which")-1;
var next = getQueryStringValue("which");
next++;
var baseurl = 'https://www.pouet.net/prod.php?which=';
var previousurl = baseurl.concat(previous);
var nexturl = baseurl.concat(next);


function doc_keyUp(e) {
    if (e.altKey && e.key === 'j' && URLsnip === baseurl) {
    console.log (previousurl);
		window.location = previousurl;
    }
    if (e.altKey && e.key === 'k' && URLsnip === baseurl) {
    var url = 'https://www.pouet.net/prod.php?which=' & next;
		window.location = nexturl;
    console.log (nexturl);
    }
}

// register the handler 
document.addEventListener('keyup', doc_keyUp, false);

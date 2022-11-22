if (!('boxShadow' in document.body.style)) {
    document.body.setAttribute('class', 'noBoxShadow');
}

document.body.addEventListener("click", function(e) {
    var target = e.target;
    if (target.tagName === "INPUT" &&
        target.getAttribute('class').indexOf('liga') === -1) {
        target.select();
    }
});

(function() {
    var fontSize = document.getElementById('fontSize'),
        testDrive = document.getElementById('testDrive'),
        testText = document.getElementById('testText');

        

    function updateTest() {
        var className = testText.value || String.fromCharCode(160);
        testDrive.innerHTML = "<i class='"+className+"'></i>";
        
        
        if (window.icomoonLiga) {
            window.icomoonLiga(testDrive);
        }
    }
    function updateSize() {
        testDrive.style.fontSize = fontSize.value + 'px';
    }
    fontSize.addEventListener('change', updateSize, false);
    testText.addEventListener('input', updateTest, false);
    testText.addEventListener('change', updateTest, false);
    updateSize();
}());

/* SEARCH */

function icoFunction() {
    var input, filter, ul, li, span, i, txtValue;
    input = document.getElementById("icoInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("iconLibrary");
    li = div.getElementsByClassName("glyph");
    for (i = 0; i < li.length; i++) {
        span = li[i].getElementsByClassName("mls")[0];
        txtValue = span.textContent || span.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}



/* Buttons */

function bold() {
    document.execCommand('bold',false,null);
    }

function italic() {
    document.execCommand('italic',false,null);
}

function underline() {
    document.execCommand('underline',false, null);
}
function strikethrough() {
    document.execCommand('strikethrough',false, null);
}

function undo() {
    document.execCommand('undo',false,null);
}

function redo() {
    document.execCommand('redo',false,null);
}

function copy() {
    document.execCommand('copy',false,null);
}

function cut() {
    document.execCommand('cut',false,null);
}

/* Change Font Style and Font Size */

function changeFont (font) {
    document.getElementById("texteditor").style.fontFamily = font.value;
}

function changeSize(){
    var size = document.getElementById("fontSize").value;
    document.execCommand('fontSize', false, size);
  }

  function chooseColor(){
    var mycolor = document.getElementById("fontColor").value;
    document.execCommand('foreColor', false, mycolor);
  }

/* Word Count */

function wordCount(){
    let textField = document.getElementById("texteditor");
    let wordCount = document.getElementById("wordCount");

    let text = textField.innerHTML;
    text = text.trim();

    let words = text.split(" ");
    if (words[0] === " "){
        wordCount.innerHTML = 0;
    } else {
        wordCount.innerHTML = words.length;
    }
}

/* Local Storage */

//save session to local storage interval
setInterval(function(){
            localStorage["text"] = document.getElementById("texteditor").innerHTML;
            }, 1000);

//load last session from local storage
document.getElementById("texteditor").innerHTML = localStorage["text"] ;
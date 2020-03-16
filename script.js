$(document).ready(function () {
    $('h1').fadeIn(2000).removeClass('hidden');
    $('div').fadeIn(7000).removeClass('hidden');
  });

  
  
var i = 0,
a = 0,
isBackspacing = false,
isParagraph = false;

var textArray = [
" software developer at Scotiabank.", 
"University of Waterloo waterloser '24.", 
"ski instructor at Grouse Mountain.",
"amateur writer on Medium.",
"avoiding leg day probably."
];

var speedForward = 50,
speedWait = 500,
speedBetweenLines = 1000, 
speedBackspace = 25; 

//Run the loop
typeWriter("output", textArray);

function typeWriter(id, ar) {
var element = $("#" + id),
  aString = ar[a],
  eHeader = element.children("h1"),
  eParagraph = element.children("p");

if (!isBackspacing) {

if (i < aString.length) {
  
    if (!isParagraph) {
      eHeader.text(eHeader.text() + aString.charAt(i));
    } else {
      eParagraph.text(eParagraph.text() + aString.charAt(i));
    }
    i++;
    setTimeout(function(){ typeWriter(id, ar); }, speedForward);
  
  } else if (i == aString.length) {
  isBackspacing = true;
  setTimeout(function(){ typeWriter(id, ar); }, speedWait);
  
}
} else {
if (eHeader.text().length > 0 || eParagraph.text().length > 0) {
  
  // header
  if (eParagraph.text().length > 0) {
    eParagraph.text(eParagraph.text().substring(0, eParagraph.text().length - 1));
  } else if (eHeader.text().length > 0) {
    eParagraph.removeClass("cursor");
    eHeader.addClass("cursor");
    eHeader.text(eHeader.text().substring(0, eHeader.text().length - 1));
  }
  setTimeout(function(){ typeWriter(id, ar); }, speedBackspace);

// switch to next in array
} else { 
  
  isBackspacing = false;
  i = 0;
  isParagraph = false;
  a = (a + 1) % ar.length; //
  setTimeout(function(){ typeWriter(id, ar); }, 50);
  
}
}
}
// JS for a Firefox extension to help with reading safaribooksonline
// MIT license
// ----------------------------------------------------------

// store the monospaced span elements in an HTML collection
let e = document.getElementsByTagName('kbd');


// iterate over the collection and change fontSize of all elements
for (let i = 0; i < e.length; i++) {
  e[i].style.fontSize = "1.188em";
}


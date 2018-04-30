// JS for a Firefox extension to help with reading safaribooksonline
// MIT license
// ----------------------------------------------------------

// store the monospaced body text in an HTML collection
let e = document.getElementsByTagName('kbd');

// store the monospaced link text in an HTML collection
let l = document.getElementsByClassName('URLPACKT');


// iterate over the body text collection and change fontSize of all elements
for (let i = 0; i < e.length; i++) {
  e[i].style.fontSize = "1.188em";
}

// iterate over the link collection and change fontSize of all elements
for (let i = 0; i < l.length; i++) {
  l[i].style.fontSize = "1.188em";
}


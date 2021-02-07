
//* ubahwarna

 const ubah = document.getElementById ('ubah');
 ubah.onclick = function(){
  //  document.body.setAttribute('class', 'ubah');
  document.body.classList.toggle('ubah');
 }

// *random color

const button = document.createElement('button');
const text = document.createTextNode('Random Color');

button.appendChild(text);
button.setAttribute('type', 'button');

ubah.after(button); 


// const random = document.getElementById ('random');
button.addEventListener('click', function (){
 document.body.style.backgroundColor = randomColor();
 });
function randomColor(){
  return '#' + Math.floor(Math.random() * 16777215). toString(16);
 }

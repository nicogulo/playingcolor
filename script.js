
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



// *slder color
 const sliderred = document.querySelector('input[name=sliderred]');
 const slidergreen = document.querySelector('input[name=slidergreen]');
 const sliderblue = document.querySelector('input[name=sliderblue]');

// red
 sliderred.addEventListener('input', function(){
  const g = slidergreen.value;
  const r = sliderred.value;
  const b = sliderblue.value;
 document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
 });

//  green
 slidergreen.addEventListener('input', function(){
  const g = slidergreen.value;
  const r = sliderred.value;
  const b = sliderblue.value;
 document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

// blue
sliderblue.addEventListener('input', function(){
  const g = slidergreen.value;
  const r = sliderred.value;
  const b = sliderblue.value;
 document.body.style.backgroundColor = 'rgb('+ r +','+ g +', '+ b +')'; 
});
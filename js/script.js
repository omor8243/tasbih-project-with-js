//--------card-1
const subhanAllahDisplay = document.getElementById('subhan-allah-display')
const subhanAllahIncrimentBtn = document.getElementById('subhan-allah-incriment-btn')
const subhanAllahDiscrimentBtn = document.getElementById('subhan-allah-discriment-btn')


//---------card-2
const alhamdulilahDisplay = document.getElementById('alhamdulilah-display')
const alhamdulilahIncrimentBtn = document.getElementById('alhamdulilah-incriment-btn')
const alhamdulilahDiscrimentBtn = document.getElementById('alhamdulilah-discriment-btn')

//-------------card-3
const allahuakberDisplay = document.getElementById('allahuakber-display')
const allahuakberIncrimentBtn = document.getElementById('allahuakber-incriment-btn')
const allahuakberDiscrimentBtn = document.getElementById('allahuakber-discriment-btn')

//------reset button
const resetBtn = document.getElementById('reset-btn')

let subhanAllahInitialValue = 0;
let alhamdulilahInitialValue = 0;
let allahuakberInitialValue = 0;
//-----card-1 
subhanAllahIncrimentBtn.addEventListener('click', function(){
  if(subhanAllahInitialValue === 33) {
    return alert('Subhan Allah Complete. Please Fillup anoter one');
  }
  subhanAllahInitialValue += 1
  subhanAllahDisplay.innerText = subhanAllahInitialValue;
 
})
subhanAllahDiscrimentBtn.addEventListener('click', function(){
  if(subhanAllahInitialValue === 0) {
    return alert('You can not added nagetive value');
  }
  subhanAllahInitialValue -= 1;
  subhanAllahDisplay.innerText = subhanAllahInitialValue;
})

//--------card-2
alhamdulilahIncrimentBtn.addEventListener('click', function(){
  if(alhamdulilahInitialValue === 33){
    return alert('Alhamdulillah Complete. Please Fillup anoter one');
  }
  alhamdulilahInitialValue += 1
  alhamdulilahDisplay.innerText = alhamdulilahInitialValue;

})
alhamdulilahDiscrimentBtn.addEventListener('click', function(){
  if(alhamdulilahInitialValue === 0){
    return alert('You can not added nagetive value')
  }
  alhamdulilahInitialValue -= 1;
  alhamdulilahDisplay.innerText = alhamdulilahInitialValue;
})

//-----card-3
allahuakberIncrimentBtn.addEventListener('click', function(){
  if(allahuakberInitialValue === 33){
    return alert('Allahu akber Complete. Please Fillup anoter one')
  }
  allahuakberInitialValue += 1;
  allahuakberDisplay.innerText = allahuakberInitialValue;
})
allahuakberDiscrimentBtn.addEventListener('click', function(){
  if(allahuakberInitialValue === 0){
    return alert('You can not added nagetive value');
  }
  allahuakberInitialValue -= 1;
  allahuakberDisplay.innerText = allahuakberInitialValue;
})




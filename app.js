let fontFamily = document.getElementById('input')
let display_text = document.getElementById('display_text')
let capsLockOn = false;
function func(keyboard_key){
  let charcter
  if(capsLockOn===true)
    charcter = keyboard_key.innerHTML.toUpperCase();
  else
    charcter = keyboard_key.innerHTML.toLowerCase();

  if(keyboard_key.innerHTML=='space'){
    return display_text.innerHTML+=' '
  }
  
  
  display_text.innerHTML += charcter;
  
}

function caplock(keyboard_key){
  if (capsLockOn === false){
    keyboard_key.style.backgroundColor ='white'
    return capsLockOn=true
  }
  keyboard_key.style.backgroundColor='rgb(11, 163, 11)'
  return capsLockOn=false
}

function enter(){
  display_text.innerHTML+="<br>"
}

function backSpace(){
  let gg=display_text.innerText;
  let mm=gg.slice(0,gg.length-1)
  display_text.innerText=mm
}


function fontSubmit(){
  let value=fontFamily.value
  display_text.style.fontFamily=value
}
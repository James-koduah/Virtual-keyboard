let fontFamily=document.getElementById('input')
let para=document.getElementById('aaa')
let caps=false;
let hh=document.getElementById('aaa')
function func(e){
  let elem = e.innerHTML.toLowerCase();
  if(caps===true){elem = e.innerHTML.toUpperCase();}
  if(caps===false){elem=e.innerHTML.toLowerCase();}

  if(e.innerHTML=='Caps Lock'){
    if(caps===true){
      e.style.backgroundColor='rgb(11, 163, 11)'
      return caps=false
    }else{
      e.style.backgroundColor ='white'
      return caps=true
    }
  }else
  if(e.innerHTML=='space'){
    hh.innerHTML+=' '
  }
  else{hh.innerHTML+=elem;}
  
}


function backSpace(){
  let gg=hh.innerHTML;
  let mm=gg.slice(0,gg.length-1)
  hh.innerHTML=mm
}

function fontSubmit(){
  let value=fontFamily.value
  para.style.fontFamily=value
}

var counter=0;
var boxRightID=setInterval(moveBoxRight,20);
var boxDowntID=setInterval(moveBoxDown,20);
setInterval(addCounter,20);

var boxEl=document.getElementById('box')

function addCounter(){
    counter++;
}

function moveBoxRight(){
    boxEl.style.left  = `${counter}px`
    if(counter>= +container.style.width - +box.style.width)
    {
        
    }
}   

function moveBoxDown(){
    boxEl.style.top   = `${counter}px`
    if(counter>= +container.style.height - +box.style.height){

    }
}
let milli = 0;
let sec = 0;
let min = 0;
let hr = 0;
let timer= false;

function Go(){
    timer = true;
    myfun();
}
function Pause(){
    timer = false;
    myfun();
}
function Reset(){
    location.reload()
}


function myfun() {
 if(timer == true){   
    milli = milli +1;
    
 if (milli == 100) {
        sec++
        milli =0;
}


    if (sec > 60) {
        min++
        sec = 0;
        
    }
    if (min>60) {
        hr++
        min =0;
    }
    let getsec = sec;
    let getmin = min;
    let gethr = hr;
    if (sec < 10){
        getsec = "0" + sec;
    
    }
    if (min < 10){
        getmin = "0" +min;

    }
    if(hr < 10){ 
        gethr = "0" +hr;

    }
    setTimeout("myfun()", 10);
    document.getElementById("milli").innerHTML =milli;
document.getElementById("sec").innerHTML= getsec;
document.getElementById("min").innerHTML =getmin;
 document.getElementById("hr").innerHTML = gethr;

;}}
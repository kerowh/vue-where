
function a(){
    let start =1
    var timer=setInterval(()=>{
        start = start+1
        console.log(start);
        if (start>=10){
            clearInterval(timer)
        }
    },100)

}

a()


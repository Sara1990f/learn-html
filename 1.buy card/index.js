let quentity = 0;
 function crement(){
     quentity ++;
    document.getElementById('quentitiy').innerHTML=quentity;
}
function decrement(){
    if(quentity>0){
        quentity --;
    console.log(quentity);
   document.getElementById('quentitiy').innerHTML=quentity;
    }
    
}

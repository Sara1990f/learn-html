let commputerMove = "";
let randomNumber = "";
let result = "";
let winner =0;
let equal=0;
let loser =0

    function creatRandom(){
        randomNumber= Math.random()
    if (randomNumber>0 && randomNumber<1/3){
        commputerMove = "سنگ";

    } else if (randomNumber>=1/3 && randomNumber<2/3){
        commputerMove="قیچی";
    } else if (randomNumber>=2/3 && randomNumber<1){
        commputerMove="کاغذ";
    }
    }
 
 function rock(){
    creatRandom();
    if (commputerMove==="سنگ"){
        result="مساوی شدین"
        equal ++;
        document.getElementById("equal").innerHTML=` تعداد مساوی: ${equal}`;
    }else if(commputerMove==="کاغذ"){
        result="شما باختین"
        loser ++;
        document.getElementById("loser").innerHTML=` تعدادباخت : ${loser}`;

    }
    else if(commputerMove==="قیچی"){
        result="شما بردین"
        winner ++;
        document.getElementById("winner").innerHTML=`تعداد برد: ${winner}`;
    }

 }
 function paper (){
    creatRandom();
    if (commputerMove==="کاغذ"){
        result="مساوی شدین"
        equal ++;
        document.getElementById("equal").innerHTML=` تعداد مساوی: ${equal}`;
    }else if(commputerMove==="قیچی"){
        result="شما باختین"
        loser ++;
        document.getElementById("loser").innerHTML=` تعدادباخت : ${loser}`;
    }
    else if(commputerMove==="سنگ"){
        result="شما بردین"
        winner ++;
        document.getElementById("winner").innerHTML=`تعداد برد: ${winner}`;
    }
 }
 function scissor (){
    creatRandom();
    if (commputerMove==="قیچی"){
        result="مساوی شدین"
        equal ++;
        document.getElementById("equal").innerHTML=` تعداد مساوی: ${equal}`;
    }else if(commputerMove==="سنگ"){
        result="شما باختین"
    }
    else if(commputerMove==="کاغذ"){
        result="شما بردین"
        winner ++;
        document.getElementById("winner").innerHTML=`تعداد برد: ${winner}`;
    }
    
 }


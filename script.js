const btn=document.getElementById('btn');
const img_1=document.getElementById('img1');
const img_2=document.getElementById('img2');
const win_msg=document.getElementById('win');
const msg=document.getElementById('msg');
var count=0;
var count2=0



window.addEventListener('load',OpenBootstrapPopup = () =>{
    document.getElementById("simpleModal").style.display="Block";

})

// document.querySelector(".close").addEventListener('click',close = () =>{
//     document.getElementById("simpleModal").style.display="none";
// })

btn.addEventListener('click',fun1 = () =>{
   


    
    const imgran1=Math.floor((Math.random() * 6) + 1);
    const img1= "img/Dice"+imgran1+".png";

    const imgran2=Math.floor((Math.random() * 6) + 1);
    const img2= "img/Dice"+imgran2+".png";


    img_1.setAttribute('src',img1);
    img_2.setAttribute('src',img2);

    if(img1>img2){
        
        count=count+1;
        // console.log(count)
        win_msg.innerHTML=document.getElementById('player1').innerHTML+ " Won!!!";
        
    }
    else if(img1<img2){
        count2=count2+1;
        win_msg.innerHTML=document.getElementById('player2').innerHTML+" Won!!!";
    }
    else{
        win_msg.innerHTML="DRAW!!!";

    }
    document.getElementById("new_player").innerHTML=document.getElementById('player1').innerHTML+"<b> : </b>"+count;
    document.getElementById("new_player2").innerHTML=document.getElementById('player2').innerHTML+"<b> : </b>"+count2;
}) 



function myfun1(){
    var a=document.getElementById('text1');
    var b=document.getElementById('text2');


    // if(a.value=="" || b.value==""){
    //     alert("Enter a Player Name")
    // }
    if(a.value=="" ){
        alert("Enter a Player no 1 Name")
    }
    else if( b.value==""){
        alert("Enter a Player no 2 Name")
    }
    else{
        document.getElementById('player1').innerHTML="<b>"+a.value+"</b>";
        document.getElementById('player2').innerHTML="<b>"+b.value+"</b>";

        document.getElementById("new_player").innerHTML="<b>"+a.value+"</b>";
        document.getElementById("new_player2").innerHTML="<b>"+b.value+"</b>";

        a.style.display = "none";
        b.style.display = "none";

        document.getElementById("btn1").style.display="none";
        document.getElementById("simpleModal").style.display="none";
    }
}
    


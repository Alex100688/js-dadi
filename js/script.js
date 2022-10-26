let dadi=document.querySelector(".giocatore");
dadi=addEventListener(`click`,function(){
    document.querySelector(".giocatore").innerHTML=Math.floor(Math.random() * 6) + 1;
});
let computer=document.querySelector(".cpu");
computer=addEventListener(`click`, function(){
    document.querySelector(".cpu").innerHTML=Math.floor(Math.random() * 6) + 1; 
});

if(dadiPlay>computer){
    alert("Hai vinto");
}
else if(dadiPlay<computer){
    alert("Hai perso")
}
else{
    alert("Pareggio")
}
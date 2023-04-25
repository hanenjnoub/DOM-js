var buttonPlus=Array.from(document.getElementsByClassName("add"))
console.log(buttonPlus)

for(let i=0;i<buttonPlus.length;i++){
    buttonPlus[i].addEventListener("click",function(){
        buttonPlus[i].nextElementSibling.innerHTML ++
        totale()
    } ) 
    
}

var buttonMinus=Array.from(document.getElementsByClassName("minus"))
for(let i=0;i<buttonMinus.length;i++){

    buttonMinus[i].addEventListener("click",function(){
        if(buttonMinus[i].previousElementSibling.innerHTML>0){
        buttonMinus[i].previousElementSibling.innerHTML--
        totale()
    }})
    
}
//var delet=Array.from(document.getElementsByClassName("fas fa-trash-alt"))//
var
delet=Array.from(document.getElementsByClassName("fas fa-trash-alt"))
for(let i=0;i<delet.length;i++){
delet[i].addEventListener("click",function(){

  delet[i].parentNode.remove();
  totale()
})
}
var
heart=Array.from(document.getElementsByClassName("fa-heart"))
for(let i=0;i<heart.length;i++){
  heart[i].addEventListener("click",function(){
    if(heart[i].style.color== "grey"){
heart[i].style.color="red"}
    else{
      heart[i].style.color= "grey"
    }
  })
}

function totale(){
  var qtes=Array.from(document.getElementsByClassName("qte"))
  console.log(qtes,"karim")
  var prix=Array.from(document.getElementsByClassName("price"))
  console.log(prix,"malek")
  var sum=0
  for(let i=0;i<qtes.length;i++){
    
    sum += qtes[i].innerHTML * prix[i].innerHTML


  }
  console.log(sum)

  return (document.getElementById ("totalp").innerHTML="Shopping Bag total : $"+sum)




}

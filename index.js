// // function to get increase heart
const Love = document.getElementsByClassName('heart');
let Heart = parseInt(document.getElementById('logo-heart').innerText);
for(let btn of Love){
   btn.addEventListener('click', function(){
    Heart =  Heart + 1;
    document.getElementById('logo-heart').innerText = Heart;
   })
}

// call buttons functions
function callFunc(id){
const value=20;
   const Coin =parseInt(document.getElementById(id).innerText);
   const UpdatedCoin = Coin - value;
   document.getElementById(id).innerText = UpdatedCoin;

   if(UpdatedCoin< 20)
   {
      alert("Less than 20 coins");
   }

}
document.getElementById('b1').addEventListener('click', function(){
   alert('National Emergency Number 999');
   callFunc('coin-bar');
})
document.getElementById('b2').addEventListener('click', function(){
   alert('Police Helpline Number 999');
   callFunc('coin-bar');
})
document.getElementById('b3').addEventListener('click', function(){
   alert('Fire Service Number 999');
   callFunc('coin-bar');
})
document.getElementById('b4').addEventListener('click', function(){
   alert('Ambulance Service 1994-999999');
   callFunc('coin-bar');
})
document.getElementById('b5').addEventListener('click', function(){
   alert('Women & Child Helpline 109');
   callFunc('coin-bar');
})
document.getElementById('b6').addEventListener('click', function(){
   alert('Anti-Corruption Helpline 106');
   callFunc('coin-bar');
})
document.getElementById('b7').addEventListener('click', function(){
   alert('Electricity Helpline 16216');
   callFunc('coin-bar');
})
document.getElementById('b8').addEventListener('click', function(){
   alert('Brac Helpline 16445');
   callFunc('coin-bar');
})
document.getElementById('b9').addEventListener('click', function(){
   alert('Bangladesh Railway Helpline 163');
   callFunc('coin-bar');
})


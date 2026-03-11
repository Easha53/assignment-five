// // function to get increase heart
const Love = document.getElementsByClassName('heart');
let Heart = parseInt(document.getElementById('logo-heart').innerText);
for(let btn of Love){
   btn.addEventListener('click', function(){
    Heart =  Heart + 1;
    document.getElementById('logo-heart').innerText = Heart;
   })
}

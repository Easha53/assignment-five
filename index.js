// // function to get increase heart
const Love = document.getElementsByClassName('heart');
let Heart = parseInt(document.getElementById('logo-heart').innerText);
for (let btn of Love) {
   btn.addEventListener('click', function () {
      Heart = Heart + 1;
      document.getElementById('logo-heart').innerText = Heart;
   })
}

// call buttons functions
const historydata = []
function callFunc(id) {
   const value = 20;
   const Coin = parseInt(document.getElementById(id).innerText);
   const UpdatedCoin = Coin - value;
   document.getElementById(id).innerText = UpdatedCoin;

   if (UpdatedCoin < 20) {
      alert("Less than 20 coins");
   }

}
document.getElementById('b1').addEventListener('click', function () {
   alert('National Emergency Number 999');
   callFunc('coin-bar');
   const data = {
      name: 'National Emergency Number',
      value: '999',
      date: new Date().toLocaleTimeString()
   }
   historydata.push(data);
   CallHistory();
})
document.getElementById('b2').addEventListener('click', function () {
   alert('Police Helpline Number 999');
   callFunc('coin-bar');
   const data = {
      name: 'Police Helpline Number',
      value: '999',
      date: new Date().toLocaleTimeString()
   }
   historydata.push(data);
   CallHistory();
})
document.getElementById('b3').addEventListener('click', function () {
   alert('Fire Service Number 999');
   callFunc('coin-bar');
   const data = {
      name: 'Fire Service Number',
      value: '999',
      date: new Date().toLocaleTimeString()
   }
   historydata.push(data);
   CallHistory();
})
document.getElementById('b4').addEventListener('click', function () {
   alert('Ambulance Service 1994-999999');
   callFunc('coin-bar');
   const data = {
      name: 'Ambulance Service',
      value: '1994-999999',
      date: new Date().toLocaleTimeString()
   }
   historydata.push(data);
   CallHistory();

})
document.getElementById('b5').addEventListener('click', function () {
   alert('Women & Child Helpline 109');
   callFunc('coin-bar');
    const data = {
      name: 'Women & Child Helpline',
      value: '109',
      date: new Date().toLocaleTimeString()
   }
   historydata.push(data);
   CallHistory();
})
document.getElementById('b6').addEventListener('click', function () {
   alert('Anti-Corruption Helpline 106');
   callFunc('coin-bar');
    const data = {
      name: 'Anti-Corruption Helpline',
      value: '106',
      date: new Date().toLocaleTimeString()
   }
   historydata.push(data);
   CallHistory();
})
document.getElementById('b7').addEventListener('click', function () {
   alert('Electricity Helpline 16216');
   callFunc('coin-bar');
   const data = {
      name: 'Electricity Helpline',
      value: '16216',
      date: new Date().toLocaleTimeString()
   }
   historydata.push(data);
})
document.getElementById('b8').addEventListener('click', function () {
   alert('Brac Helpline 16445');
   callFunc('coin-bar');
   const data = {
      name: 'Brac Helpline',
      value: '16445',
      date: new Date().toLocaleTimeString()
   }
   historydata.push(data);
   CallHistory();
})
document.getElementById('b9').addEventListener('click', function () {
   alert('Bangladesh Railway Helpline 163');
   callFunc('coin-bar');
   const data = {
      name: 'Bangladesh Railway Helpline',
      value: '163',
      date: new Date().toLocaleTimeString()
   }
   historydata.push(data);
   CallHistory();

})

// function to callhistory 
function CallHistory()
{
   const callContainer = document.getElementById('call-container');
      const d = historydata[historydata.length -1];
      const Div = document.createElement('div');
      Div.innerHTML = `
      <div class="flex justify-between p-4 bg-slate-100 rounded-lg m-2 h-[80px]">
     <div>
            <h1 class="text-[16px] font-bold">${d.name}</h1>
            <p class="font-semibold text-gray-600">${d.value}</p>
            </div>
            <div>
              <p>${d.date}</p>
      </div>
      </div>
      `
      callContainer.appendChild(Div);
   }
// function to clear history
function ClearHistory(){
document.getElementById('call-container').innerHTML = "";
} 
document.getElementById('clear-btn').addEventListener('click', function(){
   ClearHistory()
})


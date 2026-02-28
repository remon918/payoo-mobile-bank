document.getElementById("cashout-btn").addEventListener("click", function () {
  // 1: get the agent number & validate
  const cashoutNumber = getValueFromInput("cashout-number");
  if (cashoutNumber.length != "11") {
    alert("Invalid Number");
  }

  // 2: get the amount
  const cashoutAmount = getValueFromInput("cashout-amount");

  const currentBalance = getBalance();

  // 4: calculate Balance
  const newBalance = currentBalance - Number(cashoutAmount);
  console.log(newBalance);
  if (newBalance < 0) {
    alert("Invalid Amount");
    return;
  }

  const pin = getValueFromInput("cashout-pin");
  if (pin == "444") {
    alert(`Add Money Success from ${bankAccount}
at ${new Date()}`);
    setBalance(newBalance);

    // 1: get history-container
    const history = document.getElementById("history-container");

    // 2: create new div
    const newHistory = document.createElement("div");

    // 3: add text in new div
    newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
            Cashout ${cashoutAmount}BDT Success to ${cashoutNumber} , at ${new Date()}
        </div>
    `;
    // 4: append newDiv in history-container
    history.append(newHistory);
  } else {
    alert("Invalid Pin");
    return;
  }
});

// document.getElementById('cashout-btn').addEventListener('click',function(){
//     // 1: get the agent number & validate
//     const cashoutNumberInput = document.getElementById('cashout-number');
//     const cashoutNumber = cashoutNumberInput.value;
//     console.log(cashoutNumber);

//     // 2: get the amount
//     const cashoutAmountInput = document.getElementById('cashout-amount')
//     const cashoutAmount = cashoutAmountInput.value;
//     console.log(cashoutAmount);

//     if(cashoutNumber.length != 11){
//         alert('Invalid Agent Number');
//         return;
//     }

//     // 3: get the current balance
//     const balanceElement = document.getElementById('balance');
//     const balance = balanceElement.innerText;
//     console.log(balance)

//     // 4: calculate new Balance
//     const newBalance = Number(balance) - Number(cashoutAmount);

//     if(newBalance < 0){
//         alert('Invalid Amount');
//         return;
//     }

//     // 5: get the pin and and verify
//     const cashoutPinInput = document.getElementById('cashout-pin');
//     const pin = cashoutPinInput.value;

//     if(pin === '4444'){
//         // 5-1: true: show an alert --> set balance
//         alert('cashout successful')
//         console.log('New Balance:' ,newBalance);
//         balanceElement.innerText = newBalance;
//     }
//     else{
//         // 5-2: false: show an error alert --> return
//         alert('Invalid Pin');
//         return;
//     }

// });

document.getElementById("add-money-btn").addEventListener("click", function () {
  // 1: bank account get
  bankAccount = getValueFromInput("add-money-bank");
  if (bankAccount == "Select a Bank") {
    alert("Please select a bank");
    return;
  }

  // 2: get bank account number
  const accno = getValueFromInput("add-money-number");
  if (accno.length != 11) {
    alert("Invalid Number");
    return;
  }

  // 3: get amount
  const amount = getValueFromInput("add-money-amount");
  const currentBalance = getBalance();
  const newBalance = currentBalance + Number(amount);

  const pin = getValueFromInput("add-money-pin");
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
            Add Money Success from ${bankAccount} , acc-no ${accno} at ${new Date()}
        </div>
    `;
    // 4: append newDiv in history-container
    history.append(newHistory);
  } else {
    alert("Invalid Pin");
    return;
  }
});

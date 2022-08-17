function Calculate() {
  const cost = document.querySelector("#costPrice").value;
  const sell = document.querySelector("#sellingPrice").value;

  const result = document.querySelector("#results");
  const percentage = document.querySelector("#percentage");
  const empty = document.querySelector("#empty");

  result.innerHTML = "";
  percentage.innerHTML = "";
  empty.innerHTML = "";

  if (sell > cost) {
    const profit = sell - cost;
    const profit_percent = ((profit / cost) * 100).toFixed(2);

    result.innerHTML = "Profit : " + profit;
    percentage.innerHTML = "Profit Percentage : " + profit_percent;
  } else if (sell === "" || isNaN(sell) || sell <= 0) {
    document.getElementById("cost_error").innerHTML =
      "Please provide a valid selling price.";
  }

  if (cost > sell) {
    const loss = cost - sell;
    const loss_percent = ((loss / cost) * 100).toFixed(2);

    result.innerHTML = "Loss : " + loss;
    percentage.innerHTML = "Loss Percentage : " + loss_percent;
  } else if (cost === "" || isNaN(cost) || cost <= 0) {
    document.getElementById("cost_error").innerHTML =
      "Please provide a valid cost price.";
  }

  if (sell == cost) {
    empty.innerHTML = "No Profit No Loss";
  }
}

// var calculator = document
//   .getElementById("calcBtn")
//   .addEventListener("click", profitNloss);

// function profitNloss() {
//   var cost = document.getElementById("costPrice").value;
//   var sell = document.getElementById("sellingPrice").value;

//   profit = parseInt(cost);
//   loss = parseInt(sell);
//   var total = profit - loss;

//   var result = document.getElementById("results");
//   result.classList.remove("d-none");
//   if (total > 0) {
//     result.innerHTML = "Your profit is $ " + total;
//   } else {
//     result.innerHTML = "Your loss is $ " + total;
//   }
// }

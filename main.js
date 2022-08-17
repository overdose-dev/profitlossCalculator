const costPrice = document.querySelector("#costPrice");
const sellPrice = document.querySelector("#sellingPrice");
const result = document.querySelector("#results");
const percentage = document.querySelector("#percentage");
const empty = document.querySelector("#empty");

function Calculate() {
  const diff = sellPrice.value - costPrice.value;
  if (!(costPrice.value === "" || sellPrice.value === "")) {
    if (diff > 0) {
      const profit_percent = ((diff / costPrice.value) * 100).toFixed(2);
      result.innerHTML = "You made a profit of $" + diff;
      percentage.innerHTML =
        "Your Percentage Profit is " + profit_percent + "%";
      empty.innerHTML = "";
      costPrice.value = "";
      sellPrice.value = "";
      result.style.color = "#00e600";
      percentage.style.color = "#00e600";
    } else if (diff < 0) {
      const loss_percent = ((diff / costPrice.value) * 100).toFixed(2);
      result.innerHTML = "You experienced a loss of : $" + Math.abs(diff);
      percentage.innerHTML =
        "Your Percentage Loss is " + Math.abs(loss_percent) + "%";
      empty.innerHTML = "";
      costPrice.value = "";
      sellPrice.value = "";
      result.style.color = "#e75757";
      percentage.style.color = "#e75757";
    } else if (diff == 0) {
      result.innerHTML = "";
      percentage.innerHTML = "";
      empty.innerHTML = "No Profit No Loss";
    }
  }
}

//profit text should be in green while loss should be in red

//********************************** */
//First Attempt
// const costPrice = document.querySelector("#costPrice");
// const sellPrice = document.querySelector("#sellingPrice");

// const result = document.querySelector("#results");
// const percentage = document.querySelector("#percentage");
// const empty = document.querySelector("#empty");
// function Calculate() {
//   //   result.innerHTML = "";
//   //   percentage.innerHTML = "";
//   //   empty.innerHTML = "";

//   const profit = sellPrice.value - costPrice.value;

//   if (profit > 0) {
//     const profit_percent = ((profit / costPrice) * 100).toFixed(2);
//     result.innerHTML = "Profit : " + profit;
//     percentage.innerHTML = "Profit Percentage : " + profit_percent;
//   } else if (sellPrice === "" || isNaN(sellPrice) || sellPrice <= 0) {
//     document.getElementById("cost_error").innerHTML =
//       "Please provide a valid selling price.";
//   } else if (profit < 0) {
//     // const loss = cost - sell;
//     const loss_percent = ((loss / costPrice) * 100).toFixed(2);

//     result.innerHTML = "Loss : " + loss;
//     percentage.innerHTML = "Loss Percentage : " + loss_percent;
//   } else if (costPrice === "" || isNaN(costPrice) || costPrice <= 0) {
//     document.getElementById("cost_error").innerHTML =
//       "Please provide a valid cost price.";
//   }

//   if (sellPrice == costPrice) {
//     empty.innerHTML = "No Profit No Loss";
//   }
// }

//********************************** */
//Second Attempt
// let button = document.getElementById("calcBtn");

// button.addEventListener("click", function (e) {
//   const cost = parseInt(document.getElementById("costPrice").value);
//   const sell = parseInt(document.getElementById("sellingPrice").value);
//   const result = document.getElementById("results");
//   let cost_status = false,
//     selling_status = false;

//   if (cost === "" || isNaN(cost) || cost <= 0) {
//     document.getElementById("cost_error").innerHTML =
//       "Please provide a valid cost price.";
//   } else {
//     document.getElementById("cost_error").innerHTML = "";
//     cost_status = true;
//   }

//   if (sell === "" || isNaN(sell) || sell <= 0) {
//     document.getElementById("selling_error").innerHTML =
//       "Please provide a valid selling price.";
//   } else {
//     document.getElementById("selling_error").innerHTML = "";
//     selling_status = true;
//   }

// if (cost_status && selling_status) {
//   const profitLoss =
// }
// });

//**********************************
//Third Attempt
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

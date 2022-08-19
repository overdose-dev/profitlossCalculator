const costPrice = document.querySelector("#costPrice");
const sellPrice = document.querySelector("#sellingPrice");
const result = document.querySelector("#results");
const percentage = document.querySelector("#percentage");
const empty = document.querySelector("#empty");
const costError = document.querySelector("#cost_error");
const sellingError = document.querySelector("#selling_error");
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
      result.style.color = "#008000";
      percentage.style.color = "#008000";
      sellingError.innerHTML = "";
      costError.innerHTML = "";
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
      sellingError.innerHTML = "";
      costError.innerHTML = "";
    } else if (diff == 0) {
      result.innerHTML = "";
      percentage.innerHTML = "";
      costPrice.value = "";
      sellPrice.value = "";
      empty.innerHTML = "No Profit No Loss";
      sellingError.innerHTML = "";
      costError.innerHTML = "";
    }
  } else if (costPrice.value === "") {
    percentage.innerHTML = "";
    costPrice.value = "";
    empty.innerHTML = "";
    result.innerHTML = "";
    costError.innerHTML = "Please input a valid cost price";
    sellingError.innerHTML = "";
    costError.style.color = "#e75757";
  } else if (sellPrice.value === "") {
    percentage.innerHTML = "";
    sellPrice.value = "";
    empty.innerHTML = "";
    result.innerHTML = "";
    costError.innerHTML = "";
    sellingError.innerHTML = "Please input a valid selling price";
    sellingError.style.color = "#e75757";
  }
}

document.querySelector("#output").style.visibility = "hidden";

document.querySelector("#unitInput").addEventListener("input", function (e) {
  let weight = e.target.value;
  let unit = document.querySelector("#unit").value;
  document.querySelector("#output").style.visibility = "visible";

  if (unit === "kg") {
    convertKg(weight);
  } else if (unit === "oz") {
    convertOz(weight);
  } else if (unit === "g") {
    convertG(weight);
  } else if (unit === "lbs") {
    convertLbs(weight);
  }
});

function convertKg(weight) {
  //kg to pounds
  document.querySelector("#calc1").innerHTML = weight * 2.2046;
  document.querySelector("#unitHeading1").textContent = "Pounds: ";
  //kg to grams
  document.querySelector("#calc2").innerHTML = weight * 1000;
  document.querySelector("#unitHeading2").textContent = "Grams: ";
  //kg to ounces
  document.querySelector("#calc3").innerHTML = weight * 35.273;
  document.querySelector("#unitHeading3").textContent = "Ounces: ";
}

function convertOz(weight) {
  //Oz to pounds
  document.querySelector("#calc1").innerHTML = weight * 0.0625;
  document.querySelector("#unitHeading1").textContent = "Pounds: ";
  //Oz to grams
  document.querySelector("#calc2").innerHTML = weight * 28.349;
  document.querySelector("#unitHeading2").textContent = "Grams: ";
  //Oz to kg
  document.querySelector("#calc3").innerHTML = weight * 0.0283;
  document.querySelector("#unitHeading3").textContent = "Kilograms: ";
}

function convertG(weight) {
  //Grams to pounds
  document.querySelector("#calc1").innerHTML = weight * 0.0022;
  document.querySelector("#unitHeading1").textContent = "Pounds: ";
  //Grams to kilograms
  document.querySelector("#calc2").innerHTML = weight * 0.001;
  document.querySelector("#unitHeading2").textContent = "Kilograms: ";
  //Grams to ounces
  document.querySelector("#calc3").innerHTML = weight * 0.03527;
  document.querySelector("#unitHeading3").textContent = "Ounces: ";
}

function convertLbs(weight) {
  //Pounds to ounces
  document.querySelector("#calc1").innerHTML = weight * 16;
  document.querySelector("#unitHeading1").textContent = "Ounces: ";
  //Pounds to grams
  document.querySelector("#calc2").innerHTML = weight * 453.592;
  document.querySelector("#unitHeading2").textContent = "Grams: ";
  //Pounds to kilograms
  document.querySelector("#calc3").innerHTML = weight * 0.45359;
  document.querySelector("#unitHeading3").textContent = "Kilograms: ";
}

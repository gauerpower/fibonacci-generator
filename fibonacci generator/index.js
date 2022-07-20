function fibonacciGenerator(n) {
    if (n >1466) {
      return ["Error: Come on", "that's too many!"]
    }
    const output = [];
    if (n >= 1) {
        output.push(0);
    }

    if (n >= 2) {
        output.push (1);
        for (var x = 2; x < n; x++) {
            output.push((output[output.length-1])+(output[output.length-2]));
        }
    }
    if (output.length > 0) {
        return output;
    } else {
        return ["Invalid input"];
        }
}

const numInput = document.querySelector("#num");
const form = document.querySelector("form");
const resultContainer = document.querySelector(".result-container");
const resultParagraph = document.querySelector("#result");
const resultHeading = document.querySelector("#resultHeading");
const errorMessage = document.querySelector("#errorMessage");

form.addEventListener("submit", function(event) {
  if (form.elements.num.value > 1466) {
   errorMessage.innerHTML = "Error: Come on, that's too many!";
   resultHeading.style.visibility = "hidden";
  resultParagraph.innerHTML = "";
  } else if (Number(form.elements.num.value) < 1) {
    errorMessage.innerHTML = "Error: Must enter a positive number.";
    resultHeading.style.visibility = "hidden";
   resultParagraph.innerHTML = "";
   } else {
    errorMessage.innerHTML = "";
  document.querySelector("#numOfResults").innerHTML = form.elements.num.value;
  errorMessage.innerHTML = "";
  let resultArray = fibonacciGenerator(form.elements.num.value);
  let resultList = [];
  resultArray.forEach(num => {
    resultList.push(`<li class="fib-num">${num}</li>`)
  })
  resultListString = resultList.join(" ");
  console.log(resultListString);
  resultParagraph.innerHTML = resultListString;
  resultHeading.style.visibility = "visible";
}
  resultContainer.style.visibility = "hidden";
  setTimeout(function() {
    resultContainer.style.visibility = "visible";
  }, 10);
  event.preventDefault();
})

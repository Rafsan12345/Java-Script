// HTML element access
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

const addBtn = document.getElementById("addBtn");
const subBtn = document.getElementById("subBtn");

// Add button event
addBtn.addEventListener("click", function () {
    let a = Number(num1.value);
    let b = Number(num2.value);
    result.innerText = a + b;
});

// Subtract button event
subBtn.addEventListener("click", function () {
    let a = Number(num1.value);
    let b = Number(num2.value);
    result.innerText = a - b;
});

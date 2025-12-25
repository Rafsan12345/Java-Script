/************ 1. VARIABLES & DATA TYPES ************/
console.log("JS FILE LOADED");


let x = 10;               // number
let y = 5;
let name = "ESP32";       // string
let isOn = true;          // boolean

/************ 2. OPERATORS ************/
let sum = x + y;
let sub = x - y;
let mul = x * y;
let div = x / y;

/************ 3. ARRAY ************/
let sensors = ["Temp", "Humidity", "Pressure"];

/************ 4. OBJECT ************/
let device = {
    id: 1,
    name: "ESP32",
    status: "ONLINE"
};

/************ 5. FUNCTION ************/
function calculate() {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);

    let result = a + b;

    document.getElementById("output").innerText =
        "Add: " + result;
		console.log("Output");
}

/************ 6. CONDITION ************/
if (isOn) {
    console.log("Device is ON");
} else {
    console.log("Device is OFF");
}

/************ 7. LOOP ************/
for (let i = 0; i < sensors.length; i++) {
    console.log("Sensor:", sensors[i]);
}

/************ 8. TIMER EVENT ************/
setInterval(() => {
    console.log("Time:", new Date().toLocaleTimeString());
}, 3000);

/************ 9. HTTP REQUEST (BASIC) ************/
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(res => res.json())
    .then(data => {
        console.log("HTTP Data:", data);
    });

/************ 10. DOM MANIPULATION ************/
document.getElementById("title").style.color = "blue";

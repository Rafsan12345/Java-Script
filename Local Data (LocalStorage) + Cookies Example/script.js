"use strict";

console.log("Storage JS Loaded");

// -------- LOCAL STORAGE --------
function saveData() {
    let user = document.getElementById("username").value;

    // save to localStorage
    localStorage.setItem("user_name", user);

    // save to cookie (1 day)
    document.cookie = "user_name=" + user + "; max-age=86400";

    console.log("Saved:", user);
}

function loadData() {
    // read from localStorage
    let userLocal = localStorage.getItem("user_name");

    // read cookie
    let userCookie = getCookie("user_name");

    document.getElementById("output").innerText =
        "LocalStorage: " + userLocal + "\n" +
        "Cookie: " + userCookie;

    console.log("Loaded Local:", userLocal);
    console.log("Loaded Cookie:", userCookie);
}

function clearData() {
    localStorage.removeItem("user_name");

    // delete cookie
    document.cookie = "user_name=; max-age=0";

    document.getElementById("output").innerText = "Data Cleared";
    console.log("Data cleared");
}

// -------- COOKIE READ FUNCTION --------
function getCookie(name) {
    let cookies = document.cookie.split("; ");

    for (let i = 0; i < cookies.length; i++) {
        let parts = cookies[i].split("=");
        if (parts[0] === name) {
            return parts[1];
        }
    }
    return null;
}

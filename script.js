// Tillsatt konstanta variabler till inloggningen
const loginButton = document.getElementById("loginButton");
const logoutButton = document.getElementById("logoutButton");
const loginName = document.getElementById("loginName");
const loginPassword = document.getElementById("loginPassword");
const namn="test";
const lösenord="1234";


// funktion som verifierar användardatan
function userInfo(loginName, loginPassword) {
if (loginName === namn && loginPassword === lösenord) {

    // kod som switchar beroende på om inloggningen lyckats eller inte
    showSwitch("loginApproved", "show");
    showSwitch("loginCode", "hide");
    document.getElementById("loginApprovedProperty").textContent = "Välkommen!"

} else {
    
    showSwitch("loginCode", "hide");
    showSwitch("wrongUserData", "show");
    document.getElementById("error").textContent = "Systemet känner inte igen användaruppgifterna, var god försök igen."
}
}

function showSwitch(alt, altShow) {
    if (altShow === "show") {
        altShow = "block";
    } else {
        altShow = "none";
    }
    document.getElementById(alt).style.display = altShow;
}

function logOut() {
    showSwitch("loginCode", "show");
    showSwitch("loginApproved", "hide");
    showSwitch("wrongUserData", "hide");
    localStorage.clear();
}
// funktion till inloggning
loginButton.onclick = function() {
const namn = loginName.value;
const lösenord = loginPassword.value;
localStorage.setItem("name", namn);
localStorage.setItem("password", lösenord);

    if (namn && lösenord) {
        userInfo(namn, lösenord);
    } else {
        
    }
}
// tillbakaknapp vid misslyckat inloggningsförsök
const backButton = document.getElementById("backButton");
backButton.onclick = function () {
    showSwitch("loginCode", "show");
    showSwitch("wrongUserData", "hide");
} // utloggningknapp
logoutButton.onclick = function () {
    logOut();
}

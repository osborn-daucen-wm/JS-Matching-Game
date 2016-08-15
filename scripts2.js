//var numberOfCookies = 5;
//var leftSide = document.getElementById("leftSide");
//
//function generateCookies() {
//    var count = 0;
//    while (count <= numberOfCookies) {
//        var cookies = document.createElement("img");
//        cookies.src="cookie.png";
//        var randomNumber = Math.random() * 400;
//        randomNumber = Math.floor(randomNumber);
//        cookies.style.top = randomNumber + "px";
//        cookies.style.left = randomNumber + "px";
//        leftSide.appendChild(cookies);
//        count++;
//    }
//}
//
//generateCookies();

var numberOfCookies = 5;
var leftSide = document.getElementById("leftSide");

function generateCookies() {
    var count = 0;
    while (count <= numberOfCookies) {
        var cookies = document.createElement("img");
        cookies.src = "cookie.png";
        cookies.style.top = Math.random() * 400 + "px";
        cookies.style.left = Math.random() * 400 + "px";
        leftSide.appendChild(cookies);
        count++;
    }
}

generateCookies();
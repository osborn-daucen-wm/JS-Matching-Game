var numberOfCookies = 5;
var leftSide = document.getElementById("leftSide");
var rightSide = document.getElementById("rightSide");

function generateCookies() {
    var count = 0;
    while (count <= numberOfCookies) {
        var cookies = document.createElement("img");
        cookies.src = "cookie.png";
        cookies.style.top = Math.random() * 400 + "px";
        cookies.style.left = Math.random() * 400 + "px";
        leftSide.appendChild(cookies);
        count++;
        leftSideImages = leftSide.cloneNode(true);
        leftSideImages.removeChild(leftSideImages.lastChild);
        rightSide.appendChild(leftSideImages);
    }
}

generateCookies();
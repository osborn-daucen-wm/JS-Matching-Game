var numberOfCookies = 5;
var leftSide = document.getElementById("leftSide");
var rightSide = document.getElementById("rightSide");
var theBody = document.getElementsByTagName("body")[0];
var win = true;

function generateCookies() {
    var count = 0;
    while (count <= numberOfCookies && win == true) {
        var cookies = document.createElement("img");
        cookies.src = "cookie.png";
        cookies.style.top = Math.random() * 325 + 50 + "px";
        cookies.style.left = Math.random() * 325 + 50 + "px";
        leftSide.appendChild(cookies);
        count++;
        leftSideImages = leftSide.cloneNode(true);
        leftSideImages.removeChild(leftSideImages.lastChild);
        rightSide.appendChild(leftSideImages);

        leftSide.lastChild.onclick = function nextLevel(event){
                event.stopPropagation();
                numberOfCookies += 5;
                generateCookies();
            while (leftSide.firstChild) {
                leftSide.removeChild(leftSide.firstChild);
            }
            while (rightSide.firstChild) {
                rightSide.removeChild(rightSide.firstChild);
            }
            generateCookies();
            };
        theBody.onclick = function gameOver() {
            alert("Game Over!");

            theBody.onclick = null;
            leftSide.lastChild.onclick = null;
            while (leftSide.firstChild) {
                leftSide.removeChild(leftSide.firstChild);
            }
            while (rightSide.firstChild) {
                rightSide.removeChild(rightSide.firstChild);
            }
            var loser = document.createElement("img");
            loser.src = "loser.png";
            loser.style.width = 500 + "px";
            loser.style.height = 400 + "px";
            loser.style.top = 100 + "px";
            leftSide.appendChild(loser);
            win = false;
        };

    }
};

generateCookies();
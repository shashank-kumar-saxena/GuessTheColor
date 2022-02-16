var btn = document.getElementById("button");
btn.addEventListener("click", fun, false);
function fun() {
    var color = document.getElementById("menu");
    var ran = guess();
    var msg = document.getElementById("msg");
    if (ran == color.value) {

        msg.innerText = "😊Choosen color match😊";
        msg.style.transition = "1s";
    }
    else {
        msg.style.transition = "1s";
        msg.innerText = "😢Better Luck Next Time😢";
    }
}
function guess() {
    var ran = Math.floor(Math.random() * 6 + 1);
    var body = document.getElementById("body");
    if (ran == 1) {
        body.style.background = "red";
        body.style.transition = "1s";
    }
    else if (ran == 2) {
        body.style.background = "Yellow";
        body.style.transition = "1s";
    }
    else if (ran == 3) {
        body.style.background = "Green";
        body.style.transition = "1s";
    }
    else if (ran == 4) {
        body.style.background = "blue";
        body.style.transition = "1s";
    }
    else if (ran == 5) {
        body.style.background = "voilet";
        body.style.transition = "1s";
    }
    else if (ran == 6) {
        body.style.background = "Indigo";
        body.style.transition = "1s";
    }
    return ran;
}
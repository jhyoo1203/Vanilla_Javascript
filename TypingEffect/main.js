let target = document.querySelector("#dynamic");

function randomString() {
    let strArr = ["iPhone14 Pro Max", "iPhone14 Pro", "Galaxy S22+", "Galaxy S22 Ultra"];
    let selectString = strArr[Math.floor(Math.random() * strArr.length)];
    let selectStrArr = selectString.split("");

    return selectStrArr;
}

function resetTyping() {
    target.textContent = "";
    dynamic(randomString());
}

function dynamic(randomArr) {
    if(randomArr.length > 0) {
        target.textContent += randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr);
        }, 80);
    } else {
        setTimeout(resetTyping, 3000);
    }
}

dynamic(randomString());

function blink(){
    target.classList.toggle("active");
}

setInterval(blink, 500);

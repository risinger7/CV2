let a = console.log("hello world");
const h1 = document.querySelector("h1");

function clickFunction() {
    if (h1.innerHTML !== "Hello!") {
        h1.innerHTML = "Hello!";
        h1.classList.remove("myStyle");
    } else {
        h1.innerHTML = "Good bye!";
        h1.classList.add("myStyle");
    }
}

let name = "Viktor";

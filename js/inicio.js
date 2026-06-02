console.log("JS carregado");
const btn = document.getElementById("startBtn");

btn.addEventListener("click", () => {

    document
    .querySelector(".wormhole")
    .classList
    .add("jump");

    setTimeout(() => {

        window.location.href = "index.html";

    }, 1800);

});
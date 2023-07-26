

const container = document.querySelector(".container");
container.addEventListener("click", (event) => {
    if (event.target.classList.contains("box")) {
        event.target.classList.toggle("red");
    }
});
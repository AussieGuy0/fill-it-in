const readyStateCheckInterval = setInterval(function () {
    if (document.readyState === "complete") {
        clearInterval(readyStateCheckInterval);
        main();
    }
}, 10);

const altKeyCode = 18;


function main() {
    const inputElements = document.querySelectorAll('input');
    inputElements.forEach((inputElement) => {
        inputElement.addEventListener("keyup", (event) => {
            if (event.keyCode === altKeyCode) {
                fillInput(inputElement)
            }
        })

    })
}

function fillInput(inputElement) {
    inputElement.value = "aa";

}

const readyStateCheckInterval = setInterval(function () {
    if (document.readyState === "complete") {
        clearInterval(readyStateCheckInterval);
        main();
    }
}, 10);

const altKeyCode = 18;
const valueGenerator  = new ValueGenerator();


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
    const type = inputElement.type;
    if (type != null) {
        switch (type) {
            case 'email':
                inputElement.value = valueGenerator.generateEmail();
                break;
            case 'number':
                inputElement.value = valueGenerator.generateNumber();
                break;
            case 'password':
                inputElement.value = valueGenerator.generatePassword();
                break;
            default:
                inputElement.value = valueGenerator.generateRandomWord();
        }
    } else {
        inputElement.value = valueGenerator.generateRandomWord();
    }
}



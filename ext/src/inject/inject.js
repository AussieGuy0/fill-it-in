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
    const type = inputElement.type;
    if (type != null) {
        if (type === 'email') {
            inputElement.value = generateEmail();
        } else if (type === 'number') {
            inputElement.value = generateNumber();
        } else {
            inputElement.value = generateRandomWord();
        }
    } else {
        inputElement.value = generateRandomWord();
    }
}

function generateEmail() {
    return generateRandomWord() + '@' + generateDomain();
}

function generateNumber() {
    return Math.floor(Math.random() * 100);
}

const domains = ["gmail.com", "yahoo.com", "hotmail.com"];

function generateDomain() {
    return getRandomElementFromArray(domains);
}

const militaryAlphabet = ['alpha', 'bravo', 'charlie', 'delta', 'echo', 'foxtrot', 'golf']; //TODO
function generateRandomWord() {
    return getRandomElementFromArray(militaryAlphabet);
}

function getRandomElementFromArray(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}


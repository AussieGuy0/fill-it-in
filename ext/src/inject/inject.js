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
        switch (type) {
            case 'email':
                inputElement.value = generateEmail();
                break;
            case 'number':
                inputElement.value = generateNumber();
                break;
            case 'password':
                inputElement.value = generatePassword();
                break;
            default:
                inputElement.value = generateRandomWord();
        }
    } else {
        inputElement.value = generateRandomWord();
    }
}

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const militaryAlphabet = ['alpha', 'bravo', 'charlie', 'delta', 'echo', 'foxtrot', 'golf']; //TODO
function generateEmail() {
    return generateRandomWord() + '@' + generateDomain();
}

function generateNumber(max = 100) {
    return Math.floor(Math.random() * max);
}

const domains = ["gmail.com", "yahoo.com", "hotmail.com"];

function generateDomain() {
    return getRandomElementFromArray(domains);
}

function generatePassword(length = 8) {
    const numberChance = 0.25;
    let pass = '';
    for (let i = 0; i < length; i++) {
        if (Math.random() < numberChance) {
            pass += generateNumber()
        } else {
            pass += getRandomLetter();
        }
    }
    return pass;

}

function generateRandomWord() {
    return getRandomElementFromArray(militaryAlphabet);
}

function getRandomLetter() {
    return alphabet.charAt(generateNumber(alphabet.length));
}

function getRandomElementFromArray(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}


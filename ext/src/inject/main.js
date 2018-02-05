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
    let value = null;
    const type = inputElement.type;
    if (type != null && type !== 'text') {
        value = generateValueFromType(type);
    } else {
        const placeholderValue = inputElement.getAttribute('placeholder');
        if (placeholderValue.toLowerCase() === 'username') {
            value = valueGenerator.generateUsername();
        } else {
            value = valueGenerator.generateUsername();

        }
    }
    inputElement.value = value;
}

function generateValueFromPlaceholder(placeholder) {
    switch (placeholder) {
        case 'username':
            return valueGenerator.generateUsername();
            break;
        default:
            return valueGenerator.generateRandomWord();

    }
}

function generateValueFromType(type) {
    switch (type) {
        case 'email':
            return valueGenerator.generateEmail();
            break;
        case 'number':
            return valueGenerator.generateNumber();
            break;
        case 'password':
            return valueGenerator.generatePassword();
            break;
        default:
            return valueGenerator.generateRandomWord();
    }
}



const readyStateCheckInterval = setInterval(function () {
    if (document.readyState === "complete") {
        clearInterval(readyStateCheckInterval);
        main();
    }
}, 10);

const altKeyCode = 18;
const valueGenerator  = new ValueGenerator();


function main() {
    const body = document.body;
    body.addEventListener('keyup', (event) => {
        const element = event.srcElement;
        const elementName = element.localName;
        if (event.keyCode === altKeyCode) {
            if (elementName === 'input') {
                fillInput(element);
            } else if (elementName === 'textarea') {
                element.value = valueGenerator.generateRandomWord();

            }
        }

    });
}

function fillInput(inputElement) {
    let value = null;
    const type = inputElement.type;
    if (type != null && type !== 'text') {
        value = generateValueFromType(type);
    } else {
        const placeholderValue = inputElement.getAttribute('placeholder');
        value = generateValueFromPlaceholder(placeholderValue);
    }
    inputElement.value = value;
}

function generateValueFromPlaceholder(placeholder) {
    if (placeholder === 'username') {
        return valueGenerator.generateUsername();
    } else if (placeholder.indexOf('name') > -1) {
        return valueGenerator.generateFirstName();
    } else {
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



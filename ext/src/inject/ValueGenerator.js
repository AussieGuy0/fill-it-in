const dataUrl = 'data';

class DataSource {

    constructor(filename) {
        this.filename = filename;
        this.data = null;
        this.updateData(); //Lazy load this
    }

    getValue() {
        return getRandomElementFromArray(this.data);
    }

    async updateData() {
        let response;
        response = await this.requestValues();
        const text = await response.text();
        this.data = text.split('\n');
    }

    requestValues() {
        const url = chrome.runtime.getURL(`${dataUrl}/${this.filename}`);
        return fetch(url);
    }

}

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const militaryAlphabet = ['alpha', 'bravo', 'charlie', 'delta', 'echo', 'foxtrot', 'golf']; //TODO
const domains = ["gmail.com", "yahoo.com", "hotmail.com"];

const adjectives = new DataSource('adjectives.txt');
const animals = new DataSource('animals.txt');

class ValueGenerator {

    generateEmail() {
        return this.generateRandomWord() + '@' + this.generateDomain();
    }

    generateNumber(max = 100) {
        return Math.floor(Math.random() * max);
    }


    generateDomain() {
        return getRandomElementFromArray(domains);
    }

    generatePassword(length = 8) {
        const numberChance = 0.25;
        let pass = '';
        for (let i = 0; i < length; i++) {
            if (Math.random() < numberChance) {
                pass += this.generateNumber()
            } else {
                pass += this.getRandomLetter();
            }
        }
        return pass;

    }

    generateRandomWord() {
        return getRandomElementFromArray(militaryAlphabet);
    }

    generateUsername() {
        return adjectives.getValue() + animals.getValue();
    }

    getRandomLetter() {
        return alphabet.charAt(this.generateNumber(alphabet.length));
    }
}

function getRandomElementFromArray(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}



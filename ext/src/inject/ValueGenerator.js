const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const militaryAlphabet = ['alpha', 'bravo', 'charlie', 'delta', 'echo', 'foxtrot', 'golf']; //TODO
const domains = ["gmail.com", "yahoo.com", "hotmail.com"];

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

    getRandomLetter() {
        return alphabet.charAt(this.generateNumber(alphabet.length));
    }

}

function getRandomElementFromArray(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

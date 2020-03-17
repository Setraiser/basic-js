class VigenereCipheringMachine {

    constructor(direct=true) {
        this.direct = direct;
    }

    orderA(char) {
        return char.charCodeAt(0) - 65;
    }

    crypt(string, key, isDirect) {
        if (string === undefined || key === undefined) throw Error();
        let str;
        let newWordArr = [];
        let counter = 0;
        let reg = /[A-Z]/g;
        let b;

        string = string.toUpperCase();
        key = key.toUpperCase();
        str = string.replace(reg, (letter) => {
            b = key[counter++ % key.length];
            return String.fromCharCode(((this.orderA(letter) + (isDirect ? 26 - this.orderA(b) : this.orderA(b))) % 26 + 65));
        });

        if (!this.direct) {
            for (let i = str.length; i >=0; i--) {
                if (str[i] >= 'A' || str[i] <= 'Z') {
                    newWordArr.push(str[i]);
                }
            }

            str = newWordArr.join('');

        }
        return str;
    }

    encrypt(string, key) {
        return this.crypt(string, key, false);
    }

    decrypt(string, key) {
        return this.crypt(string, key, true); 
    }
}

module.exports = VigenereCipheringMachine;

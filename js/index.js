function checkIfNotContainsNumber(string) {
    const index = string.search(/[0-9]/);
    return index == -1 ? true : false;
}

function getEquivalentKey(key) {
    const totalIncidence = parseInt(key / 26);
    return key - totalIncidence * 26;
}

function cesarEncrypt(key, phrase) {
    const characterArray = phrase.toUpperCase().split('');

    if (key > 26) {
        key = getEquivalentKey(key);
    }

    const newCharacterArray = characterArray.map((letter) => {
        if (letter !== ' ') {
            let letterCode = letter.charCodeAt(0);
            let newLetter;

            if ((letterCode + key) > 90) {
                newLetter = String.fromCharCode(letterCode + key - 26);
            } else {
                newLetter = String.fromCharCode(letterCode + key);
            }

            return newLetter;
        } else {
            return ' ';
        }
    });

    return newCharacterArray.join('');
}

function cesarDecrypt(key, phrase) {
    const characterArray = phrase.toUpperCase().split('');

    if (key > 26) {
        key = getEquivalentKey(key);
    }

    const newCharacterArray = characterArray.map((letter) => {
        if (letter !== ' ') {
            let letterCode = letter.charCodeAt(0);
            let newLetter;

            if ((letterCode - key) < 65) {
                newLetter = String.fromCharCode(letterCode - key + 26);
            } else {
                newLetter = String.fromCharCode(letterCode - key);
            }

            return newLetter;
        } else {
            return ' ';
        }
    });

    return newCharacterArray.join('');
}

function runCesarCipher(action) {
    let key = parseInt(prompt('Insira a chave da criptografia'));
    const phrase = prompt('Insira a frase criptografada');

    if (isNaN(key) || key < 0) {
        alert('A chave inserida não é válida');
        window.location.reload();
    }

    if (!checkIfNotContainsNumber(phrase)) {
        alert('A frase inserida deve possuir apenas letras');
        window.location.reload();
    }

    if (action === 'encrypt') {
        const encryptedPhrase = cesarEncrypt(key, phrase);
        document.write(encryptedPhrase);
    } else {
        const decryptedPhrase = cesarDecrypt(key, phrase);
        document.write(decryptedPhrase);
    }
}

const action = prompt('Selecione a ação desejada \n1 - Criptografar\n2 - Descriptografar');

switch (action) {
    case '1':
        runCesarCipher('encrypt');
        break;
    case '2':
        runCesarCipher('decrypt');
        break;
    default:
        alert('Opção inválida');
        window.location.reload();
        break;
}

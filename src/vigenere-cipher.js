const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(dir) {
    this.dir = dir || dir === undefined;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    const regExp = /^[A-Z]+$/;
    const sign = '+'
    let cryptedMessage = '';
    let j = 0;
    let messageToCrypt = message.toUpperCase().split('');
    for (const currentCharacter of messageToCrypt) {
      regExp.test(currentCharacter) ?
          (cryptedMessage += this.getCryptCharacter(currentCharacter, key, j, sign), j++) :
          cryptedMessage += currentCharacter;
    }
    return this.dir ? cryptedMessage : cryptedMessage.split('').reverse().join('');
  }
  decrypt(cryptedMessage, key) {
    if (!cryptedMessage || !key) throw new Error('Incorrect arguments!');
    const regExp = /^[A-Z]+$/;
    const sign = '-'
    let message = '';
    let j = 0;
    let messageToDecrypt = cryptedMessage.toUpperCase().split('');
    for (const currentCharacter of messageToDecrypt) {
      regExp.test(currentCharacter) ?
          (message += this.getCryptCharacter(currentCharacter, key, j, sign), j++) :
          message += currentCharacter;
    }
    return this.dir ? message : message.split('').reverse().join('');
  }

  getCryptCharacter(currentCharacter, key, j, sign){
    return String.fromCharCode((
        (eval(`${currentCharacter.charCodeAt(0) - 65}${sign}${key[j % key.length]
            .toUpperCase()
            .charCodeAt() - 65}`)
            % 26
            + 26)
        % 26)
        + 65);
  }
}

module.exports = {
  VigenereCipheringMachine
};

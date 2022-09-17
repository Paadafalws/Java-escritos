let message1 = "The vessel 'Mars' called at the port.";
let message2 = 'Cyclone "Cilida" to pass close to Mauritius.';

console.log(message1); // -> The vessel 'Mars' called at the port.
console.log(message2); // -> Cyclone "Cilida" to pass close to Mauritius.

let str = "java script language";

console.log(str.length); // -> calcular o numero de caracteres na fase 
console.log('test'.length); // -> 4

console.log(str.charAt(0)); // pegar o caracteres especificio dentro da frase
console.log('abc'.charAt(1)); // 

console.log(str.slice(0, 4)); // -> 'java' começo ate o final 0 ~ 4 casas 
console.log('test'.slice(1, 3)); // -> 'es'

console.log(str.split(' ')); // -> ['java', 'script', 'language'] divider as frases por caracters de sua escolha
console.log('192.168.1.1'.split('11'));  // -> ['192', '168', '1', '1']

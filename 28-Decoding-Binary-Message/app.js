const mes = '01001000 01100101 01101100 01101100 01101111 00100000 01010111 01101111 01110010 01101100 01100100'
const res = mes.split(' ').map(b => parseInt(b, 2)).map(num => String.fromCharCode(num)).join('')

alert(res)
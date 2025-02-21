const str = '  Hello World how are you? '

console.log(str.length) // довжина рядка

console.log(str.toLowerCase()) // перетворити рядок в нижній регістр
console.log(str.toUpperCase()) // перетворити рядок в верхній регістр

console.log(str.charAt(0)) // отримати перший символ рядка

console.log(str.includes('World')) // перевірити чи включено в рядок

console.log(str.split(' ')) // розділити рядок на частини по пробілам

console.log(str.slice(6, 12)) // отримати підрядок рядка
console.log(str.replace('?', '!')) // замінити ? на !
console.log(str.replaceAll(' ', ', ')) // замінити World на Hello
console.log(str.trim()) // видалити пробіли в рядку

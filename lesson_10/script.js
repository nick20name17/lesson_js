const product = {
    title: 'Iphone 16e',
    price: 599,
    'start-rating': 5,
    link: 'apple.com',
    image: 'https\:apple.com/iphone-16e.png',
    specs: {
        weight: 180,
        length: 17,
        width: 9,
    },
    printInfo: () => {
        const infoStr = `${product.title}, ${product.price}$, you can buy it on: ${product.link}`

        console.log(infoStr)
    },
}

console.log(product)

product.price = 600
product.discount = 10

delete product.image

console.log(product)

// const productKey = prompt('enter info key')

// console.log(product[productKey])

// product.printInfo()

const temperature = 12

if (temperature >= 25) {
    console.log("It's hot outside")
} else if (temperature >= 18) {
    console.log("It's warm outside")
} else {
    console.log("It's cold outside")
}

const lightColors = 'green'

if (lightColors === 'green') {
    console.log('You can go')
} else if (lightColors === 'yellow') {
    console.log('You have to wait')
} else if (lightColors === 'red') {
    console.log("You can't go")
} else {
    console.log('Error')
}

switch (lightColors) {
    case 'green':
        console.log('You can go')
        break
    case 'yellow':
        console.log('You have to wait')
        break
    case 'red':
        console.log("You can't go")
        break
    default:
        console.log('Error')
}

const currentCountry = 'Ukraine'

let temperature2 = 0

if (currentCountry === 'Ukraine') {
    temperature2 = 30
} else {
    temperature2 = 20
}

const currentTemperature = currentCountry === 'Ukraine' ? 30 : 20

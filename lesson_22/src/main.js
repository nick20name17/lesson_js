import { initTimer } from './timer'

const now = new Date()

// now.setFullYear(2005)

const myDate = new Date(2024, 2, 26, 15, 30, 0)

function getCurrentDateInfo() {
    const currentYear = now.getFullYear()
    const currentMonth = now.getMonth() + 1
    const currentDay = now.getDate()
    const currentHour = now.getHours()
    const currentMinute = now.getMinutes()

    return `Year: ${currentYear}, Month: ${currentMonth}, Day: ${currentDay}, Hour: ${currentHour}, Minute: ${currentMinute}`
}

const currentDateInfo = getCurrentDateInfo()

console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleTimeString())
console.log(myDate.toLocaleString())

initTimer()

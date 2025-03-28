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

console.log(now.toDateString())
console.log(now.toISOString())
console.log(now.toLocaleDateString())
console.log(now.toLocaleTimeString())
console.log(now.toLocaleString())

initTimer()

export function initTimer() {
    const days = document.getElementById('days')
    const hours = document.getElementById('hours')
    const minutes = document.getElementById('minutes')
    const seconds = document.getElementById('seconds')
    const miliseconds = document.getElementById('miliseconds')

    setInterval(() => {
        days.textContent = new Date().getDate()
        hours.textContent = new Date().getHours()
        minutes.textContent = new Date().getMinutes()
        seconds.textContent = new Date().getSeconds()
        miliseconds.textContent = new Date().getMilliseconds()
    }, 1)
}

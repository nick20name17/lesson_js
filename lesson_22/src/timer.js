export function initTimer() {
    const daysBlock = document.getElementById('days')
    const hoursBlock = document.getElementById('hours')
    const minutesBlock = document.getElementById('minutes')
    const secondsBlock = document.getElementById('seconds')

    const resetBtn = document.getElementById('reset')
    const stopBtn = document.getElementById('stop')

    let remainingTime = 0
    let timer = null

    function convertSeconds(seconds) {
        const days = Math.floor(seconds / (24 * 3600))
        seconds %= 24 * 3600
        const hours = Math.floor(seconds / 3600)
        seconds %= 3600
        const minutes = Math.floor(seconds / 60)
        seconds %= 60

        return { days, hours, minutes, seconds }
    }

    function resetTimer() {
        clearInterval(timer)
        remainingTime = 0
        daysBlock.textContent = '00'
        hoursBlock.textContent = '00'
        minutesBlock.textContent = '00'
        secondsBlock.textContent = '00'
    }

    resetBtn.addEventListener('click', resetTimer)

    function startTimer(minutes) {
        resetTimer()

        remainingTime = minutes * 60

        timer = setInterval(() => {
            if (remainingTime <= 0) {
                resetTimer()
                return
            }

            remainingTime--
            updateTime(remainingTime)
        }, 1000)

        updateTime(remainingTime)
    }

    function stopTimer() {
        clearInterval(timer)
    }

    stopBtn.addEventListener('click', stopTimer)

    function updateTime(seconds) {
        const {
            hours,
            minutes,
            seconds: convertedSeconds,
            days
        } = convertSeconds(seconds)

        daysBlock.textContent = days.toString().padStart(2, '0')
        hoursBlock.textContent = hours.toString().padStart(2, '0')
        minutesBlock.textContent = minutes?.toString().padStart(2, '0')
        secondsBlock.textContent = convertedSeconds
    }

    startTimer(10000)
}

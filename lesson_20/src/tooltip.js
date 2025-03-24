export function initTooltip(options) {
    const { side = 'top', delay = 400 } = options

    const tooltipTrigger = document.querySelector('.tooltip-trigger')
    const tooltipContent = document.querySelector('.tooltip-content')

    if (side) {
        tooltipContent.classList.add(side)
    }

    tooltipTrigger.addEventListener('mouseenter', () => {
        setTimeout(() => {
            tooltipContent.classList.add('visible')
        }, delay)
    })

    tooltipTrigger.addEventListener('mouseleave', () => {
        tooltipContent.classList.remove('visible')
    })
}

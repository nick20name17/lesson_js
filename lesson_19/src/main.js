import EmblaCarousel from 'embla-carousel'

const OPTIONS = {}

const emblaNode = document.querySelector('.embla')
const viewportNode = emblaNode.querySelector('.embla__viewport')

const btnPrev = document.querySelector('#btn-prev')
const btnNext = document.querySelector('#btn-next')

const ebmla = EmblaCarousel(viewportNode, OPTIONS)

btnPrev.addEventListener('click', () => {
    ebmla.scrollPrev()
})

btnNext.addEventListener('click', () => {
    ebmla.scrollNext()
})

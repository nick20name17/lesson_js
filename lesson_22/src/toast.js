export function showToast(text = 'Some info') {
    const toastMarkup = `<div id="toast"
        class="rounded-md bg-emerald-100 h-16 transition-all duration-300 w-80 px-4 py-2 fixed bottom-5 right-5 translate-y-[calc(100%+4rem)] ">
        <div class="font-medium text-emerald-500">Success</div>
        <p class="text-sm">${text}</p>
     </div>`

    document.body.insertAdjacentHTML('beforeend', toastMarkup)

    const toast = document.querySelector('#toast')

    setTimeout(() => {
        toast.classList.add('!translate-y-0')
    }, 0)
}


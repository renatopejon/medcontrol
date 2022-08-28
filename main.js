const fullName = document.querySelector('#full-name')
const dataHora = document.querySelector('#data-hora')
const erroNome = document.querySelector('.nome')
const erroData = document.querySelector('.data')
const formPopup = document.querySelector('.form-popup')
const openButton = document.querySelector('.open-button')

fullName.addEventListener('focusout', checkEmptyName)
dataHora.addEventListener('focusout', checkEmptyDate)

document.addEventListener('click', (e) => {
        const isClickInside = formPopup.contains(e.target)
        const isClickOpen = openButton.contains(e.target);

        if (!isClickInside && !isClickOpen) {
            closeForm()
        }
    }
)

function checkEmptyName() {
    if (fullName.value == '') {
        fullName.style.border = '1px solid #F24A4A'
        erroNome.style.display = 'block'
    } else {
        fullName.style.border = '1px solid var(--azul)'
        erroNome.style.display = 'none'
    }
}

function checkEmptyDate() {
    if (fullName.value == '') {
        dataHora.style.border = '1px solid #F24A4A'
        erroData.style.display = 'block'
    } else {
        dataHora.style.border = '1px solid var(--azul)'
        erroData.style.display = 'none'
    }
}

function openForm() {
    formPopup.style.display = "block"
}

function closeForm() {
   formPopup.style.display = "none"
}
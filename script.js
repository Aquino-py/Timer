const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secondsEl = document.getElementById('seconds')
var titulo = document.getElementById('titulo')


const defaultDate = ''
var newYears = defaultDate

function countDown() {
    const newYearsDate = new Date(newYears)
    const currentDate = new Date()

    const totalSeconds = (newYearsDate - currentDate) / 1000

    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds / 3600) % 24
    const minutes = Math.floor(totalSeconds / 60) % 60
    const seconds = Math.floor(totalSeconds) % 60

    daysEl.innerHTML = days
    hoursEl.innerHTML = formatTime(hours)
    minsEl.innerHTML = formatTime(minutes)
    secondsEl.innerHTML = formatTime(seconds)
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time
}

function showModal() {
    $('#modalAlterar').modal('show')
}

function closeModal() {
    $('#modalAlterar').modal('hide')
    dataInformada = document.getElementById('dataInformada').value = ''
    tituloInformado = document.getElementById('tituloInformado').value = ''

}

function alterarData() {
    var dataInformada = document.getElementById('dataInformada').value
    var tituloInformado = document.getElementById('tituloInformado').value
    if (dataInformada && tituloInformado) {
        newYears = dataInformada
        titulo.innerHTML = tituloInformado
        countDown()
        setInterval(countDown, 1000)
        closeModal()
    }
}


// initial call
// countDown();

// setInterval(countDown, 1000);
const form = document.getElementById('formulario')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const data = Object.fromEntries(
        new FormData(e.target)
    )

    dataJson = JSON.stringify(data)
    alert(dataJson)

    sendEmail();
})

function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "diegodelvalleee37@gmail.com",
        Password: "21DFD0B39F4B29A2E3F1F5E4673C97C012B4",
        To: 'diegodelvalleee37@gmail.com',
        From: "diegodelvalleee37@gmail.com",
        Subject: "Líderes del Mañana",
        Body: data.name
    }).then(
        message => alert(message)
    );
}

const datos = document.createElement('p')
datos.textContent = 'hola'

form.appendChild(datos)

function alerta() {
    Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
    })
}

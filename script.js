function carregar() {
    var msg = window.document.getElementById('msg')
    var tx = window.document.getElementById('tx')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //bom dia
        tx.innerHTML = '<strong>Bom Dia!</strong>'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18){
        //boa tarde
        tx.innerHTML = '<strong>Boa Tarde!</strong>'
        document.body.style.background = '#b9846f'
    } else {
        //boa noite
        tx.innerHTML = '<strong>Boa Noite!</strong>'
        document.body.style.background = '#515154'
    }
}
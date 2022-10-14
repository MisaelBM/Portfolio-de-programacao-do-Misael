console.log('Iniciando codigo')
alert(`Atenção não existem contas reais cadastradas é apenas um exemplo`)
let emnols = 0
let senhals = 0
function avi1d() {
    const avi1 = document.getElementById('avi1')
    var emno = document.querySelector('input#emno')
    var emno = String(emno.value)
    if(emno.length >= 3){
        avi1.innerHTML = ''
        emnols = 1
        localStorage.emnoc = emno
    }else if(emno.length < 3){
        avi1.innerHTML = '°'
        emnols = 0 
    }
    if(emnols == 1 && senhals == 1){
        const entc = document.getElementById('entc')
        entc.style.backgroundColor = `cyan`
    }else{
        const entc = document.getElementById('entc')
        entc.style.backgroundColor = `gray`
    }
}
function avi2d() {
    const avi2 = document.getElementById('avi2')
    var senha = document.querySelector('input#senha')
    var senha = String(senha.value)
    if(senha.length >= 8){
        avi2.innerHTML = ''
        senhals = 1
    }else if(senha.length < 8){
        avi2.innerHTML = '°'
        senhals = 0
    }
    if(emnols == 1 && senhals == 1){
        const entc = document.getElementById('entc')
        entc.style.backgroundColor = `cyan`
    }else{
        const entc = document.getElementById('entc')
        entc.style.backgroundColor = `gray`
    }
}
    function ent() {
        if(emnols == 1 && senhals == 1){   
      const logado = document.getElementById('logado') 
      logado.innerHTML = `<center><h2>Login concluido com sucesso! <br> Seja bem-vindo ${localStorage.emnoc} `
      logado.style.zIndex = `100000` 
      logado.style.backgroundColor = `lightseagreen`
      logado.style.border = `solid, 1px`
      logado.style.position = `fixed`
      logado.style.width = `90%`
      logado.style.height = `150px`
      logado.style.borderRadius = `10px`
      logado.style.marginLeft = `70px`
      setTimeout(
        function () {
            location.replace("file:///C:/Users/ricar/OneDrive/Documentos/Misael%C2%B4s%20site/indexpp.html")
        }
      ,4000)
        }
    }


console.log('Codigo carregado')
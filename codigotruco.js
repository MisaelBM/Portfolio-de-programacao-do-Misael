console.log('Iniciando codigo')
let pontoNos = 0
function bman() {
    const vspn = document.getElementById('vspn')
    const vsmtru = document.getElementById('vsmtru')
    ++pontoNos
    if(pontoNos < 12){
        vspn.innerHTML  = `<h2>${pontoNos}`
    }
    if(pontoEles == 11 && pontoNos == 11){
        vsmtru.innerHTML = "<h1> Agora é ganhar ou perder!"
        vsmtru.style.position = `absolute`
        vsmtru.style.zIndex = `1000`
        vsmtru.style.backgroundColor = `red`
        vsmtru.style.width = `100%`
        vsmtru.style.marginTop = `4rem`
        vsmtru.style.borderRadius = `15px`
        setTimeout(
            function () {
                vsmtru.innerHTML = ''
            }
        ,3000)
    }else if(pontoNos == 11){
        vsmtru.innerHTML = "<h1> Mão de 11!"
        vsmtru.style.position = `absolute`
        vsmtru.style.zIndex = `1000`
        vsmtru.style.backgroundColor = `red`
        vsmtru.style.width = `100%`
        vsmtru.style.marginTop = `4rem`
        vsmtru.style.borderRadius = `15px`
        setTimeout(
            function () {
                vsmtru.innerHTML = ''
            }
        ,3000)
    }
    if(pontoNos == 12){
        vsmtru.innerHTML = `<h1>Nós ganhamos de ${pontoNos} | ${pontoEles} <br> <hr> <br>
        😭😭😭😭Eles chupam o dedo😭😭😭😭`
        vsmtru.style.position = `absolute`
        vsmtru.style.zIndex = `1000`
        vsmtru.style.backgroundColor = `red`
        vsmtru.style.width = `100%`
        vsmtru.style.marginTop = `4rem`
        vsmtru.style.borderRadius = `15px`
        setTimeout(
            function () {
                const vspe = document.getElementById('vspe')
                vsmtru.innerHTML = ''
                pontoEles = 0
                pontoNos = 0
                vspe.innerHTML = `<h2>${pontoEles}`
                vspn.innerHTML = `<h2>${pontoNos}`
            }
        ,12000)
    }
}
function bmen() {
    const vspn = document.getElementById('vspn')
    if(pontoNos > 0){
        --pontoNos
        vspn.innerHTML  = `<h2>${pontoNos}`
    }
}
console.log('Iniciando codigo')
let pontoEles = 0
function bmae() {
    const vspe = document.getElementById('vspe')
    const vsmtru = document.getElementById('vsmtru')
    ++pontoEles
    if(pontoEles < 12){
        vspe.innerHTML  = `<h2>${pontoEles}`
    }
    if(pontoEles == 11 && pontoNos == 11){
        vsmtru.innerHTML = "<h1> Agora é ganhar ou perder!"
        vsmtru.style.position = `absolute`
        vsmtru.style.zIndex = `1000`
        vsmtru.style.backgroundColor = `red`
        vsmtru.style.width = `100%`
        vsmtru.style.marginTop = `4rem`
        vsmtru.style.borderRadius = `15px`
        setTimeout(
            function () {
                vsmtru.innerHTML = ''
            }
        ,3000)
    }else if(pontoEles == 11){
        vsmtru.innerHTML = "<h1> Mão de 11!"
        vsmtru.style.position = `absolute`
        vsmtru.style.zIndex = `1000`
        vsmtru.style.backgroundColor = `red`
        vsmtru.style.width = `100%`
        vsmtru.style.marginTop = `4rem`
        vsmtru.style.borderRadius = `15px`
        setTimeout(
            function () {
                vsmtru.innerHTML = ''
            }
        ,3000)
    }
    if(pontoEles == 12){
        vsmtru.innerHTML = `<h1>Eles ganharam de ${pontoEles} | ${pontoNos} <br> <hr> <br>
        😭😭😭😭Nós chupamos o dedo😭😭😭😭`
        vsmtru.style.position = `absolute`
        vsmtru.style.zIndex = `1000`
        vsmtru.style.backgroundColor = `red`
        vsmtru.style.width = `100%`
        vsmtru.style.marginTop = `4rem`
        vsmtru.style.borderRadius = `15px`
        setTimeout(
            function () {
                const vspn = document.getElementById('vspn')
                vsmtru.innerHTML = ''
                pontoEles = 0
                pontoNos = 0
                vspe.innerHTML = `<h2>${pontoEles}`
                vspn.innerHTML = `<h2>${pontoNos}`
            }
        ,12000)
    }
}
function bmee() {
    const vspe = document.getElementById('vspe')
    if(pontoEles > 0){
        --pontoEles
        vspe.innerHTML  = `<h2>${pontoEles}`
    }
}
function Truco() {
    const vstru = document.getElementById('vstru')
    vstru.style.display = `inline-block`
}
function nost() {
    const vspn = document.getElementById('vspn')
    const vstru = document.getElementById('vstru')
    pontoNos = pontoNos + 3
    if(pontoNos < 12){
        vspn.innerHTML  = `<h2>${pontoNos}`
    }
    if(pontoEles == 11 && pontoNos == 11){
        vsmtru.innerHTML = "<h1> Agora é ganhar ou perder!"
        vsmtru.style.position = `absolute`
        vsmtru.style.zIndex = `1000`
        vsmtru.style.backgroundColor = `red`
        vsmtru.style.width = `100%`
        vsmtru.style.marginTop = `4rem`
        vsmtru.style.borderRadius = `15px`
        setTimeout(
            function () {
                vsmtru.innerHTML = ''
            }
        ,3000)
    }else if(pontoNos == 11){
        vsmtru.innerHTML = "<h1> Mão de 11!"
        vsmtru.style.position = `absolute`
        vsmtru.style.zIndex = `1000`
        vsmtru.style.backgroundColor = `red`
        vsmtru.style.width = `100%`
        vsmtru.style.marginTop = `4rem`
        vsmtru.style.borderRadius = `15px`
        setTimeout(
            function () {
                vsmtru.innerHTML = ''
            }
        ,3000)
    }
    if(pontoNos >= 12){
        vsmtru.innerHTML = `<h1>Nós ganhamos de ${pontoNos} | ${pontoEles} <br> <hr> <br>
        😭😭😭😭Eles chupam o dedo😭😭😭😭`
        vsmtru.style.position = `absolute`
        vsmtru.style.zIndex = `1000`
        vsmtru.style.backgroundColor = `red`
        vsmtru.style.width = `100%`
        vsmtru.style.marginTop = `4rem`
        vsmtru.style.borderRadius = `15px`
        setTimeout(
            function () {
                const vspe = document.getElementById('vspe')
                vsmtru.innerHTML = ''
                pontoEles = 0
                pontoNos = 0
                vspe.innerHTML = `<h2>${pontoEles}`
                vspn.innerHTML = `<h2>${pontoNos}`
            }
        ,12000)
    }
    vspn.innerHTML = `<h2>${pontoNos}`
    vstru.style.display = `none`
}
function elest() {
    const vspe = document.getElementById('vspe')
    const vstru = document.getElementById('vstru')
    pontoEles = pontoEles + 3
    if(pontoEles < 12){
        vspe.innerHTML  = `<h2>${pontoEles}`
    }
    if(pontoEles == 11 && pontoNos == 11){
        vsmtru.innerHTML = "<h1> Agora é ganhar ou perder!"
        vsmtru.style.position = `absolute`
        vsmtru.style.zIndex = `1000`
        vsmtru.style.backgroundColor = `red`
        vsmtru.style.width = `100%`
        vsmtru.style.marginTop = `4rem`
        vsmtru.style.borderRadius = `15px`
        setTimeout(
            function () {
                vsmtru.innerHTML = ''
            }
        ,3000)
    }else if(pontoEles == 11){
        vsmtru.innerHTML = "<h1> Mão de 11!"
        vsmtru.style.position = `absolute`
        vsmtru.style.zIndex = `1000`
        vsmtru.style.backgroundColor = `red`
        vsmtru.style.width = `100%`
        vsmtru.style.marginTop = `4rem`
        vsmtru.style.borderRadius = `15px`
        setTimeout(
            function () {
                vsmtru.innerHTML = ''
            }
        ,3000)
    }
    if(pontoEles >= 12){
        vsmtru.innerHTML = `<h1> Eles ganharam de ${pontoEles} | ${pontoNos} <br> <hr> <br>
        😭😭😭😭Nós chupamos o dedo😭😭😭😭`
        vsmtru.style.position = `absolute`
        vsmtru.style.zIndex = `1000`
        vsmtru.style.backgroundColor = `red`
        vsmtru.style.width = `100%`
        vsmtru.style.marginTop = `4rem`
        vsmtru.style.borderRadius = `15px`
        setTimeout(
            function () {
                const vspn = document.getElementById('vspn')
                vsmtru.innerHTML = ''
                pontoEles = 0
                pontoNos = 0
                vspe.innerHTML = `<h2>${pontoEles}`
                vspn.innerHTML = `<h2>${pontoNos}`
            }
        ,12000)
    }
    vstru.style.display = `none`
}
function corre() {
    const vstru = document.getElementById('vstru')
    vstru.style.display = `none`
}
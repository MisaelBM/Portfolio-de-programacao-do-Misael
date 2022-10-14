console.log('Codigo iniciado')
//Função do seja bem-vindo
bemvindo()
function bemvindo() {
    setInterval(
        function () {
            var bem = document.getElementById('bem')
            bem.innerHTML = `<h1>|`
            setTimeout(function(){
                bem.innerHTML = `<h1>S|`
            }, 100)
            setTimeout(function(){
                bem.innerHTML = `<h1>Se|`
            }, 200)
            setTimeout(function(){
                bem.innerHTML = `<h1>Sej|`
            }, 300)
            setTimeout(function(){
                bem.innerHTML = `<h1>Seja|`
            }, 400)
            setTimeout(function(){
                bem.innerHTML = `<h1>Seja |`
            }, 500)
            setTimeout(function(){
                bem.innerHTML = `<h1>Seja b|`
            }, 600)
            setTimeout(function(){
                bem.innerHTML = `<h1>Seja be|`
            }, 700)
            setTimeout(function(){
                bem.innerHTML = `<h1>Seja bem|`
            }, 800)
            setTimeout(function(){
                bem.innerHTML = `<h1>Seja bem-|`
            }, 900)
            setTimeout(function(){
                bem.innerHTML = `<h1>Seja bem-v|`
            }, 1000)
            setTimeout(function(){
                bem.innerHTML = `<h1>Seja bem-vi|`
            }, 1100)
            setTimeout(function(){
                bem.innerHTML = `<h1>Seja bem-vin|`
            }, 1200)
            setTimeout(function(){
                bem.innerHTML = `<h1>Seja bem-vind|`
            }, 1300)
            setTimeout(function(){
                bem.innerHTML = `<h1>Seja bem-vindo|`
            }, 1400)
            setTimeout(function(){
                bem.innerHTML = `<h1>Seja bem-vindo!|`
            }, 1500)
            setTimeout(function(){
                bem.innerHTML = `<h1>Seja bem-vindo|`
            }, 5000)
        }
    ,5000)
}

//funções dos botões das linguagens

function html() {
    const html = document.getElementById('html')
    html.innerHTML = '<h2><center>Hypertext Markup Language'
    html.style.width = '480px'
    html.style.height = '60px'
}
function css() {
    const css = document.getElementById('css')
    css.innerHTML = '<h2>Cascading Style Sheets'
    css.style.width = '380px'
    css.style.height = '60px'
}
function js() {
    const js = document.getElementById('js')
    js.innerHTML = '<h2>JavaScript'
    js.style.width = '280px'
    js.style.height = '60px'
}
function php() {
    const php = document.getElementById('php')
    php.innerHTML = '<h2>Hypertext preprocessor'
    php.style.width = '380px'
    php.style.height = '60px'
}
function lp() {
    const lp = document.getElementById('lp')
    lp.innerHTML = '<h2>Logic programming'
    lp.style.width = '300px'
}
function htmll() {
    const html = document.getElementById('html')
    html.innerHTML = '<h2>HTML'
    html.style.width = '100px'
    html.style.height = '60px'
}
function cssl() {
    const css = document.getElementById('css')
    css.innerHTML = '<h2>CSS'
    css.style.width = '100px'
    css.style.height = '60px'
}
function jsl() {
    const js = document.getElementById('js')
    js.innerHTML = '<h2>Js'
    js.style.width = '100px'
    js.style.height = '60px'
}
function phpl() {
    const php = document.getElementById('php')
    php.innerHTML = '<h2>PHP'
    php.style.width = '100px'
    php.style.height = '60px'
}
function lpl() {
    const lp = document.getElementById('lp')
    lp.innerHTML = '<h2>{LP}'
    lp.style.width = '100px'
    lp.style.height = '60px'
}
function avili() {
    alert("Eu ainda não tenho os requisitos necessarios para poder usar o Linkedin, mas assim que possivel colocarei o link aqui")
}

console.log('Codigo executado')
$('.header__hamburguesa').click(function(){
    $('.header__menudesplegado').addClass('activo')
})

$('.header__close').click(function(){
    $('.header__menudesplegado').removeClass('activo')
})

$('.main').click(function(){
    $('.header__menudesplegado').removeClass('activo')
})

$('.papeleria__li').click(function(){
    let indice = $('.papeleria__li').index( $(this) )

    $('.papeleria__li').removeClass('activado')
    $('.papeleria__li').eq( indice ).addClass('activado')

    $('.papeleria__grid').removeClass('activado')
    $('.papeleria__grid').eq(indice).addClass('activado')
})

let indice = 0

$('.anuncio__derecha').click(function(){
    indice = indice + 1
    if( indice >= 3 ){
        indice = 0
    }
    ponerClases()
})

$('.anuncio__izquierda').click(function(){
    indice = indice - 1
    if( indice <= -1 ){
        indice = 2
    }
    ponerClases()
})

function ponerClases(){
    $('.anuncio__video').removeClass('activo')
    $('.anuncio__video').eq( indice ).addClass('activo')
}
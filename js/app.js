$('.header__hamburguesa').click(function(){
    $('.header__menudesplegado').addClass('activo')
})

$('.header__close').click(function(){
    $('.header__menudesplegado').removeClass('activo')
})

$('.main').click(function(){
    $('.header__menudesplegado').removeClass('activo')
})

$('.papeleria__btn').click(function(){

    let indice = $('.papeleria__btn').index( $(this) )

    $('.papeleria__btn').removeClass('activado')
    $('.papeleria__btn').eq(indice).addClass('activado')


    let clase = $(this).attr('data-clase')
    console.log( clase )

    if( clase === undefined ){
        $('.papeleria__section').removeClass('oculto')
    }else{
        $('.papeleria__section').addClass('oculto')
        $('.papeleria__section.' + clase ).removeClass('oculto')
    }

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
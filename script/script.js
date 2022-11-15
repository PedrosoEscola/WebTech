//----------------------------- EFEITO PARALLAX -----------------------------
jQuery(function () {
  jQuery('#home').click(function () {
    jQuery('html').animate({ scrollTop: 0 }, 1000)
  })
  jQuery('#pag1').click(function () {
    jQuery('html').animate(
      { scrollTop: jQuery('#container').offset().top - 20 },
      1000
    )
  })
  jQuery('#pag2').click(function () {
    jQuery('html').animate(
      { scrollTop: jQuery('#funcionalidades').offset().top - 20 },
      1000
    )
  })
  jQuery('#pag3').click(function () {
    jQuery('html').animate(
      { scrollTop: jQuery('#portfolio').offset().top - 20 },
      1000
    )
  })
  jQuery('#pag4').click(function () {
    jQuery('html').animate(
      { scrollTop: jQuery('#clientes').offset().top - 20 },
      1000
    )
  })
  jQuery('#pag5').click(function () {
    jQuery('html').animate(
      { scrollTop: jQuery('#sobre').offset().top - 20 },
      1000
    )
  })
  jQuery('#pag6').click(function () {
    jQuery('html').animate(
      { scrollTop: jQuery('#contato').offset().top - 50 },
      1000
    )
  })
  jQuery('#botao').click(function () {
    jQuery('html').animate(
      { scrollTop: jQuery('#contato').offset().top - 50 },
      1000
    )
  })
})

//-----MENU-----//
$(function () {
  $('.menu i').click(function () {
    $('.submenu').animate(
      {
        height: 'toggle',
        opacity: 'toggle'
      },
      500
    )
  })
})
$(function () {
  $('.submenu a, .menu h1').click(function () {
    $('.submenu').animate(
      {
        height: 'hide',
        opacity: 'hide'
      },
      500
    )
  })
})

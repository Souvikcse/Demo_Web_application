$(function (){
    let proName = $('#productName')
    let promanuf = $('#productmanu')
    let proPrice = $('#productPrice')

    $('#btnaddProduct').click(function () { 
      addProducts(proName.val(),
                 promanuf.val(), 
                 proPrice.val(), 
                 function(addedProduct){
                     window.alert('Added '+ proName + 'to Database')
                 })  
    })
})
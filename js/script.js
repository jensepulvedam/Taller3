$(document).ready(function(){
    var show = 1;

    $('.show').on('click', function(){
        
        if(show == 1){
            $('.menu').addClass("menu2");
            show = 0;
        }else{
            $('.menu').removeClass("menu2");
            show = 1;
        }
    })

})

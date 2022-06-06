$(document).ready(function(){
    var profile_box= document.getElementsByClassName('profile-box')[0];    // show profile menu
    profile_box.addEventListener('click',function(){
        $('.profile-items').slideToggle(500);
    })

    $('.tribar-icon').click(function(){         // show right section
        $('.right-section').slideToggle(500);
    })

    window.addEventListener("load", function(){     // when page loaded
        var w = $(window).width();                  // get page width 
        if(w<=768){
            $('.right-section').css({'display':'none'});
            console.log('0')
        }else{
            $('.right-section').css({'display':'block'});
        }
        $(window).resize(function(){                // when window resize
            w = $(window).width();
            if( w <= 768 ){                         // smaller than medium
                $('.right-section').css({'display':'none'});
                $('.show-table-and-show-form').css({'margin-right': '0px'})
            }else if( w <= 960){                    // medium size
                $('.right-section').css({'display':'block'});
                $('.right-section').css({'width':'134px'});
                $('.show-table-and-show-form').css({'margin-right': '200px'})
            }else{                                  // large siza
                $('.right-section').css({'display':'block'});
                $('.right-section').css({'width':'232px'});
                $('.show-table-and-show-form').css({'margin-right': '200px'})
            }
        })
    })

    var table_item = document.getElementsByClassName('table-item')[0];
    var form_item = document.getElementsByClassName('form-item')[0];
    var dashboard_item = document.getElementsByClassName('dashboard-item')[0];

    dashboard_item.addEventListener('click', function(){      // when click on dashboard item in right section
        $('.table-section').css({'display':'none'});
        $('.form-section').css({'display':'none'});
        $('.dashboard-section').fadeToggle(500);
    })

    table_item.addEventListener('click', function(){       // when click on table item in right section
        $('.form-section').css({'display':'none'});
        $('.dashboard-section').css({'display':'none'});
        $('.table-section').fadeToggle(500);
    })

    form_item.addEventListener('click', function(){       // when click on form item in right section
        $('.table-section').css({'display':'none'});
        $('.dashboard-section').css({'display':'none'});
        $('.form-section').fadeToggle(500);
    })
})
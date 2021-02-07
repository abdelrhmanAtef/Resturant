$(window).ready(function(){
    $(".spinner").fadeOut(4000 , function(){
        $("#loading").fadeOut(2000 , function(){
            $("body").css("overflow" , "auto");
            $("#loading").remove()
        });
    });

// about link wen click

$(".navbar-expand-lg .navbar-nav .nav-link").click(function(){
    $(this).css("color" , "#f50").parent().siblings().find("a").css("color" , "#fff")
    });
    
    $(".dlist p").click(function(){
    $(this).addClass("activate").siblings().removeClass("activate")
    })
    $(window).scroll(function(){
        let scr = $(this).scrollTop();
        if(scr >=500){
            $(".move").show(500)
        }else{
            $(".move").hide(1000)
        }
    }); 
    var mixer = mixitup('.list');
        
    var mixer = mixitup(containerEl);
        var mixer = mixitup(containerEl, {
        selectors: {
            target: '.blog-item'
        },
        animation: {
            duration: 300
        }
    }); 
  
    });


let arrow =document.getElementById("arrow");
let production = document.getElementById("production");
let move = document.getElementById("move");
arrow.addEventListener("click",function(){
 
    window.scroll({
        top: production.offsetTop,
        behavior: 'smooth'
      });
});


// $(".a-dot").click(function(){
//     $(".b-dot").toggle()
// });
// $(".b-dot li").click(function(){
//     $(".b-dot").fadeOut(1000)
// });

// $(".c-dot li , .b-dot li").click(function(){
//     $(this).addClass("active").siblings().removeClass("active");
//    let attrub= $(this).attr("id");
//    if(attrub == "all"){
//     $(".foode-img div img").fadeIn();
//    }else{
//    $(".foode-img div>img").fadeOut();
// //    $(".images ."+buttonclass).fadeIn();
//    $(".foode-img div>img#"+attrub).fadeIn()
//    }
// });

move.addEventListener("click" , function(){
    window.scroll({
        top:0,
        behavior: 'smooth'
      });

});

let about = document.getElementById("about");
let aftermenu = document.getElementById("after-menu"); 

about.addEventListener("click",function(){
    window.scroll({
        top:  aftermenu.offsetTop,
        behavior: 'smooth'
      });
})

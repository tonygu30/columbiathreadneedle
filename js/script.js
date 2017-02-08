$(function(){

var Nw=new Array()


Nw[0]="<span></span><iframe width='700' height='400' src='https://www.youtube.com/embed/XgVddYhGdQ8' frameborder='0' allowfullscreen></iframe>"
Nw[1]="<span></span><img src='images/lu_pic2.jpg'>"
Nw[2]="<span></span><img src='images/lu_pic3.jpg'>"
Nw[3]="<span></span><img src='images/lu_pic4.jpg'>"
var Nw1=new Array()
Nw1[0]="<span></span><img src='images/lu_xpic1.jpg'>"
Nw1[1]="<span></span><img src='images/lu_xpic2.jpg'>"
Nw1[2]="<span></span><img src='images/lu_xpic3.jpg'>"
Nw1[3]="<span></span><img src='images/lu_xpic4.jpg'>"

var Tb=document.querySelectorAll(".dota_pic1 div")
var Tv=document.querySelectorAll(".dota_pic2 div")
var Bg=document.querySelector(".bg")
var Bt=document.querySelector(".ten_text")
var i=0









console.log(Tb.length)
console.log(Bg)

for(i=0;i<Tb.length;i++){
    Tb[i].index=i
    Tb[i].onclick=function(){
        Bg.style.display="table-cell"
        Bt.innerHTML=Nw[this.index]
    }

  Bg.onclick=function(){
    Bg.style.display="none"
  }
}

for(i=0;i<Tv.length;i++){
    Tv[i].index=i
    Tv[i].onclick=function(){
        Bg.style.display="table-cell"
        Bt.innerHTML=Nw1[this.index]
    }

  Bg.onclick=function(){
    Bg.style.display="none"
  }
}






for(var i=1;i<=2;i++){



document.getElementById("mo"+i).onclick=AAA



}




function AAA(){

var N=this.id.substr(2)

var NN=document.getElementById("to"+N)

    if(NN.style.display=="block"){
        NN.style.display="none"
    }else{
        NN.style.display="block"
    }
}






setInterval(GGG,4500)




function GGG(){
    
    if($("#kv ul li").eq(0).hasClass('kv_b')){
         $("#kv ul li").siblings().removeClass('kv_b')
        $("#kv ul li").eq(1).addClass('kv_b')
    }else if($("#kv ul li").eq(1).hasClass('kv_b')){
         $("#kv ul li").siblings().removeClass('kv_b')
        $("#kv ul li").eq(2).addClass('kv_b')
    }else if($("#kv ul li").eq(2).hasClass('kv_b')){
         $("#kv ul li").siblings().removeClass('kv_b')
        $("#kv ul li").eq(0).addClass('kv_b')
    }
}







$(".title").css("opacity", "1");

var MM=document.querySelectorAll(".menu li")
var i=0
   $(".menu li").eq(0).click(function(){
      $('html, body').stop().animate({scrollTop:885}, 1000);
    return false
   })
   $(".menu li").eq(1).click(function(){
      $('html, body').stop().animate({scrollTop:2150}, 1000);
      return false
   })
   $(".menu li").eq(2).click(function(){
      $('html, body').stop().animate({scrollTop:3200}, 1000);
      return false
   })
   $(".menu li").eq(3).click(function(){
      $('html, body').stop().animate({scrollTop:4150}, 1000);
      return false
   })






    $(window).bind("scroll resize ready", function(e) {
        var mo = $("#menu_out");
        var st=$(window).scrollTop();

        mo.stop().animate({top:0});

        if(st>875){
            mo.css("position", "fixed");
        } else {
            mo.css("position", "");
        }

        if(st<875){
            $(".b_bar_box").removeClass('bi');
        } else {
            $(".b_bar_box").addClass('bi');
        }


        if(st>875){$(".index_textbox1").css("opacity", "1");}
        if(st>960){$(".c_box").css("opacity", "1");}
        if(st>1000){$(".run").css("opacity", "1");}
        if(st>1300){$(".c_box2").css("opacity", "1");}
        if(st>1600){$(".run1").css("opacity", "1");}
        if(st>2600){$(".c_box3").css("opacity", "1");}

        if(st>2900){$(".c_box4").css("opacity", "1");}
        if(st>3100){$(".run2").css("opacity", "1");}
        if(st>3700){$(".dd").css("opacity", "1");}
        if(st>4150){$(".run3").css("opacity", "1");}


        var yellowLine = $(".bar_yellow img");
        var ball = $('.f_Circles div');
        ball.removeClass('runing');
         ball.removeClass('runing1');
         ball.removeClass('runing2');
         ball.removeClass('runing3');
        if(st>875 && st<2150){
            ball.eq(0).addClass('runing');
            yellowLine.css({top:-319});
            ball.siblings().removeClass('yy')
            for(i=0;i<MM.length;i++){
            MM[i].className="" }
            MM[0].className="dd2"

        } else if(st>=2150 && st<3200){
            ball.eq(1).addClass('runing1');
            yellowLine.css({top:-220});
            ball.eq(0).addClass('yy')
            ball.eq(2).removeClass('yy')
            ball.eq(3).removeClass('yy')
             for(i=0;i<MM.length;i++){
            MM[i].className="" }
            MM[1].className="dd2"

        } else if(st>=3200 && st<4150){
            ball.eq(2).addClass('runing2');
            yellowLine.css({top:-95});
            ball.eq(1).addClass('yy')
            ball.eq(0).addClass('yy')
            ball.eq(3).removeClass('yy')
             for(i=0;i<MM.length;i++){
            MM[i].className="" }
            MM[2].className="dd2"




        } else if(st>=4150 && st<7200){
            ball.siblings().addClass('yy')
            ball.eq(3).addClass('runing3');
            yellowLine.css({top:0});
             for(i=0;i<MM.length;i++){
            MM[i].className="" }
            MM[3].className="dd2"

        }

    });

    /*
    var st=$(window).scrollTop();
	$(window).scroll(function(){

		if( $(window).scrollTop() > 890 ){

			$("#menu_out").stop().animate({top:0});
			$("#menu_out").css("position", "fixed");
			//document.querySelector("#menu_out").style.position="fixed"

		}else{

			$("#menu_out").stop().animate({top:0});
            $("#menu_out").css("position", "");
			//document.querySelector("#menu_out").style.position=""

		}

	});
    */

/*
var bx=document.querySelector(".f_Circles div")

$(window).scroll(function(){

   var st=$(window).scrollTop();
     if(st<875){
     	$(".b_bar_box").removeClass('bi');

     }else if(st>875 && st<2200){
        $(".b_bar_box").addClass(' bi');
        $(".bar_yellow img").css({top:-319});

        if('.f_Circles div') {
            return;
        }

        $('.f_Circles div').eq(0).transition({ scale: 1.2 });
        $('.f_Circles div').eq(0).transition({ scale: 1 });



     }else if(st>=2200 && st<3200){
        $(".bar_yellow img").css({top:-220});
     }else if(st>=3200 && st<4150){
     	$(".bar_yellow img").css({top:-95});

     }else if(st>=4150 && st<6000){
        $(".bar_yellow img").css({top:0});
     }

   })
*/

})


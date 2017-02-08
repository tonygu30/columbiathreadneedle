window.onload=function(){


    (function(et){
        function gtr(et){
          var t = et - new Date(); //Date.parse(new Date());
          var s = Math.floor((t/1000)% 60);
          var m = Math.floor((t/1000/60)%60);
          var h = Math.floor((t/(1000*60*60))%24);
          var d = Math.floor(t/(1000*60*60*24));
          return {'total': t, 'd': d, 'h': h, 'm': m, 's': s};
        }
        
        function ic(id, et){
          var c = document.getElementById(id);
          var ds = c.querySelector('.days');
          var hs = c.querySelector('.hours');
          var ms = c.querySelector('.minutes');
          var ss = c.querySelector('.seconds');

          function uc(){
            var t = gtr(et);
            ds.innerHTML = t.d;
            hs.innerHTML = ('0' + t.h).slice(-2);
            ms.innerHTML = ('0' + t.m).slice(-2);
            ss.innerHTML = ('0' + t.s).slice(-2);
            
            if(t.total<=0){ clearInterval(ti); }
          }

          uc(); 
          var ti = setInterval(uc, 1000);
        }
        
        ic('clockdiv', et);
    })(new Date(2016,12,3,0,0,0)); // 年, 月-1, 日, 時, 分, 秒.


}

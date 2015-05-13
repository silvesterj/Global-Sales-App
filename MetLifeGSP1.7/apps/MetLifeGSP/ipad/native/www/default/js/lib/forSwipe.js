
/* JavaScript content from js/lib/forSwipe.js in folder common */
function detectswipe(el,func) {
      swipe_det = new Object();
      swipe_det.sX = 0;
      swipe_det.sY = 0;
      swipe_det.eX = 0;
      swipe_det.eY = 0;
      var min_x = 100;  //min x swipe for horizontal swipe
      var max_x = 50;  //max x difference for vertical swipe
      var min_y = 40;  //min y swipe for vertical swipe
      var max_y = 50;  //max y difference for horizontal swipe
      var direc = "";
      ele = document.getElementById(el);
      ele.addEventListener('touchstart',function(e){
        var t = e.touches[0];
        swipe_det.sX = t.screenX; 
        swipe_det.sY = t.screenY;
      },false);
      ele.addEventListener('touchmove',function(e){
        e.preventDefault();
        var t = e.touches[0];
        swipe_det.eX = t.screenX; 
        swipe_det.eY = t.screenY;    
        if (swipe_det.eX < swipe_det.sX - min_x)
        {
            direc = "l";
        }
        else if (swipe_det.eX > swipe_det.sX + min_x)
        {
            direc = "r";
        }
    
        if (direc != "") {
          if(typeof func == 'function') func(el,direc);
        }
        direc = "";
           },false);
    
    
     ele.addEventListener('touchend',function(e){
      },false);  
    }
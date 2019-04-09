window.onload = function() {
  var btn_prev = document.querySelector('#gallery .carousel__buttons .carousel__prev');
  var btn_next = document.querySelector('#gallery .carousel__buttons .carousel__next');
  
  var div = document.querySelectorAll('#gallery .carusel__list li');
  var i = 0;
  
   btn_prev.onclick = function(){
    div[i].className='none';
    i--;
    if(i<0){
      i = div.length-1;
    }
    div[i].className='div-open';
  };
  
  btn_next.onclick = function(){
    div[i].className='none';
    i++;
     if(i>=div.length){
      i = 0;
    }
    div[i].className='div-open';
  };




  var btn_prev = document.querySelector('.chichi__buttons .chichi__prev');
  var btn_next = document.querySelector('.chichi__buttons .chichi__next');
  
  var div = document.querySelectorAll('.chichi__list > li');
  var i = 0;
  
   btn_prev.onclick = function(){
    div[i].className='none';
    i--;
    if(i<0){
      i = div.length-1;
    }
    div[i].className='div-open__chichi';
  };
  
  btn_next.onclick = function(){
    div[i].className='none';
    i++;
     if(i>=div.length){
      i = 0;
    }
    div[i].className='div-open__chichi';
  };


};
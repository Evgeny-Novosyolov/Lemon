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




  var btnPrev_chi= document.querySelector('.chichi__buttons .chichi__prev');
  var btnNext_chi = document.querySelector('.chichi__buttons .chichi__next');
  
  var li = document.querySelectorAll('.chichi__list > li');
      i = 0;
  
  btnPrev_chi.onclick = function(){
    li[i].className='none';
    i--;
    if(i<0){
      i = li.length-1;
    }
    li[i].className='div-open__chichi';
  };
  
  btnNext_chi.onclick = function(){
    li[i].className='none';
    i++;
     if(i>=li.length){
      i = 0;
    }
    li[i].className='div-open__chichi';
  };


};
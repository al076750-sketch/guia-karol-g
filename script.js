(function(){
  var tabs=[].slice.call(document.querySelectorAll('#tabs [role=tab]'));
  function sel(t){tabs.forEach(function(b){var on=b===t;b.setAttribute('aria-selected',on);b.tabIndex=on?0:-1;document.getElementById(b.getAttribute('aria-controls')).hidden=!on})}
  tabs.forEach(function(t,i){
    t.addEventListener('click',function(){sel(t)});
    t.addEventListener('keydown',function(e){
      var j=e.key==='ArrowRight'?i+1:e.key==='ArrowLeft'?i-1:-1;
      if(j<0)return;j=(j+tabs.length)%tabs.length;sel(tabs[j]);tabs[j].focus();
    });
  });
})();

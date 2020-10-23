

 const btnScrollToTop = document.querySelector('#btnScrollToTop');

 btnScrollToTop.addEventListener("click", function() {
  
     $("html, body").animate({ scrollTop: 0 }, "slow");
   

 })


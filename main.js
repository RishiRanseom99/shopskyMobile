const user=document.getElementById('user');
function isMobile(){
    
    
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        //mobile version
        // user.innerText="mobile";
    
   }
   else{
       //web version
    // user.innerText="web";
   }
} 

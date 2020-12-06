const user=document.getElementById('user');
function isMobile(){
    console.log("inside function");
    
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        user.innerText="web";
    
   }
   else{
    user.innerText="mobile";
   }
} 

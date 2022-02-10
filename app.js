window.addEventListener('load', ()=> {
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
          console.log(position);
        });
    
    }else{
        h1.textContent = "Sorry Mate, I can't work if you not allowed me to know your location"
    }
});
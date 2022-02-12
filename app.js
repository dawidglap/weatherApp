window.addEventListener('load', ()=> {
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
          long = position.coords.longitude;
          lat = position.coords.latitude;

          const api = `https://api.darksky.net/forecast/fd9d9c6418c23d947456836767721ad1/${lat},${long}`;
          
          fetch(api)
          .then(response =>{
              return response.json();
          })
          .then(data =>{
              console.log(data);
          })
        });

      
    
    }else{
        h1.textContent = "Sorry Mate, I can't work if you not allowed me to know your location"
    }
});
window.addEventListener('load', ()=>{
    let long;
    let lat;
    let temperatureDescription = document.querySelector(`.temperature-description`);
    let temperatureDegree = document.querySelector(`.temperature-degree`);
    let locationTimezone = document.querySelector(`.location-timezone`);

    if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(position =>{
            
                long = position.coords.longitude;
                lat = position.coords.latitude;

                const proxy = "https://cors-anywhere.herokuapp.com/";
                const api = `${proxy} 
                https://api.darksky.net/forecast/75c940c7626857dca998b3f573bd9aff/${lat},${long}`;
        

                fetch(api)
                .then(response =>{
                    return response.json();
                })
                .then(data =>{
                    console.log(data);
                    const {temperature, summary} = data.currently;
                
                    //set DOM Elements from the API
                    temperatureDegree.textContent = temperature;
                    temperatureDescription.textContent = summary; 
                    locationTimezone.textContent = data.timezone; 
                    //26:16
                });
            
            });
        
        
        }
});
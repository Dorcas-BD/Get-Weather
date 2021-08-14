   //Access the DOM
   const button = document.querySelector('.button')
   const Input = document.querySelector('.input')
   const name = document.querySelector('.name')
   const country = document.querySelector('.country')
   const desc = document.querySelector('.desc')
   const desc1 = document.querySelector('.desc1')
   const temp = document.querySelector('.temp')
   const long = document.querySelector('.long')
   const lati = document.querySelector('.lati')
   const input = document.querySelector('.input');
   
   
   
   input.addEventListener("keypress", function(event) {
     //Number 13 is the "Enter" key on the keyboard
     if (event.keyCode === 13) {
       // Cancel the default action, if needed
       event.preventDefault();
       //Trigger the button element with a click
       document.querySelector('.button').click();
     }
   });
   
   
   
       
   button.addEventListener('click', function(){
       //fetching the weather api using openweathermap
       fetch('https://api.openweathermap.org/data/2.5/weather?q='+Input.value+'&appid=00768ad0045fb21f6bada24915e2c288')
       .then(response => response.json())
       .then(data => {
           //Accessing the Data
           const nameValue = data['name'];
           const descValue = data['main']['temp'];
           const desc1Value = data['main']['temp'];
           const tempValue = data['weather'][0]['description'];
           const longValue = data['coord']['lon'];
           const latiValue = data['coord']['lat'];
           const countryValue = data['sys']['country'];
           //converting the description data to celsius. celsius value is 273.15
           const celsius = 273.15;
   
           //Printing the Data
           name.innerHTML = ('City:' + nameValue);
           desc.innerHTML = (descValue + 'K');
           desc1.innerHTML = ((desc1Value - celsius) + '°C' );
           temp.innerHTML = ('Temperature:' + tempValue);
           long.innerHTML = ('Longitude:' + longValue);
           lati.innerHTML =  ('Latitude:' + latiValue);
           country.innerHTML =  ('Country:' + countryValue);
       })
   
   //Alerting error message
   .catch (err => alert("Check your internet connetion or input the correct city"))
   });
   
# weather
Get the temperature and weather status for any ZIP code with this command line app built from NodeJS

[![weather NodeJS app](https://github.com/louisiaegerv/Project-Images/blob/master/weather2.png?raw=true)](https://github.com/louisiaegerv/Project-Images/blob/master/weather2.png?raw=true)

How to Use  
===
*NodeJS must be installed on your machine to use**   
  
- Before using, you need to get your own free API keys from ZIPCodeAPI [(click here)](https://www.zipcodeapi.com/API) and OpenWeatherMap [(click here)](http://openweathermap.org/appid)  
- Download the repo and enter the API keys into their according sections in app.js (see image below)  
  
[![weather APIs](https://github.com/louisiaegerv/Project-Images/blob/master/weatherAPIs.png?raw=true)](https://github.com/louisiaegerv/Project-Images/blob/master/weatherAPIs.png?raw=true)  

3. Open your terminal or command prompt and navigate to the directory   
4. Type 'node app' followed by a space and any ZIP code  
5. Press the Enter/Return key to get the weather and temp for that area!   

- You can enter multiple ZIP codes by separating each with a space
  
###How does it work?
This app uses the Rest API's from ZIPCodeAPI and OpenWeatherMap to convert the requested ZIP code to latitude and longitude coordinates. The coordinates are then used to get the weather and temperature location. NodeJS HTTP requests get the information that is then parsed into JSON and displayed in your terminal/command prompt.

//IoT Lab 2 - Exercise 2
/*  Program simulates behavior of light and AC in a smart room.
    Modified Exercise 1 to save sensor values in single object.
*/


// sensor values (temperature and light) in single object to store their values later
var sensorValues = {temp:"", light:""};
//Function for getting a random integer between two values, inclusive
function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

//Function for simulating room temperature and display current temp
function myfunctionTemp(){
    sensorValues.temp = getRandomArbitrary(18,30);
    var ACSwitch;
    //switch AC on or off depending on current room temperature(>25 = on, else off)
    if ( sensorValues.temp > 25){
        ACSwitch = console.log("It is getting hot...AC switched on");
    }
    else {
        ACSwitch = console.log("It is getting cold...AC switched off"); 
    }
    return ACSwitch;
}

//Function for simulating switching the light on(when door opens) and off(when door closes) 
function myfunctionDoor(){
    //generate random boolean to simulate whether door is opened or closed
    sensorValues.light = (Boolean) (Math.round(Math.random()));
    var Door;
    if (sensorValues.light){
        Door = console.log("Someone just walked in...\nWelcome home...lights switched on");
    }
    else{
        Door = console.log("Someone just walked out...\nGood bye...lights switched off");
    }
    return Door;
}
// calling the temp and light function and printing the sensor values (temp and light)
myfunctionTemp();
myfunctionDoor();
console.log("The sensor values are:\nTemperature: "+ sensorValues.temp +"C\nLights-on: "+sensorValues.light);




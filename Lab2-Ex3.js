//IoT Lab 2 - Exercise 3
/*  Program simulates behavior of light and AC in a smart room.
    Exercise 2 - Modified Exercise 1 to save sensor values in single object.
    Exercise 3 - Modified 
*/

// sensor values (temperature and light) in single object to store their values later
var sensorValues = {temp:"", light:""};
//Function for getting a random integer between two values, inclusive
function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

//Function for simulating room temperature and display current temp
function myfunctionTemp(){
    // Generating 20 readings for temperature and stores them in an array
    var arrTemp = [];
    for (var i = 0; i< 20; i++){
        arrTemp.push(getRandomArbitrary(18,30));
    }
    console.log(arrTemp);
    //Getting the max value(temp reached) 
    sensorValues.temp = Math.max(...arrTemp);
    var ACSwitch;
    //switch AC on or off depending on current room temperature (max temp reached) (>25 = on, else off)
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





/** @author Farah Balaha, 71029; Mariam Reda, 75318 */

//IoT Lab 2 - Exercise 2
/*  Program simulates behavior of light and AC in a smart room.
    Modified Exercise 1 to save sensor values in single object.
*/

//Function for getting a random arbitrary number (min inclusive, max exclusive)
function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

//----------------------------------------------------------------
//Exercise 2 modifications

//create a variable to store sensor values (temperature and light) in single object
sensorValues = {temp: "", light: ""};

//-----------------------------------------------------------------------------

//function to simulate room temperature and control AC
function myfunctionTemp(){
    
    //simulate room temperature and display current temp
    var randomTemp = getRandomArbitrary(18,30);
    console.log("\nCurrent room temperature: " + randomTemp + "\n");

    //switch AC on or off depending on current room temperature (>25 = on, else off)
    var ACSwitch;
    if ( randomTemp > 25) {
        ACSwitch = Boolean(1);
        console.log("It is getting hot... AC switched ON.\n");
    }
    else {
        ACSwitch = Boolean(0);
        console.log("It is getting cold... AC switched OFF.\n"); 
    }

    //set temperature in sensor values object
    sensorValues.temp = randomTemp;
}

//-----------------------------------------

//function to switch lights on or off depending on whether room door is open (open = on, closed = off)
function myfunctionDoor(){
    
    //simulating random state for door (open or closed) using boolean values
    var randomDoor = Boolean(Math.round(Math.random()));
    
    //switch lights on or off depending on door state
    var lights;
    if (randomDoor) {
        lights = Boolean(1);
        console.log("Door is OPEN - Someone just walked in. \nWelcome home... lights switched ON.\n");
    }
    else {
        lights = Boolean(0);
        console.log("Door is CLOSED - Someone just walked out. \nGoodbye... lights switched OFF.\n");
    }

    //set light state in sensor values object
    sensorValues.light = lights;
}

//-----------------------------------------------------------------------------

//calling the temperature and door functions
myfunctionTemp();
myfunctionDoor();

//print sensor values to console
console.log("\nThe room's sensor values are: \n\tTemperature: " + sensorValues.temp + 
    "C \n\tLights-on: " + sensorValues.light + "\n");


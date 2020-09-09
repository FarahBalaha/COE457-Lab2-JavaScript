//IoT Lab 2 - Exercise 1
/* Program simulates behavior of light and AC in a smart room. */

//Function for getting a random integer between two values, inclusive
function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
//Function for simulating room temperature and display current temp
    function myfunctionTemp(){
    var randomTemp = getRandomArbitrary(18,30);
    console.log("The room temperature is "+ randomTemp);
    var ACSwitch;
    //switch AC on or off depending on current room temperature (>25 = on, else off)
    if ( randomTemp > 25){
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
    var randomDoor = Math.round(Math.random());
    var Door;
    if (randomDoor){
        Door = console.log("Someone just walked in...\nWelcome home...lights switched on");
    }
    else{
        Door = console.log("Someone just walked out...\nGood bye...lights switched off");
    }
    return Door;
}
// calling the temp and light function
myfunctionTemp();
myfunctionDoor();




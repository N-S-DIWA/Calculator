

const display = document.getElementById("display");

function appendToDisplay(input){
        display.value+=input;
}

// Try - Catch block is important as it yields an error when an input say: "22+=" results in an error.
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}

function clearDisplay(){
    display.value="";
}
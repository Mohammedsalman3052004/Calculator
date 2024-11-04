var display = document.querySelector(".display")

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = "Invalid"
    }
    
}

function deleteDisplay(){
    display.value = display.value.toString().slice(0,-1)
}

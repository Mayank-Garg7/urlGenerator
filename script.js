let display = document.getElementsByClassName("input")[0];
function appendToDisplay(e){
    display.value += e;
}

function clearDisplay(params) {
    display.value = " ";
}

function calculate(){
    display.value = eval(display.value);
}

function deleteLastChar(){
    display.value = display.value.slice(0, -1);
}

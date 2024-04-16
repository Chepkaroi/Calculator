let display = document.getElementById("display")


function appendToDisplay (Input) {
    display.value +=Input;

}

function ClearDisplay () {

    display.value = "";
}


function Clear() {
    display.value = display.value.slice(0, -1);
}

function Equals() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Math Error";
    }
}


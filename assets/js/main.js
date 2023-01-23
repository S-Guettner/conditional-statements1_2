let numberInput = document.getElementById("number")
let button = document.getElementById("button")
let weatherOutput = document.getElementById("weatherOutput")


button.addEventListener('click', () =>{
    let inputValue = numberInput.value;
    
    if(inputValue >= 8 && inputValue <= 10){
        weatherOutput.innerHTML = "super"
    }else if(inputValue >= 6 && inputValue <= 7){
        weatherOutput.innerHTML += "gut"
    }else if (inputValue >= 3 && inputValue <= 5){
        weatherOutput.innerHTML = "okay"
    }else if ((inputValue >= 0 && inputValue <= 2)) {
        weatherOutput.innerHTML = "schlecht"
    }else {
        weatherOutput.innerHTML = "ungültige Eingabe"
    }
})
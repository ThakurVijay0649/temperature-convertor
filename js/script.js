let clearBtn = document.getElementById("clearBtn");
let tempValue = document.getElementById("temp").value
let result = document.getElementById("resultContainer")
const calculateTemp = () => {
    let from = document.getElementById("from")
    let to = document.getElementById("to")
    let tempValue = document.getElementById("temp").value
    let result = document.getElementById("resultContainer")
    if (from.value == "celsius" && to.value == "fahrenheit") {
        result.innerText = `Answer :\n ${tempValue}°C = ${tempValue * 9 / 5 + 32}°F`
    }
    if (from.value == "celsius" && to.value == "kelvin") {
        result.innerText = `Answer :\n ${tempValue}°C = ${tempValue * 1 + 273.15}K`
    }
    if (from.value == "fahrenheit" && to.value == "celsius") {
        result.innerText = `Answer :\n ${tempValue}°F = ${(tempValue - 32) * 5 / 9}°C`
    }
    if (from.value == "fahrenheit" && to.value == "kelvin") {
        result.innerText = `Answer :\n ${tempValue}°F = ${(tempValue - 32) * 5 / 9 + 273.15}K`
    }
    if (from.value == "kelvin" && to.value == "celsius") {
        result.innerText = `Answer :\n ${tempValue}K = ${tempValue - 273.15}°C`
    }
    if (from.value == "kelvin" && to.value == "fahrenheit") {
        result.innerText = `Answer :\n ${tempValue}K = ${(tempValue - 273.15) * 9 / 5 + 32}°F`
    }
    if (from.value == to.value) {
        result.innerText = "Please select different units"
    }

}

const clearAll = () => { 
    document.getElementById("temp").value = ""
    result.innerText = ""
}
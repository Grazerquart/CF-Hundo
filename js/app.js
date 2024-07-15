function getValues() {
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);
    if(Number.isInteger(startValue) && Number.isInteger(endValue)){
        let numbers = generateNumbers(startValue, endValue);
        displayNumbers(numbers);
    } else {
        alert("You must enter a number.");
    }
}
function generateNumbers(start, end) {
    let numbers = [];
    for(i = start; i <= end; i++){
        numbers.push(i);
    }
    return numbers;
}
function displayNumbers(numbers) {
    // Array index starts at zero so final element is length-1
    let templateCols = "";
    for(let i=0; i < numbers.length; i++) {
        let classname = "";
        if(numbers[i] % 2 == 0) {
            let classname = "even";
        templateCols += `<div class="col ${classname}">${numbers[i]},</div>`;
        } else {
            let classname = "odd";
        templateCols += `<div class="col ${classname}">${numbers[i]},</div>`;
        }
    }
    document.getElementById("outputData").innerHTML = templateCols;
}
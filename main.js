function addToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  let display = document.getElementById('display').value;
  let result = eval(display); 
  document.getElementById('display').value = result;
}



function qoshish(a, b) {
    return a + b;
}

function ayirma(a, b) {
    return a - b;
}

function kopaytirish(a, b) {
    return a * b;
}

function bolish(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Nolga bo'lish mumkin emas";
    }
}
function qoldiqli(a, b) {
    return a % b;
}
function daraja(a, b) {
    return a ** b;
}
document.getElementById('btn1').addEventListener('click', function() {
    let num1 = parseFloat(document.getElementById('input1').value);
    let num2 = parseFloat(document.getElementById('input2').value);
    let result = qoshish(num1, num2);
    document.getElementById('result').innerText = result;
});
document.getElementById('btn2').addEventListener('click', function() {
    let num1 = parseFloat(document.getElementById('input1').value);
    let num2 = parseFloat(document.getElementById('input2').value);
    let result = ayirma(num1, num2);
    document.getElementById('result').innerText = result;
});
document.getElementById('btn3').addEventListener('click', function() {
    let num1 = parseFloat(document.getElementById('input1').value);
    let num2 = parseFloat(document.getElementById('input2').value);
    let result = kopaytirish(num1, num2);
    document.getElementById('result').innerText = result;
});
document.getElementById('btn4').addEventListener('click', function() {
    let num1 = parseFloat(document.getElementById('input1').value);
    let num2 = parseFloat(document.getElementById('input2').value);
    let result = bolish(num1, num2);
    document.getElementById('result').innerText = result;
});
document.getElementById('btn5').addEventListener('click', function() {
    let num1 = parseFloat(document.getElementById('input1').value);
    let num2 = parseFloat(document.getElementById('input2').value);
    let result = qoldiqli(num1, num2);
    document.getElementById('result').innerText = result;
});
document.getElementById('btn6').addEventListener('click', function() {
    let num1 = parseFloat(document.getElementById('input1').value);
    let num2 = parseFloat(document.getElementById('input2').value);
    let result = daraja(num1, num2);
    document.getElementById('result').innerText = result;
});

const num1 = document.querySelector("#input1")
const num2 = document.querySelector("#input2")
const elBtn0 = document.querySelector("#num0");
const elBtn1 = document.querySelector("#num1");
const elBtn2 = document.querySelector("#num2");
const elBtn3 = document.querySelector("#num3");
const elBtn4 = document.querySelector("#num4");
const elBtn5 = document.querySelector("#num5");
const elBtn6 = document.querySelector("#num6");
const elBtn7 = document.querySelector("#num7");
const elBtn8 = document.querySelector("#num8");
const elBtn9 = document.querySelector("#num9");

elBtn0.addEventListener("click", function () {
    const value = 0;
    num1.value = num1.value + value;
  });
  elBtn1.addEventListener("click", function () {
    const value = 1;
    num1.value = num1.value + value;
  });
  elBtn2.addEventListener("click", function () {
    const value = 2;
    num1.value = num1.value + value;
  });
  elBtn3.addEventListener("click", function () {
    const value = 3;
    num1.value = num1.value + value;
  });
  elBtn5.addEventListener("click", function () {
    const value = 5;
    num1.value = num1.value + value;
  });
  elBtn6.addEventListener("click", function () {
    const value = 6;
    num1.value = num1.value + value;
  });
  elBtn7.addEventListener("click", function () {
    const value = 7;
    num1.value = num1.value + value;
  });
  elBtn8.addEventListener("click", function () {
    const value = 8;
    num1.value = num1.value + value;
  });
  elBtn9.addEventListener("click", function () {
    const value = 9; 
      num1.value = num1.value + value;
  });



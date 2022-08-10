console.log('test');

const plusButton = document.getElementById('plus');
// console.log(plusButton); 
const minusButton = document.getElementById('minus');
// console.log(minusButton);
const num = document.getElementById('num');
// console.log(num);
const count = document.getElementById('count');
// console.log(count);



plusButton.addEventListener('click', increase);

function increase() {
    total = parseInt(count.textContent) + parseInt(num.value);
    count.textContent = total;
    if (total >= 0) {
        count.style.color = 'black';
    } else {
        count.style.color = 'red';
    }
    // console.log(total);
};

minusButton.addEventListener('click', decrease);

function decrease() {
    total = parseInt(count.textContent) - parseInt(num.value);
    count.textContent = total;
    if (total >= 0) {
        count.style.color = 'black';
    } else {
        count.style.color = 'red';
    }
    // console.log(total);
};
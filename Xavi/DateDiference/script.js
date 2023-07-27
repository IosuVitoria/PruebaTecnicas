const inputdate1 = document.getElementById('date1');
const inputdate2 = document.getElementById('date2');

let date1 = "";
let date2 = "";

const result = document.getElementsByClassName("result")[0];

function calculateDate(data1,data2) {
    console.log(data1);
    console.log(data2);
    const difference = Math.abs(data2-data1);

    const days = difference/(1000*60*60*24);
    result.value = days;
}

inputdate1.addEventListener('change',(event) => {
    date1 = new Date(event.target.value);
});

inputdate2.addEventListener('change',(event) => {
    date2 = new Date(event.target.value);
});

document.getElementsByClassName("submit")[0].addEventListener('click',(event) => {
    event.preventDefault();
    calculateDate(date1,date2);
});
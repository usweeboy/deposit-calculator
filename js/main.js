// СРОК ВКЛАДА
let deposit = document.querySelector('#deposit');

deposit.addEventListener('focus', () => {
  deposit.value = '';
})

deposit.addEventListener('blur', () => {
  if (!(deposit.value >= 1 && deposit.value <= 60)){
    deposit.value = 'От 1 до 60 месяцев';
    deposit.classList.add('error_style');
  } else {
    deposit.classList.remove('error_style');
  }
})


// СУММА ВКЛАДА
let amount = document.querySelector('#amount');

amount.addEventListener('focus', () => {
  amount.value = '';
})

amount.addEventListener('blur', () => {
  if (!(amount.value >= 1000 && amount.value <= 3000000)){
    amount.value = 'От 1000 до 3.000.000₽';
    amount.classList.add('error_style');
  } else {
    amount.classList.remove('error_style');
  }
})


// ПРОЦЕНТНАЯ СТАВКА
let percent = document.querySelector('#percent');

percent.addEventListener('focus', () => {
  percent.value = '';
})

percent.addEventListener('blur', () => {
  if (!(percent.value >= 3 && percent.value <= 100)){
    percent.value = 'От 3 до 100%';
    percent.classList.add('error_style');
  } else {
    percent.classList.remove('error_style');
  }
})


// СУММА К ВЫПЛАТЕ
let btnCalc = document.querySelector('#btn_calc');
let totalAmount = document.querySelector('#total_amount')


// РАСЧЕТ
btnCalc.addEventListener('click', () => {

  // ДАТА ОТКРЫТИЯ
  let opening = document.querySelector('#opening');
  let openingYear = opening.value.split('.');

  if(deposit.value == '1'){deposit.value = 30}; if(deposit.value == '2'){deposit.value = 61}; if(deposit.value == '3'){deposit.value = 92}; if(deposit.value == '4'){deposit.value = 120}; if(deposit.value == '5'){deposit.value = 151}; if(deposit.value == '6'){deposit.value = 181}; if(deposit.value == '7'){deposit.value = 212}; if(deposit.value == '8'){deposit.value = 242};  if(deposit.value == '9'){deposit.value = 273}; if(deposit.value == '10'){deposit.value = 304}; if(deposit.value == '11'){deposit.value = 337}; if(deposit.value == '12'){deposit.value = 365}; if(deposit.value == '13'){deposit.value = 396}; if(deposit.value == '14'){deposit.value = 426}; if(deposit.value == '15'){deposit.value = 457}; if(deposit.value == '16'){deposit.value = 487}; if(deposit.value == '17'){deposit.value = 518}; if(deposit.value == '18'){deposit.value = 549}; if(deposit.value == '19'){deposit.value = 579}; if(deposit.value == '20'){deposit.value = 610};
  if(deposit.value == '21'){deposit.value = 640}; if(deposit.value == '22'){deposit.value = 671}; if(deposit.value == '23'){deposit.value = 702}; if(deposit.value == '24'){deposit.value = 730}; if(deposit.value == '25'){deposit.value = 761}; if(deposit.value == '26'){deposit.value = 790}; if(deposit.value == '27'){deposit.value = 821}; if(deposit.value == '28'){deposit.value = 851}; if(deposit.value == '29'){deposit.value = 882}; if(deposit.value == '30'){deposit.value = 912}; if(deposit.value == '31'){deposit.value = 942}; if(deposit.value == '32'){deposit.value = 972}; if(deposit.value == '33'){deposit.value = 1003}; if(deposit.value == '34'){deposit.value = 1034}; if(deposit.value == '35'){deposit.value = 1064}; if(deposit.value == '36'){deposit.value = 1095}; if(deposit.value == '37'){deposit.value = 1124}; if(deposit.value == '38'){deposit.value = 1155}; if(deposit.value == '39'){deposit.value = 1185}; if(deposit.value == '40'){deposit.value = 1216}; 
  if(deposit.value == '41'){deposit.value = 1246}; if(deposit.value == '42'){deposit.value = 1277}; if(deposit.value == '43'){deposit.value = 1307}; if(deposit.value == '44'){deposit.value = 1339}; if(deposit.value == '45'){deposit.value = 1369}; if(deposit.value == '46'){deposit.value = 1401}; if(deposit.value == '47'){deposit.value = 1430}; if(deposit.value == '48'){deposit.value = 1460}; if(deposit.value == '49'){deposit.value = 1491}; if(deposit.value == '50'){deposit.value = 1521}; if(deposit.value == '51'){deposit.value = 1552}; if(deposit.value == '52'){deposit.value = 1582}; if(deposit.value == '53'){deposit.value = 1613}; if(deposit.value == '54'){deposit.value = 1643}; if(deposit.value == '55'){deposit.value = 1673}; if(deposit.value == '56'){deposit.value = 1704}; if(deposit.value == '57'){deposit.value = 1734}; if(deposit.value == '58'){deposit.value = 1764}; if(deposit.value == '59'){deposit.value = 1796}; if(deposit.value == '60'){deposit.value = 1825};

  let fullAmount = (+amount.value * +percent.value * +deposit.value / checkLeapYear(openingYear[2])) / 100;
  totalAmount.innerHTML = fullAmount.toFixed(2) + '₽'

  if (totalAmount.innerHTML === 'NaN₽') {
    totalAmount.style.fontSize = '30px';
    totalAmount.innerHTML = 'Введите правильные данные';
  }

  localStorage.setItem('TotalAmount', totalAmount.innerHTML)
})


function checkLeapYear(year) {
  if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
      return 366;
  } else {
      return 365;
  }
}


function storageChecked(){
  if (localStorage.getItem('TotalAmount', totalAmount.innerHTML)){
    totalAmount.innerHTML = localStorage.getItem('TotalAmount', totalAmount.innerHTML)
  }
}
storageChecked()








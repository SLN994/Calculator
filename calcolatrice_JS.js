let result = '';

function addToResult(value) {
  result += value;
  document.getElementById('result').value = result;
}

function clearResult() {
  result = '';
  document.getElementById('result').value = result;
}

function operation(operator) {
  if (result === '') return;
  if (result.charAt(result.length - 1) === '+' || result.charAt(result.length - 1) === '-' || result.charAt(result.length - 1) === '*' || result.charAt(result.length - 1) === '/') {
    result = result.slice(0, -1) + operator;
  } else {
    result += operator;
  }
  document.getElementById('result').value = result;
}

function calculate() {
  if (result === '') return;
  if (result.charAt(result.length - 1) === '+' || result.charAt(result.length - 1) === '-' || result.charAt(result.length - 1) === '*' || result.charAt(result.length - 1) === '/') {
    return;
  }
  result = eval(result);
  document.getElementById('result').value = result;
}
function percentage() {
  var currentValue = document.getElementById("result").value;
  var newValue = parseFloat(currentValue) / 100;
  document.getElementById("result").value = newValue;
}

function squareRoot() {
  var currentValue = document.getElementById("result").value;
  var newValue = Math.sqrt(parseFloat(currentValue));
  document.getElementById("result").value = newValue;
}

function convertToEUR() {
  const btcValue = document.getElementById("result").value;
  const url = "https://api.coindesk.com/v1/bpi/currentprice/EUR.json";

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const eurValue = parseFloat(btcValue) * data.bpi.EUR.rate_float;
      document.getElementById("result").value = eurValue.toFixed(2);
    })
    .catch(error => console.log(error));
}

function convertToBTC() {
  const eurValue = document.getElementById("result").value;
  const url = "https://api.coindesk.com/v1/bpi/currentprice/EUR.json";

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const btcValue = parseFloat(eurValue) / data.bpi.EUR.rate_float;
      document.getElementById("result").value = btcValue.toFixed(8);
    })
    .catch(error => console.log(error));
}

function convertToETH() {
  const eurValue = document.getElementById("result").value;
  const urlETHtoEUR = "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=eur";

  fetch(urlETHtoEUR)
    .then(response => response.json())
    .then(data => {
      const eurToEthRate = data.ethereum.eur;
      const ethValue = parseFloat(eurValue) / eurToEthRate;
      document.getElementById("result").value = ethValue.toFixed(8);
    })
    .catch(error => console.log(error));
}

function convertFromETH() {
  const ethValue = document.getElementById("result").value;
  const urlETHtoEUR = "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=eur";

  fetch(urlETHtoEUR)
    .then(response => response.json())
    .then(data => {
      const eurToEthRate = data.ethereum.eur;
      const eurValue = parseFloat(ethValue) * eurToEthRate;
      document.getElementById("result").value = eurValue.toFixed(2);
    })
    .catch(error => console.log(error));
}
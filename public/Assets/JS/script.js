$(document).ready(function () {
  var GOAL_USD = 100000;
  var DEFAULT_RATES = {
    USD: { last: 68500, symbol: '$' },
    EUR: { last: 63200, symbol: '€' },
    JPY: { last: 10450000, symbol: '¥' },
    GBP: { last: 54100, symbol: '£' },
    CHF: { last: 60200, symbol: 'CHF ' },
    CAD: { last: 94800, symbol: 'CA$' }
  };

  function round2(val) {
    var num = Number(val);
    if (!Number.isFinite(num)) return '0.00';
    return (Math.round(num * 100) / 100).toFixed(2);
  }

  function renderTelemetry(balanceBtc, rates) {
    var safeBtc = Number.isFinite(balanceBtc) && balanceBtc >= 0 ? balanceBtc : 0;
    var activeRates = rates && rates.USD && Number.isFinite(Number(rates.USD.last)) ? rates : DEFAULT_RATES;
    var usdRate = Number(activeRates.USD.last) || DEFAULT_RATES.USD.last;
    var goalBtc = Number(round2(GOAL_USD / usdRate));

    $('#walletData').text(safeBtc.toFixed(4) + ' BTC out of ' + goalBtc.toFixed(2) + ' BTC');

    var currencies = ['USD', 'EUR', 'JPY', 'GBP', 'CHF', 'CAD'];
    currencies.forEach(function (code) {
      var entry = activeRates[code] || DEFAULT_RATES[code];
      var rate = Number(entry.last) || DEFAULT_RATES[code].last;
      var symbol = entry.symbol || '';
      var raised = round2(safeBtc * rate);
      var target = code === 'USD' ? '100000.00' : round2(goalBtc * rate);
      $('#' + code + 'Data').text(symbol + raised + ' ' + code + ' out of ' + symbol + target + ' ' + code);
    });
  }

  // Render immediate baseline so UI never hangs on "Loading Data..."
  renderTelemetry(0, DEFAULT_RATES);

  // Fetch live BTC address balance and currency ticker asynchronously without blocking the main thread
  var balancePromise = $.ajax({
    url: 'https://api.blockcypher.com/v1/btc/main/addrs/1PsA7MX1jDYcTqRTJusLrC4Cds8y5bmWJJ/balance',
    dataType: 'json',
    timeout: 6000
  }).then(
    function (data) {
      var raw = data && typeof data.final_balance === 'number' ? data.final_balance : 0;
      return raw / Math.pow(10, 8);
    },
    function () {
      return 0;
    }
  );

  var tickerPromise = $.ajax({
    url: 'https://blockchain.info/ticker?cors=true',
    dataType: 'json',
    timeout: 6000
  }).then(
    function (data) {
      return data || DEFAULT_RATES;
    },
    function () {
      return DEFAULT_RATES;
    }
  );

  $.when(balancePromise, tickerPromise).done(function (balanceBtc, rates) {
    renderTelemetry(balanceBtc, rates);
  });

  var progressEl = document.querySelector('#p3');
  if (progressEl) {
    progressEl.addEventListener('mdl-componentupgraded', function () {
      this.MaterialProgress.setProgress(1);
      this.MaterialProgress.setBuffer(90);
    });
  }
});

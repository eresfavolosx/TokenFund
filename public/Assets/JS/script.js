
$(document).ready(function() {

  var finalValueOfficial = {};
      $.ajax({
          url: "https://api.blockcypher.com/v1/btc/main/addrs/1PsA7MX1jDYcTqRTJusLrC4Cds8y5bmWJJ/full?limit=50?format=json",
          async: false,
          dataType: 'json',
          success: function(data) {
              preFinalValue = data.final_balance;
              preFinalValue /= Math.pow(10, 8);
              finalValueOfficial = preFinalValue;
          }
      });
var finalFunds = {};
      $.ajax({
          url: "https://blockchain.info/ticker?format=json",
          async: false,
          dataType: 'json',
          success: function(data2) {
            finalValue1 = data2.USD.last;
              finalFunds = 100000 / parseFloat(finalValue1);
              finalFunds = Number(Math.round(finalFunds + 'e2') + 'e-2')
          }
      });


  function close() {
    var d = document.querySelector('.mdl-layout');
    d.MaterialLayout.toggleDrawer();
  };

  // $.getJSON("https://blockchain.info/ticker?format=json", gotData8);
  //
  // function gotData8(data) {
  //   finalValue = data.USD.last;
  //   finalFunds = 100000 / parseFloat(finalValue);
  //   window.finalFunds = Number(Math.round(finalFunds + 'e2') + 'e-2')
  // }

  $.getJSON("https://api.blockcypher.com/v1/btc/main/addrs/1PsA7MX1jDYcTqRTJusLrC4Cds8y5bmWJJ/full?limit=50?format=json", gotData);

  function gotData(data, finalValueOfficial) {
    window.finalValueBTC = data.final_balance;
    currency = " BTC";
    finalValueBTC /= Math.pow(10, 8);
    $("#walletData").html(finalValueBTC + currency + " out of " + finalFunds + " BTC");
    finalValueOfficial = parseFloat(finalValueBTC);
  }

  $.getJSON("https://blockchain.info/ticker?format=json", gotData2);

  function gotData2(data) {
    finalValue = data.USD.last;
    currency = " USD";
    total = (finalValueOfficial * parseFloat(finalValue));
    $("#USDData").html(data.USD.symbol + Number(Math.round(total + 'e2') + 'e-2') + currency + " out of " + data.USD.symbol + "100000.00 USD");
    // document.getElementById("walletData").value = data.final_balance;

    // Number(Math.round(total + 'e2') + 'e-2')
    // document.getElementById("walletData").value = data.final_balance;
  }

  $.getJSON("https://blockchain.info/ticker?format=json", gotData3);

  function gotData3(data) {
    finalValue = data.EUR.last;
    currency = " EUR";
    total = (finalValueOfficial * finalValue);
    $("#EURData").html(data.EUR.symbol + Number(Math.round(total + 'e2') + 'e-2') + currency + " out of " + data.EUR.symbol + Number(Math.round(data.EUR.last*finalFunds + 'e2') + 'e-2') + " EUR");
    // document.getElementById("walletData").value = data.final_balance;
  }

  $.getJSON("https://blockchain.info/ticker?format=json", gotData4);

  function gotData4(data) {
    finalValue = data.JPY.last;
    currency = " JPY";
    total = (finalValueOfficial * finalValue);
    $("#JPYData").html(data.JPY.symbol + Number(Math.round(total + 'e2') + 'e-2') + currency + " out of " + data.JPY.symbol + Number(Math.round(data.JPY.last*finalFunds + 'e2') + 'e-2') + " JPY");
    // document.getElementById("walletData").value = data.final_balance;
  }

  $.getJSON("https://blockchain.info/ticker?format=json", gotData5);

  function gotData5(data) {
    finalValue = data.GBP.last;
    currency = " GBP";
    total = (finalValueOfficial * finalValue);
    $("#GBPData").html(data.GBP.symbol + Number(Math.round(total + 'e2') + 'e-2') + currency + " out of " + data.GBP.symbol + Number(Math.round(data.GBP.last*finalFunds + 'e2') + 'e-2') + " GBP");
    // document.getElementById("walletData").value = data.final_balance;
  }

  $.getJSON("https://blockchain.info/ticker?format=json", gotData6);

  function gotData6(data) {
    finalValue = data.CHF.last;
    currency = " CHF";
    total = (finalValueOfficial * finalValue);
  $("#CHFData").html(data.CHF.symbol + Number(Math.round(total + 'e2') + 'e-2') + currency + " out of " + data.CHF.symbol + Number(Math.round(data.CHF.last*finalFunds + 'e2') + 'e-2') + " CHF");
    // document.getElementById("walletData").value = data.final_balance;

  }

  $.getJSON("https://blockchain.info/ticker?format=json", gotData7);

  function gotData7(data) {
    finalValue = data.CAD.last;
    currency = " CAD";
    total = (finalValueOfficial * finalValue);
    $("#CADData").html(data.CAD.symbol + Number(Math.round(total + 'e2') + 'e-2') + currency + " out of " + data.CAD.symbol + Number(Math.round(data.CAD.last*finalFunds + 'e2') + 'e-2') + " CAD");
    // document.getElementById("walletData").value = data.final_balance;
  }

  document.querySelector('#p3').addEventListener('mdl-componentupgraded', function() {
    this.MaterialProgress.setProgress(1);
    this.MaterialProgress.setBuffer(90);
  });



});

// PLEASE DON'T change function name
function getDetermine(currency, denomination) {
  return { 
    remainder: currency % denomination,
    count: currency / denomination | 0
  }
}

module.exports = function makeExchange(currency) {
  const COINS = [
    { letter: 'H', denomination: 50 },
    { letter: 'Q', denomination: 25 },
    { letter: 'D', denomination: 10 },
    { letter: 'N', denomination: 5 },
    { letter: 'P', denomination: 1 },
  ]
  let result = {};
  
  if (currency > 10000) {
    result = { error: "You are rich, my friend! We don't have so much coins for exchange" }
  } else {
    let money = currency;

    for (let coin of COINS) {
      let { remainder, count } = getDetermine(money, coin.denomination);

      money = remainder;
      if (count > 0) {
        result[coin.letter] = count
      }
    }
  }
  return result;
}

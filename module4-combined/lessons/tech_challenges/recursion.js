let menu = {
  'veggie sandwich': 6.85,
  'extra veggies': 2.20,
  'chicken sandwich': 7.85,
  'extra chicken': 3.20,
  'cheese': 1.25,
  'chips': 1.40,
  'nachos': 3.45,
  'soda': 2.05,
}

let receipts = [4.85, 11.05, 13.75, 17.75, 18.25, 19.40, 28.25, 40.30, 75.00]

const find_lunch = (menu, money_left) => {
  if (money_left === 0) {
    return []
  }

  for (const item_name in menu) {
    let item_price = menu[item_name];
    if (item_price > money_left) {
      continue;
    }

    let diff = Math.round(money_left * 100 - item_price * 100) / 100;
    let result = find_lunch(menu, diff)
    if (result !== null) {
      result.push(item_name)
      return result
    }
  }

  return null
}

receipts.forEach(receipt => {
  console.log(receipt, find_lunch(menu, receipt));
});

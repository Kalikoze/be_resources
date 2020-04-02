menu = {
  'veggie sandwich' => 6.85,
  'extra veggies' => 2.20,
  'chicken sandwich' => 7.85,
  'extra chicken' => 3.20,
  'cheese' => 1.25,
  'chips' => 1.40,
  'nachos' => 3.45,
  'soda' => 2.05,
}

receipts = [4.85, 11.05, 13.75, 17.75, 18.25, 19.40, 28.25, 40.30, 75.00]

def find_lunch(menu, money_left)
  return [] if money_left == 0

  menu.each do |item_name, item_price|
    next if item_price > money_left

    result = find_lunch(menu, (money_left - item_price).round(2))
    unless result.nil?
      result.push(item_name)
      return result
    end
  end

  return nil
end

receipts.each do |receipt|
  p receipt, find_lunch(menu, receipt)
end

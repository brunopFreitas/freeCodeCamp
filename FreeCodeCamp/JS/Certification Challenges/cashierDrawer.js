function howMuchIsMyChange(price, cash) {
  return cash - price
}

function countMoney(arr) {
  let total = 0
  arr.forEach(money => total += money[1])
  return parseFloat(total.toFixed(2))
}

function calculateChange(customerChange, cid) {
  let cmu = []
  let currencyValue = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  }


  cid.reverse().forEach(cashInDrawer => {
    let cashQuantity
    //console.log("CustomerChange: " + customerChange)
    //console.log("InDrawer: ", cashInDrawer[0], cashInDrawer[1])
    if (cashInDrawer[1] > 0) {
      cashQuantity = 0
      //console.log("First if is", cashInDrawer[1] >= customerChange)
      if (cashInDrawer[1] >= customerChange) {
      //console.log("CurrencyBill: ", currencyValue[cashInDrawer[0]])
      //console.log("The while is", customerChange >= currencyValue[cashInDrawer[0]])
        while (customerChange >= currencyValue[cashInDrawer[0]]) {
          customerChange -= currencyValue[cashInDrawer[0]]
          customerChange = parseFloat(customerChange.toFixed(2))
          cashInDrawer[1] -= currencyValue[cashInDrawer[0]]
          cashInDrawer[1] = parseFloat(cashInDrawer[1].toFixed(2))
          cashQuantity += currencyValue[cashInDrawer[0]]
          cashQuantity = parseFloat(cashQuantity.toFixed(2))
        }
        //console.log("customerChange on first if", customerChange)
        //console.log("cashInDrawer on first if", cashInDrawer[1])
        //console.log("cashQuantity is", cashQuantity)
        if (cashQuantity != 0) {
          cmu.push([cashInDrawer[0], cashQuantity])
          //console.log("cmu so far is", cmu)
        }
      } else {
        //console.log("As the first if is False, now I'm in the Else")
          cmu.push([cashInDrawer[0], cashInDrawer[1]])
          customerChange -= cashInDrawer[1]
          customerChange = parseFloat(customerChange.toFixed(2))
          cashInDrawer[1] = 0
          //console.log("cmu on else", cmu)
          //console.log("cashInDrawer on else", cashInDrawer[1])
        //console.log("customerChange on else", customerChange)
      }

    }
  })
  return cmu
}

function closedCase (cmu, cid) {

  //console.log("###Creating closed case change###")
  //console.log("cmu", cmu)
  //console.log("cid", cid)
  let closedCaseChange = []
  cid.forEach(cidElem => {
    cmu.forEach(cmuElem => {
      //console.log("If inside closed case", cidElem[0]!=cmuElem[0])
      if(cidElem[0]!=cmuElem[0]) {
        closedCaseChange.push(cidElem)
      } else {
        closedCaseChange.push(cmuElem)
      }
    })
  })
  //console.log("closedCaseChange", closedCaseChange)
  return closedCaseChange.reverse()
}

function cashOutDrawer(customerChange, cid) {
  //customerMoneyUnity
  let cmu = calculateChange(customerChange, cid)
  let totalInDrawer = countMoney(cid)
  let totalCustomerChange = countMoney(cmu)
  //console.log("customerChange", customerChange)
  //console.log("totalInDrawer", totalInDrawer)
  //console.log("totalCustomerChange", totalCustomerChange)
  let change = {
    status: "",
    change: []
  }

  if (totalCustomerChange<customerChange) {
    change.status = "INSUFFICIENT_FUNDS"
    change.change = []
    return change
  } else if (customerChange===totalCustomerChange && totalInDrawer===0) {
    change.status = "CLOSED"
    change.change = closedCase(cmu,cid)
    return change
  } else {
    change.status = "OPEN"
    change.change = cmu
    return change
  }

}

function checkCashRegister(price, cash, cid) {
  let customerChange = howMuchIsMyChange(price, cash)
  let change = cashOutDrawer(customerChange, cid)
  console.log(change)
  return change
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
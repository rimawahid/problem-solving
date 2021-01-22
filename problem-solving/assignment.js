
//(1) Kilometer  to meter

function kilometerToMeter(kilometer){
    var meter = "";
    if(kilometer >= 0 ){
        var convertMeter = kilometer * 1000;
        meter = convertMeter;
    }else{
        console.log("invalidate")
    }
    return meter;
}
var result = kilometerToMeter(15.5);
console.log(result)

//(2) Budget Calculator watch, phone, laptop

function budgetCalculator(watch, phone, laptop){
    var total = "";
    if(watch>=0 && phone>=0 && laptop>=0){
        var watchPrice = watch * 50;
        var phonePrice = phone * 100;
        var laptopPrice = laptop * 500;
        total = watchPrice + phonePrice + laptopPrice
    }else{
        console.log("invalidate")
    }return total
}
var result2 = budgetCalculator(10,8,2);
console.log(result2)


//(3)  Hotel Cost

function hotelCost(day){
    var cost = 0;
    if(day <=10){
        cost = day * 100;
    }else if(day <=20){
        var firstTenDays = 10 * 100;
        var remaining = day - 10;
        var secondTenDays = remaining * 80;
        cost = firstTenDays + secondTenDays;
    }else{
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remaining = day - 20;
        var thirdTenDays = remaining * 50;
        cost = firstTenDays + secondTenDays + thirdTenDays;
    }
    return cost
}
var result3 = hotelCost(23);
console.log(result3)


//(4) Mega Friend

function megaName(arr) {
    var longName = arr[0];
    for (i = 0; i < arr.length; i++) {
      if (arr[i].length > longName.length) {
        longName = arr[i];
      }
    }
    return longName;
  }
  
  var result= megaName(["rima", "ruba", "shanto", "subhana",]);
  console.log(result);
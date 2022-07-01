const { fromDollarToYen, fromEuroToDollar,fromYanToPound } = require('./app.js');


test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); })//




//test("One euro should be 1.206 dollars", function(){
  //  const { fromEuroToDollar } = require('./app.js')
    
    //expect(fromEuroToDollar(3.5)).toBe(4.2);

test("106.583333 1 dolar es 106.583333 yenes", function(){
    
    const { fromDollarToYen } = require('./app.js')
    
    expect(fromDollarToYen(1)).toBe(106.583333); })

test("1 yen es 0.006724 punds", function(){
    const { fromYanToPound } = require('./app.js')
    
    expect(fromYanToPound(1)).toBe(0.006724);})
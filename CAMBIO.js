
function fromDollarToYen(a){
    return  a * 106.583333;

}
function fromEuroToDollar(a){
    return  a * 1.2;
} 
function fromYanToPound(a){
    return  a * 0.006724;
}
test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})
console.log(fromEuroToDollar(3.5)
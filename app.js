// declaramos una funcion con el mismo nombre "formEuroToDollar"

function fromDollarToYen(a){
    return  a * 106.583333;

}
function fromEuroToDollar(a){
    return  a * 1.2;
} 
function fromYanToPound(a){
    return  a * 0.006724;
}

module.exports = { fromDollarToYen, fromEuroToDollar,fromYanToPound};
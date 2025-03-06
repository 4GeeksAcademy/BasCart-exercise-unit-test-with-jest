const sum =(a,b)=>{
    return a+b
    }
console.log(sum(7,3))


function fromEuroToDollar(euro){
    return euro*1.07
}
function fromDollarToYen(dollar){
    return dollar*156.5
}
function fromYenToPound(yen){
    return yen*0.87
}
module.exports={sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};
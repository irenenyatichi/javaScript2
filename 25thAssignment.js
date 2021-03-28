const kiosk={
Fruit:"apples",
get fruit(){
    return this.Fruit;      
},
setFruit(otherfruit){
    this.Fruit=otherfruit
}
};
kiosk.thisFruit="apples"
console.log(kiosk.Fruit);
kiosk.otherfruit="pineapple"
console.log(kiosk.otherfruit);

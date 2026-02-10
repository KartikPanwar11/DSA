let unit = Number(prompt("Enter units: "));
let price = 0;

if(unit>400){
    price = (unit-400)*13;
    unit = 400;

}
if(unit>200 && unit<=400){
    price += (unit-200) * 8;
    unit = 200;
}
if(unit>100 && unit<=200){
    price+= (unit-100)*6;
    unit=100;
}
price += unit *4;

console.log(price)


//complex conditionals 
const num = [1,2,3,4,5,6,7,];

 num.forEach(number => console.log(`${number} Multiply by 2 = ${number*2}`));
 const sqr = num.map((number, index) => {
    console.log(`Square of ${index} = ${number * number}`);
    return (number*number);
 }
    );
 console.log(sqr);

 var num1 = 5 ;
var num2 = 10;
const greater = () => {
    if (num1>num2){
        console.log(num1);
    }
    console.log(num2);
};
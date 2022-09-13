var result;
const mark = 65;

if (mark > 95) {
  result=A;
}
else if(mark >75) {
  result= 'b';
}else{
 result= 'f';
}

switch(result){
case 'A':{
console.log("You got A Grade"); 
}
case 'b':{
console.log("You got b Grade");
}
case 'f':{
console.log("You got f Grade");
}
}
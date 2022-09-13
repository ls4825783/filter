function countdown(num){
    let counter = setInterval(function(){
          num--;
          if (num <= 0){
              clearInterval(counter);
              console.log("DONE");
          }
          else {
              console.log(num);
          }
      },1000);
  }

  countdown(10)
function ofNum(n){
    let sum = 0
    while(n > 0){
        let rem = n % 10;     // get last digit
        sum = sum + rem;      // add digit to sum
        n = Math.floor(n / 10); // remove last digit
    }
    console.log(sum);
}

ofNum(123); //6

//Reversing a num

function revNum(n){
    let num = 0;
    while(n > 0){
        let rem = n % 10;      // get last digit
        num = num * 10 + rem;  // build reversed number
        n = Math.floor(n / 10); // remove last digit
    }
    console.log(num);
}

revNum(123);


//A strong number is a number where the sum of the factorials of its individual digits equals the number itself.

function strongNum(n){
    let sum =0;
    let copy = n
    while(n>0){
        let rem = n%10;
        let fact = 1;
        for(let i=1;i<=rem;i++){
            fact = fact*i;
        }
        sum = sum + fact;
        n=Math.floor(n/10);
    }
    if(copy===sum){
        console.log('Is a strong num')
    }else{
        console.log('Not a strong num')
    }
}

strongNum(145); //Is a strong num



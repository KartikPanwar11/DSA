function sum(n){
    let sum = 0;
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    console.log(sum)
}
sum(10);



function factorial(n){
    let fact = 1;
    for(let i=1;i<=n;i++){
        fact*=i;
    }
    console.log(fact)
}
factorial(1000)


function prime(n){
    if(n>0){
        let isPrime = true;
        for(let i=2;i<=Math.floor(n/2);i++){
            if(n%i===0){
                isPrime = false;
                break;
            }
        }
        console.log(isPrime)
    }
}

prime(11);





function factors(n){
    if(n>0){
        for(let i=1;i<=Math.floor(n/2);i++){
            if(n%i===0){
                console.log(i)
            }
        }
        console.log(n)
    }else{
        console.log('Number should be greater than 0')
    }
}

factorial(1000)
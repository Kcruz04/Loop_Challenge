
// 1. Print odds 1-20

function odds() {
    for (var i = 1; i < 21; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}
odds()

//2. Decreasing multiples of 3

function mult3() {
    for (var i = 100; i > 0; i--) {
        if (i % 3 == 0) {
            console.log(i);
        }
    }
}
mult3()

//3. Print this sequence 4, 2.5, 1, -0.5, -2, -3.5

function seq() {

    for (var i = 4; i>-5; i-=1.5) {
        console.log(i);
    }
}
seq()

/*4. Sigma 
Write code that will add all of 
the values from 1-100 onto some variable 
sum and at the end console.log the result 
1 + 2 + 3 + ... + 98 + 99 + 100. We should 
get back 5050 at the end.*/

function sigma(){
    var sum = 0
    for(var i=1;i<101; i++){
        sum += i
    }
    console.log(sum)
}
sigma()


/*5. Factorial 
Write code that will multiply all of the 
values from 1-12 onto some variable 
product and at the end console.log the 
result 1 * 2 * 3 * ... * 10 * 11 * 12. 
We should get back 479001600 at the end.*/

function factor(){
    var fact = 1
    for(var i=1;i<13;i++){
        fact = fact*i;
    }
    
    console.log(fact)
}
factor()
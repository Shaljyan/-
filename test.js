//ЗАДАНИЯ НА СООБРАЗИТЕЛЬНОСТЬ

//1 задание
70

//3 задание
`начал бы 2500 метров чтобы сократить на половину
и потом смотря, что будет начал бы поднимать высоту на 1 метр.
`


//ЗАДАЧИ ПО ПРОГРАММИРОВАНИЮ 

//Задача 1
////////////////////////////////////////////////////

let mass= ["Москва", "Санкт-Петербург", "Воронеж"];

function  testOfSity (sity) {
    
    if (Array.isArray(sity)) {
     let result = (sity.join(", ") + ".");
      return result;
    }
}

console.log(testOfSity(mass));


//Задача 2
////////////////////////////////////////////////////

let firstOne = 98;

function numberRound(sum) {
    let num = sum % 5;
   
    if (num === 0) {
        
        return sum;
    
    } else if (num >= 2.5) {
       
        return (sum-num+5);
    
    } else {
        
        if (num < 2.5){
        
            return (numb-num)}
    
        }
    }

    console.log(numberRound(firstOne));

    
//Задача 3
////////////////////////////////////////////////////
    
let nout = 42;

function naming(int) {
    let myNum = String(int);
    let myNumArr = [];
    for (let i = 0; i < myNum.length; i++) {
        myNumArr.push(myNum.charAt(i));
    }
    
    let endPosition = myNumArr[myNumArr.length-1];
    let penultPosition = myNumArr[myNumArr.length-2];
    
    if ((endPosition >=5 && endPosition <= 9) ||  (endPosition === "0") ||
        (endPosition ==1 && penultPosition == 1) ||
        (endPosition >=2 && endPosition <= 4 && penultPosition == 1)
    ){
        console.log (int +" компьютеров");}
        
    if (endPosition == 1 && penultPosition !=1) {
        console.log (int + " компьютер")}
    
    if (endPosition >=2 && endPosition <= 4 && penultPosition != 1) {
        console.log(int + " компьютера")
    }
  
}
naming(nout);


//Задача 4
////////////////////////////////////////////////////

let numPrime = 5;
let numNotPrime = 6;

function iSItAPrimeNumber(prime) {

    let zero = 0;
    for (let i=2; i<=prime-1; i++){
        
        let onePrime = prime % i;
        if (onePrime === 0) {
            zero = zero +1;
    
        }
    }
            
        if  (zero === 0) {

            console.log(prime + " Prime")
       
        } else {
       
            console.log(prime + " Don't worry")
       
        }
    
}

iSItAPrimeNumber(numPrime);
iSItAPrimeNumber(numNotPrime);


//Задача 5
////////////////////////////////////////////////////

let masFirts = [1, 22, 38, 40, 53, 67, 76];
let masSecond = [9, 67, 20, 88, 71, 38];

let instance = function (fir, sec) {
  let res = [];

  let map = fir.reduce((acc, i) => {
    acc[i] = acc[i] ? acc[i] + 1 : 1;
    return acc;
  }, {});

  for (let i = 0; i < sec.length; i++) {
    let current = sec[i];
    let currentMapItem = map[current];

    if (currentMapItem && currentMapItem > 0) {
      res.push(current);
      map[current] = currentMapItem - 1;
    }
  }

  return res;
}

console.log(instance(masFirts,masSecond))

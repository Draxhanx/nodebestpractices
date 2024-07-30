// console.log(5)


// var a = 5

// function x(){

//     let a =5
//     return function(){
//        console.log(a)  
//     }
   

// }

// x()

function counterNumber(n){
    let count = n
    return function(){
        count++;
        
    }
}

const counter  = counterNumber(10)
counter()
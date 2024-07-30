// let a = [1, "ram"]
// a.push("shayam")
// // array is data structure that can hold more than  one Element of any data structutre
// var b = [...a]
// // toh gyus apna orignal araay change nahi hoga kyunki apne ne user kiya hai spred operator
// console.log(b.pop())
// console.log(a)

// var obj = {name : "ram" , age:12 , social:{
//     facebook: {
//         fisrt : 'ram raja',
//         second : 'shyam'
//     }
// }}
// const{fisrt , second} = obj.social.facebook

// console.log(fisrt , second)

// // yeh hoti hai destructring

// var arr = ["ram" , "kisan"]

// const[first] = arr

// console.log(arr)

// var a  = (val)=>{
//     return val
// }
// console.log(a(12))

// fat arrow function.

// const a = ()=>{}

// fat arrow with implicit return

// const b = () => 12 means you dont wnana write return

// fat arrow finctio with one parameter main fat hata skte ho

// const  a  = [1,2,3,]

// for (let i = 0; i < a.length; i++) {
//     console.log(i)
// }

// let a = [1,2,3,4,5,6,7,8,9,10]

// let b = a.filter(item=> item%2 === 0)
// console.log(b)

// let me do the revision of javascript

// var arr = [1,2,3,4,5,6,7,8]
// var b = [...arr]

//  function test(b){
//   let a = b = 5
// }
// test(15)
// // console.log(b)
// console.log(b)

//
// let i = 45

// while(i>32){
//     i--
//     console.log(i)
// }

// 2 integers write a program that shows the larger one

// var num1 = window.prompt("input a integer")
// var num2 = window.prompt("input a integer")
// var num3 = window.prompt("input a integer")

// https://www.w3resource.com/index.phpvar allnum = num1 , num2 , num3 ;

// console.log(allnum.sort())

// if(num1 < num2){
//     console.log("num 1 ia grater")
// }else if (num1 > num2){
//     console.log("num 2 is grater")
// }else if(num1=num2){
//     console.log("both are eqaul55")
// }
// else(
//     console.log("please enter only number baby")
// )

// var x = 0;

// var y = 2;
// var z = 1;

// if(x<y && y<z){
//    if()
// }

// var birthDate = "4/1/2024" ;
// var todayDate = new Date().toLocaleDateString();
// console.log(todayDate)
// happyBirthDay()

// function happyBirthDay(){

//     if(birthDate === todayDate){
//         console.log("Happy Birthday")
//     }else{
//         console.log("Not Happy Birthday")
//     }
//    // console.log("Happy Birthday")
// }

// var a = ()=>12
// var ans = a

// console.log(ans())

// var
// a="hello"
//  const a = "hey"
//  a= "ram"
// console.log(a)

//  a ="hey"
// // if else
// if(a === "hey"){
//    // var a ;
//    console.log(a)
// }
// loops

// function

// //  console.log(" this is how you can get table of any mumber")
// function loop(){

//       // var a = window.prompt("enter your number")
//       for (var i= 1; i<11; i++){
//          console.log(a + "*" + i + "=" + a*i)

//       }

// }
//  loop()

// var inp = document.querySelector("#number");
// var submit = document.querySelector("#submit");

// submit.addEventListener("click", function(e){
//    console.log(inp.value)
//    var value = inp.value ;

//    for (var i= 1; i<11; i++){
//                console.log(value + "*" + i + "=" + value*i)

//             }

// })

// function divide (a,b){

//    try{
//       if(b=== 0){
//          throw Error("value zero nahi ho skti hai")
//       }
//       console.log(a/b)
//    }
//    catch(err){
//       console.log(err)

//    }
// }

// divide(1,0)

// var arr =  [1,2,3,4,5,6]

// var ans = arr.map((item)=> item)

// function abcd (name , age){
//    this.name = name;
//    this.age = age;
// }

// abcd.prototype.getage = function(){
//   console.log(this.age)
// }

// const a1 = new abcd("harsh" , 25)
// const a2 = new abcd("hey" ,23)

// var arr  = [1,2,3]
// //  let mypop = arr.pop()

// Array.prototype.mypop = function(){
//    if(this.length === 0){

//       return undefined
//    }else{
//       const lastIndex = this.length - 1
//       // console.log(lastIndex)

//       const poped = this[lastIndex]
//       console.log([lastIndex])
//       console.log(poped)
//       this.length = lastIndex
//       console.log(this.length)
//       return poped
//    }

// }

// var ans = arr.mypop()
// console.log(ans)
// arr.pop()

// function abcd (name , age){
//    this.name = name
//    thisage = age
// }

// abcd.prototype.getName = function(){
//    console.log(this.name)
// }

// const a1 = new abcd("ram", 12)

// console.log(a1.getName())

//  Array.prototype.myPush = function(...val){

//   for(let i = 0 ; i <val.length; i++){
//     this[this.length] = val[i]
//   }
//   return this.length
// }
// arr = [12,23,2,12,1,32]
// arr.myPush()
// // arr.push(12)
// console.log(arr)
// // arr.pop()
// // console.log(a)
// // console.log(arr.length)

// var a = "ram"
// console.log(a)
// a= "hyam"
// console.log(a)
// a = 1
// console.log(a)

// var a = 11

// var b = a

//  b = a+10

// console.log(b)
// console.log(a)

// this means that in variable it primitive data type that
// in that that can make a copy of variable sp yeh baat clear hai ki varible ek primitve data type hai
// iska matlb yeh hai ki jb humne ek varible banaya aur ek aur varible banaya jisme humne humra purane varible ki vlaue aasign kardi
// jis dusre varible main wo value aagayi aur ab dusra varible us value ke sath kuvh bhi kare wo ek copy hai jo humne humre phele walle varible se bana kar de di
// fuck negativity
//  and if we applied that same thing in reffrence data type than it will be not same as it is
//  in refencde data type it will change in oroginal one
//  var arr = [1,2,3]

//  var b = arr

// //  b = arr.push(12)
//   console.log(b.pop())
//   console.log(arr)

// function isEven(a){
//    if(a%2 === 0) return console.log("true")
//    else  return console.log("flase");

// }

// isEven(12)

// function gradeChecker(num){
//    if(num >= 90 && num <= 100){
//        console.log("A")

//    }else if (num>=80 && num<=89){
//       console.log("B")
//    }else if (num >=70 && num<=79){
//       console.log("C")
//    }else if (num >=60 && mum <= 69 ){
//       console.log("D")
//    }else{
//       console.log("E")
//    }
// }

// gradeChecker(75)

// function greaterOne (num1 ,num2){
//    if(num1 > num2){
//       console.log("num1 is greater ")
//    }else if(num2 > num1){
//       console.log("num2 is greater")
//    }else if(num1 === num2){
//       console.log("both are equall")
//    }else{
//       console.log("provide some valid value")
//    }
// }17

// greaterOne(15 , 15)

// var a =  prompt("enter your age")
// function eligiblityTest (age){
//    if(age <= 1825){
//       console.log("you are not eligible to vote")
//    }else if (age === 0){
//       console.log("provide valid age")

//    }else{
//        console.log("you are eligible to vote")
//    }
// }

// function greaterValue (num1, num2, num3){
//    if(num1>=num2 && num1>=num3){
//       console.log(num1)
// }else if(num2 >= num1 && num2 >= num3 ){
//    console.log(num2)
// }else{
//    console.log(num3)
// }
// }

// greaterValue(17,1,15)
// eligiblityTest(a)

// function postiveTest (num){
//    if(num >0){
//        console.log("postive Numbder")
//    }else if ( num < 0){
//       console.log("negative Numbder")
//    }else{
//       console.log("enter a valid number")
//    }
// }

// postiveTest()

// function yeraCheck (year){
//    if(year % 4 === 0){
//       console.log("leap year")
//    }else{
//       console.log("not leap year")
//    }
// }

// yeraCheck(1900)

// "Blue Whale".includes("blue");
// console.log("treu")

// returns false

// function findLarsgestNumber (arr){
//    if(arr.length === 0){
//       return "array is empty"
//    }
//    let max = arr[0]
//    console.log(max)

//    for (let i =1 ; i< arr.length ; i++){
//       if(arr[i] > max){
//          max =arr[i]
//          console.log(arr[i])
//       }

//    }
//    return max
// }

// const baf = [1,2,55,66]
// var newArr = baf[0]
// for(let i = 0; i < baf.length; i++){

//       if(baf[i] > newArr){
//          newArr = baf[i]

//          console.log(newArr)
//   }
// }

// var arrr = [1,2,55,66]
// function getMAxNum(aurgument){
//    if(aurgument.length === 0){
//       return  "Inavlid"

//    }
//    let maxNum = aurgument[0]

//    for(let i = 1 ; i< aurgument.length ; i++){
//       if(aurgument[i] > maxNum){
//          maxNum = aurgument[i]
//       }
//    }
//    return maxNum
// }

// console.log(getMAxNum(arrr))

// function myPop(){
//    if(this.length === 0){
//       return  undefined
//    } else{
//       const lastIndex = this.length - 1
//       const poped = this[lastIndex]

//     this.length = lastIndex

//       return popedffgg
//    }

// }

// let arr = [1,2,3]
// arr.myPop();

//  Lets make a game baby
// gamew mai kya hoga mtlab yeh game jesa kuch hoga for practicing js

// var a = prompt()

// console.log(a)

// if(typeof a === 'string'){
//    console.log("this is string")
// }else if (typeof a  === 'number'){
//    console.log("this is number")
// }else{
//    console.log("this aplhanumric vlaues")
// }

// function checkInputType(input) {
//    if (typeof input === 'string') {
//        return 'string';
//    } else if (!isNaN(input) && typeof input !== 'boolean') {
//        return 'number';
//    } else {
//        return 'unknown';
//    }
// }

// console.log(checkInputType("hello"))

// Array.prototype.mypop = function(){
//        if(this.length === 0){
//          return "undefined";
//        }else{
//          let lastIndex = this.length-1
//          const poped = this[lastIndex]
//          this.length = lastIndex

//          return poped
//        }
//  }

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let arr1 = [ 4, 5, 6, 7];
// let arr2 = [ 3, 4, 5, 6, 7];

// console.log(arr.mypop())
// console.log(arr)

// var inp = document.querySelector("#inp")
// var sbm = document.querySelector("#sbn")
// var dt = document.querySelector("#dt")

// sbn.addEventListener("click" , function(e){
//    var inpval = inp.value

//   var h1 = document.createElement('h1')

//   h1.textContent = inpval

//   document.querySelector("#add").appendChild(h1)

// dt.addEventListener("click" , function(e){
//    document.querySelector("#add").removeChild(h1)
// });
// })

// var isUserLoggedIn = false;
// var isAdmin = false

// if(isUserLoggedIn || isAdmin){
//     console.log("wlxom usee")
// }else{
//     console.log("go log in "
// )
// }

// const numbers = [5, 10, 15, 20, 25];

// function getAverage(){
//     let sum = 0;

//     for(let i = 0; i < numbers.length; i++){
//       //   console.log(numbers[i])

//        sum = sum + numbers[i]

//     }
//    return sum / numbers.length

// //   console.log(sum)
// }

// console.log(getAverage())

// function one(){
//    let a =5
//    return a
// }

// console.log(one())

// const students = [
//    {
//        name: "Alice",
//        age: 20,
//        grade: "A"
//    },
//    {
//        name: "Bob",
//        age: 22,
//        grade: "B"
//    },
//    {
//        name: "Charlie",
//        age: 21,
//        grade: "C"
//    }
// ];

// function findStudentByName(name){

//         for(let i = 0; i < students.length; i++){
//               if(students[i].name === name){
//                return {
//                   age : students[i].age,
//                   grade : students[i].grade

//                }
//               }

//        }
// return "not found"

//         console.log(name)

// }

// console.log(findStudentByName("Bob"))

// Certainly! Here's the solution:

// javascript
// // Copy code
// function findStudentByName(students, name) {
//     for (let i = 0; i < students.length; i++) {
//         if (students[i].name === name) {
//             return {
//                 age: students[i].age,
//                 grade: students[i].grade
//             };
//         }
//     }
//     return "Student not found";
// }

// console.log(findStudentByName(students, "Bob"));

// const shoppingList = ["Ghadi" , "Shoap" , "Shampoo"] ;
// const cart = ["Banana" , "Apple" ,"Mango"];

// function addToCart(shoppingList , item){
//    for(let i = 0 ; i < shoppingList.length; i++ ){
//       //   console.log(shoppingList[i])
//         if(shoppingList[i] === item){
//          return cart.push( item)
//         }
//    }

//    return "item not found"

// }
// console.log(cart)
// // addToCart(shoppingList)

// console.log(addToCart(shoppingList , "Banana"))

// const shoppingCart = [
//   { name: "Apples", price: 2.99, quantity: 3 },
//   { name: "Bananas", price: 1.99, quantity: 2 },
//   { name: "Oranges", price: 3.49, quantity: 1 },
// ];

// function calculateTotal(shoppingCart) {
//   var sum = 0;

//   for (let i = 0; i < shoppingCart.length; i++) {
//     // console.log()

//     sum = sum + shoppingCart[i].quantity;
//   }
//    return sum
// }

// console.log(calculateTotal(shoppingCart))

// const numbers = [12, 5, 8, 20, 3, 16, 9];

// function findMinMax(numbers){
//       var min = numbers[0] ;

//     for (let i = 0; i < numbers.length; i++) {

//       if(  numbers[i] < min ){
//          // console.log("nahi")
//          min = numbers[i]

//       }

//     }
// console.log(numbers[0])

// }
// console.log(findMinMax(numbers))

// const words = ["apple", "banana", "orange", "avocado", "grape", "kiwi"];
// function countWordsStartingWith(words, letter) {
//    let count = 0;
//    const lowercaseLetter = letter.toLowerCase(); // Convert letter to lowercase for case-insensitive comparison

//    for (let i = 0; i < words.length; i++) {
//        const word = words[i].toLowerCase(); // Convert word to lowercase for case-insensitive comparison
//        if (word.startsWith(lowercaseLetter)) {
//            count++;
//        }
//    }

//    return count;
// }

// var letter = "a"

//   console.log( countWordsStartingWith(words, letter));

// const temperatures = [20, 22, 23, 24, 25, 26, 27, 26, 25, 24, 23, 22];

// function calculateAverageTemperature(temperatures){

//    var avg = 0 ;
//    for (let i = 0; i < temperatures.length; i++) {
// //       // console.log(temperatures.length)

// //       var len = temperatures.length

// //       avg += temperatures[i]

// //    }
// //    return avg
// // }

// // // console.log(calculateAverageTemperature(temperatures))
// // const expenses = [
// //    { category: "Office Supplies", amount: 200 },
// //    { category: "Travel", amount: 500 },
// //    { category: "Utilities", amount: 300 },
// //    { category: "Office Supplies", amount: 150 },
// //    { category: "Travel", amount: 700 },
// //    { category: "Utilities", amount: 250 }
// // ];

// // function totalExpensesByCategory(expenses) {
// //    const totalByCategory = {};

// //    for (let i = 0; i < expenses.length; i++) {
// //        const category = expenses[i].category;
// //        const amount = expenses[i].amount;

// //        if (!totalByCategory[category]) {
// // //            totalByCategory[category] = 0;
// // //        }

// // //        totalByCategory[category] += amount;
// // //    }

// // //    return totalByCategory;
// // // }

// // // console.log(totalExpensesByCategory(expenses));

// // const students = [
// //    { name: "Alice", age: 20, grade: "A" },
// //    { name: "Bob", age: 22, grade: "B" },
// //    { name: "Charlie", age: 21, grade: "A" },
// //    { name: "David", age: 19, grade: "B" },
// //    { name: "Eve", age: 20, grade: "C" },
// //    { name: "Frank", age: 23, grade: "A" }
// // ];

// // function averageAgeByGrade(students){
// //     var gradeCheck = {} ;
// //     var countByGrade = {} ;

// //     for (let i = 0; i < students.length; i++) {
// //       // console.log(students[i].grade);

// //       const grade = students[i].grade;
// //       const age = students[i].age;

// //       if(gradeCheck != grade){
// //         gradeCheck[grade] = 0;
// //         countByGrade[grade] = 0
// //       }

// //       gradeCheck[grade] += age;
// //       countByGrade[grade]++;

// //     }

// //     console.log(gradeCheck)
// // }

// // averageAgeByGrade(students)

// const books = [
//   { title: "To Kill a Mockingbird", author: "Harper Lee", pages: 281 },
//   { title: "1984", author: "George Orwell", pages: 328 },
//   { title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 180 },
//   { title: "Pride and Prejudice", author: "Jane Austen", pages: 279 },
//   { title: "Animal Farm", author: "George Orwell", pages: 112 },
//   { title: "The Catcher in the Rye", author: "J.D. Salinger", pages: 224 }
// ];

// // function findShortestBook(books){
// //    var findShortBook = books[0] ;

// //    for (let i = 0; i < books.length; i++) {
// //     // console.log(books[i].title);
// //     // const books = books[i].title
// //     if(books[i].pages < findShortBook.pages)
// //     {
// //       var a = books[i]
// //         // findShortBook = books[i]

// //     }
// //         console.log(a)

// //    }

// // }

// // findShortestBook(books)

// const players = [
//    {name:"alex" , age:12 , game:"footbaal"},
//    {name:"alexii" , age:13 , game:"footbaal"},
//    {name:"alexf" , age:14 , game:"footbaal"},

// ]

// function loopOnThisArray (players){

//   var ew = players[0].age

//   for (let i = 0; i < players.length; i++) {

//       if(players[i].age < ew)
//         ew = players[i].age

//  return ew

//   }

//   // return ew.age
//   // console.log(ew);

// }

// // loopOnThisArray(players)

// console.log(loopOnThisArray(players));

// const movies = [
//   { title: "The Shawshank Redemption", director: "Frank Darabont", releaseYear: 1994 },
//   { title: "The Godfather", director: "Francis Ford Coppola", releaseYear: 1972 },
//   { title: "The Dark Knight", director: "Christopher Nolan", releaseYear: 2008 },
//   { title: "Pulp Fiction", director: "Quentin Tarantino", releaseYear: 1994 },
//   { title: "Schindler's List", director: "Steven Spielberg", releaseYear: 1993 },
//   { title: "The Lord of the Rings: The Return of the King", director: "Peter Jackson", releaseYear: 2003 }
// ];

// function findLatestMovie(movies){

//   var latestRelase = movies[1].releaseYear ;
//   var latestRelaseMovie = movies[1].title ;

//   for (let i = 0; i < movies.length; i++) {
//      console.log();

//      if(movies[i].releaseYear > latestRelase){
//       latestRelase = movies[i].releaseYear
//       latestRelaseMovie = movies[i].title

//      }

//   }
//  return {latestRelase , latestRelaseMovie}
// }

// console.log(findLatestMovie(movies));

// const countries = [
//   { name: "Russia", population: 144.5, area: 17098242 },
//   { name: "Canada", population: 37.59, area: 9984670 },
//   { name: "China", population: 1404, area: 9596961 },
//   { name: "United States", population: 328.2, area: 9525067 },
//   { name: "Brazil", population: 209.3, area: 8515767 },
//   { name: "Australia", population: 25.36, area: 7692024 },
//   // Add more countries as needed
// ];

// function findLargestCountry(countries) {
//   var refArea = countries[0].area;
//   var refName = countries[0].name;

//   for (let i = 1; i < countries.length; i++) {
//       if (countries[i].area > refArea) {
//           refArea = countries[i].area;
//           refName = countries[i].name;
//       }
//   }

//   return refName;
// }

// // Assuming `countries` array is defined as provided in the previous message
// console.log(findLargestCountry(countries));

// const products = [
//   { name: "Laptop", price: 800, quantity: 10 },
//   { name: "Smartphone", price: 500, quantity: 20 },
//   { name: "Tablet", price: 300, quantity: 15 },
//   { name: "Headphones", price: 100, quantity: 30 },
//   // Add more products as needed
// ];

// function calculateTotalValue(products){
//      var upcomingPrice = 0 ;

//     for (let i = 0; i < products.length; i++) {
//      upcomingPrice +=  products[i].price * products[i].quantity

//     }

//     return upcomingPrice
// }

// console.log(calculateTotalValue(products));

// const students = [
//   { name: "Alice", age: 20, grades: { math: 85, science: 90, history: 75 } },
//   { name: "Bob", age: 22, grades: { math: 75, science: 80, history: 70 } },
//   { name: "Charlie", age: 21, grades: { math: 90, science: 95, history: 85 } },
//   { name: "David", age: 19, grades: { math: 80, science: 85, history: 80 } }
//   // Add more students as needed
// ];

//   function calculateAverageGrade(students) {
//     const averages = [];

//     for (let i = 0; i < students.length; i++) {
//         const student = students[i];
//         const grades = student.grades;
//         let sum = 0;
//         let count = 0;

//         // Calculate the sum of grades
//         for (const subject in grades) {
//             sum += grades[subject];
//             console.log(grades[subject]);
//             count++;
//             console.log(count);

//         }

//         // Calculate the average grade
//         const average = sum / count;
//         console.log(average);

//         // Store the student's name and average grade directly in the averages array
//         averages[i] = { name: student.name, average };
//     }

//     return averages;
// }

// calculateAverageGrade(students)

// const employees = [
//   { name: "Alice", department: "Engineering", salary: 60000 },
//   { name: "Bob", department: "Sales", salary: 50000 },
//   { name: "Charlie", department: "Marketing", salary: 55000 },
//   { name: "David", department: "Engineering", salary: 62000 },
//   { name: "Emma", department: "Sales", salary: 48000 },
//   // Add more employees as needed
// ];

// function calculateTotalSalary (employees){

//   var storeSalary = 0 ;
//   for (let i = 0; i < employees.length; i++) {
//     storeSalary += employees[i].salary

//   }
//  return storeSalary

// }

// console.log(calculateTotalSalary(employees));

// const transactions = [
//   { type: "deposit", amount: 1000 },
//   { type: "withdrawal", amount: 500 },
//   { type: "deposit", amount: 200 },
//   { type: "withdrawal", amount: 300 },
//   { type: "deposit", amount: 800 },
//   // Add more transactions as needed
// ];

// function calculateBalance(transactions){

//   var currentBlace = 0;

//   for (let i = 0; i < transactions.length; i++) {

//     if(transactions[i].type === "deposit"){
//       currentBlace += transactions[i].amount

//     }else{
//       currentBlace -= transactions[i].amount
//     }

//   }
//   return currentBlace
// }

// // // calculateBalance(transactions)

// // console.log(calculateBalance(transactions));

// const inventory = [
//   { name: "Laptop", quantity: 10, pricePerUnit: 800 },
//   { name: "Smartphone", quantity: 20, pricePerUnit: 500 },
//   { name: "Tablet", quantity: 15, pricePerUnit: 300 },
//   { name: "Headphones", quantity: 30, pricePerUnit: 100 }
//   // Add more products as needed
// ];

// // function calculateInventoryValue(inventory){
// //        var total = 0;

// //        for (let i = 0; i < inventory.length; i++) {
// //             total += inventory[i].quantity * inventory[i].pricePerUnit
// //        }
// //        return total
// // }

// // console.log(calculateInventoryValue(inventory));

// const numbers = [10, 5, 20, 8, 15, 3, 12];

// // function findMaxMin (numbers){
// //    var min = numbers[0]
// //    var max = numbers[0]

// //    for (let i = 0; i < numbers.length; i++) {
// //      if(numbers[i]<min){
// //       min = numbers[i]
// //      }
// //     if(numbers[i] > max){
// //       max = numbers[i]
// //     }
// //    }

// //    return {min , max}
// // }

// // console.log(findMaxMin(numbers));

// const transactions = [
//   { customer: "Alice", type: "debit", amount: 50 },
//   { customer: "Bob", type: "credit", amount: 100 },
//   { customer: "Alice", type: "debit", amount: 30 },
//   { customer: "Charlie", type: "credit", amount: 200 },
//   { customer: "Bob", type: "debit", amount: 70 },
//   { customer: "Alice", type: "credit", amount: 80 },
//   { customer: "Charlie", type: "debit", amount: 50 },
//   { customer: "Bob", type: "credit", amount: 150 },
//   { customer: "rob", type: "debited", amount: 150 }

// ];

// function calculateBalance(transactions){
//   var apnaCoustomer = {}
//   var apnaAmount  = 0

//   for (let i = 1; i < transactions.length; i++) {

//       if(transactions[i].type === "credit"){

//         apnaAmount += transactions[i].amount

//       }else{
//         apnaAmount -= transactions[i].amount
//       }

//   }

//   return {apnaCoustomer , apnaAmount}

// }

// calculateBalance(transactions)

// // function calculateBalance(transactions) {
// //   const balances = {};
// //   console.log(balances);

// //   for (let i = 0; i < transactions.length; i++) {
// //       const transaction = transactions[i];
// //       const customer = transaction.customer;
// //       const type = transaction.type;
// //       const amount = transaction.amount;

// //       if (balances[customer] === undefined) {

// //           balances[customer] = 0;
// //       }

// //       if (type === "credit") {
// //           balances[customer] += amount;
// //       } else {
// //           balances[customer] -= amount;
// //       }
// //       console.log(balances[customer]);
// //   }

// //   return balances;
// // }

// // console.log(calculateBalance(transactions));

// const employees = [
//   { name: "Alice", department: "HR", salary: 50000 },
//   { name: "Bob", department: "Engineering", salary: 60000 },
//   { name: "Charlie", department: "Finance", salary: 55000 },
//   { name: "David", department: "Engineering", salary: 65000 },
//   { name: "Eve", department: "HR", salary: 48000 },
//   { name: "Frank", department: "Finance", salary: 70000 }
// ];

// function highestPaidEmployee(employees){
//   var highestSalaryName = {}
//   var highsal = employees[0].salary

//   for (let i = 0; i < employees.length; i++) {

//     if(employees[i].salary > highsal){
//       highsal = employees[i].salary
//       highestSalaryName = employees[i].name

//     }

//   }
//  return highestSalaryName
// }

// console.log(highestPaidEmployee(employees));

// const students = [
//   { name: "Alice", age: 18, grade: "A" },
//   { name: "Bob", age: 17, grade: "B" },
//   { name: "Charlie", age: 16, grade: "B" },
//   { name: "David", age: 19, grade: "A" },
//   { name: "Eve", age: 17, grade: "C" }
// ];

// function averageAge(students){
//   var avgAge = 0

//   for (let i = 0; i < students.length; i++) {

//         avgAge += students[i].age
//         // avgAge = avgAge/students[i].length

//   }
//   return avgAge/ students.length

// }

// console.log(averageAge(students));

const scores = [65, 70, 45, 80, 55, 60, 75, 40, 85, 90];

// function passingPercentage(scores) {
//   var remainper = [];
//   var totalScore = 0;

//   for (let i = 0; i < scores.length; i++) {

//     totalScore += scores[i];
//     if(totalScore % scores[i]){
//       console.log(scores[i]);
//     }

//   }
// //   console.log(totalScore)
// // }

// // passingPercentage(scores);

// // function passingPercentage(scores) {
// //   let passingCount = 0;
// //   const totalStudents = scores.length;

// //   for (let i = 0; i < totalStudents; i++) {
// //       if (scores[i] >= 50) {
// //           passingCount++;
// //       }
// //   }
// //   console.log(passingCount / totalStudents * 100);
// //   console.log(totalStudents);

// //   const passingPercentage = (passingCount / totalStudents) * 100;
// //   return passingPercentage.toFixed(2) + "%"; // Return the passing percentage rounded to two decimal places
// // }

// // // console.log(passingPercentage(scores));

// // // const sum = () => {
// // //   console.log(arguments); // This would cause an error: ReferenceError: arguments is not defined
// // // };

// // // sum(1, 2, 3)

// // // function sum(){
// // //   console.log(aurgument);

// // // }

// // // sum(1, 2, 3)
// // const numbers = [1, 2, 3, 4, 5];

// //  var mapnum = numbers.map((items , index)=>{
// //   return items
// //  })

// //  console.log(mapnum);

// //  var filterNum = numbers.filter((item , index)=>{
// //   return item > 3
// //  })

// //  console.log(filterNum);

// // function dublicateCount(hello){
// //    for (let i = 0; i < hello.length; i++) {

// //    }
// // }

// // dublicateCount(hello)

// // function sumOfPrimes(n){

// //   var storePrimeNumber = [null]

// //   for (let i = 0; i < n.length; i++) {

// //     if(n[i] % 2){
// //      storePrimeNumber += n[i]
// //     }
// //     console.log(n[i]);
// //   }
// //   // return storePrimeNumber

// // }

// // sumOfPrimes(10)

// // console.log("hello");

// // function findDuplicate(array){

// //   var store = []
// //   var seen = {}

// //   for (let i = 0; i < array.length; i++) {
// //     var currentElement = arr[i];

// //     if(seen[currentElement] === undefined){
// //       seen[currentElement] = true
// //     }else{

// //     }

// //   }

// // }

// // findDuplicate([1,2,3,3,4,5,2,6])

// // var input = document.querySelector("#text");
// // var btn = document.querySelectorAll("button")

// // var arr = Array.from(btn)

// // arr.forEach((button)=>{
// //  button.addEventListener("click" , function(e){
// //   var str = e.target.innerHTML
// //  })

// //  input = str
// // })

// let str  = "123"

// let makingArray = Array.from(str , Number)

// // var loopStore = makingArray.forEach((value)=> console.log(value))

// function loopOverStr (makingArray){

//     var findingA = []

//     for (let i = 0; i < makingArray.length; i++) {
//          let storeCheck = makingArray[i]

//          if(makingArray[i] === storeCheck){
//             findingA += makingArray[i]

//             console.log("hai");
//          }else{
//             console.log("nahi hai");
//          }

//     }
//     return findingA

// }

// console.log(loopOverStr(makingArray));

// console.log(makingArray);

// console.log(typeof(makingArray));

// const numbers = [10, 5, 8, 20, 15, 3];

// // function findLargestNumber(numbers) {

// //   return largeNo;
// // }

// // console.log(findLargestNumber(numbers));

// var largeNo = 0;

//   numbers.forEach(function (value) {
//     if (value > largeNo) {
//       largeNo = value;
//     }
//   });

//   console.log(largeNo);

// var inp = document.querySelector("input");
// var btn = document.querySelectorAll("button");
// var btnId = document.querySelector("#button");

// var makeArray = Array.from(btn);

//   var storeDisplayValue = "";
// console.log(makeArray);

// makeArray.forEach((btn) => {
// //   console.log(btn);

//   btn.addEventListener("click", function (e) {
//     if (e.target.innerHTML == "=") {
//        let a = eval(storeDisplayValue)

//         inp.value = a
//       console.log("hello");
//     }else if(e.target.innerHTML === "%"){
//         inp.value = ""

//     }
//      else {
//       storeDisplayValue += e.target.innerHTML;
//       inp.value = storeDisplayValue;
//       console.log(storeDisplayValue);
//     }

//   });
// });

// const elements = [1, 2, 3, 4, 1, 2, 1, 3, 4, 5, 1];

// let sorted  = elements.sort()
// console.log(sorted);

// function countOccurrences(elements , value){

// let count = '' ;

// elements.forEach((num)=>{
//     if(num === value){
//         count++
//     }
// })

// return count

// }

// const value = 1

// console.log(countOccurrences(elements , value));

// const inputString = "programming";
//  let makeArr = Array.from(inputString , String)
// let rvs = makeArr.reverse()
// console.log(rvs);

// function reverseString(inputString){
//   let sotreReverse = ""

//   for (let i =  inputString.length -1; i>=0; i--) {

//    sotreReverse += inputString[i]

//   }
// return sotreReverse

// }

// console.log(reverseString(inputString));

// function isPalindrome(palindromeString){

//     let forward = ''
//     let backword = ''

//     for (let i = 0; i < palindromeString.length; i++) {
//        forward += palindromeString[i]

//     }
//     for(let i = palindromeString.length-1; i>=0; i-- ){
//         backword += palindromeString[i]
//     }

//     if(forward === backword){
//         return true
//     }else{
//         return false
//     }

// }

// const palindromeString = "nitin";
// function isPalindrome(palindromeString){
//  return palindromeString === palindromeString.split('').reverse('').join('')

// }

// console.log(isPalindrome(palindromeString));
// const fruits = ["apple", "banana", "orange", "banana", "grape", "banana"];

// const findingFirstBanana = fruits.includes("banana");
// console.log(findingFirstBanana);

// function findBanana(fruits, value) {
//   count = 0;

//   fruits.forEach((element) => {
//     if (fruits.includes("banana") && element === value) {
//       count++
//     }
//   });

//     if(count > 1){
//         return count
//     }else if(count === 0){
//         return "NOt Found"
//     }else {
//         return "found once"
//     }
// }

// const value = "banana";
// console.log(findBanana(fruits, value));

// const countTotalBanana = fruits.indexOf("banana" , findingFirstBanana +1)
// console.log(countTotalBanana)

// function removeDuplicate (araay){

//     let newArr = [];

//     for(let i = 0 ; i<array.length ; i++){
//       if(newArr.lastIndexOf(araay[i]) === -1){
//         newArr.push(araay[i])
//       }

//     }
// return newArr

// }

// console.log(
// removeDuplicate(array));

// const numbers = [3, 1, 5, 2, 4];
// numbers.sort((a, b) => b - a); // Sort in ascending order
// console.log(numbers); // Output: [1, 2, 3, 4, 5]

// function toTitleCase(str) {
//     const words = str.split(' '); // Split the string into an array of words
//     console.log(words);
//     for (let i = 0; i < words.length; i++) {
//       const word = words[i];
//       console.log(word);
//       const firstLetter = word.charAt(0).toUpperCase(); // Capitalize the first letter
//       const restOfWord = word.slice(1).toLowerCase();
//       console.log();
//       // Convert the rest of the word to lowercase
//       words[i] = firstLetter + restOfWord; // Combine the first letter and the rest of the word
//     }
//     return words.join(' '); // Join the words back into a single string
//   }

//   const inputString = "hello world! this is a test string.";
//   const titleCaseString = toTitleCase(inputString);
//   console.log(titleCaseString);

//  var em =  "😄😄".split(/(?:)/); // [ "\ud83d", "\ude04", "\ud83d", "\ude04" ]
//  console.log(em);
// "😄😄".split(/(?:)/u); // [ "😄", "😄" ]

// function toTitleCase(str){
//   return str.toLowerCase().split(' ').map(function(words){
//     return words.charAt(0).toUpperCase() + words.slice(1)
//   }).join(' ')

// }

// toTitleCase(str)

// // var str = "hello"
// // var slc = str.split('').reverse().join('')

// // console.log(slc);

// var array = [1, 2, 3, 4, 2, 5, 6, 1, 3];

// function duplicteFigure(array){
//   var arr = array
//   var copy = []

//   for (let i = 0; i < array.length; i++) {
//    if(array[i] > arr){
//     copy.push(array[i])
//    }

//   }

// return copy
// }

// console.log(duplicteFigure(array));

// document.addEventListener("mousemove", function() {
//   const scroll = new LocomotiveScroll({
//     el: document.querySelector(".main"),
//     smooth: true
//   });
// });

// console.log(scroll);

//  what is object ?

// var a = {
//   name : " ram " ,
//   age: 12
// }

// var a = {
//   name : " ram " ,
//   age: 13
// }

// a.name = "shyam"
// );
// console.log(a.age

// var obj = {
//   name: "phone",
//   age : 16
// }

// var obj = {
//   name: "phone",
//   age : 15
// }

// console.log(obj['age']);

//  original = { a: 1, b: { c: 2 } };
//  copy = { ...original };

// copy.a = 5
// console.log(original);  // { a: 1, b: { c: 2 } }

// const obj1 = {}

// if (obj1 === null || obj1 !== Object) {
//   console.log(null);

// } else {
//   console.log("this is not null");
// }

// const user = {
//   name: 'Alice',
//   age: 25
// };

// // Using || to provide a default value
// const userName = user.name && 'Guest';
// console.log(userName);  // Output: 'Alice'

// const userCity = user.age && 'Unknown';
// console.log(userCity);  // Output: 'Unknown' (since user.city is undefined)

// // Using && to check multiple conditions
// if (user.age >= 18 && user.age <= 30) {
//   console.log('User is a young adult.');
// } else {
//   console.log('User is not a young adult.');
// }
// // Output: 'User is a young adult.'

// how many types of functions in js
// why we needed functions and what is the use of functions
// so bascically functions were use to wrap a code an
// d use it whenerver we need
// es5 main 3 types ke function hai
// function statement menas
// in this stetement function could be hoisted so ite intersting thing babay
//

// function callName() {

//   console.log("First Name");
//   function callAnotherName(){
//     console.log("Second Name");
//   }

//   callAnotherName()
// }

// callName()

// function expersion

// means when you store function in a variable
// example --
// this function is not hoisted so we can use it afterward is excution

// callNamefunc()

// var callNamefunc = function (){
//   console.log("callNamefunc");
// }

// callNamefunc()
// console.log(callNamefunc());

// anonymous function

// function(){}

// const func = ()=>{
//   console.log(this);
// }

// func()

// function traditionalFunction() {
//   console.log(arguments); // [1, 2, 3]

//   function nestedFunction() {
//     console.log(arguments); // refers to nestedFunction's arguments, not traditionalFunction's
//   }

//   nestedFunction(4, 5, 6);
// }

// traditionalFunction(1, 2, 3);

// function traditionalFunction() {
//   console.log(arguments); // [1, 2, 3]

//   const nestedFunction = () => {
//     console.log(arguments); // refers to traditionalFunction's arguments
//   };

//   nestedFunction();
// }

// traditionalFunction(1, 2, 3);

// diffrece between normal function ans fat arrow functions
// fat arrow function
// - they provide shorter and consise syntax

// button.addEventListener("click" , function(){
//   if(input.value === ""){
//     alert("Please Enter Something")
//   }else{
//     const li = document.createElement("li");
//     li.textContent = input.value
//     ul.appendChild(li)
//     let h1 = document.createElement("h1")
//     console.log(h1);
//     h1.textContent = "x"
//     ul.appendChild(h1)
//     input.value = ""

//   }
//   // console.log(input.value);
// })

// ul.addEventListener("click" , function(e){
// console.log(e.parentChild);
// e.target.remove()

// }, false)

// input.addEventListener("keypress", function (e) {
//   // addToDo()

//   function addToDo(){
//     const li = document.createElement("li");
//     //  li.style.color = 'white'
//     li.textContent = e.target.value;
//     ul.appendChild(li);
//   }

//   button.addEventListener("click", addToDo);

// });

// objects

// kisi ki bhi identy ko rakhne ke liye objects hote

// let arr = [ 1 , "ram", {}, ()=>{}]
// let obj = {
//   name: "manish",
//   age:21,
// greet : function(){
//   console.log("helo",this.age);
// }

// }

// let obj2 = {...obj, address: "Panjara"}
// // Shallow copy
// console.log(obj2);

// var input = document.querySelector("input");
// var button = document.querySelector("button");

// let storeData = [];

// button.addEventListener("click",work)

// function work(){

//   storeData.push(input.value)
//   console.log(storeData);

//   const h1 = document.createElement("h1")
//   h1.textContent = "x"
//   ul.appendChild(h1)
// }

// fetch and axios ke baare main

// let a = 5
// console.log(a);

//  setTimeout(()=>{
//   let b = 10
//   console.log(b);
// })

// let c = 15
// console.log(c);

// const api = fetch('https://jsonplaceholder.typicode.com/users')
// .then(raw => raw.json())
// .then(data => {
//   const str =  data
//   str.map((items,index)=>{
//     let li = document.createElement('li');
//     let name = document.createElement('h2');
//     let email = document.createElement('span');

//     name.textContent = items.name
//     email.textContent = items.email

//     li.appendChild(name);
//     li.appendChild(email);

//     ul.appendChild(li)
//     console.log(items);
//   })
// })

// var ul = document.querySelector("ul");

// function add(){

//   const li = document.createElement("li");
//   li.textContent = fetch('https://jsonplaceholder.typicode.com/users')
// .then(raw => raw.json())
// .then(res => {
//   const str =  res

// })
//   ul.appendChild(li);
// }

// console.log(api);

// axios.get('https://jsonplaceholder.typicode.com/users')
// .then(result => console.log(result))

// function f(x) {
//   x = "x-" + x;
//   return function(y) {
//     y = "y-" + x;
//     return function(z) {
//       return "z-" + y;
//     }
//   }
// }

// let g = f("a")("b")("c");
// console.log(g);

// const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
// const json = JSON.parse(jsonString)

// console.log(json);

// const myPromise = new Promise((resolve , reject)=>{
// fetch('https://jsonplaceholder.typicode.com/users')

// .then(res => res.json())
// .then(res => console.log(res))
// })

// async function fetchData(){
//   const response = await fetch('https://jsonplaceholder.typicode.com/users');
//   const data =  response.json()
//   // yhn pe await lagna zarruri hai agr nahib lagyegn toh issue
//   // ho jayega promise pending main chala jayega isliye yhn pe await lagna zarruri hai

//   console.log(data);
// }

// fetchData()

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// .then(res => console.log(res))

// const person = {
//   name: 'John',
//   age: 30,
//   city: 'New York'
// };

// person['state'] = "indore"
// person.adrees = "ngh"

// console.log(person);

// const person = {
//   age: 30,
//   city: 'New York'
// };

// const newProperty = 'name';
// const newValue = 'John';

// // Creating a new object with the new property added at the beginning
// const newPerson = {
//   name: newValue, // Add the new property
//   ...person // Spread the rest of the properties from the original object
// };

// console.log(person);

// data type
// two prakar ke hote hai

// primtive and non primitive

// primitv

// function greet(greeting, punctuation) {
//   console.log(greeting + ', ' + this.name + punctuation);
//   console.log(this.name);
// }

// // greet()
// const person = { name: 'Alice' };

// greet.apply(person, 'Hello', '!'); // Output: Hello, Alice!

// function cls(){
//   let a = 4
//   function cls2(){
//     console.log(a)
//   }
//    return cls2
// }
// const b =10
// cls(b)

// var obj ={
//   helloWorld : function(){
//     return "hello world" + this.name
//   },
//   name: "Hello"
// }

// console.log(obj.helloWorld())

// var obj2 = {
//   helloWorld : obj.helloWorld,
//   name: "bye"
// }

// console.log(obj2.helloWorld.call(obj))

// function human( name  , age){
//  this.name = name
//  this.age = age
// }

// let ans = new human("harsh" , 20)

// console.log(ans);

// function abcd (){
//   console.log(this)
// }

// abcd.call()
// // console.log(call());

// abcd()

// let obj1 = {
//   name : "Slamon" ,
//   lastName : "Sharma",
//   callName : function(){
//    return  this.name + " " + this.lastName
//   }
// }

// let obj2 = {
//   name : "Amir" ,
//   lastName : "Sharma",
//   callName : function(){
//     return  this.name + " " + this.lastName
//    }
// }

// console.log(obj1.callName.call(obj2))

// // console.log(obj1.callName());
// console.log(obj1.callName.call(obj2));

// function sumArray(arr){

//    let str = 0

//    for (let i = 0; i < arr.length; i++) {
//       str += arr[i]
//     //  console.log(arr[i]);
//    }
//    return str
// }
// function sumArray(arr) {
//   let sum = 0; // Step 1: Initialize sum variable

//   for (let i = 0; i < arr.length; i++) {
//       sum += arr[i]; // Step 3: Add each element to the sum
//   }

//   return sum; // Step 4: Return the sum
// }

// Test the function
// console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
// console.log(sumArray([-1, 0, 1])); // Output: 0

// sumArray()

// console.log(sumArray([1, 2, 3, 4, 5]));

// Output should be 15
// sumArray([-1, 0, 1]); // Output should be 0

// function isPalindrome(value){
//   //  let val = value
//   //  let checkReverse = value.split("").reverse().join("")

//   return value === value.split("").reverse().join("")

//   //  if(val === checkReverse){
//   //    return true
//   //  }else{
//   //   return false
//   //  }

// }

// console.log(isPalindrome('nitin')); // Output should be true
// isPalindrome('hello'); // Output should be false
// function flattenArray(arr){
//   // console.log(arr);
//   console.log(arr.flat(Infinity))
// }

// flattenArray([1, [2, 3], [4, [5, 6]]]); // Output should be [1, 2, 3, 4, 5, 6]
// flattenArray([['a', 'b'], ['c', ['d', 'e']]]); // Output should be ['a', 'b', 'c', 'd', 'e']

// function capitalizeWords(words) {

//   words.map(word => console.log(word.charAt(0).toUpperCase() + word));
// }

// // Test the function
// console.log(capitalizeWords(['hello', 'world'])); // Output: ['Hello', 'World']
// console.log(capitalizeWords(['javascript', 'programming', 'is', 'fun'])); // Output: ['Javascript', 'Programming', 'Is', 'Fun']

// console.log(capitalizeWords(['hello', 'world'])); // Output should be ['Hello', 'World']
// capitalizeWords(['javascript', 'programming', 'is', 'fun']); // Output should be ['Javascript', 'Programming', 'Is', 'Fun']

// console.log(api);

// axios.get('https://jsonplaceholder.typicode.com/users')
// .then(result => console.log(result))

// function f(x) {
//   x = "x-" + x;
//   return function(y) {
//     y = "y-" + x;
//     return function(z) {
//       return "z-" + y;
//     }
//   }
// }

// let g = f("a")("b")("c");
// console.log(g);

// const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
// const json = JSON.parse(jsonString)

// console.log(json);

// const myPromise = new Promise((resolve , reject)=>{
// fetch('https://jsonplaceholder.typicode.com/users')

// .then(res => res.json())
// .then(res => console.log(res))
// })

// async function fetchData(){
//   const response = await fetch('https://jsonplaceholder.typicode.com/users');
//   const data =  response.json()
//   // yhn pe await lagna zarruri hai agr nahib lagyegn toh issue
//   // ho jayega promise pending main chala jayega isliye yhn pe await lagna zarruri hai

//   console.log(data);
// }

// fetchData()

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// .then(res => console.log(res))

// const person = {
//   name: 'John',
//   age: 30,
//   city: 'New York'
// };

// person['state'] = "indore"
// person.adrees = "ngh"

// console.log(person);

// const person = {
//   age: 30,
//   city: 'New York'
// };

// const newProperty = 'name';
// const newValue = 'John';

// // Creating a new object with the new property added at the beginning
// const newPerson = {
//   name: newValue, // Add the new property
//   ...person // Spread the rest of the properties from the original object
// };

// console.log(person);

// data type
// two prakar ke hote hai

// primtive and non primitive

// primitv

// function greet(greeting, punctuation) {
//   console.log(greeting + ', ' + this.name + punctuation);
//   console.log(this.name);
// }

// // greet()
// const person = { name: 'Alice' };

// greet.apply(person, 'Hello', '!'); // Output: Hello, Alice!

// function cls(){
//   let a = 4
//   function cls2(){
//     console.log(a)
//   }
//    return cls2
// }
// const b =10
// cls(b)

// var obj ={
//   helloWorld : function(){
//     return "hello world" + this.name
//   },
//   name: "Hello"
// }

// console.log(obj.helloWorld())

// var obj2 = {
//   helloWorld : obj.helloWorld,
//   name: "bye"
// }

// console.log(obj2.helloWorld.call(obj))

// function human( name  , age){
//  this.name = name
//  this.age = age
// }

// let ans = new human("harsh" , 20)

// console.log(ans);

// function abcd (){
//   console.log(this)
// }

// abcd.call()
// // console.log(call());

// abcd()

// let obj1 = {
//   name : "Slamon" ,
//   lastName : "Sharma",
//   callName : function(){
//    return  this.name + " " + this.lastName
//   }
// }

// let obj2 = {
//   name : "Amir" ,
//   lastName : "Sharma",
//   callName : function(){
//     return  this.name + " " + this.lastName
//    }
// }

// console.log(obj1.callName.call(obj2))

// // console.log(obj1.callName());
// console.log(obj1.callName.call(obj2));

// function sumArray(arr){

//    let str = 0

//    for (let i = 0; i < arr.length; i++) {
//       str += arr[i]
//     //  console.log(arr[i]);
//    }
//    return str
// }
// function sumArray(arr) {
//   let sum = 0; // Step 1: Initialize sum variable

//   for (let i = 0; i < arr.length; i++) {
//       sum += arr[i]; // Step 3: Add each element to the sum
//   }

//   return sum; // Step 4: Return the sum
// }

// Test the function
// console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
// console.log(sumArray([-1, 0, 1])); // Output: 0

// sumArray()

// console.log(sumArray([1, 2, 3, 4, 5]));

// Output should be 15
// sumArray([-1, 0, 1]); // Output should be 0

// function isPalindrome(value){
//   //  let val = value
//   //  let checkReverse = value.split("").reverse().join("")

//   return value === value.split("").reverse().join("")

//   //  if(val === checkReverse){
//   //    return true
//   //  }else{
//   //   return false
//   //  }

// function uniqueValues(value){

//   let itm = value
//   let newArr = []

//   for (let i = 0; i < value.length; i++) {

//     if(value[i] === itm){
//        newArr.push(value[i])
//        if(newArr !== value[i]){
//         newArr.pop(value[i])
//        }
//        console.log(newArr);
//     }
//     // console.log(itm);
//   }
//   return newArr

// }

// function uniqueValues(arr){
//   return [...new Set(arr)]
// }

// uniqueValues([1, 2, 3, 4, 4, 3, 2, 1 , 5])
// console.log(uniqueValues([1, 2, 3, 4, 4, 3, 2, 1 , 5])); // Output should be [1, 2, 3, 4]
// console.log(uniqueValues(['a', 'b', 'a', 'c', 'b', 'd'])); // Output should be ['a', 'b', 'c', 'd']

// Question:
// Write a function called deepClone that takes an object as input and returns a deep clone of that object. A deep clone means that all nested objects and arrays should also be cloned, not just the top-level object.

// const original = {
//   name: 'Alice',
//   age: 30,
//   address: {
//       city: 'Wonderland',
//       zip: '12345'
//   },
//   hobbies: ['reading', 'chess']
// };

// function deepClone(obj){
//   let cloned = {...obj , obj.address.city = "new wonderland"}
//   console.log(cloned);
// }

// console.log(original);

// const cloned = deepClone(original)

// // Modify the clone
// // cloned.address.city = 'New Wonderland';
// // cloned.hobbies.push('writing');

// // Verify that the original object is not affected
// console.log(original.address.city); // Output should be 'Wonderland'
// console.log(original.hobbies); // Output should be ['reading', 'chess']

// function uniqueValues(arr){
//   let newarr = []

//   for (let i = 0; i < arr.length; i++) {
//     if(!newarr.includes(arr[i]) ){
//       newarr.push(arr[i])
//     }

//   }
//   return newarr
// }

// console.log(uniqueValues([1, 2, 3, 4, 4, 3, 2, 1]));

// function deepClone (obj){
//   // console.log(JSON.parse());
// return JSON.parse(JSON.stringify(obj))
// }

// let arr = [1, 2, 3, 4, 4, 3, 2, 1]

// function isPalindrome(num){
//  let check = num;

//  if(typeof(check) === 'number'){
//   check = check.toString()
//  }

// let checkReverse = check.split("").reverse(" ").join("")

//   if(checkReverse === check){
//     return true
//   }else{
//     return false
//   }

// }

// let x = 121

// console.log(isPalindrome(x));

// let arr = 6545465

// function countingValue(arr){
//   let count = 0 ;
//   let arrn = 0

//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i] !== arrn){
//      count++
//      console.log(count);
//     }
//   }

// }

// countingValue(arr)

// function sum(arr){
//   // console.log(arr);
//   let sum = 0
//   arr.map((itmes)=> {
//     sum = itmes + sum
//   })
//  return sum
// }

// function countdigit(arr){

//   // console.log(arr);
//   let count = 0
//   let str = arr.toString()
//   let makearr = str.split("")
//   // console.log(makearr);
//   for (let i = 0; i < makearr.length; i++) {

//     // console.log(makearr);

//     if(makearr[i] === makearr[i]){
//       count++
//       // console.log(count);
//     }
//   }
//   return count

//   // for (let i = 0; i < arr.length; i++) {
//   //   console.log(arr.length);

//   // }

// }

// // countdigit(arr)
// console.log(countdigit(arr));

// for (const key in arr) {
//   console.log(Object.hasOwnProperty.call(arr, key));
//   console.log(key);
// }

// for (const key in object) {
//   if (Object.hasOwnProperty.call(object, key)) {
//     const element = object[key];

//   }
// }

// const original = {
//   name: 'Alice',
//   age: 30,
//   address: {
//       city: 'Wonderland',
//       zip: '12345'
//   },
//   hobbies: ['reading', 'chess']
// };

// const cloned = deepClone(original);

// // Modify the clone
// cloned.address.city = 'New Wonderland';
// cloned.hobbies.push('writing');

// console.log(original.address.city);

// let random = Math.random()

// let a = prompt("Enter Your First Number")
// let b = prompt("Enter Operation")

// let c= prompt("enter your second number ")

// let obj ={
//   "+" : "-"
// }

// console.log(`${a} ${b} ${c} `);

// if(random > 0.1){

//   alert(`The Result is ${eval(`${a} ${b} ${c} `)}`)
// }else{

//   alert(`The Result is ${eval(`${c} ${b} ${a} `)}`)
// }

// let arr = 6 ;

// function factorial(number){
// let c = Array.from(Array(number +1  ).keys())
// console.log(c.slice(1,).reduce((a,b)=> a*b));

// }

// factorial(3)

// let ul = document.querySelector("ul");

// var obj = {
//   name: "name",
//   age: 12,
//   eduction: "College",
// };

// console.log(obj);

// var obj = Object()
// obj.name = "ram"
// obj.age = 12

// console.log(obj);

// var obj = Object.create(null);

// obj.name = "name";
// // obj[age] = 12
// console.log(obj);

// function Person(name , age) {
//   this.name = name;
//   this.age = age;
// }

// var obj = new Person("Shhhaa" , 12)

// console.log(obj);

// let orgObject = { company: 'XYZ Corp'};
// let carObject = { name: 'Toyota'};
// let orgObjects = { comp: 'XYZ Corp'};
// let carObjects = { nam: 'Toyota'};

// let staff = Object.assign(  orgObject , carObject , orgObjects , carObjects);
//   staff.name = "Hundai"

//   console.log(carObject);
// console.log(staff);

// class Person {
//   constructor(name , age){
//     this.name = name;
//     this.age = age;

//   }
// }

// var obj  =  new Person("Ram" , 12)
// var obj  =  new Person("Shyam" , 12)

// console.log(obj);

// var employee1 = { firstName: "John", lastName: "Rodson" };
// var employee2 = { firstName: "Jimmy", lastName: "Baily" };

// function invite(greeting1, greeting2) {
//   console.log(
//     greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
//   );
// }

// invite.call("hello" , "How are you?"); // Hello John Rodson, How are you?
// invite.call(employee2, "Hello", "How are you?"); // Hello Jimmy Baily, How are you?

// class Bike {
//   constructor(color, model) {
//     this.color = color;
//     this.model = model;
//   }

//   getDetails() {
//     return this.model + " bike has" + this.color + " color";
//   }
// }

// console.log(getDetails())

// let arr = [1, 2, 3, 4, 4, 3, 2, 1]

// for (const value in arr) {

//    console.log(value*2);

// }

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]*2);

// }

// function Bike(model, color) {
//   this.model = model
//   this.color = color
// }

// Bike.prototype.getDetails = function () {
//   return this.model + " bike has " + this.color + " color";
// };

// let bike = new Bike("honda", "red")

// console.log(bike.getDetails());

// class Bike {
//   constructor(color, model) {
//     this.color = color;
//     this.model = model;
//   }

//   getDetails() {
//     return this.model + " bike has "  + this.color + " color";
//   }
// }

// let bike = new Bike("red", "honda")
// console.log(bike.getDetails());

// var obj = {
//   name: "name",
//   age: 12,
//   social : {
//     facbook: {
//       acc1 : "tum account1 ke anddar ho"
//     }
//   }
// }

// // shallow means ki ...spred operator ke through we can make copy but
// // their is loop hole in that ki yeh nested objct ke andar copy nahi kar pata hai

// var copy = {...obj}

// copy.name = "ram"
// // nested objects ke andaar copy karta hu but ho ni payegi
// // failed here to do stuff

// // copy.name.social.facbook.acc1 = "ram"
// // console.log(copy.social.facbook.acc1);

// // this is how we cn copy things babayyy
// // but their is no sense interviewr will defintly gonna reject it

// // var copy2 = JSON.parse(JSON.stringify(obj))

// // copy2.social.facbook.acc1 = "ram"

// // console.log(copy2.social.facbook.acc1);

// function deepCopy(obj){
//   // here you have to check wheter it is object or array
//   if(typeof obj !== "object" || obj === null){
//     return obj
//   }
//   // if it is object thaen w3e have create an empty array and object vaerible
//   // how could be know that it is an object or an array
//   // their is method to check it is an aaray

//   var copiedVal = Array.isArray(obj) ? [] : {}
//   // we loop on keys not on objects

//   var keys = Object.keys(obj)

//   for(var i = 0; i<keys.length; i++){
//      copiedVal[keys[i]] =  deepCopy(obj[keys[i]])
//     // console.log(obj[keys[i]]);
//   }

// return copiedVal

// }

// console.log(deepCopy(obj));

// console.log(obj);

// var arr = ""

// function filterOut(arr){

//   for (let i = 0; i < arr.length; i++) {

//     // console.log(filterArr.indexOf(arr[i]));
//      filterArr += arr[i]
//   }
//   console.log(filterArr);
// }

// console.log(filterOut(arr));

// function check(arr){

//   var store = []
//   console.log(store);

//   for (let i = 0; i < arr.length; i++) {
//     store.push("rma")
//     console.log(store);
//   }

//   console.log(store);
// }

// check([1,2,3,4])

// const a = {}
// const b = {key : 'f'}
// const c = {key : 'c'}

// a.b =  123
// a.c = 456

// console.log(a.b);

// const propertyName = 'key2';
// const obj = { key1: 'value1', key2: 'value2' };

// console.log(obj[propertyName]); // Outputs: 'value2'

// function greatestNUmber (arr){
//   let str = 0

//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i] > str){
//       str = arr[i]
//       // console.log(str);
//     }

//   }

//   console.log(str);
// }

// greatestNUmber(arr)

// const users = [
//   { name: 'John', age: 25 },
//   { name: 'Jane', age: 30 },
//   { name: 'Dave', age: 20 }
// ]

// console.log(users.sort((a, b) => a.age - b.age));

// let arr = [1 , 50, 1, 101 , 4 , 90 , 40 , 1000, 78 ]

// var sort  = arr.sort((a,b)=> b - a )

// console.log(sort);

// function check(arr){

// let lastIndex = arr.length-1
// // console.log(lastIndex);
// const popped = arr[lastIndex]
// // console.log(popped);
// arr.length = lastIndex

// return popped

// }

// console.log(check(arr))

// Array.prototype.mySort = function(arr){
//    if(this.length === 0){
//     return "Undifined"
//    }else{

//    }
// }

// let arr = [11,22,33,44,55];

// function reverseArr(arr){

//     let lastIndex = arr.findLastIndex((arr)=>arr)
//     let lastSecondIndex = lastIndex - 1
//     // console.log(arr[lastSecondIndex]);

//     console.log();
//     let storeLargesstValue ="0"

//     //  len = arr.length -1

//     for (var i = 0; i < arr.length ; i++) {
//          if(arr[i] > storeLargesstValue){
//     //    console.log(arr[i]);
//        storeLargesstValue = arr[i];
//     }
//     // console.log(arr[i]);

//     }

//   console.log( storeLargesstValue)

// }

// console.log(reverseArr(arr))

// var isCircularSentence = function(sentence) {

//     let len = sentence.length-1
//     console.log(sentence);
//     if(sentence.charAt(0) === sentence.charAt(len)){
//         return true
//     }else{
//         return false
//     }

//     };

//     let sentence = "leetcode exercises sound delightful"
// console.log( isCircularSentence(sentence))

// reverseArr(arr)

// function secondLargest(arr){
//    let lg = "0"
//    let sl = "1"

//    for (let i = 0; i < arr.length; i++) {
//     // console.log(arr[i])
//     if(lg > arr[i]){
//         lg =arr[i]
//     }

//     for (let j = 0; j < arr.length; j++) {
//     //    console.log(arr[j]);
//        if( arr[i] > sl > lg){
//         sl = arr[i]

//        }

//     }
//    }

//    return sl

// }

// console.log(secondLargest(arr))

// var a = 1

// function data(){

//    if(

//    ){
//       return true
//    }else{
//       return false
//    }
//    // console.log(a);
// }

// console.log(a);

// console.log(data());

// console.log(a)

// let arr = [55,6,45,665,5,65]

// function findLargest(arr){
//   let largest = "1"
//   let slg = ''

//   for (let i = 0; i < arr.length; i++) {
//    // console.log(largest)

//     if(largest < arr[i]){
//       //  slg = largest
//       largest = arr[i]
//     }

//     for (let i = 0; i < arr.length; i++) {
//       if(arr[i] > slg && arr[i] < largest){
//          slg = arr[i]
//       }

//     }

//   }
// return slg
// }

// console.log(findLargest(arr));

//  for (let index = 0; index < array.length; index++) {
//    const element = array[index];

// }

// for (let i = 0; i <= n.length; i++) {
//   for (let j = 0; j <=  n.length; j++) {

//   console.log(i,j);
//   }

// }

// function runLoop(n){

//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <=n; j++) {

//       for (let k = 1; k <=n; k++) {

//          console.log(i,j,k)
//       }
//     }

//   }

// }

// runLoop(3)

// function outerFunction(outerVariable) {
//   console.log(outerVariable);

//   const innerFunction = function(innerVariable) {
//     console.log('Outer Variable:', outerVariable);
//     console.log('Inner Variable:', innerVariable);
//   };

//   return innerFunction;
// }

//  outerFunction('Hello');

// var filter = function(arr , fn){

//   let filteredarr = []

//   for (let i = 0; i < arr.length; i++) {

//          if(fn(arr[i], i)){
//            filteredarr.push(arr[i])
//          }

//   }
// return filteredarr

// }

// let arr= [0,10,20,30]
// let fn = function greaterThanTen(n){
//   return (n >10)
// }

//  let result =  filter(arr,fn)
//  console.log(result);

// const add5 = x=> x+5
// const add2 = x=> x+2

// const compose = x=>add5(add2(x))

// console.log(compose(10))

// var compose = function(functions){

//   return function(x){
//   let r = x
//   for (let i = functions.length-1; i >= 0; --i) {
//     console.log(functions[i]);
//     r = functions[i](r)

//   }

//   return r
//   }
// }

// let fn = compose([x=>x+5 , x=>x*5])

// console.log(fn(2))

// var argumentsLength = function(...args) {
//   let count = 0
//   for(let i = 0 ; i <args.length; i++){
//     count++
//   }
// return count

// };

// console.log( argumentsLength(1, 2, 3)); // 3

// let nm = 2

// console.log(nm);

// nm = "rma"
// console.log(nm);

// function redeclare(){
//     let nm = 2
//     console.log(nm);
//     nm = "rma"
//     console.log(nm);
// }

// // console.log(nm)

// redeclare()

// function forLoop(arr){

//      result = 12

//   if(result!=1){

//     let result = 0
//     return result
//   }

// }

// let arr = [1,2,3,4,5]

// console.log(forLoop(arr))

// function x(z){

//   console.log(z)

// }

// x(5)

// // console.log(y(5))

// function counterNumber(nums){
//   // var na = []
//   // console.log(na.join("").split(""))

//   // console.log(na)

//   for (let i = 0; i < nums.length; i++) {
//   //  now we have to split the each element of the array
//  console.log(nums[i].length)
//   // if(nums[i].length === 2 ){
//   //   console.log("hey")

//   // }

//   }

// }

// const nums = [11,22,33,4,5]

// console.log(counterNumber(nums))
// const counter1  = counterNumber(10)

// counter1()

// counter1()
// console.log(counter1())

// console.log(5)

// const makeCounter = (n) => {
//   let count = n;

//   return () => {
//     count++;
//     // console.log(count);
//   }
// }

// let counter = makeCounter(10);
// counter(); // logs 1
// counter(); // logs 2
// counter(); // logs 3

// function arrayToString(arr){
//   console.log(arr.length)

// let stringArray = "" ;
// let splitedValue = ""

// // console.log()

// for (let i = 0; i < arr.length; i++) {
//   stringArray += arr[i]
// // console.log(arr[i])
//   if(arr[i] > arr.length - 1)
//    stringArray += ","

// }
// console.log(stringArray)

// }

// const  nums = [12,13,14,55,16,7]
// console.log(arrayToString(nums))

// function toFigureOutSingleValue(nums){
//   let diffrentValue = "" ;

// }

// const  nums = [22,22,44,55,66,7]
// toFigureOutSingleValue(nums)

// var maxCount = function (banned, n, maxSum) {
//   let output = "";
//   let count = [];
//   let sum = "";

//   for (let i = 0; i < n + 1; ++i) {
//     count[i] = i;
// }

// for (let i = 0; i < banned.length; i++) {
//       let bannedLoopedArray = banned[i];

//       if (count.includes(bannedLoopedArray) === true) {
//         let includes = bannedLoopedArray;
//         count = count.filter((value, i) => value !== includes);
//       }
//  }

//   for (let i = 0; i < count.length; i++) {
//    sum = count[i] + count[i]

//    if(count[i] < maxSum < sum){
//     output= count[i]
//    }

//   }
//   // console.log(count);
//   // console.log(sum);
//   return output;
// };

// let banned = [1, 5, 6];
// let n = 5;
// let maxSum = 6;

// console.log(maxCount(banned, n, maxSum));

// const  newArr = [ 1 , 5, 6]
//  let count1 = ""
// for (let i = 0; i <= newArr.length; i++) {

//  if(count1 < newArr[i]){
//   count1 += newArr[i]
//  }

// }
// console.log(count1);

// javaScript done with dsa aur javaScript a good commond on that
// daily 2-4 dsa should i have to give
// ... find resources for dsa in javascipt
// made a mern satck home tutor project
// start finding resources give 2-4 mern stack

// made resume good
// give 15mins to twitter
// 15 mins to linkdin
// learn backend in proper manner
//
// alwasy revise react js
// react js question and learn daily new things 1 hours

// what is promises in javascript
// promies is an object that represents a result or failure of an asynchronous opreation

// const promise = new Promise( function(resolve , reject){

// })

// const uri = fetch('https://api.github.com')
// console.log(uri)
// uri.then(function(resolve){
//   console.log(resolve)
// }).then(function(err){
//   console.log(err)
// })

// const promise = new Promise(function(resolve, reject){
// let num = 8;
// if(num){
//  console.log(num)
// }
// })

// console.log(promise)

//  promise.then(function(resolve){
//    console.log("resolved")
// })
//  promise.catch(function(err){
//    console.log("error: " + err)
// })
let cart = ["shoe", "shirt", "T-shirt"];
const pr = createCart(cart);

pr.then(function (orderId) {
  console.log("orderId: " + orderId);
})
.catch(function(err){
  console.log("Error: " + err);
})

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function createCart(nums){
  return new Promise(function(resolve, reject){
    if(!validateCart()){
      reject("Invalid cart");
    }
    let cartId = Math.floor(Math.random() * 100000);
    resolve(cartId);
  });
}

function validateCart() {
  return false;
}

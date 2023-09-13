//if else

let num = 2;

// if (num > 0) {
//     console.log(num + ' is greater than zero')
// }
// else if (num < 0) {
//     console.log(num + ' is smaller than zero')
// } 
// else {
//     console.log(num)
// }

// Switch

// switch (num) {
//     case num > 0:
//         console.log(num + ' is greater than zero')
//         break;
//     case num < 0:
//         console.log(num + ' is greater than zero')
//         break;

//     default:
//         console.log(num)
// }


// var albhabet = 'm';

// switch (albhabet) {
//     case 'a':
//         console.log("Alphabet is a");
//         break;
//     case 'b':
//         console.log("Alphabet is b");
//         break;
//     case 'c':
//         console.log("Alphabet is c");
//         break;


//     default:
//         console.log("ANY other");
// }



//Loops in js
// while loop
// do while
// for loop


// let i=10;
// while(i>0){
//     console.log(i)
//     i--
// }


// let j = 20
// do {
//     console.log(j)
//     j++
// } while (j <= 10)


// for(let k=0;k<=10;k++){
//     console.log(k)
// }


let obj = {
    name: 'usama',
    address: "kjlkjkljklj",
    phone: '32434244',
    age: 23,
    education: 'graduation'
}

// [
//     name:'usama',
//     address:"kjlkjkljklj"   
// ]


// FOR IN LOOP
// for(let key in obj){
//     console.log(obj[key])
// }



// let arr=[
//     {
//         name:'a',
//         address:"kjlkjkljklj",
//         phone:'32434244',
//         age:23,
//         education:'graduation'
//     },{
//         name:'b',
//         address:"kjlkjkljklj",
//         phone:'32434244',
//         age:23,
//         education:'graduation'
//     }
//     ,{
//         name:'c',
//         address:"kjlkjkljklj",
//         phone:'32434244',
//         age:23,
//         education:'graduation'
//     }
// ]



// FOR OF LOOP

// let arr=[11,22,33,44,55,66,77]


// for(let x of arr){
//     console.log(x)
// }



//ARRAY METHOD
//reverse
//sort
//forEach

// let arr1 = [3, 2, 1, 7, 9, 0, 4]
let arr = [1, 2, 3, 4, 5, 6]

// console.log(arr.reverse())

// let unSortArray=['y','d','a','i','r']
// console.log(arr1.sort())


// the arrow function can also be written as function(array) instead of (array)=>
// arr.forEach((current)=>{
//     console.log(current)
// })

// let sum= arr.reduce((a,c)=> a+ c , 2)
// console.log(sum)

//Array concat
// const arr1=[1,2,3,4,]
// const arr2=[5,6,7,8,9]

// let newArr=arr2.concat(arr1)
// console.log(newArr)

//Push
// let newArr=arr.push(7)
// console.log(arr)

//Pop
// arr.pop()
// console.log(arr)


//unshift
// arr.unshift(9)
// console.log(arr)


//shift
arr.shift()
// console.log(arr)

// console.log(arr)
// console.log(arr.at(1))

let fruits=['apple','melon','watermelon','mango','date']

// let startingIndex=1
// let endingIndex=4
// let newArr=fruits.slice(startingIndex,endingIndex)
// console.log(fruits)
// console.log(newArr)



// let days=["sunday" , "monday" , "tuesday" , "wednesday" , "thursday"]

// let sliceofdays=days.slice(0,4)
// console.log(sliceofdays)


// console.log(fruits)

// fruits.splice(1,0,"peach","grapes")
// fruits.splice(1,2,"peach","grapes")
// fruits.splice(1,2)
// console.log(fruits)


//toString
// let stringArray=fruits.toString()
// console.log(stringArray)


let nums=[1,2,3,4,5,6]
 nums.map((num)=>{
    console.log(num)
//    return num+1
})

console.log(newNum)
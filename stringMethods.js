// let string="this is my testing string  "

// let length=string.length

// let char=string.charAt(3)

// let removeSpace=string.trim()
// let removeSpace=string.trimStart()
// let removeSpace=string.trimEnd()


// let up=string.toUpperCase()
// let lower=string.toLowerCase()

// let newStr=string.slice(0,4)
// let newStr=string.split('')
// console.log(newStr[3])


// let arr=['a','b','c','d']
// let newArr=arr.join()
// console.log(newArr)

let string1='string 1'
let string2='string 2'

// console.log(string1 +' '+  string2)
// console.log(string1 +' '+  4)
// console.log( 1 + '4')
// console.log(1 + +'4)

// let newStr=string1.concat(string2)
// console.log(newStr)

// let find=string.includes('helo')


let string="this is my testing string  "

// let newStr=string.replace('this','helo this')
// let newStr=string.replaceAll('s','M')
// console.log(newStr)


// let newSubStr=string.substring(0,4)
// console.log(newSubStr)



// let str='my string'
// let capital=str.charAt(0).toUpperCase()
// let sliceString=str.slice(1)
// console.log(capital + sliceString)

let str='hello string'
let capital=str.charAt(0).toUpperCase() //t
let sliceString=str.slice(1)//his string
let spaceIndex=str.indexOf(' ')//
let nextChar=spaceIndex+1 
let capital2=str.charAt(nextChar).toUpperCase()//S
let remainString=str.slice(spaceIndex+2)//tring
let newremainString=str.slice(1,spaceIndex)//his

// console.log(capital)
// console.log()
// console.log(remainString)
console.log(capital  + newremainString + ' ' + capital2 + remainString)


// console.log(capital + sliceString)
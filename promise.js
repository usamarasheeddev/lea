


// test()

// setInterval()
// setTimeout()
let interval = 0;



// setInterval(() => {
//     console.log('helo')

// }, 1000)



// const test = () => {

//     setTimeout(() => {
//         console.log("helo time out")
//     },1000)


//     console.log(1)
//     console.log(2)
//     console.log(3)
// }

// test()

// async
// await
// promise

// const test1 = async () => {
//     console.log('waiting.....')


//     await new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('wait over..')
//             resolve()
//             // reject(()=>new  Error("some error occur"))
//         }, 2000)
//     })

//     console.log(3)
//     console.log(4)
//     console.log(5)
//     console.log(5)
// }
// test1()




// tryCatch

// const test2=async ()=>{
//     await new Promise((resolve, reject) => {
//                 setTimeout(() => {
//                     resolve()
//                     // reject(()=>new  Error("some internal error occur"))
//                 }, 2000)
//             })
   
// }


// const newTest=()=>{
//     console.log("promise resolves")
// }



// test2()
// .then(()=>console.log('promise resolved'))
// .finally(()=>console.log('final promise resolved'))
// .catch((error)=>console.log(error))


// const test1 = async () => {
//     await new Promise((resolve, reject) => {
//         setTimeout(() => {

//             console.log(2)
//             resolve()
//         }, 3000)
//     })


//      await new Promise((resolve, reject) => {
//         setTimeout(() => {

//             console.log(2)
//             resolve()
//         }, 5000)
//     })


    
//     console.log(3)
//     console.log(4)
// }

// test1()


//spread operator   ...

let obj={
    name:"dkfjdk",
    title:'123457'

}

let obj1={
    lastName:"dkfjdk",
    lastTitle:'123457'

}

// console.log({...obj,...obj1})
// console.log({...obj,address:'addres is added'})


let arr=[1,2,3,4]
let arr1=[5,6,7,8]

// console.log([...arr,...arr1])


//Destructure
// const array=['apple','mango','peach',"sdfj","djfla","sdkfjsdkj"]

// const [a,b,c]=array

// console.log(a)
// console.log(b)
// console.log(c)

// let decObj={
//     lastName:"dkfjdk",
//     lastTitle:'123457'

// }

// const{lastTitle}=decObj

// console.log(lastTitle)


//REST Operator
const array=['apple','mango','peach',"sdfj","djfla","sdkfjsdkj"]

const [a,b,c,...d]=array

// console.log(a)
// console.log(b)
// console.log(c)
console.log(d)
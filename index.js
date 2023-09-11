
    // firstly make a script tag that is used to input javascript 



    // document.getElementById('container').innerHTML='helo'
    // document.getElementById('container').style.backgroundColor='red'
    // document.getElementById('container').setAttribute('class','three')


    // this is used to change the text of the prewritten text
    // document.getElementById('container-2').innerHTML='this is a dom'

    // this is used to change a single attribute of a para or heading 
    // document.getElementById('container-2').style.fontSize='30px'


    // this is used to change all attributes of a para or div and here the class name is provided and the name of the class is written here and and in the css file.
    // document.getElementById('container-2').setAttribute('class', 'two')
    // document.getElementsByClassName('container')
    // document.getElementsByTagName('p')

// function click(){
//     alert('button is clicked')
// }

function fun(a,b){
    console.log('this is function')
    console.log(a+b)
}

// function call
// fun(5,10)


function returnFun(a,b){


    return a+b;
}

let test=returnFun(10,45)
// document.getElementById('container-2').innerHTML=test
console.log(test)

const arrowFun=()=>{

    console.log('arrow function')

}

arrowFun()


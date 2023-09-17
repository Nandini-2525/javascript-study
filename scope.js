// block scope
 
if(true){
    const myName = 'Nandini'
    console.log(myName)
}

// function scope

function testFn(){
    const myAge = 22
    console.log(myAge)
}
testFn()

// global scope
const myNum = 100
if(true){
    const myCity = 'Aurangabad'
    console.log(myCity)
    console.log(myNum)
}
function test(){
    const myContact = 9999999999
    console.log(myContact)
    console.log(myNum)
}
test()
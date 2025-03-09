// funtion Ep.5
// คือ การทำงานหนึ่งๆ จะไม่ทำงานหากเราไม่เรียกใช้ (call function)
//------------------------------
// callback function ค้ือ ฟังก์ชั่นที่ทำงานที่หลังจากการเรียกใช้ฟังก์ฃั่นหนึ่งๆ ไปก่อนหน้า

function funcA(xx, yy, zz){
    console.log(xx)
    let aa = yy * 10

    zz(aa)//callback function
}

function funcB(nn){
    console.log(nn * 200)
}

funcA(11, 22, funcB)
console.log('----------------------------------------------------------------------------------------------')
funcA(10, 20, (data)=>{
console.log('Wow owo owo')
console.log('Woo woo woo')
console.log(data)
} )

console.log('----------------------------------------------------------------------------------------------')
funcA(10, 20, function (data) {
console.log('Wow owo owo')
console.log('Woo woo woo')
console.log(data)
} )
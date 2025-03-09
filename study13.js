// funtion Ep.2
// คือ การทำงานหนึ่งๆ จะไม่ทำงานหากเราไม่เรียกใช้ (call function)
//------------------------------
//3. no parameter, has return
function myfunctC(){
    console.log('Woo......')
    return 'Wow wow wow .....'
}

//4. have parameter, has return
function myfunctD(n1, n2){
    return n1 + n2
}
//เวลาเรียกใช้ตวรที่จะเอาค่าที่ return ไปใช้งาน
//myfunctD(10, 20) เรียกใช้แบบนี้ได้แต่ไม่ควรทำ
console.log(myfunctD(10, 20))

let xx = myfunctC()
console.log('${xx}^_^')